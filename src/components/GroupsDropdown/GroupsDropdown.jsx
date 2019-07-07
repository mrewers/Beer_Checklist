import React, { Component } from 'react';
import { func, object, string } from 'prop-types';

import { withFirebase } from '../../firebase';

class GroupsDropdown extends Component {
  state = {
    groups: [],
  };

  componentDidMount() {
    const { firebaseGetCollection } = this.props.firebase;

    firebaseGetCollection('groups')
      .then(querySnapshot =>
        querySnapshot.docs.map(doc => ({
          id: doc.id,
          title: doc.data().title,
        }))
      )
      .then(groups => this.setState({ groups }));
  }

  render() {
    const { callback, label, value } = this.props;
    const { groups } = this.state;

    return (
      <label className='form-label' htmlFor='group'>
        {label}
        <select
          id='group'
          name='group'
          onChange={callback}
          onBlur={callback}
          value={value}
        >
          <option value=''>Select a group</option>
          {groups.map(group => (
            <option key={group.id} value={group.id}>
              {group.title}
            </option>
          ))}
        </select>
      </label>
    );
  }
}

GroupsDropdown.propTypes = {
  callback: func,
  firebase: object,
  label: string,
  value: string,
};

GroupsDropdown.defaultProps = {
  callback: () => {},
};

export default withFirebase(GroupsDropdown);
