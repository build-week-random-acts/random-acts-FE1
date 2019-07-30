import React from 'react';

const ContactCard = (props) => {
    const { contact } = props;
    return(
        <div>
            <div>
               {contact.name} 
            </div>
            <div>
                {contact.email}
            </div>
            <div>
               {contact.phone} 
            </div>
            <div>
                {contact.address}
            </div>
            
        </div>
        
    );
};

export default ContactCard