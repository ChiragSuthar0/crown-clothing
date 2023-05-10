import { Routes, Route } from 'react-router-dom';
import './App.scss';

import Home from './routes/home/home.component';
import Navbar from './routes/NavigationBar/navbar.component';
import Authentication from './routes/Authentication/Authentication.component';

const Shop = () => (
  <section>
    <div className="container">
      <h1>This is Shop Element</h1>
    </div>
  </section>
);

const Help = () => (
  <section>
    <div className="container">
      <h1>This is the Help Element</h1>
    </div>
  </section>
);

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navbar />}>
        <Route index={true} element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="help" element={<Help />} />
        <Route path="auth" element={<Authentication />} />
      </Route>
    </Routes>
  );
};

export default App;
