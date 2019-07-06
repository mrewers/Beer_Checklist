import React, { Component } from 'react';
import { object } from 'prop-types';

import Form from '../Form/Form';
import { withFirebase } from '../../../firebase';

class AddBeerForm extends Component {
  state = {
    beer: '',
    brewery: '',
    group: '',
    groups: [],
    price: '',
  };

  componentDidMount() {
    const { firebaseGetGroups } = this.props.firebase;
    const groups = [];

    firebaseGetGroups()
      .get()
      .then(querySnapshot =>
        querySnapshot.forEach(doc => {
          const group = {
            id: doc.id,
            title: doc.data().title,
          };
          groups.push(group);
        })
      );

    this.setState({ groups });
  }

  render() {
    const { beer, brewery, group, groups, price } = this.state;

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
        <label className='form-label' htmlFor='group'>
          Add to Group:
          <select
            id='group'
            name='group'
            onChange={handleChange}
            onBlur={handleChange}
            value={group}
          >
            <option value=''>Select a group</option>
            {groups.map(group => (
              <option key={group.id} value={group.title}>
                {group.title}
              </option>
            ))}
          </select>
        </label>
      </Form>
    );
  }
}

AddBeerForm.propTypes = {
  firebase: object,
};

export default withFirebase(AddBeerForm);
