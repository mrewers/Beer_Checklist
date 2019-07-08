import React, { useEffect, useState } from 'react';
import { object } from 'prop-types';

import List from 'components/List/List';
import Page from 'pages/Page/Page';
import { withFirebase } from 'fireb';

const ConsumedPage = ({ firebase }) => {
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
      .then(data => setBeers(data.filter(beer => beer.data.checked === true)));
  }, []);

  return (
    <Page header>
      <List beers={beers} />
    </Page>
  );
};

ConsumedPage.propTypes = {
  firebase: object,
};
export default withFirebase(ConsumedPage);
