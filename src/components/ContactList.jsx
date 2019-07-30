import React, { useState } from 'react';
import ContactCard from './ContactCard';
import ContactsForm from './ContactsForm';




const ContactList = (props) =>{
  const [contacts, setContacts]   = useState([
    {name:'Name', email: 'email@wherever.com', phone: '(800)555-0000', address:'13 Anywhere street, Everytown, tn 37334'}
  ]);

  return(
        <container className='contacts'>
            <div className='contactTop'>
              <div className='contactHeader'>
                <h2>My Contacts</h2>
                <button>+</button>
              </div>
              <div className='addForm'>
                <ContactsForm />
                </div>
              </div>

            <div className='contactBottom'>
              {contacts.map(contact=> <ContactCard contact={contact} />)}
            </div>
         
        </container>
    )
};

export default ContactList
