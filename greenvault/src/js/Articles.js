import { useState, useEffect } from "react";
import NavFilter from '../components/NavFilter.js';
import ProductCard from "../components/Card.js";
import "../css/Articles.css";

function Articles() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchArticles = async () => {
      const response = await fetch('http://localhost:8081/announcements');
      const data = await response.json();
      console.log("data",data); 
      setArticles(data);
    };
    fetchArticles();
  }, []);


  return (
    <div className="App">
      <NavFilter />
      <div className='card-grid'>
      {articles.map((article) => (
        <ProductCard 
          username={article.user_name}
          title={article.title}
          item_cat={article.categorie}
          item_desc={article.description}
          item_price={article.price} 
          item_brand={article.creation_date}
        />
      ))}
      </div>
    </div>
  );
}

export default Articles;
