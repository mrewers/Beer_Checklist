import React from 'react';
import { array } from 'prop-types';

import ListItem from './ListItem/ListItem';

const List = ({ beers }) => (
  <article>
    {beers.map(beer => (
      <ListItem key={beer.id} beer={beer} />
    ))}
  </article>
);

List.propTypes = {
  beers: array,
};

export default List;
