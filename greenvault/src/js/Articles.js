import { useState, useEffect } from "react";
import NavFilter from '../components/NavFilter.tsx';
import ProductCard from "../components/Card.tsx";
import "../css/Articles.css";

function Articles() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchArticles = async () => {
      const response = await fetch('http://localhost:8081/announcements');
      const data = await response.json();
      console.log(data); 
      setArticles(data);
    };
    fetchArticles();
  }, []);


  return (
    <div className="App">
      <NavFilter />
      <ul>
      {articles.map((article) => (
        <li>
          <ProductCard 
            username={article.user_name}
            title={article.title}
            item_cat={article.categorie}
            item_desc={article.description}
            item_price={article.price} 
            item_brand={article.creation_date}
          />
        </li>
      ))}
      </ul>
    </div>
  );
}

export default Articles;
