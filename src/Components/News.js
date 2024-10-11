// src/components/News.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NewsItem from './NewsItem';

const News = ({ category }) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        setLoading(true);
        const response = await axios.get('https://newsapi.org/v2/top-headlines', {
          params: {
            category: category,
            country: 'us',
            apiKey: '7f5c3a44fca34821a51a5753f0b141a9', // Replace with your API key
          },
        });
        setArticles(response.data.articles);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, [category]);

  if (loading) return <h2>Loading...</h2>;
  if (error) return <h2>Error: {error}</h2>;

  return (
    <div>
      <h1>{category.toUpperCase()} News</h1>
      <div>
        {articles.map((article, index) => (
          <NewsItem
            key={index}
            title={article.title}
            description={article.description}
            url={article.url}
            imageUrl={article.urlToImage || 'https://via.placeholder.com/150'}
          />
        ))}
      </div>
    </div>
  );
};

export default News;
