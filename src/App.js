import './App.css';
import MyRoutes from './router';
import sunIcon from './assets/sun-icon.svg';
import moonIcon from './assets/moon-icon.svg';
import { useEffect, useState } from 'react';

function App() {
  const [darkTheme, setDarkTheme] = useState(false);

  useEffect(() => {
    if (localStorage.getItem('user_theme') === 'dark') {
      setDarkTheme(true);
    }
  }, [])

  const handleTheme = () => {
    setDarkTheme(!darkTheme);
    console.log(darkTheme);
    localStorage.setItem('user_theme', darkTheme ? 'light' : 'dark');
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
