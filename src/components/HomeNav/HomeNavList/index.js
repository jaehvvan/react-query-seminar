const HomeNavList = ({ children, spacing }) => {
  return (
    <nav>
      <ul className={`HomeNavList__ul ${spacing}`}>{children}</ul>
    </nav>
  );
};

export default HomeNavList;
