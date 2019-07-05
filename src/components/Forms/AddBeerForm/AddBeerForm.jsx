import React, { Component } from 'react';

import Form from '../Form/Form';
import { groups } from '../../../mockdata';

import './AddBeerForm.css';

class AddBeerForm extends Component {
  state = {
    beer: '',
    brewery: '',
    group: '',
  };

  render() {
    const { beer, brewery, group } = this.state;

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
          <label className='add-beer-form-label' htmlFor='name'>
            Beer Name:
            <input id='beer' name='beer' onChange={handleChange} type='text' value={beer} />
          </label>
          <label className='add-beer-form-label' htmlFor='Brewery'>
            Brewery:
            <input id='brewery' name='brewery' onChange={handleChange} type='text' value={brewery} />
          </label>
          <select id='group' name='group' onChange={handleChange} onBlur={handleChange} value={group}>
            <option value=''>Please select a group</option>
            {groups.map(group => (
              <option key={group} value={group}>
                {group}
              </option>
            ))}
          </select>
        </div>
      </Form>
    );
  }
}

export default AddBeerForm;
