import React, { useState } from 'react';

const ContactsForm = (props) => {
    const [contact, setContact] = useState({name:'', email:'', phone:'', address:''});

    const handleChange = event => {
        setContact({...contact, [event.target.name]: event.target.value});
    };

    const handleSubmit = event => {
        event.preventDefault();
        
    }
    return(
        <form onSubmit={handleSubmit}>
            <input placeholder='name'
                   value={contact.name}
                   name='name'
                   onChange={handleChange}/>
            <input placeholder='email' 
                   value={contact.email}
                   name='email'
                   type='email'
                   onChange={handleChange}/>
            <input placeholder='phone' 
                   value={contact.phone}
                   name='phone'
                   type='tel'
                   onChange={handleChange}/>
            <input placeholder='address' 
                   value={contact.address}
                   name='address'
                   onChange={handleChange}/>
                   <button type='submit'>Add Contact</button>
        </form>
    );
};

export default ContactsForm;