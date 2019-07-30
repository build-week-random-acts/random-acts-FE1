import React, { useState, useEffect } from 'react';

export const ContactsForm = (props) => {
    const initialState={id: null, name: '', email: '', phone: '', address: ''}
    const[contact, setContact] = useState(initialState)

    function handleChange(event){
        const addContact={...contact, [event.target.name]: event.target.value};

        setContact(addContact);
    }

    function handleSubmit(event){
        event.preventDefault();
        props.addToList(contact);
        setContact({name: '',
    email:'',
    phone:'',
    address:''})

    }
    return(
        <form onSubmit={handleSubmit}>
            <input
                type='text'
                name='name'
                value={contact.name}
                onChange={handleChange}
                placeholder='Name'
                />
            <input
                type='email'
                name='email'
                value={contact.email}
                onChange={handleChange}
                placeholder='eMail'
                />
            <input
                type='tel'
                name='phone'
                value={contact.phone}
                placeholder='Phone Number'
                />
            <input
                type='text'
                name='address'
                value={contact.address}
                placeholder='Address'
                />
                <button type='submit'>
                    Submit
                </button>
        </form>
    )
}

export const EditContactsForm = props => {
    const[contact, setContact] = useState
        (props.currentContact)

    useEffect(() => {
        setContact(props.currentContact)
    }, [props])

    function handleChange(event) {
        const updateContact = { ...contact,
        [event.target.name]: event.target.value };

        setContact(updateContact)
    }

    return(
        <form onSubmit={event => {
            event.preventDefault()
            props.updateContact(contact.id, contact)
        }}>
            <input
                type='text'
                name='name'
                value={contact.name}
                onChange={handleChange}
                placeholder='Name'
                />
            <input
                type='email'
                name='email'
                value={contact.email}
                onChange={handleChange}
                placeholder='eMail'
                />
            <input
                type='tel'
                name='phone'
                value={contact.phone}
                placeholder='Phone Number'
                />
            <input
                type='text'
                name='address'
                value={contact.address}
                placeholder='Address'
                /> 
                <button type='submit'>
                    Update Contact 
                </button>
                <button onClick={() => props.setEdit(false)}>Cancel</button>
        </form>
    )
}

//add contact, form fields -> name(required), email, phone, address
//button to submit
//confirmation-maybe modal confirming?, maybe not needed
