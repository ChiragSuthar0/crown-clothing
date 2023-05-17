import { Link, Outlet } from 'react-router-dom';
import './navbar.styles.scss';

import { ReactComponent as CrownLogo } from '../../assets/crown.svg';
import { Fragment, useContext } from 'react';
import { UserContext } from '../../contexts/User.context';
import { signOutUser } from '../../utils/firebase.utils';

const Navbar = () => {
  const { currentUser } = useContext(UserContext);
  console.log(currentUser);

  return (
    <Fragment>
      <header>
        <div className="container">
          <div className="navbar">
            <div className="logo-container">
              <Link to="/home" className="logo">
                <CrownLogo className="logo-svg" />
              </Link>
            </div>
            <div className="navbar-links">
              <div className="link-items">
                <Link className="navigation-link" to="/">
                  Home
                </Link>
              </div>
              <div className="link-items">
                <Link to="/shop" className="navigation-link">
                  Shop
                </Link>
              </div>
              <div className="link-items">
                <Link to="/help" className="navigation-link">
                  Help
                </Link>
              </div>
              <div className="link-items">
                {currentUser ? (
                  <span className="navigation-link" onClick={signOutUser}>
                    Sign Out
                  </span>
                ) : (
                  <Link to="/auth" className="navigation-link">
                    Sign In
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
      </header>
      <Outlet />
    </Fragment>
  );
};

export default Navbar;
