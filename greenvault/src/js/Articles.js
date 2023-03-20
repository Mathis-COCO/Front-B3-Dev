import { useState, useEffect } from "react";
import NavFilter from '../components/NavFilter.tsx';

function Articles() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchArticles = async () => {
      const response = await fetch('http://localhost:8080/announcements');
      const data = await response.json();
      console.log(data); 
      setArticles(data);
    };
    fetchArticles();
  }, []);

  return (
    <div className="App">
      <NavFilter />
      <div>
        <ul>
          {articles.map((article) => (
            <li key={article.id}>
              <h3>{article.title}</h3>
              <p>{article.description}</p>
              <p>{article.price} €</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Articles;