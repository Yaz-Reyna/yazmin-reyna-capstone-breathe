import './Comments.scss';
import axios from 'axios';
import { useState, useEffect } from 'react';

function Comments () {
    const [commentsArr, setCommentsArr] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:8080/comments`)
            .then((response) => {
                setCommentsArr(response.data);
            })
            .catch(() => {
                console.log("Error retrieving information")
            })
    }, [commentsArr]);

    return (
        <section className="comments-section">
            {commentsArr.map((comment) => { 

                const mySqlDate = new Date (comment.date);
                const dateFormat = (mySqlDate.getMonth() + 1) + "/" + mySqlDate.getDate() + "/" + mySqlDate.getFullYear();

                return (
                <div className="comments-section__comment-container" key={comment.id} >
                    <div className="comments-section__blue-avatar-container">
                        <div className="comments-section__blue-avatar"></div>
                    </div>
                    <div className="comments-section__comment-info-container">
                        <div className="comments-section__name-date-container" >
                            <p className="comments-section__name-date-container--name">
                                {comment.name} 
                            </p>
                            <p className="comments-section__name-date-container--date">
                                {dateFormat}
                            </p>
                        </div>
                        <p className="comments-section__comment-info-container--comment">
                            {comment.comment}
                        </p>
                    </div>
                </div>
                )
                })}
        </section>
    )
}

export default Comments;