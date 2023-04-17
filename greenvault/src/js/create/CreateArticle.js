import { useState } from "react";
import Groups from "../Groups";
import '../../css/CreateArticle.css';
import {useNavigate} from 'react-router-dom';
import NavFilter from "../../components/NavFilter";



export function CreateArticles() {
  const navigate = useNavigate();

  const [articles, setArticles] = useState({
    title:'',
    description:'',
    price: 0,
    image: '',
    categorie:'',
  });



  const handleChange = (event) => {
    const value = event.target.type === 'number' ? parseInt(event.target.value) : event.target.value;
    setArticles({ ...articles, [event.target.name]: value });
    console.log("articles",articles);
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = () => {
      const dataUrl = reader.result;
      setArticles({ ...articles, image: dataUrl });
    };
    reader.readAsDataURL(file);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    await createArticles();
    setArticles({
    title:'',
    description:'',
    price: 0,
    image: '',
    categorie: '',
    });
    navigate("/articles")

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
    <div>
      <NavFilter></NavFilter>
          <div className='login-wrapper'>
            <div className='login-card'>
            <form>
              <div>
                <h3 className='add-article-name'>Ajouter un article</h3>
              </div>
              <div>
                <input
                  type="text"
                  name="title"
                  placeholder="Titre"
                  className='create-input'
                  required
                  onChange={handleChange}
                />
              </div>
              <div>
                <input
                  type="text"
                  name="description"
                  placeholder="Description"
                  className='create-input'
                  required
                  onChange={handleChange}
                />
              </div>
              <div className='inline-euro'>
                <input
                  type="number"
                  name="price"
                  placeholder="Prix ( € )"
                  className='create-input'
                  required
                  onChange={handleChange}
                />
              </div>
              <div>
                <input
                  type="file"
                  name="image"
                  onChange={handleImageChange}
                  className='file-upload-btn'
                  required
                />
              </div>
              <div>
                <label name="categorie"
                        placeholder="Categorie"
                        className='create-input'
                        required 
                        onChange={handleChange}>
                  <Groups page='form'/>
                </label>
              </div>
              <div>
                <button className='submit-btn'
                onClick={handleSubmit}
                >publier</button>
              </div>
            </form>
            </div>
      </div>      
    </div>
    
  );
}

