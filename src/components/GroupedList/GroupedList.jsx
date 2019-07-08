import React from 'react';
import { array, bool } from 'prop-types';

import List from 'components/List/List';

const GroupedList = ({ beers, groups, strikethrough }) => (
  <article>
    {groups.map(group => {
      const beersInGroup = beers.filter(beer => beer.data.group === group.id);

      if (beersInGroup.length > 0) {
        return (
          <article key={group.id}>
            <h3>{group.title.toUpperCase()}</h3>
            <List beers={beersInGroup} strikethrough={strikethrough} />
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
  strikethrough: bool,
};

export default GroupedList;
