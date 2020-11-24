import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

  import {
      Auth
  } from './components'
  import { getToken } from './api'

  const App = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(!!getToken());


      return <>
        <Auth setIsLoggedIn={ setIsLoggedIn } />
      </>
  }

  ReactDOM.render(
    <App />,
    document.getElementById('app')
)
