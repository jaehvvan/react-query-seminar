import HomeNavItem from '../../components/HomeNav/HomeNavItem';
import HomeNavList from '../../components/HomeNav/HomeNavList';
import { THEME } from '../../constant/theme';

const Home = () => {
  return (
    <main className="Home">
      <h1 className="Home__h1 mb--24">🌱 기초 개념</h1>
      <HomeNavList spacing={'mb--56'}>
        <HomeNavItem pathname={'/queries'} theme={THEME.yellow00} text={'Queries'} />
        <HomeNavItem pathname={'/mutations'} theme={THEME.green00} text={'Mutations'} />
        <HomeNavItem
          pathname={'/queries-invalidation'}
          theme={THEME.blue00}
          text={'Queries\nInvalidation'}
        />
      </HomeNavList>
      <h1 className="Home__h1 mb--24">🪴 꽤 흥미로울수도?</h1>
      <HomeNavList spacing={'mb--56'}>
        <HomeNavItem pathname={'/prefetch'} theme={THEME.yellow10} text={'Prefetch'} />
        <HomeNavItem
          pathname={'/dependent-queries'}
          theme={THEME.green10}
          text={'Dependent\nQueries'}
        />
        <HomeNavItem
          pathname={'/optimistic-update'}
          theme={THEME.blue10}
          text={'Optimistic\nUpdate'}
        />
      </HomeNavList>
    </main>
  );
};

export default Home;
