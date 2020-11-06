import React, { useState, useEffect } from 'react';
import Logo from '../../smartShopLogo.png';
import { Link, Redirect } from 'react-router-dom';


//refactored basic components to hooks
const LoginHook = () => {
  // LoginHook state
  const [showLogin, setShowLogin] = useState(false);
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');
  const [submit, setSubmit] = useState(false);
  const [userData, setUserData] = useState(null)

 // when the submit button is pressed make a query to back end and verify if user exists
 // useEffect is only activated when submit is updated
  useEffect(() => {
    if (user !== '' && password !== '') {
      fetch('api/users', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
          userName: user,
          password: password,
        })
      })

      .then((data) => {
        // console.log('I MADE IT TO THE FRONT END', data)
        return data.json()
      })
      .then(data => {
        setUserData(data) 
      })
      .catch((err) => {
        if (err) {
          console.log(err);
        }
      })
    }
  }, [submit])

  return (
    <div>
      <h1 className="opener">Welcome to</h1>
      <h1 className="opener">
        <img className='shopSmartLogo' src={Logo} />
      </h1>
      <h3 className="open">Sign In To Review Your Shopping Lists Or Continue As Guest</h3>
      <div className="intro">
        {/* if link is clicked go directly to main page */}
        <Link className='gotomiddle' to='/FormHook' >Continue as Guest</Link>
        <button className="gotomiddle" onClick={() => setShowLogin(!showLogin)} >Sign in</button>
        {/* conditional if login is clicked render a login input */}
        {showLogin &&
          <form onSubmit={(e) =>{
              // update submit state to trigger useEffect
              e.preventDefault();
              setSubmit(!submit)
            }}>
              {/* inputs for users */}
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
          {/* when user data is received got to main page */}
          {userData &&  <Redirect to="/FormHook" />}
      </div>
    </div>
  )
}

export default LoginHook;