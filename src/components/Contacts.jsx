import React, { useState } from "react";
// import MemberList from './UserData';
import { ContactsForm, EditEditContactsForm } from './ContactsForm';


export default function Contacts() {
    const contactsData = [

    ]
    const[contacts, setContacts] = useState(contactsData);

    const addToList = contact =>{
        contact.id = contacts.length +1
        setContacts([...contacts, contact])
    }

    const removeFromList = (id) => {
        setContacts(contacts.filter(contact => contact.id !=id))
    }
}


// display contact info - name, email, phone , address
//crud functionality
// button to add contact
// button to edit contact
// button to delete contact

