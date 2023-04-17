import { useState, useEffect } from "react";
import NavFilter from '../components/NavFilter.js';
import ProductCard from "../components/Card.js";
import "../css/Articles.css";

function Articles() {
  const [articles, setArticles] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const fetchArticles = async () => {
      const response = await fetch('http://localhost:8081/announcements');
      const data = await response.json();
      console.log("data",data); 
      setArticles(data);
    };
    fetchArticles();
  }, []);

  const handlePrevClick = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleNextClick = () => {
    if (currentIndex < articles.length - 4) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const displayArticles = () => {
    const displayedArticles = [];
    for (let i = currentIndex; i < currentIndex + 4; i++) {
      if (i >= articles.length) {
        break;
      }
      displayedArticles.push(
        <ProductCard 
          username={articles[i].name}
          title={articles[i].title}
          item_cat={articles[i].categorie}
          item_image={articles[i].image}
          item_desc={articles[i].description}
          item_price={articles[i].price} 
          item_date={articles[i].creation_date}
        />
      );
    }
    return displayedArticles;
  }

  return (
    <div className="App">
      <NavFilter />
      <div className="card-grid">
        <button className='prev-next-btn' onClick={handlePrevClick} disabled={currentIndex === 0}>{'<'}</button>
        {displayArticles()}
        <button className='prev-next-btn' onClick={handleNextClick} disabled={currentIndex >= articles.length - 4}>{'>'}</button>
      </div>
    </div>
  );
}

export default Articles;
