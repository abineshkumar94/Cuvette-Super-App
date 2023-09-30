import React, { useState, useEffect, useCallback } from "react";
import "./News.css";

function News() {
  const [news, setNews] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const apiUrl =
          "https://newsapi.org/v2/top-headlines?country=us&apiKey=21da23f145f34e4a9c154e120ed933b2";
        const response = await fetch(apiUrl);

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const data = await response.json();
        setNews(data.articles);
      } catch (error) {
        console.error("Error fetching news:", error);
      }
    };

    fetchNews();
  }, []);

  const prevNews = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : news.length - 1
    );
  }, [news]);

  const nextNews = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex < news.length - 1 ? prevIndex + 1 : 0
    );
  }, [news]);

  return (
    <div className="n-box">
      {news.length > 0 && (
        <div key={currentIndex}>
          <div>
            <img
              src={news[currentIndex].urlToImage}
              alt={news[currentIndex].title}
              className="n-img"
            />
            <h2 className="n-shad" >{news[currentIndex].title}</h2>
          </div>

          <p className="n-content" >{news[currentIndex].description}</p>
         
          <div className="news-controls">
            <button 
            onClick={prevNews}
            className="pre-btn"
            > &#8592;
            </button>
            <button 
            onClick={nextNews}
            className="nxt-btn"
            > &#8594;
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default News;
