import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CardCommentar from './CardCommentar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane, faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';

const CardPost = () => {
  const [posts, setPosts] = useState([]);
  const [comment, setComment] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  const [editedPost, setEditedPost] = useState('');
  const user_id = localStorage.getItem('userId');

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = () => {
    axios
      .get('http://localhost:8080/post')
      .then((response) => {
        console.log(response.data.data);
        const sortedPosts = response.data.data.sort((a, b) => new Date(b.postDate) - new Date(a.postDate));
        setPosts(sortedPosts);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleCommentChange = (e, postId) => {
    const { value } = e.target;
    setComment((prevInputs) => ({
      ...prevInputs,
      [postId]: value
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
        window.location.reload();
      })
      .catch((error) => {
        console.error(error);
        alert('Failed to Comment');
      });
  };

  const formatPostDate = (postDate) => {
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
  

  const handleEdit = (postId) => {
    setIsEditing(true);
    const postToEdit = posts.find((post) => post.id === postId);
    setEditedPost(postToEdit.story);
  };

  const handleUpdatePost = (postId) => {
    // Cari postingan dengan postId yang sesuai dalam array posts
    const selectedPost = posts.find((post) => post.id === postId);
  
    if (selectedPost) {
      const { id: postId, category } = selectedPost;
      const categoryId = category.id;
      const postDate = new Date(selectedPost.postDate);
      const postData = {
        id: postId,
        user: { id: user_id },
        category: { id: categoryId },
        story: editedPost,
        postDate: postDate
      };
  
      axios
        .put(`http://localhost:8080/post`, postData)
        .then((response) => {
          console.log('Post updated successfully:', response.data);
          setIsEditing(false);
          fetchPosts();
          alert('Post updated successfully');
        })
        .catch((error) => {
            console.log(postData)
          console.error('Failed to update post:', error);
          alert('Failed to update post');
        });
    }
  };

  const handleDelete = (postId) => {
    axios
      .delete(`http://localhost:8080/post/${postId}`)
      .then((response) => {
        console.log('Post deleted successfully:', response.data);
        alert('Post deleted successfully')
        fetchPosts();
      })
      .catch((error) => {
        console.error('Failed to delete post:', error);
        alert('Failed to delete post')
      });
  };

  return (
    <div>
        {posts.length > 0 ? (
            <div>
              {posts.map((post) => (
                <div key={post.id} className='Margin mt-3'>
                  <div className='card p-4' style={{ background: '#DAEDFF' }}>
                    <div className='row'>
                      <div className='col'>
                        <div style={{ fontSize: '14px' }}>
                          {formatPostDate(post.postDate)} - {post.user.username}
                        </div>
                      </div>
                      <div className='col'>
                        <div className='d-flex justify-content-end'>
                          <button
                            type='button'
                            className='btn btn-outline-primary me-2'
                            onClick={() => handleEdit(post.id)}
                          >
                            <FontAwesomeIcon icon={faEdit} />
                          </button>
                          <button
                            type='button'
                            className='btn btn-outline-danger'
                            onClick={() => handleDelete(post.id)}
                          >
                            <FontAwesomeIcon icon={faTrash} />
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className='my-2' style={{ fontWeight: '500' }}>
                      {post.category.categoryName}
                    </div>
                    <div>
                        {isEditing ? (
                            <div style={{ background: '#DAEDFF' }}>
                            <textarea
                                className='form-control mb-3'
                                value={editedPost}
                                onChange={(e) => setEditedPost(e.target.value)}
                                required
                            ></textarea>
                            <div className='text-end d-grid'>
                                <button
                                    type='button'
                                    className='btn btn-primary'
                                    onClick={() => handleUpdatePost(post.id)}
                                >
                                    Update Post
                                </button>
                            </div>
                            
                            </div>
                        ) : (
                            <div className='card-body' style={{ background: 'white', borderRadius: '0.375rem' }}>
                            {post.story}
                            </div>
                        )}
                        </div>


                    <div>{post.id && <CardCommentar postId={post.id}/>}</div>

                    <div className='col'>
                      <div className='d-flex'>
                        <form onSubmit={handleCommentSubmit(post.id)} className='mt-2 flex-grow-1 me-2'>
                          <input
                            type='text'
                            className='form-control'
                            value={comment[post.id] || ''}
                            onChange={(e) => handleCommentChange(e, post.id)}
                            placeholder='Masukkan Komentar'
                            required
                          />
                        </form>
                        <button type='submit' className='btn btn-primary mt-2'>
                          <FontAwesomeIcon icon={faPaperPlane} onClick={handleCommentSubmit(post.id)} />
                        </button>
                      </div>
                    </div>
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

export default CardPost;