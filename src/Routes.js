import { BrowserRouter, Routes as AppRoutes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Queries from './pages/Queries';
import Mutations from './pages/Mutations';
import QueriesInvalidation from './pages/QueriesInvalidation';
import Prefetch from './pages/Prefetch';
import DependentQueries from './pages/DependentQueries';
import OptimisticUpdate from './pages/OptimisticUpdate';

import AdvancedLayout from './components/AdvancedLayout';
import BasicLayout from './components/BasicLayout';

const Routes = () => {
  return (
    <BrowserRouter>
      <AppRoutes>
        <Route path="/" element={<Home />} />

        {/* Basic */}
        <Route path="/basic" element={<BasicLayout />}>
          <Route path="/basic/queries" element={<Queries />} />
          <Route path="/basic/mutations" element={<Mutations />} />
          <Route path="/basic/queries-invalidation" element={<QueriesInvalidation />} />
        </Route>

        {/* Advanced */}
        <Route path="/advanced" element={<AdvancedLayout />}>
          <Route path="/advanced/prefetch" element={<Prefetch />} />
          <Route path="/advanced/dependent-queries" element={<DependentQueries />} />
          <Route path="/advanced/optimistic-update" element={<OptimisticUpdate />} />
        </Route>
      </AppRoutes>
    </BrowserRouter>
  );
};

export default Routes;
