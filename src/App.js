import React from 'react';
import { NavLink, Route } from 'react-router-dom';
import './App.css';
import { Login } from './pages/Login/Login';
import { Signup } from './pages/Signup/Signup';
import { Profile } from './pages/Profile/Profile';

function App() {
  return (
    <div className="App">
      <header>
        <NavLink to="/login">login</NavLink>
        <NavLink to="/signup">Signup</NavLink>
        <NavLink exact to="/">
          HOME
        </NavLink>
      </header>
      <main className="App__content">
        <Route exact path="/" render={() => <Profile />} />
        <Route path="/signup" render={() => <Signup />} />
        <Route path="/login" render={() => <Login />} />
      </main>
    </div>
  );
}

export default App;
