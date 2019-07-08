import React from 'react';
import { object } from 'prop-types';

import Page from 'pages/Page/Page';
import { withFirebase } from 'fireb';

import './LoginPage.scss';

const LoginPage = ({ firebase }) => {
  return (
    <Page full>
      <div className='login-modal'>
        <h4>Please Login to Continue</h4>
        <button className='login-button' onClick={firebase.firebaseSignIn}>
          Login
        </button>
      </div>
    </Page>
  );
};

LoginPage.propTypes = {
  firebase: object,
};

export default withFirebase(LoginPage);
