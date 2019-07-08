import React, { useState } from 'react';
import { object, string } from 'prop-types';

import { withFirebase } from 'fireb';

import './ListItem.scss';

const ListItem = ({ beer, firebase, id }) => {
  const [checked, setChecked] = useState(beer.checked);

  const handleCheckbox = () => {
    const toggle = !checked;

    const data = { checked: toggle };

    firebase.firebaseUpdateDoc('beers', data, id);

    setChecked(toggle);
  };

  const isActive = !checked ? 'active' : 'checked';

  return (
    <article className='list-item'>
      <input
        className='list-item-checkbox'
        type='checkbox'
        checked={checked}
        onChange={handleCheckbox}
      />
      <p className={isActive}>{beer.brewery || ''}</p>
      <p className={isActive}>{beer.beer}</p>
      <p className={isActive}>{`$${beer.price}`}</p>
    </article>
  );
};

ListItem.propTypes = {
  beer: object,
  firebase: object,
  id: string,
};

export default withFirebase(ListItem);
