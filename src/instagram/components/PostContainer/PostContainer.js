import React from 'react';
import './Postcontainer.css';
import dummyDATA from "./dummy-data"
import { Icon } from '@material-ui/core';
import CommentSection from '../CommentSection/CommentSection';

const PostContainer = (props) => {
    return (<div>
        {
            dummyDATA.map((props) => {
                return <div >
                    <div className="post-header">
                        <img className="post-header-image" alt="logo" src={props.thumbnailUrl}></img>
                        <strong className="post-header-name">{props.username}</strong>
                    </div>
                    <img className="post-image" alt="post" src={props.imageUrl}></img>
                    <div >
                        <Icon className="icon-1">favorite_border</Icon>
                        <Icon className="icon-2">chat_bubble_outline</Icon>
                    </div>
                    <strong className="likes">{props.likes} likes</strong>
                    <CommentSection com={props.comments}></CommentSection>
                </div>
            })
        }
    </div>)

};


export default PostContainer;