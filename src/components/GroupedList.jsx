import React from 'react';
import { array } from 'prop-types';

import List from './List/List';

const GroupedList = ({ beers, groups }) => (
  <article>
    {groups.map(group => {
      const beersIngroups = beers.filter(beer => beer.group === group);

      if (beersIngroups.length > 0) {
        return (
          <article key={group}>
            <h3>{group.toUpperCase()}</h3>
            <List beers={beersIngroups} />
          </article>
        );
      } else {
        return null;
      }
    })}
  </article>
);

GroupedList.propTypes = {
  beers: array,
  groups: array,
};

export default GroupedList;
