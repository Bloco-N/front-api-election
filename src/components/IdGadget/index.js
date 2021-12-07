import React from 'react';
import './styles.css'

const IdGadget = () => {
  return (
    <div className="c-id-gadget">
      <p>{localStorage.getItem('user_name')}: {localStorage.getItem('user_id')} </p>
    </div>
  );
};

export default IdGadget;