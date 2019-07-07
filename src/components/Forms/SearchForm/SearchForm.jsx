import React from 'react';

import Form from 'components/Forms/Form/Form';

const handleSubmit = e => {
  e.preventDefault();
};

const SearchForm = () => (
  <Form legend='Find A Beer' submit='Search' onSubmit={handleSubmit}>
    <label className='form-label' htmlFor='beer'>
      Beer Name:
      <input
        className='form-input'
        id='beer'
        name='beer'
        placeholder='Fancy Brew IPA'
        type='text'
      />
    </label>
    <label className='form-label' htmlFor='brewery'>
      Brewery:
      <input
        className='form-input'
        id='brewery'
        name='brewery'
        placeholder='Fancy Brewing Co.'
        type='text'
      />
    </label>
  </Form>
);

export default SearchForm;
