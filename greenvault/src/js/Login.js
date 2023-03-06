import '../css/App.css';
import NavFilter from '../components/NavFilter.tsx';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCookies } from 'react-cookie';

function Login() {
  const navigate = useNavigate();
  const [cookies, setCookie] = useCookies(['access_token']);

  const [data, setData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (event) => {
    setData({ ...data, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Bienvenue")
    submitUsers();
    console.log(data);

    setData({ email: "", password: "" });
  };

  const submitUsers = async () => {
    try {
      const result = await fetch("http://localhost:8080/users/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
  
      if (!result.ok) {
        throw new Error("Failed to log in");
      }
  
      const contentType = result.headers.get("content-type");
      if (!contentType || !contentType.includes("application/json")) {
        throw new TypeError("Response is not JSON");
      }
  
      const response = await result.json();
      console.log(response);
      console.log("Yeees");
  
      const access_token = response.access_token;
      console.log(access_token);
  
      let expires = new Date();
      expires.setTime(expires.getTime() * 1000);
  
      setCookie("access_token", access_token, { path: "/", expires });
      navigate("/")
    } catch (error) {
      console.error(error);
    }
  };
  

  const isLoggedIn = !!cookies.access_token;

  return (
    <body className='log-reg-bg'>
      <div className='App'>
        <NavFilter />
        <div className='login-wrapper'>
          <div className='login-card'>
            <h1>Se connecter</h1>
            {isLoggedIn ? (
              <p>You are already logged in</p>
            ) : (
              <form onSubmit={handleSubmit}>
                <input
                  placeholder='Email'
                  className='log-reg-input'
                  name='email'
                  onChange={handleChange}
                ></input>
                <input
                  placeholder='Mot de passe'
                  className='log-reg-input'
                  type={'password'}
                  name='password'
                  onChange={handleChange}
                ></input>
                <input
                  className='log-reg-btn'
                  type='submit'
                  value='Se connecter'
                />
              </form>
            )}
            <div className='inline'>
              <p>Pas de compte ? </p>
              <p onClick={() => navigate('/register')}>S'inscrire</p>
            </div>
          </div>
        </div>
      </div>
    </body>
  );
}

export default Login;
