import React from 'react';
import Header from './AppChildren/Header.jsx';
import LoginHook from './components/LoginHook';
import Form from './AppChildren/BodyChildren/Form.jsx';

import styles from '../styles.css';

function App() {
  return (
    <div>
      <LoginHook />
      <Header/>
      <Form />
    </div>
  );
}
export default App;
