import {

  BrowserRouter,
  Routes,
  Route,
  Navigate

} from 'react-router-dom';
import Game from './pages/Game';
import Login from './pages/Login';

const RedirectLogin = (props) => {

  const id = localStorage.getItem('user_id');
  return id ? props.children : <Navigate to="/" replace />;

}

const RedirectGame = (props) => {

  const id = localStorage.getItem('user_id');
  return !id ? props.children : <Navigate to="/game" replace />;

}


export default function MyRoutes() {

  return (

    <BrowserRouter>
      <Routes>
        <Route path="/" element={(
          <RedirectGame>
            <Login />
          </RedirectGame>
        )} />
        <Route path="/game" element={(
          <RedirectLogin>
            <Game />
          </RedirectLogin>
        )} />
      </Routes>
    </BrowserRouter>
  )

}