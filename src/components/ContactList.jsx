import React, { useState } from 'react';
import ContactCard from './ContactCard';




const ContactList = (props) =>{
  const [contacts, setContacts]   = useState([
    {name:'Name', email: 'email@wherever.com', phone: '(800)555-0000', address:'13 Anywhere street, Everytown, tn 37334'}
  ]);

  return(
        <container className='contactList'>
            <h2>My Contacts</h2>
            {contacts.map(contact=> <ContactCard contact={contact} />)}
         
        </container>
    )
};

export default ContactList
