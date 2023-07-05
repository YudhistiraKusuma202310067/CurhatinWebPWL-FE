import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CardCommentar = (props) => {
  const { postId } = props; // Extract the postId from props
  const [comments, setComments] = useState([]);

  useEffect(() => {
    fetchComments(postId);
  }, [postId]); // Add postId as a dependency to re-fetch comments when it changes

  const fetchComments = (postId) => {
    axios
      .post('http://localhost:8080/comment/findPostID', { post_id: postId })
      .then((response) => {
        console.log(response.data.data);
        setComments(response.data.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div>
      {comments.map((comment) => (
        <div key={comment.id} className='mt-2'>
          <div className="card-body" style={{ background: 'white', borderRadius: '0.375rem' }}>
            <div>
              {comment.commentDate} / {comment.user.username}
            </div>
            <div>{comment.comment}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardCommentar;
