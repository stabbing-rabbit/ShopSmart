import React from 'react';
import Logo from '../../smartShopLogo.png';

const LoginHook = () => {
  return (
    <div>
      <h1 className="opener">Welcome to</h1>
      <h1 className="opener">
        <img className='shopSmartLogo' src={Logo} />
      </h1>
      <h3 className="open">Sign In To Review Your Shopping Lists Or Continue As Guest</h3>
      <div className="intro">
        <button className="gotomiddle"><a className="atag" href="#middle">Continue as Guest</a></button>
        <button className="gotomiddle">Sign in</button>
      </div>
    </div>
  )
}

export default LoginHook;