import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CardCommentar from './CardCommentar';

const CartPost = () => {
  const [posts, setPosts] = useState([]);
  const [comment, setComment] = useState('');
  const [postId, setPostId] = useState(null); // Added postId state
  const user_id = localStorage.getItem('userId');

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = () => {
    axios
      .get('http://localhost:8080/post')
      .then((response) => {
        console.log(response.data.data);
        setPosts(response.data.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleCommentChange = (e, postId) => {
    const { value } = e.target;
    setComment((prevInputs) => ({
      ...prevInputs,
      [postId]: value // Menyimpan nilai input untuk form komentar dengan postId tertentu
    }));
  };

  const handleCommentSubmit = (postId) => (e) => {
    e.preventDefault();

    const commentData = {
      user: { id: user_id },
      post: { id: postId },
      comment: comment[postId]
    };

    axios
      .post('http://localhost:8080/comment', commentData)
      .then((response) => {
        console.log(response.data);
        // Optionally, you can update the state or perform any other necessary actions after successful comment submission
      })
      .catch((error) => {
        console.error(error);
        // Handle the error case if the comment submission fails
      });

    // Clear the comment input after submission
    setComment('');
    window.location.reload();
  };

  return (
    <div>
      {posts.length > 0 ? (
        <div>
          {posts.map((post) => (
            <div key={post.id} className='Margin mt-3'>
              <div className='card p-4' style={{ background: '#DAEDFF' }}>
                <div>
                  {post.postDate} / {post.user.username}
                </div>
                <div style={{ fontWeight: '900', padding: '5px 0' }}>{post.category.categoryName}</div>
                <div>
                  <div className='card-body' style={{ background: 'white', borderRadius: '0.375rem' }}>
                    {post.story}
                  </div>
                  {/* <div>
                    <span>{post.likes} Suka</span> <span>{post.comments.length} Komentar</span>
                  </div> */}
                </div>
                
                <div>
                    {post.id && <CardCommentar postId={post.id} />} {/* Render CardCommentar only if postId is available */}
                </div>

                <form onSubmit={handleCommentSubmit(post.id)} className='mt-2'>
                  <input
                    type='text'
                    className='form-control'
                    value={comment[post.id] || ''} // Mengambil nilai input untuk form komentar dengan postId tertentu
                    onChange={(e) => handleCommentChange(e, post.id)} // Menggunakan handleCommentChange yang menerima postId
                    placeholder='Masukkan Komentar'
                    required
                  ></input>
                  <button type='submit' className='btn btn-primary mt-2'>
                    Submit
                  </button>
                </form>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div>Loading posts...</div>
      )}
    </div>
  );
};

export default CartPost;