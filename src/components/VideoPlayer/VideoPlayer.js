import React, { useState, useEffect } from 'react'
import { getVideoComments } from '../../services/video__services'
import './VideoPlayer.css'

import Video from '../Video/Video'
import PlayList from '../Playlist/PlayList'
import CommentSection from '../CommentSection/CommentSection'

export default function VideoPlayer({ VideoList, VideoToPlay }) {
    const [Comments, setComments] = useState([]);
    const { channelImg, video, setVideoToPlay } = VideoToPlay;

    useEffect(() => {
        const fetchData = async () => {
            await getVideoComments(video.id.videoId, setComments);
        }
        fetchData();
    }, [VideoToPlay])
    
    return (
        <>
        <div className="video__player">
            <Video 
            channelImg={channelImg}
            video={video}
            />
            
            <CommentSection CommentsList={Comments}/>

           <PlayList 
            VideoId={video.id.videoId}
            video={video}
            setVideoToPlay={setVideoToPlay}
            videoReferences={VideoList}
            />
        </div>
        </>
    )
}