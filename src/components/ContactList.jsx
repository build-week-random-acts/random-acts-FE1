import React, { useState } from 'react';
// import axios from 'axios';
import ContactCard from './ContactCard';
import ContactsForm from './ContactsForm';

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

  const [currentContact, setCurrentContact] = useState(initialFormState);
  const [adding, setAdding] = useState(false);
  const [editing, setEditing] = useState(false);

  const addContact = contact => {
    console.log('contact', contact);
    contact.id = Date.now();
    setAdding(true);

    setContacts([...contacts, contact]);
    // axios
    //   .post('https://bfeole-randomacts.herokuapp.com/createnewuser', contact)
    //   .then(res => {
    //     console.log('res from add contact', res.data);
    //   })
    //   .catch(err => console.log(err));
  };

  const deleteContact = id => {
    setEditing(false);
    setContacts(contacts.filter(contact => contact.id !== id));
  };

  const updateContact = (id, updatedContact) => {
    setEditing(false);
    //axios put request pass id as parameter use id in postman
    setContacts(
      contacts.map(contact => (contact.id === id ? updatedContact : contact)),
    );
  };

  const editCard = contact => {
    setEditing(true);
    setCurrentContact({
      id: contact.id,
      fname: contact.fname,
      lname: contact.lname,
      email: contact.email,
      phone: contact.phone,
    });
  };

  return (
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
              <ContactCard
                contacts={contacts}
                deleteContact={deleteContact}
                editCard={editCard}
                editing={editing}
                setEditing={setEditing}
                currentContact={currentContact}
                updateContact={updateContact}
              />
            </div>
          </div>
        ) : (
          <div className='contactBottom'>
            <ContactCard
              contacts={contacts}
              deleteContact={deleteContact}
              editCard={editCard}
              editing={editing}
              setEditing={setEditing}
              currentContact={currentContact}
              updateContact={updateContact}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default ContactList;
