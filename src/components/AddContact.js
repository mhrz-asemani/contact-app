import {Component} from 'react';
import {useNavigate} from "react-router-dom";

const AddContact = props => {
    const navigate = useNavigate();
    return <AddContactNode {...props} navigate={navigate} />;
}

// Class Component
class AddContactNode extends Component {
    state = {
        name: "",
        email: ""
    };
    add = e => {
        e.preventDefault();
        if (this.state.name === "" || this.state.email === "") {
            alert("All the fields are mandatory!");
            return;
        }
        this.props.addContact(this.state);
        this.setState({name: "", email: ""});    // clear the form
        this.props.navigate('/');    // navigate to the home page
    };

    render() {
        return (
            <div className="ui main">
                <h2>Add Contact</h2>
                <form className="ui form" onSubmit={this.add}>
                    <div className="field">
                        <label>name</label>
                        <input type="text" name="name" placeholder="Name" value={this.state.name}
                               onChange={ e => this.setState({name: e.target.value}) }/>
                    </div>
                    <div className="field">
                        <label>name</label>
                        <input type="text" name="email" placeholder="Email" value={this.state.email}
                               onChange={ e => this.setState({email: e.target.value}) }/>
                    </div>
                    <button className="ui button blue">Add</button>
                </form>
            </div>
        );
    }
}

export default AddContact;