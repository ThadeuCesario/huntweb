import React from 'react';

import Header from './Components/Header';

import Routes from './routes';

import './styles.css';

const App = () => {
  return(
    <div className='App'>
      <Header />
      <Routes />
    </div>
  )
}

export default App;
