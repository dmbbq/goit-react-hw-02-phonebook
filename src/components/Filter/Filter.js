import React from 'react';
import styles from './Filter.modules.css';

const Filter = ({ filter, setFilter }) => {
  const handleChange = (e) => {
    setFilter(e.target.value);
  };

  return (
    <label className={styles.label}>
      Фільтр:
      <input
        type="text"
        value={filter}
        onChange={handleChange}
        className={styles.input}
      />
    </label>
  );
};

export default Filter;
