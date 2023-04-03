import { useState } from "react";
import Groups from "../Groups";
import '../../css/App.css';


export function CreateArticles() {
  const [articles, setArticles] = useState({
    name:'',
    title:'',
    description:'',
    price: 0,
    categorie:'',
  });



  const handleChange = (event) => {
    const value = event.target.type === 'number' ? parseInt(event.target.value) : event.target.value;
    setArticles({ ...articles, [event.target.name]: value });
    console.log("articles",articles);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    createArticles();
    setArticles({name:'',
    title:'',
    description:'',
    price: 0,
    categorie: '',
  });

  };

  const createArticles = async () => {
    const response = await fetch('http://localhost:8081/announcements/create', {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(articles),
    });
    const data = await response.json();
    console.log("data: ",data); 
    setArticles(data);
  };

  return (
    <div className='login-wrapper'>
          <div className='login-card'>
          <form>
            <div>
              <h3>Create Articles</h3>
            </div>
            <div>
              <input
                type="text"
                name="name"
                placeholder="Name"
                className='log-reg-input'
                required
                onChange={handleChange}
              />
            </div>
            <div>
              <input
                type="text"
                name="title"
                placeholder="Title"
                className='log-reg-input'
                required
                onChange={handleChange}
              />
            </div>
            <div>
              <input
                type="text"
                name="description"
                placeholder="Description"
                className='log-reg-input'
                required
                onChange={handleChange}
              />
            </div>
            <div>
              <input
                type="number"
                name="price"
                placeholder="Price"
                className='log-reg-input'
                required
                onChange={handleChange}
              />
            </div>
            <div>
              <label name="categorie"
                      placeholder="Categorie"
                      className='log-reg-input'
                      required 
                      onChange={handleChange}>
                <Groups page='form'/>
              </label>
            </div>
            <div>
              <button
              type="submit"
              onClick={handleSubmit}
              >Submit</button>
            </div>
          </form>
          </div>
    </div>
  );
}