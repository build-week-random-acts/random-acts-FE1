import React, { useState } from 'react';
import ContactCard from './ContactCard';
import ContactsForm from './ContactsForm';
import { Route, Link } from 'react-router-dom';





 const ContactList = () =>{
  const contactArray = [
    {id: 1, name:'Name', email: 'email@wherever.com', phone: '(800)555-0000', address:'13 Anywhere street, Everytown, tn 37334'}
  ]
  const initialFormState =  {id: null, name:'', email:'', phone:'', address:''}

  const [contacts, setContacts]   = useState(contactArray);
  const [currentContact, setCurrentContact] = useState(initialFormState)
  const [adding, setAdding] = useState(false)
  const [editing, setEditing] = useState(false)
 

  const addContact = contact => {
    contact.id = Date.now()
    setAdding(true)
    setContacts([...contacts, contact])
  }

  const deleteContact = id => {
    setEditing(false)
    setContacts(contacts.filter(contact => contact.id !== id))
  }
  
  const updateContact = (id, updatedContact) => {
    setEditing(false)
    setContacts(contacts.map(contact => (contact.id === id ? updatedContact : contact)))
  }

  const editCard = contact => {
    setEditing(true)
    setCurrentContact({ id: contact.id, name: contact.name, email: contact.email, phone: contact.phone, address:contact.address })
  } 

  
  return(
        <div className='contacts'>
            <div className='contactTop'>
              <div className='contactHeader'>
                <h2>My Contacts</h2>
                <button onClick={() => setAdding(true)}>+</button>
                <button onClick={() => setAdding(false)}>-</button>

              </div>
              
              {adding ? (
              <div>
                <div className='addForm'>
                
                        <ContactsForm addContact={addContact} />
                  </div>
          
              <div className='contactBottom'>
                <ContactCard contacts={contacts}
                              deleteContact={deleteContact}
                              editCard = {editCard}
                              editing={editing}
                              setEditing={setEditing}
                              currentContact={currentContact}
                              updateContact={updateContact} />
              </div>
              </div>
              ) : (
                
                <div className='contactBottom'>
                  <ContactCard contacts={contacts}
                                deleteContact={deleteContact}
                                editCard = {editCard}
                                editing={editing}
                                setEditing={setEditing}
                                currentContact={currentContact}
                                updateContact={updateContact} />
                </div>
              )}
        </div>
        </div>)
  }
 
 


export default ContactList
                     

       

