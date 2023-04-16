import { useState, useEffect } from "react";
import NavFilter from '../components/NavFilter.js';
import ProductCard from "../components/Card.js";
import "../css/Articles.css";

function formatDate(date) {
  const options = { day: 'numeric', month: 'numeric', year: 'numeric' };
  return new Date(date).toLocaleDateString('fr-FR', options);
}

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
          item_date={formatDate(article.creation_date)}
          // item_image={article.image ? `http://localhost:8081/${article.image}` : null}
        />
      ))}
      </div>
    </div>
  );
}

export default Articles;
