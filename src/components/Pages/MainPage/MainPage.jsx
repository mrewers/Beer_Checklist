import React, { useState } from 'react';

import List from '../../List/List';
import GroupedList from '../../GroupedList';
import Options from '../../Options/Options';

import { unfinishedBeers } from '../../../apis/db';
import { allBeers, groups } from '../../../mockdata';

import './MainPage.css';

export const AppContext = React.createContext();

const MainPage = () => {
  const [showFinished, setShowFinished] = useState(true);
  const [showGroups, setShowGroups] = useState(true);

  const toggleFinished = () => {
    setShowFinished(!showFinished);
  };

  const toggleGroups = () => {
    setShowGroups(!showGroups);
  };

  const beers = showFinished ? allBeers : unfinishedBeers;

  return (
    <section className='mainpage-container'>
      <h1 className='mainpage-header'>RIP IIP</h1>
      <AppContext.Provider value={{ toggleFinished, toggleGroups }}>
        <Options />
        <hr />
        {showGroups && <GroupedList beers={beers} groups={groups} />}
        {!showGroups && <List beers={beers} />}
      </AppContext.Provider>
    </section>
  );
};

export default MainPage;
