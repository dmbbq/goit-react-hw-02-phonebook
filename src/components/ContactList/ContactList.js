import React from 'react';
import styles from './ContactList.modules.css';

const ContactList = ({ contacts, filter, deleteContact }) => {
  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <ul className={styles.list}>
      {filteredContacts.map((contact) => (
        <li key={contact.id} className={styles.item}>
          <span className={styles.name}>{contact.name}</span> - {contact.number}
          <button className={styles.deleteBtn} onClick={() => deleteContact(contact.id)}>
            Видалити
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
