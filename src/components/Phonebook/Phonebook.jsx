import { Section } from 'components/Section/Section';
import css from './Phonebook.module.css';
import React, { Component } from 'react';
import { nanoid } from 'nanoid';

class Phonebook extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
    name: '',
    number: '',
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

    this.setState({ ...this.state.contacts.push(newContact) });
    this.reset();
  };

  reset = () => {
    this.setState({ name: '', number: '' });
  };

  filteredContacts = () => {
    return this.state.contacts.filter(contact =>
      contact.name
        .toLocaleLowerCase()
        .includes(this.state.filter.toLocaleLowerCase())
    );
  };

  render() {
    const { name, number, filter } = this.state;
    return (
      <div className={css.container}>
        <Section title="Phonebook">
          <form action="" className={css.form} onSubmit={this.handleSubmit}>
            <label>
              Name
              <input
                className="input"
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
                className="input"
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
            <button type="submit">Add contact</button>
          </form>
        </Section>
        <Section title="Contacts">
          <label>
            Find contact by name
            <input
              className="input"
              type="text"
              placeholder="Enter name"
              name="filter"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              value={filter}
              onChange={this.handleChange}
            />
          </label>
          <ul className="list">
            {this.filteredContacts() &&
              this.filteredContacts().map(contact => (
                <li className="item" key={contact.id}>
                  {contact.name}: {contact.number}
                </li>
              ))}
          </ul>
        </Section>
      </div>
    );
  }
}

export default Phonebook;
