import React, { useState } from 'react';
import styles from './ContactForm.modules.css';

const ContactForm = ({ addContact }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addContact(name, number);
    setName('');
    setNumber('');
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <label>
        Ім'я:
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </label>
      <label>
        Номер:
        <input type="text" value={number} onChange={(e) => setNumber(e.target.value)} />
      </label>
      <button type="submit">Додати контакт</button>
    </form>
  );
};

export default ContactForm;