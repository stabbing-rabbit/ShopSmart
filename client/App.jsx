import React from 'react';
import Header from './AppChildren/Header.jsx';
import LoginHook from './components/LoginHook.jsx';
import Form from './AppChildren/BodyChildren/Form.jsx';
import FormHook from './components/FormHook.jsx';

import styles from '../styles.css';
import { Route, Switch, Link } from 'react-router-dom';

function App() {
  return (
    // These are all of our Routes for our router 
    <Switch>
    <div>
       {/* homepage */}
       <Route exact path="/">
          {/* <Link className='gotomiddle' to='/FormHook'>Guest</Link> */}
          {/* <Link className='gotologin' to='/FormHook'>Login</Link> */}
          <Header />
          <LoginHook />
       </Route>
       {/* main page */}
       <Route path="/FormHook" component={FormHook}/>
    </div>
    </Switch>
  );
}
export default App;
