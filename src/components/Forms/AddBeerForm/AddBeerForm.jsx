import React, { Component } from 'react';
import { object } from 'prop-types';

import Form from 'components/Forms/Form/Form';
import GroupsDropdown from 'components/GroupsDropdown/GroupsDropdown';
import { withFirebase } from 'fireb';

class AddBeerForm extends Component {
  state = {
    beer: '',
    brewery: '',
    group: '',
    message: '',
    price: '',
  };

  render() {
    const { beer, brewery, group, message, price } = this.state;
    const { firebaseAddBeer } = this.props.firebase;

    const handleChange = e => {
      const { name, value } = e.target;

      this.setState({
        [name]: value,
      });
    };

    const handleSubmit = e => {
      e.preventDefault();
      firebaseAddBeer(beer, brewery, group, price)
        .then(docRef =>
          this.setState({
            message: `Added "${beer}" (id: ${docRef.id})`,
          })
        )
        .catch(error =>
          this.setState({
            message: `Error adding "${beer}": ${error}`,
          })
        );

      this.setState({ beer: '', brewery: '', group: '', price: '' });
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
        {message && <p className='form-message'>{message}</p>}
      </Form>
    );
  }
}

AddBeerForm.propTypes = {
  firebase: object,
};

export default withFirebase(AddBeerForm);
