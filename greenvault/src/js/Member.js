import '../css/App.css';
import NavFilter from '../components/NavFilter.js'
import userpfp from '../images/product_img_1.png'
import ProductCard from '../components/Card.js'

function Member() {
  return (
    <div className="App">
      <NavFilter />
        <div>
            <div className="inline-sep">
                <div>
                    <img src={userpfp} className="user-pfp" alt='Member Profile Picture'/>
                </div>
                <div>
                    <h2>Donatien</h2>
                    <p>Compte créé le 17/04/2023</p>
                    <p>À propos :</p>
                    <div className="inline">
                        <i class="fa-light fa-location-pin"></i>
                        <p>France</p>
                    </div>
                </div>
                <button className='edit-account-btn'>Modifier mon profil</button>
                <i class="fa-light fa-pen"></i>
            </div>
            <div>
                <p className='dressing-title'>Dressing</p>
                <div className='card-grid'>
                    <ProductCard 
                        username="Sylvie782" 
                        item_img_src="./images/glama.jpg" 
                        item_price={100}
                        item_size="M" 
                        item_brand="Evisu"
                    />
                    <ProductCard 
                        username="Arthur64" 
                        item_img_src="./images/glama.jpg" 
                        item_price={18.5}
                        item_size="XL" 
                        item_brand="Zara"
                    />
                </div>
            </div>
            
        </div>
    </div>  
  )
}

export default Member;