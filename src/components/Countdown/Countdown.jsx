import React, { useEffect, useState } from 'react';
import { object } from 'prop-types';

import { withFirebase } from 'fireb';

import './Countdown.css';

const Countdown = ({ firebase }) => {
  const [remaining, setRemaining] = useState(100);

  useEffect(() => {
    firebase
      .firebaseGetCollection('beers')
      .then(querySnapshot =>
        querySnapshot.docs.filter(doc => doc.data().checked === true)
      )
      .then(data => setRemaining(100 - data.length));
  });

  return <p className='countdown-text'>{`Only ${remaining} beers left!`}</p>;
};

Countdown.propTypes = {
  firebase: object,
};

export default withFirebase(Countdown);
