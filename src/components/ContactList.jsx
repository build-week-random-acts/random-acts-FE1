import React, { useState } from 'react';
import ContactCard from './ContactCard';
import ContactsForm from './ContactsForm';
import { Route, Link } from 'react-router-dom';




const ContactList = (props) =>{
  const [contacts, setContacts]   = useState([
    {name:'Name', email: 'email@wherever.com', phone: '(800)555-0000', address:'13 Anywhere street, Everytown, tn 37334'}
  ]);
  const addContacts = contact => {
    setContacts([...contacts, contact]);
  };
  return(
        <container className='contacts'>
            <div className='contactTop'>
              <div className='contactHeader'>
                <h2>My Contacts</h2>
                <button className = 'toggleAdd'>+</button>
              </div>
              <div className='addForm'>
                <ContactsForm submitContacts={addContacts} />
                </div>
              </div>

            <div className='contactBottom'>
              {contacts.map(contact=> <ContactCard contact={contact} />)}
            </div>
         
        </container>
    )
};

export default ContactList
