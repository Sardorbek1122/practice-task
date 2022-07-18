import './App.css';
import {
  Routes,
  Route,
  NavLink,
  Navigate,
} from 'react-router-dom';
import { HomePage } from './components/HomePage';
import { NotFound } from './components/NotFound';
import { UserPage } from './components/UserPage';

const App = () => (
  <div className="App">
    <nav>
      <div className="navbar-brand">
        <NavLink
          className="navbar-item"
          to="/"
        >
          Home
        </NavLink>

        <NavLink
          className="navbar-item"
          to="/user"
        >
          Users page
        </NavLink>
      </div>
    </nav>

    <Routes>
        <Route
            path="/"
            element={<HomePage />}
        />

        <Route
            path="/home"
            element={<Navigate to="/" />}
        />

        <Route
            path="/user"
            element={<UserPage />}
        />

        <Route
            path="*"
            element={<NotFound />}
        />
    </Routes>
  </div>
);

export default App;
