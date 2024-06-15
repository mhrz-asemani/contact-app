import { useState } from 'react'
import './App.css';
import Header from './Header'
import AddContact from './AddContact'
import ContactList from './ContactList'

function App() {
    const [contacts, setContatcs] = useState([]);
    // const contacts = [
    //     {
    //         id: 1,
    //         name: 'Aminoo',
    //         email: 'amini@gmail.com'
    //     },
    //     {
    //         id: 2,
    //         name: 'Asghar',
    //         email: 'asghar@gmail.com'
    //     }
    // ]
    return (
        <div className="ui container">
            <Header />
            <AddContact />
            <ContactList contacts={ contacts } />
        </div>
    );
}

export default App;
