import React from 'react'
import './CommentSection.css'

import Comment from '../Comment/Comment'

export default function CommentSection({ CommentsList }) {
    return (
        <div className="comments__container">
            <h2>{`${CommentsList.length} COMMENTS`}</h2>
            {CommentsList.map(comment => (
                <Comment 
                key={comment.id}
                authorImg={comment.snippet.topLevelComment.snippet.authorProfileImageUrl}
                author={
                comment.snippet.topLevelComment.snippet.authorDisplayName
                }
                content={
                comment.snippet.topLevelComment.snippet.textDisplay
                }/>
            ))}
        </div>
    )
}