import gvlogo from './images/gv-small-logo.png';
import './App.css';
import homepic from './images/home-back-pic.avif'
import NavFilter from './components/NavFilter.tsx';

function Register() {
  return (
    <body className='log-reg-bg'>
        <div className="App">
            <NavFilter />
            <div className="register-wrapper">
                <div className='register-card'>
                    <h1>Inscription</h1>
                    <form>
                        <input placeholder="Nom d'utilisateur" className='log-reg-input'></input>
                        <p className='quick-tip'>
                            Tip: Pour créer ton nom d'utilisateur, n'utilises que des lettres et chiffres.
                            Ton pseudo est unique et ne peut pas être modifié, ne te trompes pas !
                        </p>
                        <input placeholder='E-mail' className='log-reg-input'></input>
                        <input placeholder='Mot de passe' className='log-reg-input'></input>
                        <p className='quick-tip'>
                            7 caractères min (6 lettre + 1 chiffre min).
                        </p>
                        <input placeholder='Valider le mot de passe' className='log-reg-input'></input>
                        <div className='inline'>
                            <input type={'checkbox'} className="reg-checkbox" /> 
                            <p>Accepter nos CGU</p>                          
                        </div>
                        <button className='log-reg-btn'>S'inscrire</button>
                        <p href="Login.js">Déjà un compte ? Se connecter</p>                            
                    </form>
                </div>
            </div>
        </div>
    </body>
  )
}

export default Register;
