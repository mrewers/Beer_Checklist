import React from 'react';

import './SearchForm.css';

const SearchForm = () => (
  <form>
    <fieldset className='search-form-fieldset'>
      <legend className='search-form-legend'>Find A Beer</legend>
      <div className='search-form-fields'>
        <label className='search-form-label' htmlFor='name'>
          Beer Name:
          <input className='search-form-input' id='name' type='text' />
        </label>
        <label className='search-form-label' htmlFor='Brewery'>
          Brewery:
          <input className='search-form-input' id='Brewery' type='text' />
        </label>
      </div>
      <div className='search-form-button-container'>
        <button className='search-form-button' type='submit'>
          Search
        </button>
      </div>
    </fieldset>
  </form>
);

export default SearchForm;
