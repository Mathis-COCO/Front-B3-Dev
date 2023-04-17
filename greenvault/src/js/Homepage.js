import "../css/App.css";
import { useState, useEffect } from "react";
import ProductCard from "../components/Card.js";
import NavFilter from "../components/NavFilter.js";
import "../css/Topnav.css";
import Footer from "../components/Footer.js";

function Homepage() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchArticles = async () => {
      const response = await fetch("http://localhost:8081/announcements");
      const data = await response.json();
      console.log("data", data);
      setArticles(data);
    };
    fetchArticles();
  }, []);

  const sortedArticles = articles.sort((a, b) => b.creation_date.localeCompare(a.creation_date)); 
  const fourLatestArticles = sortedArticles.slice(0, 4); 

  return (
    <div className="app">
      <NavFilter />

      <div className="bg-img-parent">
        <div className="home-info">
          <p className='homepage-main-txt'>
            <p className="inline">Prêt à <span className="green-txt">sauver</span> la planète ?</p>
            <p>Envie de donner une seconde vie à ce que vous possédez ?</p>

            <span>C'est ici que ça se passe</span>
          </p>
        </div>
      </div>

      <div className="card-grid">
        {fourLatestArticles.map((article) => (
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
      <Footer></Footer>
    </div>
  );
}

export default Homepage;
