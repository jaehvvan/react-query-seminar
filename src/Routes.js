import { BrowserRouter, Routes as AppRoutes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Mutations from './pages/Mutations';
import Queries from './pages/Queries';
import QueriesInvalidation from './pages/QueriesInvalidation';

const Routes = () => {
  return (
    <BrowserRouter>
      <AppRoutes>
        <Route path="/" element={<Home />} />
        <Route path="/queries" element={<Queries />} />
        <Route path="/mutations" element={<Mutations />} />
        <Route path="/queries-invalidation" element={<QueriesInvalidation />} />
      </AppRoutes>
    </BrowserRouter>
  );
};

export default Routes;
