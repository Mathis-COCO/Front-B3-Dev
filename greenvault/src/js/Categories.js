import { useEffect, useState } from 'react';
import "../css/Topnav.css";

function Categories() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
        const result = await fetch("http://localhost:8080/categories", {
            method: 'GET',
            headers: {'Content-Type': 'application/json'},
        })
      const categoriesData = await result.json();
      setCategories(categoriesData);
    };
    fetchCategories();
  }, []);

  return (
    <div className="App">
      <div>
        <h1>Categories</h1>
        <ul>
            {categories.map((category) => (
            <li key={category.id}>
                {category.name}
            </li>
            ))}
        </ul>
        </div>
    </div>
  );
}

export default Categories;
