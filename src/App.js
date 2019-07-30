import React from 'react';
import UserHomePage from './components/UserHomePage';
import LoginForm from './components/LoginForm';
import Navbar from './components/Navbar';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  return (
    <div>
      <Navbar />
      <LoginForm />
      <ProtectedRoute exact path='/userhomepage' component={UserHomePage} />
    </div>
  );
}

export default App;
