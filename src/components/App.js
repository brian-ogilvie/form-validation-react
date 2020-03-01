import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import './App.css';
import Header from './Header';
import SignUp from '../pages/SignUp';
import LogIn from '../pages/LogIn';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Switch>
          <Route path="/signup">
            <SignUp />
          </Route>
          <Route path="/login">
            <LogIn />
          </Route>
          <Redirect to="/signup" />
        </Switch>
      </main>
    </div>
  );
}

export default App;
