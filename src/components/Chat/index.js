import React from 'react';
import './styles.css'

const Chat = (props) => {
  return (
    <div className="c-chat">
      <div className="messages">
        {props.messages.map(item => (
          <div key={item.id} className="message">
            <h2>{item.author}: <span>{item.message}</span></h2>
          </div>
        ))}
      </div>
      <form action="">
        <input type="text" placeholder="escreva uma mensagem" />
      </form>
    </div>
  );
};

export default Chat;