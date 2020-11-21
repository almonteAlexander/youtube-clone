import React from 'react'
import './Comment.css'

export default function Comment({ authorImg, author, content }) {
    return (
        <div className="comment">
            <div className="comment__user-info">
                <img className="comment__img" src={authorImg} alt="comment-img" />
                <b className="comment__author">{author}</b>
            </div>
            <p className="comment__content">{content}</p>
        </div>
    )
}