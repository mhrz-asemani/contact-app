import ContactCard from "./ContactCard";
import {Link} from "react-router-dom";


const ContactList = props => {
  const renderContactList = props.contacts.map(contact =>
    <ContactCard
      contact={contact}
      key={contact.id}
      removeContact={props.removeContact}
    />
  );
  
  return (
    <div className="main">
      <h2>
        Contact List
        <Link to="/add">
          <button className='ui button blue right floated'>Add Contact</button>
        </Link>
      </h2>
      <div className="ui celled list">{renderContactList}</div>
    </div>
  )
}

export default ContactList;