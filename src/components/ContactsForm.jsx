import React, { useState } from 'react';

const ContactsForm = props => {
  const initialAddState = {
    // id: null,
    fname: '',
    lname: '',
    email: '',
    phone: '',
  };
  const [contact, setContact] = useState(initialAddState);

  const handleChange = event => {
    setContact({ ...contact, [event.target.name]: event.target.value });
    
  };

  const handleSubmit = event => {
    event.preventDefault();
    // if (!contact.name) return;
    props.addContact(contact);
    setContact(initialAddState);
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder='first name'
        value={contact.fname}
        name='fname'
        onChange={handleChange}
      />
      <input
        placeholder='last name'
        value={contact.lname}
        name='lname'
        onChange={handleChange}
      />
      <input
        placeholder='email'
        value={contact.email}
        name='email'
        type='email'
        onChange={handleChange}
      />
      <input
        placeholder='phone'
        value={contact.phone}
        name='phone'
        type='tel'
        onChange={handleChange}
      />
      <button type='submit'>Add Contact</button>
    </form>
  );
};

export default ContactsForm;
