import css from './ContactList.module.css';

export const ContactList = ({ filteredContacts, handleDelete }) => {
  return (
    <ul className={css.list}>
      {filteredContacts &&
        filteredContacts.map(contact => (
          <li className={css.item} key={contact.id}>
            <p className={css.text}>
              {contact.name}: {contact.number}
            </p>
            <button
              className={css.deleteButton}
              onClick={() => handleDelete(contact.id)}
            >
              Delete
            </button>
          </li>
        ))}
    </ul>
  );
};
