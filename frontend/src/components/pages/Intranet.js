import React from 'react';
import { getUser, resetUserSession } from '../../service/AuthService';

const Intranet = (props) => {
  const user = getUser();
  const name = user !== 'undefined' && user ? user.name : '';

  const logoutHandler = () => {
    resetUserSession();
    props.history.push('login');
  }
  return (
    <div>
      Olá {name}! Você está logado na Página de Recicláveis !!!! Seja bem-vindos !! <br />
      <input type="button" value="Logout" onClick={logoutHandler} />
    </div>
  )
}

export default Intranet;