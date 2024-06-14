const ContactList = props => {

  const renderContactList = props.contacts.map(contact => {
    return (
      <div className="item">
        <div className="content">
          <div className="header">{contact.name}</div>
          <div className="email">{contact.email}</div>
        </div>
        <i className='icon trash alternate outline'></i>
      </div>
    );
  });

  return <div className="ui celled list">{renderContactList}</div>
}

export default ContactList;