import { THEME } from '../../constant/theme';
import HeaderNavItem from '../HeaderNav/HeaderNavItem';
import HeaderNavList from '../HeaderNav/HeaderNavList';

const AdvancedHeaderNav = () => {
  return (
    <HeaderNavList>
      <HeaderNavItem pathname={'/'} text={'Home'} theme={THEME.red00} />
      <HeaderNavItem
        pathname={'/prefetch'}
        text={'Prefetch'}
        theme={THEME.yellow00}
        activatedTheme={THEME.yellow20}
      />
      <HeaderNavItem
        pathname={'/dependent-queries'}
        text={'Dependent\nQueries'}
        theme={THEME.green00}
        activatedTheme={THEME.green20}
      />
      <HeaderNavItem
        pathname={'/optimistic-update'}
        text={'Optimistic\nUpdate'}
        theme={THEME.blue00}
        activatedTheme={THEME.blue20}
      />
    </HeaderNavList>
  );
};

export default AdvancedHeaderNav;
