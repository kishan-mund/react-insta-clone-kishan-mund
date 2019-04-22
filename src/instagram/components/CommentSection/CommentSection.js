import React from 'react';
import './CommentSection.css';
// import { Icon } from '@material-ui/core';

const CommentSection = (props) => {
    console.log(props.com)
    return (<div>
        {
            props.com.map((c) => {
                return <div className="comment-section">
                    <strong className="comment-username">{c.username}</strong>
                    <div className="comments">{c.text}</div>
                   
                </div>

            })
        }
         <input className="comment-box" type="text" placeholder="Add comment"></input>
    </div>)

};


export default CommentSection;