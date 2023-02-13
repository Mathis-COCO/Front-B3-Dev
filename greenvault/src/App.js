import gvlogo from './images/gv-small-logo.png';
import './App.css';
import homepic from './images/home-back-pic.avif'

function Header() {
  return (
    <div className="App">
          <div className="navbar-c-items">
            <img src={gvlogo} className="navbar-c-logo" alt='logo'/>
            <input placeholder='    Rechercher...' className='searchbar'></input>
            <img src={gvlogo} className="navbar-c-logo" alt='logo' />
          </div>  

          <div className="filters-c-items">
            <div>vetements</div>
            <div>informatique</div>
            <div>véhicules</div>
            <div>jardinerie</div>
            <div>autres</div>
          </div>

          <div>
            <img src={homepic} alt='homepagepic' className="home-pic" />
          </div>
    </div>
  );
}

export default Header;
