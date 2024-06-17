import user from "../images/avatar.jpg";

const ContactDetails = () =>
  <div className="main">
    <div className="ui card centered">
      <div className="image">
        <img src={user} alt="user"/>
      </div>
      <div className="content">
        <div className="header">Amin</div>
        <div className="description">Aminoo@gmail.com</div>
      </div>
    </div>
  </div>

export default ContactDetails;