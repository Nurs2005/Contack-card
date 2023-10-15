import './App.css';
import ContactCard from './components/ContactCard/ContactCard';
import { useState, useEffect } from 'react';

function App() {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    fetch('https://randomuser.me/api/?results=10')
      .then(response => response.json())
      .then(data => setContacts(data.results));
  }, []);

  return (
    <div className="App">
      {contacts.map((contact, index) => (
        <ContactCard
          key={index}
          contact={contact}
        />
      ))}
    </div>
  );
}

export default App;

