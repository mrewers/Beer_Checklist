import React, { useContext } from 'react';

import Toggle from '../Toggle/Toggle';
import { AppContext } from '../App';

import './Options.css';

const Options = () => {
  const { toggleFinished, toggleGroups } = useContext(AppContext);

  return (
    <section className='options-container'>
      <Toggle callback={toggleGroups} label='Show Groups:' />
      <Toggle callback={toggleFinished} label='Show Finished:' />
    </section>
  );
};

export default Options;
