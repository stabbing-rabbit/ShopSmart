import React from 'react';
import Header from './AppChildren/Header.jsx';
// import LoginHook from './components/LoginHook.jsx';
import Form from './AppChildren/BodyChildren/Form.jsx';
import FormHook from './components/FormHook.jsx';

import styles from '../styles.css';

function App() {
  return (
    <div>
      {/* <LoginHook /> */}
      <Header/>
      {/* <Form /> */}
      <FormHook />
    </div>
  );
}
export default App;
