import React, { useState } from 'react';
import '../../App.css';
import axios from 'axios';
import { setUserSession } from '../../service/AuthService'
import './Login.css';
const loginAPIUrl = 'https://84jbs45w8h.execute-api.us-east-1.amazonaws.com/prod/login'

const Login = (props) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState(null);

  const submitHandler = (event) => {
    event.preventDefault();

    if (username.trim() === '') {
      setErrorMessage('Necessário colocar username');
      return;
    }
    
    if (password.trim() === '') {
      setErrorMessage('Necessário colocar password');
      return;
    }

    if (username.trim() === '' && password.trim() === '') {
      setErrorMessage('Necessário colocar username e password');
      return;
    }
    setErrorMessage(null);
    const requestConfig = {
      headers: {
        'x-api-key': 'tYHo5Cxj3Z5uKIFBVSz6e9NHm2spWilc5nFkHDVR'
      }
    }
    const requestBody = {
      username: username,
      password: password
    }

    axios.post(loginAPIUrl, requestBody, requestConfig).then((response) => {
      setUserSession(response.data.user, response.data.token);
      props.history.push('/intranet');
    }).catch((error) => {
      if (error.response.status === 401 || error.response.status === 403) {
        setErrorMessage(error.response.data.message);
      } else {
        setErrorMessage('Sorry....problemas no servidor. Por favor, tente mais tarde !!');
      }
    })
  }

  return (
    <div className='container-login'>
      <form onSubmit={submitHandler}>
        <h2>Efetuar Login</h2>
        <br />
        <input type="text" placeholder='Username' className='input' value={username} onChange={event => setUsername(event.target.value)} /> <br />
        <input type="password" placeholder='Password' className='input' value={password} onChange={event => setPassword(event.target.value)} /> <br />

        {errorMessage && <p className="message">{errorMessage}</p>}
        <br />
        <input type="submit" value="Login" className='btn--outline btn-login' />
      </form>
    </div>
  )
}

export default Login;