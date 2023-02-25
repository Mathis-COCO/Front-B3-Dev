import gvlogo from './images/gv-small-logo.png';
import './App.css';
import homepic from './images/home-back-pic.avif'
import ProductCard from './components/Card.tsx'
import Login from './Login.js'
import NavFilter from './components/NavFilter.tsx'
import './Topnav.css'

function Homepage() {
  return (
    <div className="App">
      <NavFilter />

        <div className="bg-img-parent">
          <div className="home-pic">
            <img src={homepic} alt='homepagepic' />
          </div>
          <div className="home-info">
            <p>
              <span>Prêt à sauver la planète ?</span>
              <span>Envie de donner une seconde vie à ce que vous possédez ?</span>

              <span>C'est ici que ça se passe</span>
            </p>
          </div>
        </div>

        <div className='card-grid'>
          <ProductCard 
            pfp="../images/glama.jpg" 
            username="Sylvie782" 
            item_img_src="./images/glama.jpg" 
            item_price={100}
            item_size="M" 
            item_brand="Evisu"
          />
          <ProductCard 
            pfp="../images/glama.jpg" 
            username="Arthur64" 
            item_img_src="./images/glama.jpg" 
            item_price={18.5}
            item_size="XL" 
            item_brand="Zara"
          />
          <ProductCard 
            pfp="../images/glama.jpg" 
            username="mamacita1234" 
            item_img_src="./images/glama.jpg" 
            item_price={43}
            item_size="S" 
            item_brand="UniQlo"
          />
          <ProductCard 
            pfp="../images/glama.jpg" 
            username="glamaRF" 
            item_img_src="./images/glama.jpg" 
            item_price={99999.99}
            item_size="XXL" 
            item_brand="GlamaBrand"
          />

        </div>
    </div>
  );
}

export default Homepage;
