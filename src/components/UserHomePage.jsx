import React from 'react'
import ContactList from './ContactList'


const UserHomePage = () => {
    return(
        <div>
            <div className='homepage top'>Navbar and splash here</div>
            <div className='homepage bottom'>
                <container className='mainBox'>
                    <div className='subnav'>
                       subnav goes here
                    </div>
                    <div className='componentBox'>
                      <ContactList />  
                    </div>
                </container>
            </div>
        </div>
    );
}
export default UserHomePage;

//navbar for login and faq
//api call for splash image
//container with subnav for routes
//list populated with user's chosen acts
//generate button
//contacts and acts routed here




