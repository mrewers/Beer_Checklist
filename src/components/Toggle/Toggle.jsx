import React, { useState } from 'react';
import { func, string } from 'prop-types';

import './Toggle.css';

const Toggle = ({ callback, label }) => {
  const [toggled, setToggled] = useState(true);

  const isToggled = toggled ? 'toggled' : '';

  const handleToggle = () => {
    setToggled(!toggled);
    callback();
  };

  return (
    <div className='toggle-container'>
      <label className='toggle-label'>{label}</label>
      <div className='toggle' onClick={handleToggle} onKeyUp={callback} role='button' tabIndex='0'>
        <div className={`toggle-track ${isToggled}`} />
        <div className={`toggle-handle ${isToggled}`} />
      </div>
    </div>
  );
};

Toggle.propTypes = {
  callback: func,
  label: string,
};

Toggle.defaultProps = {
  callback: () => {},
};

export default Toggle;
