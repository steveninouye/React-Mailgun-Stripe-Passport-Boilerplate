import React, { Component } from 'react';
import { sendContactEmail } from '../services/email';

class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            message: ''
        };
    }

    handleChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    handleSubmit(e) {
        e.preventDefault();
        sendContactEmail(this.state.name, this.state.email, this.state.message)
            .then(() => {
                // Redirect to home page
            })
            .catch((err) => {
                console.log(err);
            });
    }

    render() {
        return (
            <div className="container">
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input
                            id="name"
                            name="name"
                            type="text"
                            className="form-control"
                            onChange={this.handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email Address</label>
                        <input
                            id="email"
                            name="email"
                            type="text"
                            className="form-control"
                            onChange={this.handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="message">Message</label>
                        <textarea
                            cols="30"
                            rows="10"
                            id="message"
                            name="message"
                            className="form-control"
                            onChange={this.handleChange}
                            required
                        />
                    </div>
                    <input type="submit" className="btn btn-primary" />
                </form>
            </div>
        );
    }
}

export default Contact;
