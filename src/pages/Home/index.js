import { THEME } from '../../constant/theme';

import HomeNavItem from '../../components/HomeNav/HomeNavItem';
import HomeNavList from '../../components/HomeNav/HomeNavList';

const Home = () => {
  return (
    <main className="Home">
      <h1 className="Home__h1 mb--24">🌱 Core 개념</h1>
      <HomeNavList spacing={'mb--56'}>
        <HomeNavItem pathname={'/basic/queries'} theme={THEME.yellow00} text={'Queries'} />
        <HomeNavItem pathname={'/basic/mutations'} theme={THEME.green00} text={'Mutations'} />
        <HomeNavItem
          pathname={'/basic/queries-invalidation'}
          theme={THEME.blue00}
          text={'Queries\nInvalidation'}
        />
      </HomeNavList>
      <h1 className="Home__h1 mb--24">🪴 꽤 흥미로울수도?</h1>
      <HomeNavList spacing={'mb--56'}>
        <HomeNavItem pathname={'/advanced/prefetch'} theme={THEME.yellow10} text={'Prefetch'} />
        <HomeNavItem
          pathname={'/advanced/dependent-queries'}
          theme={THEME.green10}
          text={'Dependent\nQueries'}
        />
        <HomeNavItem
          pathname={'/advanced/optimistic-update'}
          theme={THEME.blue10}
          text={'Optimistic\nUpdate'}
        />
      </HomeNavList>
    </main>
  );
};

export default Home;
