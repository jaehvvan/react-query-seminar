import { THEME } from '../../constant/theme';

import HeaderNavItem from '../HeaderNav/HeaderNavItem';
import HeaderNavList from '../HeaderNav/HeaderNavList';

const BasicHeaderNav = () => {
  return (
    <HeaderNavList>
      <HeaderNavItem pathname={'/'} text={'Home'} theme={THEME.red00} />
      <HeaderNavItem
        pathname={'/queries'}
        text={'Queries'}
        theme={THEME.yellow00}
        activatedTheme={THEME.yellow20}
      />
      <HeaderNavItem
        pathname={'/mutations'}
        text={'Mutations'}
        theme={THEME.green00}
        activatedTheme={THEME.green20}
      />
      <HeaderNavItem
        pathname={'/queries-invalidation'}
        text={'Queries\nInvalidation'}
        theme={THEME.blue00}
        activatedTheme={THEME.blue20}
      />
    </HeaderNavList>
  );
};

export default BasicHeaderNav;
