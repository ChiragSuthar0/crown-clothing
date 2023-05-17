import { Link, Outlet } from 'react-router-dom';
import './navbar.styles.scss';

import { ReactComponent as CrownLogo } from '../../assets/crown.svg';
import { Fragment, useContext } from 'react';
import { UserContext } from '../../contexts/User.context';
import { signOutUser } from '../../utils/firebase.utils';
import CartIcon from '../../components/Cart-Icon/cart-icon.component';
import CartDropdown from '../../components/Cart-dropdown/cart-dropdown.component';
import { CartContext } from '../../contexts/Cart.context';

const Navbar = () => {
  const { currentUser } = useContext(UserContext);
  const { isCartOpen } = useContext(CartContext);

  return (
    <Fragment>
      <header>
        <div className="container">
          <div className="navbar">
            <div className="logo-container">
              <Link to="/" className="logo">
                <CrownLogo className="logo-svg" />
              </Link>
            </div>
            <div className="navbar-links">
              <div className="link-items">
                <Link to="/shop" className="navigation-link">
                  Shop
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
              <div className="link-items">
                <CartIcon />
              </div>
            </div>
            {isCartOpen && <CartDropdown />}
          </div>
        </div>
      </header>
      <Outlet />
    </Fragment>
  );
};

export default Navbar;
