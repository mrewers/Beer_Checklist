import React, { Component } from 'react';
import { object } from 'prop-types';

import Form from '../Form/Form';
import { withFirebase } from '../../../firebase';

class EditGroupsForm extends Component {
  state = {
    groups: [],
    selectedGroup: '',
    title: '',
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
    const { groups, title } = this.state;
    const { firebaseAddGroup } = this.props.firebase;

    const handleChange = e => {
      const { value } = e.target;

      this.setState({
        selectedGroup: value,
      });
    };

    const handleSubmit = e => {
      e.preventDefault();
      firebaseAddGroup(this.state.title);
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
        <label className='form-label' htmlFor='title'>
          Delete Group:
          <select
            id='group'
            name='group'
            onChange={handleChange}
            onBlur={handleChange}
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

EditGroupsForm.propTypes = {
  firebase: object,
};

export default withFirebase(EditGroupsForm);
