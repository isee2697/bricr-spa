import React from 'react';

import { AppRoutes } from 'routing/AppRoutes';
import { Dashboard } from 'ui/templates';

export const App = () => {
  return (
    <Dashboard>
      <AppRoutes />
    </Dashboard>
  );
};
