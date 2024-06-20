import ContactCard from "./ContactCard";
import {Link} from "react-router-dom";
import { useRef } from 'react';


const ContactList = props => {
  const renderContactList = props.contacts.map(contact =>
    <ContactCard
      contact={contact}
      key={contact.id}
      removeContact={props.removeContact}
    />
  );
  const searchEl = useRef();
  const getSearchTerm = () => {
    props.searchHandler(searchEl.current.value);
  };
  
  return (
    <div className="main">
      <h2>
        Contact List
        <Link to="/add">
          <button className='ui button blue right floated'>Add Contact</button>
        </Link>
      </h2>
      <div className="ui search">
        <div className="ui icon input">
          <input type="text" placeholder="Search Contacts"
             value={props.term} className="prompt" ref={searchEl}
             onChange={getSearchTerm}/>
          <i className="search icon"></i>
        </div>
      </div>
      <div className="ui celled list">{renderContactList.length ? renderContactList : "No Contacts Found!"}</div>
    </div>
  )
}

export default ContactList;