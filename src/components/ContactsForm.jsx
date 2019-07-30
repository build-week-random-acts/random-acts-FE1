import React, { useState } from 'react';

const ContactsForm = (props) => {
    const [contact, setContact] = useState({name:'', email:'', phone:'', address:''});
    return(
        <form>
            <input placeholder='name'
                   value={contact.name}
                   onChange={event => {
                    setContact({...contact, name: event.target.value});
                   }}/>
            <input placeholder='email' 
                   value={contact.email}
                   onChange={event => {
                    setContact({...contact, email: event.target.value});
                   }}/>
            <input placeholder='phone' 
                   value={contact.phone}
                   onChange={event => {
                    setContact({...contact, phone: event.target.value});
                   }}/>
            <input placeholder='address' 
                   value={contact.address}
                   onChange={event => {
                    setContact({...contact, name: event.target.value});
                   }}/>
        </form>
    );
};

export default ContactsForm;