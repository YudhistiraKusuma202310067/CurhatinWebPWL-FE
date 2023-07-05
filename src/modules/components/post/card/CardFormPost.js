import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CardFormPost = () => {
  const [story, setStory] = useState('');
  const [categories, setCategories] = useState([]);
  const [category, setCategory] = useState('');
  const user_id = localStorage.getItem('userId');

  useEffect(() => {
    getCategory();
  }, []);

  const getCategory = () => {
    axios
      .get('http://localhost:8080/category')
      .then((response) => {
        console.log(response.data.data);
        setCategories(response.data.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const postData = { user: { id: user_id }, category: { id: category }, story };
    console.log(postData);

    axios
      .post('http://localhost:8080/post', postData)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className='card mt-3 p-3' style={{ background: '#DAEDFF' }}>
          <h3 className='mt-4' style={{ textAlign: 'center', fontWeight: 'bold', color: '#1D82E3' }}>
            Posting Cerita
          </h3>
          <div className='p-2 mt-2'>
            <div className='form-group'>
              <label htmlFor='category'>Kategori</label>
              <select
                className='form-control'
                id='categoryControl'
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              >
                {categories.map((cat) => (
                  <option key={cat.id} value={cat.id}>
                    {cat.categoryName}
                  </option>
                ))}
              </select>
            </div>
            <div className='mt-3'>
              <label htmlFor='story'>Cerita Kamu</label>
              <textarea
                className='form-control'
                id='storyArea'
                rows='7'
                value={story}
                onChange={(e) => setStory(e.target.value)}
                required
              ></textarea>
            </div>
            <div className='d-grid mt-4'>
              <button
                type='submit'
                className='btn btn-primary'
                style={{ fontWeight: 'bold', fontSize: '18px', backgroundColor: '#1D82E3' }}
              >
                POST
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default CardFormPost;
