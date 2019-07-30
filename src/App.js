import React from 'react';
import LoginForm from './components/LoginForm';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  return (
    <div>
      <LoginForm />
      <ProtectedRoute exact path='UserHomePage' component={UserHomePage}/>
      {/* <UserHomePage/> */}
    </div>
  );
}

export default App;
