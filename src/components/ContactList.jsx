import React, { useState } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import ContactCard from './ContactCard';




const ContactList = (props) =>{
  const [contacts, setContacts]   = useState([{name:'Name', email: 'email@wherever.com', phone: '(800)555-0000', address:'13 Anywhere street, Everytown, tn 37334'}

  ]);
  return(
        <container className='contactList'>
            <h2>My Contacts</h2>
            <Accordion >
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="0">
               Contact name, image, and buttons here
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="0">
                <Card.Body>full contact card here</Card.Body>
              </Accordion.Collapse>
            </Card>
          </Accordion>
          <ContactCard contact = {{name:'Name', email: 'email@wherever.com', phone: '(800)555-0000', address:'13 Anywhere street, Everytown, tn 37334'}}/>
        </container>
    )
};

export default ContactList
