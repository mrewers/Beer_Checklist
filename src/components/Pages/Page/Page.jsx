import React from 'react';
import { bool, node } from 'prop-types';

import Header from 'components/Header/Header';

import './Page.scss';

const Page = ({ children, full, header }) => {
  const pageType = full ? 'full-page-container' : 'base-page-container';

  return (
    <article className={pageType}>
      {header && <Header />}
      {children}
    </article>
  );
};

Page.propTypes = {
  children: node,
  full: bool,
  header: bool,
};

Page.defaultProps = {
  full: false,
  header: false,
};

export default Page;
