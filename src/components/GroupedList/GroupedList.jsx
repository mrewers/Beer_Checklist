import React from 'react';
import { array } from 'prop-types';

import List from 'components/List/List';

const GroupedList = ({ beers, groups }) => (
  <article>
    {groups.map(group => {
      const beersInGroup = beers.filter(beer => beer.group === group.id);

      if (beersInGroup.length > 0) {
        return (
          <article key={group.id}>
            <h3>{group.title.toUpperCase()}</h3>
            <List beers={beersInGroup} />
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
