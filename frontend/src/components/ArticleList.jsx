import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ArticleList = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/articles/')
      .then(res => setArticles(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div style={{ padding: '2rem' }}>
      <h1 style={{ textAlign: 'center', marginBottom: '2rem' }}>Latest Articles</h1>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(300px,1fr))', gap: '1.5rem' }}>
        {articles.map(article => (
          <div key={article.id} style={{ border: '1px solid #ddd', borderRadius: '10px', padding: '1rem', boxShadow: '0 2px 5px rgba(0,0,0,0.1)' }}>
            {article.image && <img src={article.image} alt={article.title} style={{ width: '100%', borderRadius: '10px' }} />}
            <h2 style={{ marginTop: '1rem' }}>{article.title}</h2>
            <p><strong>Author:</strong> {article.author}</p>
            <p>{article.content.substring(0, 100)}...</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ArticleList;