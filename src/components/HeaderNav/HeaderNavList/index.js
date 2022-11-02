const HeaderNavList = ({ children }) => {
  return (
    <nav className="HeaderNavList">
      <ul className="HeaderNavList__ul">{children}</ul>
    </nav>
  );
};

export default HeaderNavList;
