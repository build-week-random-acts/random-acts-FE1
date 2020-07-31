import React, { useState } from 'react';

import ContactCard from './ContactCard';
import ContactsForm from './ContactsForm';
import { Route, Link } from 'react-router-dom';

const ContactList = () => {
  const contactArray = [
    {
      id: 2,
      fname: 'Jose',
      lname: 'M',
      email: 'jose@mail.com',
      phone: '555-555-5555',
    },
    {
      id: 3,
      fname: 'Brittany',
      lname: 'M',
      email: 'brittanyh@mail.com',
      phone: '555-555-5555',
    },
    {
      id: 4,
      fname: 'Ben',
      lname: 'F',
      email: 'ben@mail.com',
      phone: '555-555-5555',
    },
    {
      id: 5,
      fname: 'Brian',
      lname: 'M',
      email: 'brian@mail.com',
      phone: '555-555-5555',
    },
    {
      id: 6,
      fname: 'Sara',
      lname: 'A',
      email: 'sara@mail.com',
      phone: '555-555-5555',
    },
  ];
  const initialFormState = {
    id: null,
    fname: '',
    lname: '',
    email: '',
    phone: '',
  };

  const [contacts, setContacts] = useState(contactArray);


const ContactList = (props) =>{
  const [contacts, setContacts]   = useState([
    {id: 0, name:'Name', email: 'email@wherever.com', phone: '(800)555-0000', address:'13 Anywhere street, Everytown, tn 37334'}
  ]);
  const addContacts = contact => {
    setContacts([...contacts, {...contact, id: Date.now()}]);
  };
  return(
        <div className='contacts'>
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
         
        </div>
    )

};

export default ContactList;
