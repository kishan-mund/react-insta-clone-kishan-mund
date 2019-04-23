import React, { Component } from 'react';
import './CommentSection.css';
// import { Icon } from '@material-ui/core';
import { connect } from "react-redux";

class CommentSection extends Component {
    constructor(props) {
        super(props);
        this.state = {
            comments: []
        };

    }
    addCommentHandler = (e, val) => {
        if (e.key === "Enter" && val.trim() !== "") {
            this.addComment(val);
            e.target.value = null;
        }
    }
    addComment(val) {
        console.log(this.state.comments)
        this.setState(prevState => {

            prevState.comments.push(val);
            return { comments: prevState.comments }

        },
        );
    }


    render() {
        const mp = this.props.cmt.map((c) => {
            return (<div className="comment-section">
                <strong className="comment-username">kishan</strong>
                <div className="comments">{c}</div>

            </div>)
        })

        return (<div>
            {
                this.props.com.map((c) => {
                    return <div className="comment-section">
                        <strong className="comment-username">{c.username}</strong>
                        <div className="comments">{c.text}</div>
                    </div>
                })
            }
            <div>{mp}</div>
            < input className="comment-box" type="text" placeholder="Add comment" onKeyDown={e => this.props.addComment(e, this.props.id)} ></input >
        </div >)
    }
};

const mapStateToProps = state => {
    return {
        cmt: state.comments
    };
};

const mapDispatchToProps = dispatch => {
    return {
        addComment: (e, id) => dispatch({ type: "ADD_COMMENT", payload: { event: e, userId: id } })
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(CommentSection);