import React, { useState } from 'react';
import './ContactCard.css'
function ContactCard({ contact }) {
  const [showAge, setShowAge] = useState(false);

  return (
    <div className="contact-card">
      <img src={contact.picture.medium} alt="profile" />
      <div className="user-details">
        <p>Name: {contact.name.title} {contact.name.first} {contact.name.last}</p>
        <p>Email: {contact.email}</p>
        <button onClick={() => setShowAge(!showAge)}>Show Age</button>
        {showAge && <p>Age: {contact.dob.age}</p>}
      </div>
    </div>
  );
}

export default ContactCard;
