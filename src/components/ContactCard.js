import avatar from '../images/avatar.png'
import {Link} from "react-router-dom";

const ContactCard = prop => {
  const {name, email, id} = prop.contact;
  const iconStyle = {color: 'red', marginTop: '7px', float: 'right', transform: 'scale(1.3)', cursor: 'pointer'};
  
  return (
    <div className="item" style={{paddingBlock: '12px'}}>
      <img className="ui avatar image" src={avatar} alt="user"/>
      <div className="content">
        {/*<Link to={`/contact/${id}`}>*/}
        <Link to={{
          pathname: `/contact/${id}`,
          state: {contact: prop.contact}
        }}>
          <div className="header">{name}</div>
          <div>{email}</div>
        </Link>
      </div>
      <i className='icon trash alternate outline' onClick={() => prop.removeContact(id)} style={iconStyle}></i>
    </div>
  );
}

export default ContactCard;