import React, { Component } from 'react';
import { nanoid } from 'nanoid';

import css from './ContactForm.module.css';

const INITIAL_STATE = {
  name: '',
  number: '',
};

class ContactForm extends Component {
  state = {
    INITIAL_STATE,
  };

  handleChange = evt => {
    const { name, value } = evt.target;
    this.setState({ [name]: value });
  };

  handleSubmit = evt => {
    evt.preventDefault();
    const { name, number } = this.state;

    const newContact = {
      id: nanoid(),
      name,
      number,
    };

    if (this.props.contacts.some(contact => contact.name === name)) {
      alert(`${name} is already in contacts`);
      return;
    }

    this.setState({ ...this.props.contacts.push(newContact) });
    this.reset();
  };

  reset = () => {
    this.setState(INITIAL_STATE);
  };

  render() {
    const { name, number } = this.state;
    return (
      <form action="" className={css.form} onSubmit={this.handleSubmit}>
        <label>
          Name
          <input
            className={css.input}
            type="text"
            placeholder="Enter name"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={name}
            onChange={this.handleChange}
          />
        </label>
        <label>
          Number
          <input
            className={css.input}
            type="tel"
            placeholder="Enter phone number"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            value={number}
            onChange={this.handleChange}
          />
        </label>
        <button className={css.button} type="submit">
          Add contact
        </button>
      </form>
    );
  }
}

export default ContactForm;
