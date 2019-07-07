import React, { useState } from 'react';
import { object } from 'prop-types';

import './ListItem.css';

const ListItem = ({ beer }) => {
  const [checked, setChecked] = useState(beer.checked);

  const handleCheckbox = () => {
    const toggle = !checked;
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
};

export default ListItem;
