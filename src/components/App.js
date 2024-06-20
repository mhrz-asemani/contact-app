import './App.css';
import {v4 as uuid} from 'uuid';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import {useEffect, useState} from 'react'
import Header from './Header'
import AddContact from './AddContact'
import ContactList from './ContactList'
import ContactDetails from "./ContactDetails";
import EditContact from "./EditContact";
import api from '../api/contacts';

function App() {
  // const LOCAL_STORAGE_KEY = "contacts";
  const [contacts, setContacts] = useState([]),
    [searchResults, setSearchResults] = useState([]),
    [searchTerm, setSearchTerm] = useState('');

  const addContact = async contact => {
    const request = {
      id: uuid(), ...contact
    };
    const response = await api.post('/contacts', request);
    setContacts([...contacts, response.data]);
  };
  const editContact = async editedContact => {
    const response = await api.put(`/contacts/${editedContact.id}`, editedContact);
    setContacts(contacts.map(contact => contact.id === editedContact.id ? response.data : contact));
  }
  const removeContact = async id => {
    await api.delete(`/contacts/${id}`);
    setContacts(contacts.filter(contact => contact.id !== id));
  };
  const retrieveContacts = () => api.get('/contacts');     // GET method
  const searchHandler = schTerm => {
    setSearchTerm(schTerm.toLowerCase());
    if (!!schTerm) {
      const newContactList = contacts.filter(contact => {
          return contact.name.toLowerCase().includes(schTerm) || contact.email.toLowerCase().includes(schTerm)
        }
      );
      setSearchResults(newContactList);
    } else {
      setSearchResults(contacts);
    }
  }

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
          <Route path="/" element={<ContactList
            contacts={searchTerm.length < 1 ? contacts : searchResults}
            removeContact={removeContact} term={searchTerm} searchHandler={searchHandler}/>}/>
          <Route path="/add" element={<AddContact addContact={addContact}/>}/>
          <Route path="/edit" element={<EditContact editContact={editContact}/>}/>
          <Route path="/contact/:id" element={<ContactDetails/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;