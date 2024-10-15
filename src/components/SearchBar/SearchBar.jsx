import { useState } from 'react';
import css from './SearchBar.module.css';

const SearchBar = ({ onSearch }) => {
  const [searchValue, setSearchValue] = useState('');

  const handleChange = event => {
    setSearchValue(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    onSearch(searchValue);
    setSearchValue('');
  };
  return (
    <div>
      <header className={css.header}>
        <form className={css.form} onSubmit={handleSubmit}>
          <input
            className={css.input}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={searchValue}
            onChange={handleChange}
          />
          <button className={css.button} type="submit">
            <span className={css.span}>Search</span>
          </button>
        </form>
      </header>
    </div>
  );
};

export default SearchBar;
