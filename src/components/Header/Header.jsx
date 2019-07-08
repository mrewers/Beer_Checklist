import React, { Fragment } from 'react';

import Countdown from 'components/Countdown/Countdown';

import './Header.scss';

const Header = () => (
  <Fragment>
    <h1 className='header'>RIP IIP</h1>
    <Countdown />
  </Fragment>
);

export default Header;
