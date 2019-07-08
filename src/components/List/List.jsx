import React from 'react';
import { array } from 'prop-types';

import ListItem from 'components/ListItem/ListItem';

import './List.css';

const List = ({ beers }) => (
  <article className='list-container'>
    {beers.map(beer => (
      <ListItem beer={beer.data} id={beer.id} key={beer.id} />
    ))}
  </article>
);

List.propTypes = {
  beers: array,
};

export default List;
