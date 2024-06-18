import user from "../images/avatar.jpg";
import {Link, useLocation} from "react-router-dom";

const ContactDetails = () => {
    const location = useLocation();   // to get props passed to the Link component
    // check if state is passed
    const {name, email} = location.state ? location.state : {name: 'name', email: 'email'};

    return (
        <div className="main">
            <div className="ui card centered">
                <div className="image">
                    <img src={user} alt="user"/>
                </div>
                <div className="content">
                    <div className="header">{name}</div>
                    <div className="description">{email}</div>
                </div>
            </div>
            <div className="center-div">
                <Link to="/">
                    <button className="ui button blue center">Back to Contact List</button>
                </Link>
            </div>
        </div>
    )
};

export default ContactDetails;