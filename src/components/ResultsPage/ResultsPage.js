import React from 'react'
import ReactLoading from 'react-loading'
import './ResultsPage.css'

import VideoDisplay from '../VideoDisplay/VideoDisplay'

export default function ResultsPage({ VideoList, setVideoToPlay, IsLoading }) {
    return (
        <>
        <div className="results__main">
            {IsLoading ?
            <ReactLoading className="loading__component" type={"bars"} color={"white"} />
            :
            VideoList.items.map(video => {
                return(
                    <VideoDisplay 
                    key={video.id.videoId}
                    channelId={video.snippet.channelId}
                    video={video}
                    setVideoToPlay={setVideoToPlay}
                    />
                );
            })}
        </div>
        </>
    )
}