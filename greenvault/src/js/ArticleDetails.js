import { useState, useEffect } from "react";
import NavFilter from '../components/NavFilter.js';
import ProductCard from "../components/Card.js";
import "../css/Article.css";
import productImg from '../images/supreme_shirt.png';
import userPfp from '../images/user-without-pic.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShare, faStar } from "@fortawesome/free-solid-svg-icons";

function formatDate(date) {
  const options = { day: 'numeric', month: 'numeric', year: 'numeric' };
  return new Date(date).toLocaleDateString('fr-FR', options);
}

function ArticleDetails() {
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

  return (
    <div className="App">
      <NavFilter />
      <div class="main-page">
        <div className='inline-center-space'>
            <div className='left-row'>
                <img src={productImg} className="full-product-img" alt="product image" />
                <div className="inline-even-sep">
                    <img  src={productImg} className="small-img" />
                    <img src={productImg} className="small-img" />
                    <img src={productImg} className="small-img" />
                    <img src={productImg} className="small-img" />
                </div>
            </div>
            <div>
                <h1 className='product-title'>
                    Tee-Shirt Supreme Burberry
                </h1>
                <p className='product-path'>homme/habits/hauts/tee-shirts</p>
                <div className='inline'>
                    <img src={userPfp} className='user-pfp' />
                    <p className='username'>Scratchyx12 </p>
                    <div className='stars-container'>
                        <FontAwesomeIcon icon={faStar} className='stars' color='rgb(240, 220, 0)'/>
                        <FontAwesomeIcon icon={faStar} className='stars' color='rgb(240, 220, 0)'/>
                        <FontAwesomeIcon icon={faStar} className='stars' color='rgb(240, 220, 0)'/>
                        <FontAwesomeIcon icon={faStar} className='stars' color='rgb(240, 220, 0)'/>
                        <FontAwesomeIcon icon={faStar} className='stars' color='rgb(240, 220, 0)'/>                     
                    </div>
                </div>
                <div className='product-infos'>
                <div className='space-between'>
                        <p className='product-global-info'>marque : </p>
                        <p>supreme</p>
                    </div>
                    <div className='space-between'>
                        <p className='product-global-info'>taille : </p>
                        <p>M</p>
                    </div>
                    <div className='space-between'>
                        <p className='product-global-info'>état : </p>
                        <p>très bon état</p>
                    </div>
                    <p className='product-global-info'>description du vendeur</p>
                    <p className='seller-desc'>
                        tee-shirt porté une vingtaine de fois en excellent état
                        légère tache au niveau de l'épaule droite, seulement visible de près.
                        coupe un peu oversize, pour info je fais 1m82
                    </p>
                    <div className='inline'>
                        <p className='product-global-info'>ajouté le :</p>
                        <p className='product-date'> 12/04/2023</p>
                    </div>
                </div>
                <p className='questions-txt'>Des questions ?</p>
                <div className='inline'>
                    <input type="text" className='user-msg-input' placeholder='Contacter vendeur'></input>
                    <button className='send-msg-btn'><FontAwesomeIcon icon={faShare} color='white' className='send-msg-icon' /></button>                    
                </div>
                <button className='buy-btn'>Acheter</button>
            </div>
        </div>
      </div>
    </div>
  );
}

export default ArticleDetails;
