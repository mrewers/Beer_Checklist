import React from 'react';
import { func, node, string } from 'prop-types';

import './Form.css';

const Form = ({ children, legend, onSubmit, submit }) => (
  <form className='form' onSubmit={onSubmit}>
    <fieldset className='form-fieldset'>
      <legend className='form-legend'>{legend}</legend>
      <div className='form-fields'>{children}</div>
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
  children: node,
  legend: string,
  onSubmit: func,
  submit: string,
};

export default Form;
