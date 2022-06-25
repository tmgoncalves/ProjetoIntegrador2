import React, { useState } from 'react';
import axios from 'axios';
import '../../App.css';
import './SignUp.css';

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
      setMessage('Todos os campos são obrigatórios.');
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
    <div className='container-sign-up'>
      <form onSubmit={submitHandler}>
        <h2>Register</h2>
        <br />
        <input type="text" className='input' placeholder='Name' value={name} onChange={event => setName(event.target.value)} /> <br />
        <input type="text" className='input' placeholder='E-mail' value={email} onChange={event => setEmail(event.target.value)} /> <br />
        <input type="text" className='input' placeholder='Username' value={username} onChange={event => setUsername(event.target.value)} /> <br />
        <input type="text" className='input' placeholder='Password' value={password} onChange={event => setPassword(event.target.value)} /> <br />

        {message && <p className="message">{message}</p>}
        <br />
        <input type="submit" value="Register" className='btn--outline btn-register' />
      </form>

    </div>
  )
}

export default SignUp;