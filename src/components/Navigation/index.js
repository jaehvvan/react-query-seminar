import { NavLink } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav className="Navigation">
      <ul className="Navigation__ul">
        <li className="Navigation__li">
          <NavLink
            className={({ isActive }) => `Navigation__navLink home ${isActive ? 'activated' : ''}`}
            to="/"
            end
          >
            Home
          </NavLink>
        </li>
        <li className="Navigation__li">
          <NavLink
            className={({ isActive }) =>
              `Navigation__navLink queries ${isActive ? 'activated' : ''}`
            }
            to="/queries"
          >
            Queries
          </NavLink>
        </li>
        <li className="Navigation__li">
          <NavLink
            className={({ isActive }) =>
              `Navigation__navLink mutations ${isActive ? 'activated' : ''}`
            }
            to="/mutations"
          >
            Mutations
          </NavLink>
        </li>
        <li className="Navigation__li">
          <NavLink
            className={({ isActive }) =>
              `Navigation__navLink queries-invalidation ${isActive ? 'activated' : ''}`
            }
            to="/queries-invalidation"
          >
            Queries
            <br />
            Invalidation
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
