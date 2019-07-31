import React, { useState } from 'react';
import ContactCard from './ContactCard';
import ContactsForm from './ContactsForm';
import { Route, Link } from 'react-router-dom';





 const ContactList = (props) =>{
  const [contacts, setContacts]   = useState([
    {id: 0, name:'Name', email: 'email@wherever.com', phone: '(800)555-0000', address:'13 Anywhere street, Everytown, tn 37334'}
  ]);
  const addContacts = contact => {
    setContacts([...contacts, {...contact, id: Date.now()}]);
  };
  const editContacts = editedContact => {
    const contactsCopy = [...contacts];
    const contactIndex = contactsCopy.findIndex(contact => contact.id === editedContact.id);
    contactsCopy[0] = editedContact;
    setContacts(contactsCopy);
  }
  return(
        <div className='contacts'>
            <div className='contactTop'>
              <div className='contactHeader'>
                <h2>My Contacts</h2>
                <button>+</button>
              </div>
              
              <div className='addForm'>
                      <ContactsForm {...props}
                              initialContact={contacts}
                              submitContacts={addContacts}
                              buttonText='Add Contact' />
                </div>
              </div>
            <div className='contactBottom'>
              {contacts.map(contact=> <ContactCard contact={contact} />)}
            </div>
            
        </div>)}
 


export default ContactList
                     

       

