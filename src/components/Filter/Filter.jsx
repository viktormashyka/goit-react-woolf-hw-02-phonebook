import css from './Filter.module.css';

export const Filter = ({ filter, onChange }) => {
  return (
    <label>
      Find contact by name
      <input
        className={css.filter}
        type="text"
        placeholder="Enter name"
        name="filter"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        value={filter}
        onChange={onChange}
      />
    </label>
  );
};
