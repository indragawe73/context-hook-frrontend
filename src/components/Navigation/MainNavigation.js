import React from 'react';
import { NavLink } from 'react-router-dom';

import './MainNavigation.css';

const MainNavigation = ({ logo, imageLogo, type }) => {
  return (
    <header className="main-navigation">
      
        <div className="wrapHeader" className={`${type === '2' ? 'wrapHeaderBlue' : 'wrapHeader'}`}>
          <div className="wrapContent">
            <NavLink to={`/`}>
              <div className="wrapLogoHeader">
                {imageLogo ?
                  <img className="logo" src={logo} />
                  :
                  <h1 className={`${type === '2' ? 'textLogoBlue' : 'textLogo'}`}>{logo}</h1>
                }
              </div>
            </NavLink>
          </div>
        </div>
    </header>
  )
}

export default MainNavigation;
