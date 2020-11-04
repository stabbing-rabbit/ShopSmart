import React from 'react';

const LogosHook = (props) => {
  const { dispatch, logo } = props;
  return(
    <img
      onClick={dispatch}
      alt='logo for store'
      className='logos'
      src={logo}
    />
  )
}

export default LogosHook;