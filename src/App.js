import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import HomePage from './pages/homepage/homepage.component';

const hatsPage = (props) => {
 console.log(props)
 return <h1>Hats Page</h1>
}

function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path="/hats" component={hatsPage} />      
      </Switch>
    </div>
  );
}

export default App;
