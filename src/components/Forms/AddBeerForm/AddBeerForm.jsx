import React, { Component } from 'react';
import { object } from 'prop-types';

import Form from '../Form/Form';
import { withFirebase } from '../../../firebase';

import './AddBeerForm.css';

class AddBeerForm extends Component {
  state = {
    beer: '',
    brewery: '',
    group: '',
    groups: [],
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
    const { beer, brewery, group, groups } = this.state;

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
        <div className='add-beer-form-fields'>
          <label className='add-beer-form-label' htmlFor='beer'>
            Beer Name:
            <input id='beer' name='beer' onChange={handleChange} type='text' value={beer} />
          </label>
          <label className='add-beer-form-label' htmlFor='brewery'>
            Brewery:
            <input id='brewery' name='brewery' onChange={handleChange} type='text' value={brewery} />
          </label>
          <label className='add-beer-form-label' htmlFor='price'>
            Beer Price:
            <input id='price' name='price' onChange={handleChange} type='text' value={brewery} />
          </label>
          <label className='add-beer-form-label' htmlFor='group'>
            Add to Group:
            <select id='group' name='group' onChange={handleChange} onBlur={handleChange} value={group}>
              <option value=''>Please select a group</option>
              {groups.map(group => (
                <option key={group.id} value={group.title}>
                  {group.title}
                </option>
              ))}
            </select>
          </label>
        </div>
      </Form>
    );
  }
}

AddBeerForm.propTypes = {
  firebase: object,
};

export default withFirebase(AddBeerForm);
