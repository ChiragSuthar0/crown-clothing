import { Route, Routes } from 'react-router-dom';
import './App.scss';

import Home from './routes/home/home.component';
import Navbar from './routes/NavigationBar/navbar.component';
import Authentication from './routes/Authentication/Authentication.component';
import Shop from './routes/Shop/Shop.component';
import Checkout from './routes/Checkout/checkout.component';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { checkUserSession } from './store/user/user.action';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkUserSession());
  }, [dispatch]);

  return (
    <Routes>
      <Route path="/" element={<Navbar />}>
        <Route index={true} element={<Home />} />
        <Route path="shop/*" element={<Shop />} />
        <Route path="auth" element={<Authentication />} />
        <Route path="checkout" element={<Checkout />} />
      </Route>
    </Routes>
  );
};

export default App;
