import {Component} from 'react';
import {useLocation, useNavigate} from "react-router-dom";

/*
    * use useLocation hook to get props from the Link. the hooks only works in functional components.
    * So, we have to wrap the EditContact component with a functional component. then pass the props
    * to the class component.
 */
const EditContact = props => {
    const {state} = useLocation();
    const navigate = useNavigate();
    return <EditContactNode {...state} {...props} navigate={navigate} />
}

// Class Component
class EditContactNode extends Component {
    // initialize state with props
    constructor(props) {
        super(props);
        this.state = {
            id: props.id,
            name: props.name,
            email: props.email
        }
    };
    update = e => {
        e.preventDefault();
        if (this.state.name === "" || this.state.email === "") {
            alert("All the fields are mandatory!");
            return;
        }
        this.props.editContact(this.state);
        this.props.navigate('/');
    };

    render() {
        return (
            <div className="ui main">
                <h2>Edit Contact</h2>
                <form className="ui form" onSubmit={this.update}>
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
                    <button className="ui button blue">Update</button>
                </form>
            </div>
        );
    }
}

export default EditContact;