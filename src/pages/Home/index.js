import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <nav className="Home">
      <ul className="Home__ul">
        <li>
          <Link className="Home__link queries" to="/queries">
            Queries
          </Link>
        </li>
        <li>
          <Link className="Home__link mutations" to="/mutations">
            Mutations
          </Link>
        </li>
        <li>
          <Link className="Home__link queries-invalidation" to="/queries-invalidation">
            Queries
            <br />
            Invalidation
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Home;
