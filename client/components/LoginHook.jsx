import React from 'react';
import Logo from '../../smartShopLogo.png';

const LoginHook = () => {
  return (
    <div>
      <h1 class="opener">Welcome to</h1>
      <h1 class="opener">
        <img class='shopSmartLogo' src={Logo} />
      </h1>
      <h3 class="open">Sign In To Review Your Shopping Lists Or Continue As Guest</h3>
      <div class="intro">
        <button class="gotomiddle"><a class="atag" href="#middle">Continue as Guest</a></button>
        <button class="gotomiddle">Sign in</button>
      </div>
    </div>
  )
}