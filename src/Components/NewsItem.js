// src/components/NewsItem.js
import React from 'react';

const NewsItem = ({ title, description, url, imageUrl }) => {
  return (
    <div className="news-item" style={{ marginBottom: '20px' }}>
      <img
        src={imageUrl}
        alt={title}
        style={{ width: '100%', height: '200px', objectFit: 'cover' }}
      />
      <h3>{title}</h3>
      <p>{description}</p>
      <a href={url} target="_blank" rel="noopener noreferrer">
        Read more
      </a>
    </div>
  );
};

export default NewsItem;
