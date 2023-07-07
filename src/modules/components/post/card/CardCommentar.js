import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CardCommentar = (props) => {
  const { postId } = props;
  const [comments, setComments] = useState([]);

  useEffect(() => {
    fetchComments(postId);
  }, [postId]);

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

  const formatCommentDate = (postDate) => {
    const date = new Date(postDate);
    const now = new Date();
  
    const timeDifference = now.getTime() - date.getTime();
    const hoursDifference = Math.floor(timeDifference / (1000 * 60 * 60));
  
    if (hoursDifference < 24) {
      return date.toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit' });
    } else {
      return date.toLocaleDateString('en-GB');
    }
  };
  

  return (
    <div>
        <div className='mt-2 mb-2'>
            <span className='ml-2'>{comments.length} Komentar</span>
        </div>
        {comments.map((comment) => (
            <div key={comment.id} className='mt-2'>
            <div className="card-body" style={{ background: 'white', borderRadius: '0.375rem' }}>
                <div className='mb-1' style={{ fontSize: '14px' }}>
                {formatCommentDate(comment.commentDate)} - {comment.user.username}
                </div>
                <div>{comment.comment}</div>
            </div>
            </div>
        ))}
    </div>
  );
};

export default CardCommentar;
