import React from 'react';
import ContactList from './ContactList';

const UserHomePage = props => {
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
        </div>
      </div>
    </div>
  );
};
export default UserHomePage;
