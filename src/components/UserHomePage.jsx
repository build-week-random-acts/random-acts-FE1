import React from 'react';
import ContactList from './ContactList';

import React from 'react'
import ContactList from './ContactList'
import { Route, Link } from 'react-router-dom';

const UserHomePage = () => {
    return(
        <div>
            <div className='homepage top'>Navbar and splash here</div>
            <div className='homepage bottom'>
                <div className='mainBox'>
                    <div className='subnav'>
                    <Link to='/contacts'>My Contacts</Link>
                    </div>
                    <div className='componentBox'>
                     
                      <Route exact path='/contacts' render= {props => <ContactList {...props}/>} />  
                    </div>
                </div>
            </div>

        </div>
      </div>
    </div>
  );
};
export default UserHomePage;
