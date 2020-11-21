import React from 'react'
import './Video.css'

export default function Video({ channelImg, video }) {
    return (
        <>
        <div className="actual__video-container">
            <iframe className="actual__video" src={`https://www.youtube.com/embed/${video.id.videoId}?autoplay=1&mute=0`}
            title={video.snippet.channelTitle} allowFullScreen>
            </iframe>
            <h1 className="actual__video-title">{video.snippet.title}</h1>

            <img className="actual__channel-img" src={channelImg} alt="channel-img" />
            <h2 className="actual__channel-title">{video.snippet.channelTitle}</h2>
            
            <div className="description__container">
                <h2 className="description__title">Description</h2>
                <p className="actual__video-description">{video.snippet.description}</p>
            </div>
        </div>
        </>
    )
}