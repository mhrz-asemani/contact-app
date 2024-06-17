import './App.css';
import {v4 as uuidv4} from 'uuid';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {useEffect, useState} from 'react'
import Header from './Header'
import AddContact from './AddContact'
import ContactList from './ContactList'
import ContactDetails from "./ContactDetails";

function App() {
    const LOCAL_STORAGE_KEY = "contacts",
        [contacts, setContacts] = useState([]);
    
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
    }, [contacts]);

    return (
        <div className="ui container">
            <Router>
                <Header />
                <Routes>
                    <Route path="/" element={
                        <ContactList contacts={ contacts } removeContact={ removeContact } />
                    } />
                    <Route path="/add" element={
                        <AddContact addContactHandler={ addContactHandler } />
                    } />
                    <Route path="/contact/:id" element={ <ContactDetails /> } />
                </Routes>
            </Router>
        </div>
    );
}

export default App;
