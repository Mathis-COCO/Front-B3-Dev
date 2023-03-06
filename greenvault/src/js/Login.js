
import '../css/App.css';
import NavFilter from '../components/NavFilter.tsx';
import { useState } from 'react';
import {useNavigate} from 'react-router-dom';

function Login() {
    const navigate = useNavigate();

    const [data, setData] = useState({
        email: "",
        password: "",
      });
    
      const handleChange = (event) => {
        setData({ ...data, [event.target.name]:event.target.value });
      }
    
      const handleSubmit = (event) => {
        event.preventDefault();
        console.log("Bienvenue")
        submitUsers();
        console.log(data);

        setData({ email: "", password: "" });
      }
    
      
    
      const submitUsers = async () => {
        const result = await fetch("http://localhost:8080/users/auth/login", {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(data)
        })
       
        const resultJson = await result.json()
        console.log(resultJson);
        console.log("Yeees");
        navigate("/")
      }
  return (
    <body className='log-reg-bg'>
        <div className="App">
            <NavFilter />
            <div className='login-wrapper'>
                <div className='login-card'>
                    <h1>Se connecter</h1>
                    <form onSubmit={handleSubmit}>
                        <input placeholder="Email" className='log-reg-input' name="email" onChange={handleChange}></input>
                        <input placeholder='Mot de passe' className='log-reg-input' type={"password"} name="password" onChange={handleChange}></input>
                        <input className='log-reg-btn' type="submit" value="Se connecter"/>
                    </form>
                    <div className='inline'>
                        <p>Pas de compte ? </p>
                        <p onClick={() => navigate("/register")}>S'inscrire</p>
                    </div>
                </div>
            </div>
        </div>
    </body>

  );
}

export default Login;
