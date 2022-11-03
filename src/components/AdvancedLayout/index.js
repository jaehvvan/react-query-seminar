import { Outlet } from 'react-router-dom';

import { THEME } from '../../constant/theme';

import HeaderNavItem from '../HeaderNav/HeaderNavItem';
import HeaderNavList from '../HeaderNav/HeaderNavList';

const AdvancedLayout = () => {
  return (
    <>
      <header>
        <HeaderNavList>
          <HeaderNavItem pathname={'/'} text={'Home'} theme={THEME.red00} />
          <HeaderNavItem
            pathname={'/advanced/prefetch'}
            text={'Prefetch'}
            theme={THEME.yellow00}
            activatedTheme={THEME.yellow20}
          />
          <HeaderNavItem
            pathname={'/advanced/dependent-queries'}
            text={'Dependent\nQueries'}
            theme={THEME.green00}
            activatedTheme={THEME.green20}
          />
          <HeaderNavItem
            pathname={'/advanced/optimistic-update'}
            text={'Optimistic\nUpdate'}
            theme={THEME.blue00}
            activatedTheme={THEME.blue20}
          />
        </HeaderNavList>
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default AdvancedLayout;
