import React from 'react';
import { object } from 'prop-types';

import { withFirebase } from 'fireb';

import './LoginPage.scss';

const LoginPage = ({ firebase }) => {
  return (
    <article className='login-container'>
      <div className='login-modal'>
        <h4>Please Login to Continue</h4>
        <button className='login-button' onClick={firebase.firebaseSignIn}>
          Login
        </button>
      </div>
    </article>
  );
};

LoginPage.propTypes = {
  firebase: object,
};

export default withFirebase(LoginPage);
