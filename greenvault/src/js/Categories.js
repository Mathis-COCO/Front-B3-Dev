import { useEffect, useState } from 'react';
import "../css/Topnav.css";

function Categories(group_id) {
  const [categories, setCategories] = useState([]);
  console.log(group_id.group_id);

  useEffect(() => {
    const fetchCategories = async () => {
        const result = await fetch(`http://localhost:8081/categories/${group_id.group_id}/categories`, {
            method: 'GET',
            headers: {'Content-Type': 'application/json'},
        })
      const categoriesData = await result.json();
      console.log(categoriesData, "CategoriesData");
      setCategories(categoriesData);
    };
    fetchCategories();
  }, []);

  return (
    <div className="App">
      <div>
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
