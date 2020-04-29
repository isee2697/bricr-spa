import React from 'react';
import { useTheme } from '@material-ui/core';

import { Avatar, Box } from 'ui/atoms';
import { SiteIcon } from 'ui/atoms/icons/site/SiteIcon';

import { VisitedPageProps } from './VisitedPage.types';
import * as S from './VisitedPage.styles';

export const VisitedPage = ({ category, subCategory, children }: VisitedPageProps) => {
  const theme = useTheme();

  return (
    <S.VisitedPageWrapper>
      <Box display="flex" mb={2}>
        <Box mr={1}>
          <Avatar variant="rounded" bgcolor={theme.palette.purple.light}>
            <Box color={theme.palette.purple.main}>
              <SiteIcon color="inherit" />
            </Box>
          </Avatar>
        </Box>
        <Box>
          <Box fontWeight="fontWeightBold" lineHeight={`${theme.spacing(2)}px`} fontSize={theme.spacing(1.5)}>
            {category}: {subCategory}
          </Box>
          <Box color={theme.palette.gray.main} lineHeight={`${theme.spacing(2)}px`} fontSize={theme.spacing(1.5)}>
            {children}
          </Box>
        </Box>
      </Box>
    </S.VisitedPageWrapper>
  );
};
