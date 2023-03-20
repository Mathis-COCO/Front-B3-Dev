import { METHODS } from "http";
import { useState, useEffect } from "react";


export function CreateArticles() {
  const [articles, setArticles] = useState([]);

  const handleChange = (event) => {
    setArticles({ ...articles, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    setArticles();
  };

  useEffect(() => {
    const fetchArticles = async () => {
      const response = await fetch('http://localhost:8081/announcements/create');
      const data = await response.json();
      console.log(data); 
      setArticles(data);
    };
    fetchArticles();
  }, []);

  return (
    <div>
        {articles.map((article) => (
    <form>
        <div>
          <h3>Create Articles</h3>
        </div>
        <div>
          <input
            type="text"
            name="name"
            placeholder="Name"
            required
            onChange={handleChange}
            value={article.user_id}
          />
        </div>
        <div>
          <input
            type="email"
            name="title"
            placeholder="Title"
            required
            onChange={handleChange}
            value={article.title}
          />
        </div>
        <div>
          <input
            type="email"
            name="description"
            placeholder="Description"
            required
            onChange={handleChange}
            value={article.description}
          />
        </div>
        <div>
          <input
            type="number"
            name="price"
            placeholder="Price"
            required
            onChange={handleChange}
            value={article.price}
          />
        </div>
        <div>
          <select 
          onChange={handleChange}
          name="categorie"
          required
          placeholder="Categorie"
          >
            <li>
                <option value={article.categorie}>{article.categorie}</option>
            </li>
          </select>
        </div>
        <div>
          <button
          type="submit"
          onClick={handleSubmit}
          >Submit</button>
        </div>
      </form>
  ))}
      
    </div>
  );
}