import React from 'react';
import { array, bool } from 'prop-types';

import ListItem from 'components/ListItem/ListItem';

import './List.scss';

const List = ({ beers, strikethrough }) => (
  <article className='list-container'>
    {beers.map(beer => (
      <ListItem
        beer={beer.data}
        id={beer.id}
        key={beer.id}
        strikethrough={strikethrough}
      />
    ))}
  </article>
);

List.propTypes = {
  beers: array,
  strikethrough: bool,
};

List.defaultProps = {
  strikethrough: false,
};

export default List;
