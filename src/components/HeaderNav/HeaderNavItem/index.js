import { NavLink } from 'react-router-dom';

const HeaderNavItem = ({ pathname, theme = '', activatedTheme = '', text }) => {
  return (
    <li className="HeaderNavItem">
      <NavLink
        className="HeaderNavItem__navLink"
        style={({ isActive }) => ({
          backgroundColor: theme,
          borderBottom: `4px solid ${isActive ? activatedTheme : 'transparent'}`,
        })}
        to={pathname}
        end
      >
        {text}
      </NavLink>
    </li>
  );
};

export default HeaderNavItem;
