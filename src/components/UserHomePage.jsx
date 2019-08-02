import React from 'react';
import ContactList from './ContactList';
import { Route, Link } from 'react-router-dom';
import Acts from './Acts';

const UserHomePage = props => {
  console.log(props);
  return (
    <div>
      <div className='homepage top' />
      <div className='homepage bottom'>
        <div className='mainBox'>
          <div className='subnav'>
            {/* <Link to='/contacts'>My Contacts</Link> */}
          </div>
          {/* <Route
            exact
            path='/contacts'
            render={props => <ContactList {...props} />}
          />*/}
          <ContactList />
          <Acts />
        </div>
      </div>
    </div>
  );
};
export default UserHomePage;
