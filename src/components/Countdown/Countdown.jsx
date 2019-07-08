import React, { useEffect, useState } from 'react';
import { object } from 'prop-types';

import { withFirebase } from 'fireb';

import './Countdown.scss';

const Countdown = ({ firebase }) => {
  const [remaining, setRemaining] = useState(null);

  useEffect(() => {
    firebase
      .firebaseGetCollection('beers')
      .then(querySnapshot =>
        querySnapshot.docs.filter(doc => doc.data().checked === true)
      )
      .then(data => setRemaining(100 - data.length));
  });

  if (!remaining) return null;

  return <p className='countdown-text'>{`Only ${remaining} beers left!`}</p>;
};

Countdown.propTypes = {
  firebase: object,
};

export default withFirebase(Countdown);
