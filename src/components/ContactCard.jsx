import React from "react";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import ContactsForm from './ContactsForm'
import EditContactsForm from './EditContactsForm'
import { Route, Link } from 'react-router-dom';



const ContactCard = props => {
  
  return(
    props.contacts.map(contact => (
    <Accordion key={contact.id}>
      <Card>
        <Accordion.Toggle as={Card.Header} eventKey="0">
          <div>{contact.name}</div>
          <button onClick={() => {
            props.editCard(contact)
          }}>
            Edit
            </button>
          <button onClick={() => props.deleteContact(contact.id)}>
            Delete
            </button>
          
          </Accordion.Toggle>
        <Accordion.Collapse eventKey="0">
          <Card.Body>
            {props.editing ? (
            <div> <EditContactsForm editing={props.editing}
								setEditing={props.setEditing}
								currentContact={props.currentContact}
								updateContact={props.updateContact}/></div>
            ) : (
            <div>
              <div>{contact.name}</div>
              <div>{contact.email}</div>
              <div>{contact.phone}</div>
              <div>{contact.address}</div>
            </div>
            )}
          </Card.Body>
        </Accordion.Collapse>
        
      </Card>
    </Accordion>
    
    )))};

export default ContactCard;
