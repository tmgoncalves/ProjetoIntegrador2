import React, { useState } from 'react';
import axios from 'axios';
import '../../App.css';

const registerUrl = 'https://84jbs45w8h.execute-api.us-east-1.amazonaws.com/prod/register'

const SignUp = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState(null);

  const submitHandler = (event) => {
    event.preventDefault();
    if (username.trim() === '' || email.trim() === '' || name.trim() === '' || password.trim() === '') {
      setMessage('Necessário preencher todos os campos !');
      return;
    }
    setMessage(null);
    const requestConfig = {
      headers: {
        'x-api-key': 'tYHo5Cxj3Z5uKIFBVSz6e9NHm2spWilc5nFkHDVR'
      }
    }
    const requestBody = {
      username: username,
      email: email,
      name: name,
      password: password
    }
    axios.post(registerUrl, requestBody, requestConfig).then(response => {
      setMessage('Registro realizado com sucesso');
    }).catch(error => {
      if (error.response.status === 401) {
        setMessage(error.response.data.message);
      } else {
        setMessage('Sorry....problemas no servidor. Por favor, tente mais tarde !!');
      }
    })
  }

  return (
    <div>
      <form onSubmit={submitHandler}>
        <h5>Register</h5>
        name: <input type="text" value={name} onChange={event => setName(event.target.value)} /> <br/>
        email: <input type="text" value={email} onChange={event => setEmail(event.target.value)} /> <br/>
        username: <input type="text" value={username} onChange={event => setUsername(event.target.value)} /> <br/>
        password: <input type="text" value={password} onChange={event => setPassword(event.target.value)} /> <br/>
        <input type="submit" value="Register" />
      </form>
      {message && <p className="message">{message}</p>}
    </div>
  )
}

export default SignUp;