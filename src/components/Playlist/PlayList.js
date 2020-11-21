import React from 'react'
import './PlayList.css'

import VideoDisplay from '../VideoDisplay/VideoDisplay'

export default function PlayList({ VideoId, video, setVideoToPlay, videoReferences}) {
    return (
        <div className="playlist">
            {videoReferences.items.map(video => (
                video.id.videoId !== VideoId &&
                <VideoDisplay 
                key={video.id.videoId}
                channelId={video.snippet.channelId}
                video={video}
                setVideoToPlay={setVideoToPlay}
                />
            ))}
        </div>
    )
}