import React, { useRef } from 'react';
import './styles.css'
import { uuid } from 'uuidv4';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const nameInput = useRef(null);
  const navigate = useNavigate();

  const formHandler = (e) => {
    e.preventDefault();
    localStorage.setItem('user_name', nameInput.current.value);
    localStorage.setItem('user_id', uuid());
    navigate('/game');
  }

  return (
    <div className="l-login">
      <form action="" onSubmit={e => formHandler(e)}>
        <h2>Bem vindo:</h2>
        <input ref={nameInput} type="text" placeholder="Set your name" />
      </form>
    </div>
  );
};

export default Login;