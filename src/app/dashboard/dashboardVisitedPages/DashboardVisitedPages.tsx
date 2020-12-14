import React, { useState } from 'react';

import { Box, VisitedPage, Collapse } from 'ui/atoms';
import { VisitedPages } from 'ui/organisms';
import { InfoSection } from 'ui/molecules';
import { useLocale } from 'hooks';

import { DashboardVisitedPagesProps } from './DashboardVisitedPages.types';

export const DashboardVisitedPages = ({ pages }: DashboardVisitedPagesProps) => {
  const [allVisible, setAllVisible] = useState(false);
  const { formatMessage } = useLocale();

  return (
    <VisitedPages opened={allVisible} onMoreClick={() => setAllVisible(!allVisible)}>
      {pages.length ? (
        <>
          <Box>
            {pages.slice(0, 5).map(item => (
              <VisitedPage key={item.name} {...item} />
            ))}
          </Box>
          <Collapse in={allVisible}>
            <Box>
              {pages.length > 5 && pages.slice(5, pages.length).map(item => <VisitedPage key={item.name} {...item} />)}
            </Box>
          </Collapse>
        </>
      ) : (
        <InfoSection emoji="🤖">{formatMessage({ id: 'common.pages.empty_title' })}</InfoSection>
      )}
    </VisitedPages>
  );
};
