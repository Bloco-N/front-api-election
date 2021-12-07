import React from 'react';
import './styles.css'
import Chat from '../../components/Chat';
import IdGadget from '../../components/IdGadget';
import { useNavigate } from 'react-router';

const Game = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('user_name');
    localStorage.removeItem('user_id');
    navigate('/');
  }

  return (
    <div className="l-game">
      <IdGadget />
      <Chat messages={[{ id: 1, author: 'iueu', message: 'hello minha pika' }]} />
      <button onClick={handleLogout} className="log-out">Log-out</button>
    </div>
  );
};

export default Game;