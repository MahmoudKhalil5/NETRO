import React from 'react';
import './Container.css';
import Topcontainer from './Topcontainer';
import BotContainer from './BotContainer';

function Container({ children }) {
  return (
    <div className='container'>
      <Topcontainer />
      <div className='mainContainer'>
        {children}
      </div>
      <BotContainer/>
    </div>
  );
}

export default Container;
