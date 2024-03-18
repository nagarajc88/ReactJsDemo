import logo from './logo.svg';
import './App.css';
import { useRoutes } from 'react-router-dom';
import routes from './routes/routes';
import { isAuthenticated } from './services/AuthService';

function App() {
  const isLoggedIn = isAuthenticated();
  const routing = useRoutes(routes(isLoggedIn));
  return routing;
}

export default App;
