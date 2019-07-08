import React, { useEffect, useState } from 'react';
import { object } from 'prop-types';

import GroupedList from 'components/GroupedList/GroupedList';
import List from 'components/List/List';
import Options from 'components/Options/Options';
import Page from 'pages/Page/Page';
import { withFirebase } from 'fireb';

export const AppContext = React.createContext();

const MainPage = ({ firebase }) => {
  const [showFinished, setShowFinished] = useState(true);
  const [showGroups, setShowGroups] = useState(true);

  const [beers, setBeers] = useState([]);
  useEffect(() => {
    firebase
      .firebaseGetCollection('beers')
      .then(querySnapshot =>
        querySnapshot.docs.map(doc => ({
          id: doc.id,
          data: doc.data(),
        }))
      )
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

  const isFiltered = showFinished
    ? beers
    : beers.filter(beer => beer.data.checked === false);

  return (
    <Page header>
      <AppContext.Provider value={{ toggleFinished, toggleGroups }}>
        <Options />
        <hr />
        {showGroups && (
          <GroupedList beers={isFiltered} groups={groups} strikethrough />
        )}
        {!showGroups && <List beers={isFiltered} strikethrough />}
      </AppContext.Provider>
    </Page>
  );
};

MainPage.propTypes = {
  firebase: object,
};

export default withFirebase(MainPage);
