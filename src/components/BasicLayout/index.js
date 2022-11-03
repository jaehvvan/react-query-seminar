import { Outlet } from 'react-router-dom';

import { THEME } from '../../constant/theme';

import HeaderNavItem from '../HeaderNav/HeaderNavItem';
import HeaderNavList from '../HeaderNav/HeaderNavList';

const BasicLayout = () => {
  return (
    <>
      <header>
        <HeaderNavList>
          <HeaderNavItem pathname={'/'} text={'Home'} theme={THEME.red00} />
          <HeaderNavItem
            pathname={'/basic/queries'}
            text={'Queries'}
            theme={THEME.yellow00}
            activatedTheme={THEME.yellow20}
          />
          <HeaderNavItem
            pathname={'/basic/mutations'}
            text={'Mutations'}
            theme={THEME.green00}
            activatedTheme={THEME.green20}
          />
          <HeaderNavItem
            pathname={'/basic/queries-invalidation'}
            text={'Queries\nInvalidation'}
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

export default BasicLayout;
