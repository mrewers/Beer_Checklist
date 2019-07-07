import React, { useEffect, useState } from 'react';
import { object } from 'prop-types';

import Countdown from 'components/Countdown/Countdown';
import GroupedList from 'components/GroupedList/GroupedList';
import List from 'components/List/List';
import Options from 'components/Options/Options';
import { withFirebase } from 'fireb';

import './MainPage.css';

export const AppContext = React.createContext();

const MainPage = ({ firebase }) => {
  const [showFinished, setShowFinished] = useState(true);
  const [showGroups, setShowGroups] = useState(true);

  const [beers, setBeers] = useState([]);
  useEffect(() => {
    firebase
      .firebaseGetCollection('beers')
      .then(querySnapshot => querySnapshot.docs.map(doc => doc.data()))
      .then(data => setBeers(data));
  }, []);

  const [groups, setGroups] = useState([]);
  useEffect(() => {
    firebase
      .firebaseGetCollection('groups')
      .then(querySnapshot =>
        querySnapshot.docs.map(doc => ({
          id: doc.id,
          title: doc.data().title,
        }))
      )
      .then(data => setGroups(data));
  }, []);

  const toggleFinished = () => {
    setShowFinished(!showFinished);
  };

  const toggleGroups = () => {
    setShowGroups(!showGroups);
  };

  return (
    <section className='mainpage-container'>
      <h1 className='mainpage-header'>RIP IIP</h1>
      <Countdown />
      <AppContext.Provider value={{ toggleFinished, toggleGroups }}>
        <Options />
        <hr />
        {showGroups && <GroupedList beers={beers} groups={groups} />}
        {!showGroups && <List beers={beers} />}
      </AppContext.Provider>
    </section>
  );
};

MainPage.propTypes = {
  firebase: object,
};

export default withFirebase(MainPage);
