import React, { Component } from 'react';
import { object } from 'prop-types';

import Form from '../Form/Form';
import GroupsDropdown from '../../GroupsDropdown/GroupsDropdown';
import { withFirebase } from '../../../firebase';

class EditGroupsForm extends Component {
  state = {
    group: '',
    title: '',
  };

  render() {
    const { group, title } = this.state;
    const { firebaseAddGroup } = this.props.firebase;

    const handleChange = e => {
      const { name, value } = e.target;

      this.setState({
        [name]: value,
      });
    };

    const handleSubmit = e => {
      const { title, group } = this.state;

      e.preventDefault();

      if (title) {
        firebaseAddGroup(title);
      }
      if (group) {
        console.log(group);
      }

      this.setState({ group: '', title: '' });
    };

    return (
      <Form legend='Edit Groups' submit='Add Group' onSubmit={handleSubmit}>
        <label className='form-label' htmlFor='title'>
          Add Group:
          <input
            id='title'
            name='title'
            onChange={handleChange}
            placeholder='New Group'
            type='text'
            value={title}
          />
        </label>
        <GroupsDropdown
          callback={handleChange}
          label='Delete Group:'
          value={group}
        />
      </Form>
    );
  }
}

EditGroupsForm.propTypes = {
  firebase: object,
};

export default withFirebase(EditGroupsForm);
