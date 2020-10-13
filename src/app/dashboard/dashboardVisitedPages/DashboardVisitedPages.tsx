import React from 'react';
import { Box, VisitedPage } from 'ui/atoms';
import { VisitedPages } from 'ui/organisms';

import { DashboardVisitedPagesProps } from './DashboardVisitedPages.types';

export const DashboardVisitedPages = ({ pages }: DashboardVisitedPagesProps) => (
  <VisitedPages onMoreClick={() => {}} onManageClick={() => {}}>
    <Box>
      {pages.map(item => (
        <VisitedPage category={item.category} subCategory={item.subCategory} key={item.name}>
          {item.name}
        </VisitedPage>
      ))}
    </Box>
  </VisitedPages>
);
