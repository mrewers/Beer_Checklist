import React from 'react';
import { array } from 'prop-types';

import ListItem from '../ListItem/ListItem';

import './List.css';

const List = ({ beers }) => (
  <article className='list-container'>
    {beers.map(beer => (
      <ListItem key={beer.id} beer={beer} />
    ))}
  </article>
);

List.propTypes = {
  beers: array,
};

export default List;
