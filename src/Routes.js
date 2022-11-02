import { BrowserRouter, Routes as AppRoutes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Queries from './pages/Queries';
import Mutations from './pages/Mutations';
import QueriesInvalidation from './pages/QueriesInvalidation';
import Prefetch from './pages/Prefetch';
import DependentQueries from './pages/DependentQueries';
import OptimisticUpdate from './pages/OptimisticUpdate';

const Routes = () => {
  return (
    <BrowserRouter>
      <AppRoutes>
        <Route path="/" element={<Home />} />

        {/* Basic */}
        <Route path="/queries" element={<Queries />} />
        <Route path="/mutations" element={<Mutations />} />
        <Route path="/queries-invalidation" element={<QueriesInvalidation />} />

        {/* Advanced */}
        <Route path="/prefetch" element={<Prefetch />} />
        <Route path="/dependent-queries" element={<DependentQueries />} />
        <Route path="/optimistic-update" element={<OptimisticUpdate />} />
      </AppRoutes>
    </BrowserRouter>
  );
};

export default Routes;
