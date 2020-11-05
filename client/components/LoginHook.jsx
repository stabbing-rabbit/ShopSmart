import React, { useState, useEffect } from 'react';
import Logo from '../../smartShopLogo.png';
import { Link } from 'react-router-dom';

const LoginHook = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');
  const [submit, setSubmit] = useState(false);

  useEffect(() => {
    if (user !== '' && password !== '') {
      fetch('http://localhost:3000/api/createUser', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
          userName: user,
          userPassword: password,
        })
      })

      .then((data) => data.json())
      .catch((err) => {
        if (err) {
          console.log(err);
        }
      })
    }

  }, [submit])

  // conditional if login is clicked render a login input
  // if continue as guest is pressed go to menu
  return (
    <div>
      <h1 className="opener">Welcome to</h1>
      <h1 className="opener">
        <img className='shopSmartLogo' src={Logo} />
      </h1>
      <h3 className="open">Sign In To Review Your Shopping Lists Or Continue As Guest</h3>
      <div className="intro">
        <Link className='gotomiddle' to='/FormHook' >Continue as Guest</Link>
        <button className="gotomiddle" onClick={() => setShowLogin(!showLogin)} >Sign in</button>

        {showLogin &&
          <form onSubmit={(e) =>{
              e.preventDefault();
              setSubmit(!submit)
            }}>
            <label>
              Username:
            </label>
            <input
              style={{color: 'black'}}
              type='text'
              value={user}
              onChange={(e) => {setUser(e.target.value)}}
            />
            <br />
            <label>
              Password: 
            </label>
            <input 
              type="password"
              style={{color: 'black'}}
              value={password}
              onChange={(e) => {setPassword(e.target.value)}}
            />
            <button style={{padding:'20px'}}>Submit</button>
          </form>}
      </div>
    </div>
  )
}

export default LoginHook;