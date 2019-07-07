import React, { Component } from 'react';
import { object } from 'prop-types';

import Form from 'components/Forms/Form/Form';
import GroupsDropdown from 'components/GroupsDropdown/GroupsDropdown';
import { withFirebase } from 'fireb';

class EditGroupsForm extends Component {
  state = {
    group: '',
    message: '',
    title: '',
  };

  render() {
    const { group, message, title } = this.state;
    const { firebaseAddGroup, firebaseDeleteGroup } = this.props.firebase;

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
        firebaseAddGroup(title)
          .then(docRef =>
            this.setState({
              message: `Added the group "${title}" (id: ${docRef.id})`,
            })
          )
          .catch(error =>
            this.setState({
              message: `Error adding the group "${title}": ${error}`,
            })
          );
      }
      if (group) {
        firebaseDeleteGroup(group)
          .then(() =>
            this.setState({
              message: `Group successfully deleted (id: ${group})`,
            })
          )
          .catch(error => {
            this.setState({ message: `Error removing group: ${error}` });
          });
      }

      this.setState({ group: '', title: '' });
    };

    return (
      <Form legend='Edit Groups' submit='Edit Groups' onSubmit={handleSubmit}>
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
        {message && <p className='form-message'>{message}</p>}
      </Form>
    );
  }
}

EditGroupsForm.propTypes = {
  firebase: object,
};

export default withFirebase(EditGroupsForm);
