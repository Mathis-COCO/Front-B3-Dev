import '../css/App.css';
import NavFilter from '../components/NavFilter.tsx';
import { useState } from 'react';
import {useNavigate} from 'react-router-dom';


export function Register () {
  
  const navigate = useNavigate();

  const [data, setData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    setData({ ...data, [event.target.name]:event.target.value });
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("coucou")
    submitUsers();
    console.log(data);

    setData({username: "", email: "", password: "" });
  }

  

  const submitUsers = async () => {
    const result = await fetch("http://localhost:8081/users/auth/sign-up", {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(data)
    })
   
    const resultJson = await result.json()
    console.log(resultJson);
    console.log("ouiiii");
  }


  return (
    <div className='log-reg-bg'>
        <div className="App">
            <NavFilter />
            <div className="register-wrapper">
                <div className='register-card'>
                    <h1>Inscription</h1>
                    <form onSubmit={handleSubmit}>
                        <input placeholder="Nom d'utilisateur" className='log-reg-input' name="username" onChange={handleChange} required></input>
                        <p className='quick-tip'>
                            Tip: Pour créer ton nom d'utilisateur, n'utilises que des lettres et chiffres.
                            Ton pseudo est unique et ne peut pas être modifié, ne te trompes pas !
                        </p>
                        <input placeholder='E-mail' className='log-reg-input' name="email" onChange={handleChange} required></input>
                        <input placeholder='Mot de passe' className='log-reg-input' name="password" onChange={handleChange} required></input>
                        <p className='quick-tip'>
                            7 caractères min (6 lettre + 1 chiffre min).
                        </p>
                        <input placeholder='Valider le mot de passe' className='log-reg-input' required></input>
                        <div className='inline'>
                            <input type={'checkbox'} className="reg-checkbox" required/> 
                            <p>Accepter nos CGU</p>                          
                        </div>
                        <input className='log-reg-btn' type="submit" value="S'inscrire"/>
                        <div className='inline'>
                            <p>Déjà un compte ? </p>
                            <p onClick={() => navigate("/login")}>Se connecter</p>
                        </div>                           
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Register;
