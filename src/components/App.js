import './App.css';
import {v4 as uuidv4} from 'uuid';
import {useEffect, useState} from 'react'
import Header from './Header'
import AddContact from './AddContact'
import ContactList from './ContactList'

function App() {
    const LOCAL_STORAGE_KEY = "contacts";
    const [contacts, setContacts] = useState([]);
    const addContactHandler = contact => {
        setContacts([...contacts, { id: uuidv4(), ...contact }]);
    };
    const removeContact = id => {
        setContacts(contacts.filter(contact => contact.id !== id));
    };

    useEffect(() => {
        const retrievedContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
        if (retrievedContacts !== null && retrievedContacts.length) setContacts(retrievedContacts);
    }, []);

    useEffect(() => {
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
        console.log('contacts updated');
    }, [contacts]);

    return (
        <div className="ui container">
            <Header />
            <AddContact addContactHandler={ addContactHandler } />
            <ContactList contacts={ contacts } removeContact={ removeContact } />
        </div>
    );
}

export default App;
