import { Link, Outlet } from 'react-router-dom';
import './navbar.styles';

import { ReactComponent as CrownLogo } from '../../assets/crown.svg';
import { Fragment, useContext } from 'react';
import { UserContext } from '../../contexts/User.context';
import { signOutUser } from '../../utils/firebase.utils';
import CartIcon from '../../components/Cart-Icon/cart-icon.component';
import CartDropdown from '../../components/Cart-dropdown/cart-dropdown.component';
import { CartContext } from '../../contexts/Cart.context';
import { Head, LogoContainer, Nav, NavbarLinks } from './navbar.styles';

const Navbar = () => {
  const { currentUser } = useContext(UserContext);
  const { isCartOpen } = useContext(CartContext);

  return (
    <Fragment>
      <Head>
        <div className="container">
          <Nav>
            <LogoContainer>
              <Link to="/" className="logo">
                <CrownLogo className="logo-svg" />
              </Link>
            </LogoContainer>
            <NavbarLinks>
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
            </NavbarLinks>
            {isCartOpen && <CartDropdown />}
          </Nav>
        </div>
      </Head>
      <Outlet />
    </Fragment>
  );
};

export default Navbar;
