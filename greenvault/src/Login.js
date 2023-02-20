import gvlogo from './images/gv-small-logo.png';
import './App.css';
import homepic from './images/home-back-pic.avif'
import NavFilter from './components/NavFilter.tsx';

function Login() {
  return (
    <body className='log-reg-bg'>
        <div className="App">
            <NavFilter />
            <div className="login-wrapper">
                <div className='login-card'>
                    <h1>Se connecter</h1>
                    <form>
                        <input placeholder="Nom d'utilisateur" className='log-reg-input'></input>
                        <input placeholder='Mot de passe' className='log-reg-input'></input>
                        <button className='log-reg-btn'>Se connecter</button>
                    </form>
                    <p href="./Register.js">Pas de compte ? S'inscrire</p>
                </div>
            </div>
        </div>
    </body>

  );
}

export default Login;
