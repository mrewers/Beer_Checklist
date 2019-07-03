import React, { useState } from 'react';

import List from './List';
import GroupedList from './GroupedList';

import './App.css';

const beers = [
  { id: 1, name: 'beer1', brewery: 'brewery1', checked: true, group: 'group1' },
  { id: 2, name: 'beer2', brewery: 'brewery1', checked: false, group: 'group2' },
  { id: 3, name: 'beer3', brewery: 'brewery1', checked: false, group: 'group2' },
];

const groups = ['group1', 'group2'];

const App = () => {
  const [grouped, setGrouped] = useState(true);
  return (
    <section>
      <h1 className='app-header'>RIP IIP</h1>
      {grouped && <GroupedList beers={beers} groups={groups} />}
      {!grouped && <List beers={beers} />}
    </section>
  );
};

export default App;
