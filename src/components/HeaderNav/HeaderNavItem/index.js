import { NavLink } from 'react-router-dom';

const HeaderNavItem = ({ pathname, theme = '', activatedTheme = '', text, onMouseEnter }) => {
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
        onMouseEnter={onMouseEnter}
      >
        {text}
      </NavLink>
    </li>
  );
};

export default HeaderNavItem;
