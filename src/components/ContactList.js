import ContactCard from "./ContactCard";

const ContactList = props => {
  const renderContactList = props.contacts.map(contact =>
      <ContactCard contact={ contact } key={contact.id} />
    );

  return <div className="ui celled list">{ renderContactList }</div>
}

export default ContactList;