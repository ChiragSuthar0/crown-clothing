import { Link, Outlet } from 'react-router-dom';
import './navbar.styles';

import { ReactComponent as CrownLogo } from '../../assets/crown.svg';
import { Fragment } from 'react';
import CartIcon from '../../components/Cart-Icon/cart-icon.component';
import CartDropdown from '../../components/Cart-dropdown/cart-dropdown.component';
import { Head, LogoContainer, Nav, NavbarLinks } from './navbar.styles';
import { useDispatch, useSelector } from 'react-redux';
import { selectCurrentUser } from '../../store/user/user.selector';
import { selectIsCartOpen } from '../../store/cart/cart.selector';
import { signOutUserStart } from '../../store/user/user.action';

const Navbar = () => {
  const currentUser = useSelector(selectCurrentUser);
  const isCartOpen = useSelector(selectIsCartOpen);
  const dispatch = useDispatch();

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
                  <span
                    className="navigation-link"
                    onClick={() => dispatch(signOutUserStart())}
                  >
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
