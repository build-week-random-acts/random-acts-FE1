import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';


const ContactList = (props) =>{
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
        </container>
    )
};

export default ContactList
