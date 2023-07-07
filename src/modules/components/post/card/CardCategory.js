import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CardCategory = ({ onCategoryChange }) => {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');

  useEffect(() => {
    fetchCategories();
  }, []);

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

  const fetchCategories = () => {
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

  const handleCategoryChange = (categoryId) => {
    setSelectedCategory(categoryId);
    onCategoryChange(categoryId);
  };

  return (
    <div className='w-auto'>
      {categories.map((category) => (
        <button
          key={category.id}
          type='button'
          className={`btn btn-primary ${selectedCategory === category.id ? 'active' : ''}`}
          style={{ backgroundColor: '#1D82E3', marginRight: "10px", width: "125px"}}
          onClick={() => handleCategoryChange(category.id)}
        >
          {category.categoryName}
        </button>
      ))}
    </div>
  );
};

export default CardCategory;
