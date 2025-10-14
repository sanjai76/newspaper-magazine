import React, { useEffect, useState } from "react";
import AxiosInstance from "./Axios"; // ✅ use same Axios instance as products
import "./ArticleList.scss"; // create your CSS/SCSS for styling

const ArticleList = () => {
  const [articles, setArticles] = useState([]);
  console.log(articles);

  const GetArticles = () => {
    AxiosInstance.get("articles/")
      .then((res) => setArticles(res.data))
      .catch((err) => console.error("Error fetching articles:", err));
  };

  useEffect(() => {
    GetArticles();
  }, []);

  return (
    <>
      {/* HERO SECTION */}
      <section className="hero-section">
        <div className="hero-content">
          <h1>Latest News & Stories</h1>
          <p>
            Stay updated with trending news, featured stories, and exclusive insights — all in one place!
          </p>
        </div>
      </section>

      {/* ARTICLES SECTION */}
      <section className="articles-section">
        <h2>Our Articles</h2>
        <div className="articles-container">
          {articles.map((article) => (
            <div key={article.id} className="article-card">
              <div className="article-image">
                {article.image && (
                  <img
                    src={`http://127.0.0.1:8000${article.image}`}
                    alt={article.title}
                  />
                )}
                <div className="overlay">
                  <span>{article.category}</span>
                </div>
              </div>
              <div className="article-info">
                <h3>{article.title}</h3>
                <p className="author">By {article.author}</p>
                <p className="excerpt">
                  {article.content.length > 100
                    ? `${article.content.substring(0, 100)}...`
                    : article.content}
                </p>
                <button>Read More</button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section className="about-section">
        <h2>About Our Magazine</h2>
        <p>
          We are a creative online magazine sharing stories that inspire, inform,
          and entertain. Our mission is to bring you the latest articles from
          diverse fields — from lifestyle and culture to technology and travel.
        </p>
      </section>
    </>
  );
};

export default ArticleList;