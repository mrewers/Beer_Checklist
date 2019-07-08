import React, { useState } from 'react';
import { bool, object, string } from 'prop-types';

import { withFirebase } from 'fireb';

import './ListItem.scss';

const ListItem = ({ beer, firebase, id, strikethrough }) => {
  const [checked, setChecked] = useState(beer.checked);

  const handleCheckbox = () => {
    const toggle = !checked;

    const data = { checked: toggle };

    firebase.firebaseUpdateDoc('beers', data, id);

    setChecked(toggle);
  };

  const isActive = strikethrough && checked ? 'checked' : 'active';

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
  strikethrough: bool,
};

export default withFirebase(ListItem);
