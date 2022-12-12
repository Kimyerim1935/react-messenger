import './App.css';
import {BrowserRouter, Switch , Route } from 'react-router-dom';
import Home from './pages/Home';
import NewHome from './pages/newHome';

import Register from './pages/Register';
import NewRegister from './components/newComponents/Register';
import Login from './pages/Login';
import NewLogin from './components/newComponents/Login';

import Profile from './pages/Profile';
import Navbar from './components/Navbar';
import AuthProvider from './context/auth';
import PrivateRoute from './components/PrivateRoute';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
      <Navbar />
        <Switch>
          <Route exact path="/register" component={NewRegister} />
          <Route exact path="/login" component={NewLogin} />
          <PrivateRoute exact path="/profile" component={Profile} />
          <PrivateRoute exact path="/" component={Home} />
        </Switch>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
