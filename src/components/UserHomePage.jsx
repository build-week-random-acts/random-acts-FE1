import React from "react";
import ContactList from "./ContactList";
import { Route, Link } from "react-router-dom";
import Acts from "./Acts";
import List from './List';

const UserHomePage = props => {
  console.log(props);
  return (
    <div>
      <div className="homepage top">Navbar and splash here</div>
      <div className="homepage bottom">
        <div className="mainBox">
          <div className="subnav">
            <Link to="/contacts">My Contacts</Link>
            <Link to='/list'>Track</Link>
            <Link to='/acts'>Acts of Kindness</Link>
          </div>
          
          <Route exact path="/contacts" render={props => <ContactList {...props} />}/>
          <Route path ='/acts' render={props => <Acts {...props}/>}/>
          <Route path ='/list' render={props => <List {...props}/>}/>

        </div>
      </div>
    </div>
  );
};
export default UserHomePage;
