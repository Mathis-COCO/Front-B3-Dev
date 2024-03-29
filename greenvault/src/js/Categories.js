import { useEffect, useState } from 'react';
import "../css/Topnav.css";

function Categories({group_id, page = null}) {
  console.log('categoryyy', group_id);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
        const result = await fetch(`http://172.16.70.217:8081/categories/${group_id}/categories`, {
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
      {page ? (
        // tu peux modifier
      <div>
        <select className='log-reg-input' name="categorie">
            {categories.map((category) => (
            <option key={category.id} value={category.name} >
                {category.name}
            </option>
            ))}
        </select>
      </div>
      //
      ) : (
        <div>
        <select className='log-reg-input' name="categorie">
            {categories.map((category) => (
            <option key={category.id} value={category.name} >
                {category.name}
            </option>
            ))}
        </select>
      </div>
      )}
      
    </div>
  );
}

export default Categories;
