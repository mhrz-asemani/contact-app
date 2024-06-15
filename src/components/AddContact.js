import { Component } from 'react';
// Class Component
class AddContact extends Component {
    state = {
        name: "",
        email: ""
    }
    render() {
        return (
            <div className="ui main">
                <h2>Add Contact</h2>
                <form className="ui form">
                    <div className="field">
                        <label>name</label>
                        <input type="text" name="name" placeholder="Name" onChange={} />
                    </div>
                    <div className="field">
                        <label>name</label>
                        <input type="text" name="email" placeholder="Email" />
                    </div>
                    <button className="ui button blue">Add</button>
                </form>
            </div>
        );
    }
}

export default AddContact;