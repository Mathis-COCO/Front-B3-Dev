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


  // const displayArticles = () => {
  //   const displayedArticles = [];
  //   for (let i = currentIndex; i < currentIndex + 4; i++) {
  //     if (i >= articles.length) {
  //       break;
  //     }
  //     displayedArticles.push(
  //       <ProductCard 
  //         username={articles[i].name}
  //         title={articles[i].title}
  //         item_cat={articles[i].categorie}
  //         item_image={articles[i].image}
  //         item_desc={articles[i].description}
  //         item_price={articles[i].price} 
  //         item_date={articles[i].creation_date}
  //       />
  //     );
  //   }
  //   return displayedArticles;
  // }

  return (
    <div className="app">
      <NavFilter />
      <div className="card-grid">
      {articles.map((article) => (
        <ProductCard 
          title={article.title}
          item_cat={article.categorie}
          item_image={article.image}
          item_desc={article.description}
          item_price={article.price} 
          item_date={article.creation_date}
        />
      ))};
      </div>
    </div>
  );
}

export default Articles;
