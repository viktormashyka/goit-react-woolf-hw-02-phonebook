import React, { Component } from 'react';

import css from './Phonebook.module.css';
import ContactForm from 'components/ContactForm/ContactForm';
import { Filter } from 'components/Filter/Filter';
import { ContactList } from 'components/ContactList/ContactList';

class Phonebook extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  handleChange = evt => {
    const { name, value } = evt.target;
    this.setState({ [name]: value });
  };

  filterContacts = () => {
    return this.state.contacts.filter(contact =>
      contact.name
        .toLocaleLowerCase()
        .includes(this.state.filter.toLocaleLowerCase())
    );
  };

  handleDelete = id => {
    const newList = this.state.contacts.filter(item => item.id !== id);
    this.setState({ contacts: newList });
  };

  render() {
    const { filter, contacts } = this.state;
    const filteredContacts = this.filterContacts();
    return (
      <div className={css.container}>
        <h1 className={css.title}>Phonebook</h1>
        <ContactForm contacts={contacts} />

        <h2 className={css.subtitle}>Contacts</h2>
        <Filter filter={filter} onChange={this.handleChange} />
        <ContactList
          filteredContacts={filteredContacts}
          handleDelete={this.handleDelete}
        />
      </div>
    );
  }
}

export default Phonebook;
