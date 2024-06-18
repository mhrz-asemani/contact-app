import './App.css';
import {v4 as uuid} from 'uuid';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import {useEffect, useState} from 'react'
import Header from './Header'
import AddContact from './AddContact'
import ContactList from './ContactList'
import ContactDetails from "./ContactDetails";
import api from '../api/contacts';

function App() {
  const LOCAL_STORAGE_KEY = "contacts",
    [contacts, setContacts] = useState([]);
  
  const addContact = async contact => {
    const request = {
      id: uuid(),
      ...contact
    };
    const response = await api.post('/contacts', request);
    setContacts([...contacts, response.data]);
  };
  const removeContact = async id => {
    await api.delete(`/contacts/${id}`);
    setContacts(contacts.filter(contact => contact.id !== id));
  };
  const retrieveContacts = () =>
    api.get('/contacts');     // GET method
  
  useEffect(() => {
    // use .then or async await to do sync statements
    (async () => {
      const allContacts = await retrieveContacts();
      allContacts.data.length && setContacts(allContacts.data);
    })();
    
    // const retrievedContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    // if (retrievedContacts !== null && retrievedContacts.length) setContacts(retrievedContacts);
  }, []);
  
  // useEffect(() => {
  //   localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  // }, [contacts]);
  
  return (
    <div className="ui container">
      <Router>
        <Header/>
        <Routes>
          <Route path="/" element={
            <ContactList contacts={contacts} removeContact={removeContact}/>
          }/>
          <Route path="/add" element={
            <AddContact addContact={addContact}/>
          }/>
          <Route path="/contact/:id" element={<ContactDetails/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
