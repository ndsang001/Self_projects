import React from 'react';

import './MenuItem.css';

const MenuItem = ({title, price, tags}) => (
  <li className="app__menuitem">
    <div className="app__menuitem-head">
      <div className='menuitem__head'>
        <div className="app__menuitem-name">
          <p className="p__normal-text" style={{ color: 'var(--color-green)' }}>{title}</p>
        </div>
        <div className="app__menuitem-dash" />
      </div>
      <div className="app__menuitem-price">
        <p className="p__normal-text">{price}</p>
      </div>
    </div>

    <div className="app__menuitem-sub">
      <p className="p__normal-text" style={{ color: 'var(--color-green)' }}>{tags}</p>
    </div>
  </li>
);

export default MenuItem;
