import { Link } from 'react-router-dom';

const HomeNavItem = ({ pathname, theme = '', text }) => {
  return (
    <li>
      <Link
        className={`HomeNavItem__link ${theme}`}
        to={pathname}
        style={{ backgroundColor: theme }}
      >
        {text}
      </Link>
    </li>
  );
};

export default HomeNavItem;
