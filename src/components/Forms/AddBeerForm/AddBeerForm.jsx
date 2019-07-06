import React, { Component } from 'react';
import { object } from 'prop-types';

import Form from '../Form/Form';
import GroupsDropdown from '../../GroupsDropdown/GroupsDropdown';
import { withFirebase } from '../../../firebase';

class AddBeerForm extends Component {
  state = {
    beer: '',
    brewery: '',
    group: '',
    price: '',
  };

  render() {
    const { beer, brewery, group, price } = this.state;

    const handleChange = e => {
      const { name, value } = e.target;

      this.setState({
        [name]: value,
      });
    };

    const handleSubmit = e => {
      e.preventDefault();
      console.log(this.state);
    };

    return (
      <Form legend='Add A Beer' submit='Add Beer' onSubmit={handleSubmit}>
        <label className='form-label' htmlFor='beer'>
          Beer Name:
          <input
            id='beer'
            name='beer'
            onChange={handleChange}
            placeholder='Fancy Brew IPA'
            type='text'
            value={beer}
          />
        </label>
        <label className='form-label' htmlFor='brewery'>
          Brewery:
          <input
            id='brewery'
            name='brewery'
            onChange={handleChange}
            placeholder='Fancy Brewing Co.'
            type='text'
            value={brewery}
          />
        </label>
        <label className='form-label' htmlFor='price'>
          Beer Price:
          <input
            id='price'
            name='price'
            onChange={handleChange}
            placeholder='$7.00'
            type='text'
            value={price}
          />
        </label>
        <GroupsDropdown
          callback={handleChange}
          label='Add to Group:'
          value={group}
        />
      </Form>
    );
  }
}

AddBeerForm.propTypes = {
  firebase: object,
};

export default withFirebase(AddBeerForm);
