import React from 'react';
import { element, func, string } from 'prop-types';

import './Form.css';

const Form = ({ children, legend, onSubmit, submit }) => (
  <form className='form' onSubmit={onSubmit}>
    <fieldset className='form-fieldset'>
      <legend className='form-legend'>{legend}</legend>
      {children}
      {submit && (
        <div className='form-button-container'>
          <button className='form-button' type='submit'>
            {submit}
          </button>
        </div>
      )}
    </fieldset>
  </form>
);

Form.propTypes = {
  children: element,
  legend: string,
  onSubmit: func,
  submit: string,
};

export default Form;
