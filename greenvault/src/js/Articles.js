import { useEffect, useState } from 'react';
import "../css/Topnav.css";

function Articles() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchArticles = async () => {
        const result = await fetch(`http://localhost:8080/announcements`, {
            method: 'GET',
            headers: {'Content-Type': 'application/json'},
        })
      const articlesData = await result.json();
      console.log(articlesData, "articlesData");
      setArticles(articlesData);
    };
    fetchArticles();
  }, []);

  return (
    <div className="App">
      <div>
        <ul>
            {articles.map((article) => (
            <li key={article.id}>
                {article.name}
            </li>
            ))}
        </ul>
        </div>
    </div>
  );
}

export default Articles;