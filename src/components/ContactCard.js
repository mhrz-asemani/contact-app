import avatar from '../images/avatar.png'

const ContactCard = prop => {
    const { name, email } = prop.contact;
    return (
        <div className="item">
            <img className="ui avatar image" src={avatar} alt="user" />
            <div className="content">
                <div className="header">{name}</div>
                <div>{email}</div>
            </div>
            <i className='icon trash alternate outline'></i>
        </div>
    );
}

export default ContactCard;