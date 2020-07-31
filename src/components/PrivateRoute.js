import React from 'react';
import { Route, Redirect } from 'react-router-dom';

// const ProtectedRoute = ({ component: Component, ...rest }) => (
//   <Route
//     {...rest}
//     render={props =>
//       localStorage.getItem('token') ? (
//         <Component {...props} />
//       ) : (
//         <Redirect to='/' />
//       )
//     }
//   />
// );
// export default ProtectedRoute;

export default function PrivateRoute({ component: Component, ...rest }) {
  if (localStorage.getItem('token')) {
    return <Route {...rest} render={props => <Component {...props} />} />;
  } else {
    return <Redirect to='/' />;
  }
  // return (
  //   <Route
  //     {...rest}
  //     render={props =>
  //       loginToken ? <Component {...props} /> : <Redirect to='/login' />
  //     }
  //   />
  // );
}
