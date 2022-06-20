import React, {useState} from 'react';
import '../../App.css';
import axios from 'axios';
import { setUserSession } from '../../service/AuthService'
const loginAPIUrl = 'https://84jbs45w8h.execute-api.us-east-1.amazonaws.com/prod/login'

const Login = (props) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState(null);

  const submitHandler = (event) => {
    event.preventDefault();
    if (username.trim() === '' || password.trim() === '') {
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
    <div>
      <form onSubmit={submitHandler}>
        <h5>Login</h5>
        username: <input type="text" value={username} onChange={event => setUsername(event.target.value)} /> <br/>
        password: <input type="password" value={password} onChange={event => setPassword(event.target.value)} /> <br/>
        <input type="submit" value="Login" />
      </form>
      {errorMessage && <p className="message">{errorMessage}</p>}
    </div>
  )
}

export default Login;