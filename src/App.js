import React, { useState, useEffect } from 'react';
import UserHomePage from './components/UserHomePage';
import LoginForm from './components/LoginForm';
import Navbar from './components/Navbar';
import { ActsContext } from './contexts/ActsContext';
import ProtectedRoute from './components/ProtectedRoute';
import Axios from 'axios';

function App() {
  const [acts, setActs] = useState([]);

  // useEffect(() => {
  //   Axios.get('https://bfeole-randomacts.herokuapp.com/quotes/quotes')
  //     .then(res => {
  //       console.log('res from quotes', res.data);
  //       setActs(res.data);
  //     })
  //     .catch(err => console.log(err));
  // }, []);
  return (
    <div>
      <ActsContext.Provider value={{ acts }}>
        <Navbar />
        <LoginForm />
        <UserHomePage />
      </ActsContext.Provider>
    </div>
  );
}

export default App;
