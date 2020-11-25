import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import { Login } from './pages/Login/Login';
import { Main } from './pages/Main/Main';
import { Signup } from './pages/Signup/Signup';

function App() {
  return (
    <div className="App">
      <h1>Vision task</h1>
      <Route exact path="/" render={() => <Main />} />
      <Route path="/signup" render={() => <Signup />} />
      <Route path="/login" render={() => <Login />} />
    </div>
  );
}

export default App;
