import avatar from '../images/avatar.png'
import {Link} from "react-router-dom";

const ContactCard = prop => {
    const {name, email, id} = prop.contact;
    const iconStyle = {marginTop: '7px', float: 'right', transform: 'scale(1.3)', cursor: 'pointer'},
        deleteStyle = {color: 'red', marginLeft:'16px'},
        editStyle = {color: 'blue'};

    return (
        <div className="item" style={{paddingBlock: '12px'}}>
            <img className="ui avatar image" src={avatar} alt="user"/>
            <div className="content">
                <Link to={`/contact/${id}`} state={prop.contact}>
                    <div className="header">{name}</div>
                    <div>{email}</div>
                </Link>
            </div>
            <i className='icon trash alternate outline'
               onClick={() => prop.removeContact(id)} style={{...iconStyle, ...deleteStyle}}>

            </i>
            <Link to='/edit' state={prop.contact}>
                <i className='icon edit alternate outline'
                    style={{...iconStyle, ...editStyle}}>
                </i>
            </Link>
        </div>
    );
}

export default ContactCard;