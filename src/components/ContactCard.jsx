import React from "react";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";

const ContactCard = props => {
  const { contact } = props;
  return (
    <Accordion>
      <Card>
        <Accordion.Toggle as={Card.Header} eventKey="0">
          <div>{contact.name}</div>
        </Accordion.Toggle>
        <Accordion.Collapse eventKey="0">
          <Card.Body>
            <div>
              <div>{contact.name}</div>
              <div>{contact.email}</div>
              <div>{contact.phone}</div>
              <div>{contact.address}</div>
            </div>
          </Card.Body>
        </Accordion.Collapse>
      </Card>
    </Accordion>
  );
};

export default ContactCard;
