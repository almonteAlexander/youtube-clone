import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ReactComponent as PlayIcon } from '../../img/youtube__play-icon.svg'
import { getChannelImg } from '../../services/video__services'
import ReactLoading from 'react-loading'
import './VideoDisplay.css'

export default function VideoDisplay(
    { 
    channelId,
    video,
    setVideoToPlay}) {
    
    const [channelImg, setchannelImg] = useState('');
    const [IsLoading, setIsLoading] = useState(false);
    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            await getChannelImg(channelId, setchannelImg);
            setIsLoading(false);
        }
        fetchData();
    }, [])
    
    let handleVideoClick = () => {
        setVideoToPlay(
        {channelImg, video, setVideoToPlay}
        );
        window.scrollTo(0, 0);
    }
    return (
        <>
        <Link to={`/watch?v=${video.id.videoId}`}
        onClick={e => handleVideoClick()}>
            <div className="video-display__container">
                
                {IsLoading ?
                <ReactLoading type={"bars"} color={"white"} />
                :
                <div className="video__img-container">
                    <PlayIcon className="play__icon"/> 
                    <img src={video.snippet.thumbnails.medium.url} 
                    className="video__img" alt="video__img"/>
                </div>
                }

                <h3 className="video__title">
                    {video.snippet.title.length > 50 ?
                    `${video.snippet.title.substr(0, 50)}...` :
                    video.snippet.title}
                </h3>

                <div className="channel__info-container">
                    <img className="channel__img" src={channelImg} alt="channel-img" />

                    <h2 className="channel__title">
                    {video.snippet.channelTitle.length > 30 ?
                    `${video.snippet.channelTitle.substr(0, 30)}...` 
                    :
                    video.snippet.channelTitle}
                </h2>
                </div>
            </div>
        </Link>
        </>
    )
}