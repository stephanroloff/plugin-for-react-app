import React from 'react';
import {Outlet, NavLink} from 'react-router-dom';

const MainLayout: React.FC = () => {
  return (
    <div>
      <nav>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
          </ul>
       </nav>
      <Outlet />
    </div>
  );
}

export default MainLayout;