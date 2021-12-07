import './App.css';
import MyRoutes from './router';
import sunIcon from './assets/sun-icon.svg';
import moonIcon from './assets/moon-icon.svg';
import { useState } from 'react';

function App() {
  const [darkTheme, setDarkTheme] = useState(false);

  const handleTheme = () => {
    setDarkTheme(!darkTheme);
  }

  return (
    <div className={`l-app ${darkTheme ? 't-dark-mode' : 't-light-mode'}`}>
      <button onClick={handleTheme} className="set-theme">
        <img src={darkTheme ? moonIcon : sunIcon} alt="icon" />
      </button>
      <MyRoutes />
    </div>
  );
}

export default App;
