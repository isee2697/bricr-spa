import { useTheme } from '@material-ui/core/styles';
import React from 'react';
import { useHistory } from 'react-router';

import { Avatar, Box } from 'ui/atoms';
import { SiteIcon } from 'ui/atoms/icons/site/SiteIcon';
import { Page, PageType } from 'hooks/usePages/usePages.types';
import { useLocale } from 'hooks';
import {
  CalendarIcon,
  CrmIcon,
  FolderSvgIcon,
  GraphIcon,
  HomeIcon,
  MailIcon,
  SettingsIcon,
  TasksIcon,
} from 'ui/atoms/icons';

import * as S from './VisitedPage.styles';

const getCategoryIcon = (pageCategory: PageType) => {
  switch (pageCategory) {
    case PageType.Calendar:
      return <CalendarIcon color="inherit" />;
    case PageType.CRM:
      return <CrmIcon color="inherit" />;
    case PageType.Documents:
      return <FolderSvgIcon color="inherit" />;
    case PageType.Email:
      return <MailIcon color="inherit" />;
    case PageType.Pim:
      return <HomeIcon color="inherit" />;
    case PageType.Sales:
      return <GraphIcon color="inherit" />;
    case PageType.Settings:
      return <SettingsIcon color="inherit" />;
    case PageType.Tasks:
      return <TasksIcon color="inherit" />;
    default:
      return <SiteIcon color="inherit" />;
  }
};

export const VisitedPage = ({ category, subCategory, name, path }: Page) => {
  const theme = useTheme();
  const { formatMessage } = useLocale();
  const { push } = useHistory();

  return (
    <S.VisitedPageWrapper>
      <Box onClick={() => push(path)} display="flex" mb={2}>
        <Box mr={1}>
          <Avatar variant="rounded" bgcolor={theme.palette.purple.light}>
            <Box color={theme.palette.purple.main}>{getCategoryIcon(category)}</Box>
          </Avatar>
        </Box>
        <Box>
          <Box fontWeight="fontWeightBold" lineHeight={`${theme.spacing(2)}px`} fontSize={theme.spacing(1.5)}>
            {formatMessage({ id: `common.pages.category.${category.toLowerCase()}` })}
            {subCategory &&
              `: ${formatMessage({ id: `common.pages.sub_catgeory.${subCategory}`, defaultMessage: subCategory })}`}
          </Box>
          <Box color={theme.palette.gray.main} lineHeight={`${theme.spacing(2)}px`} fontSize={theme.spacing(1.5)}>
            {name}
          </Box>
        </Box>
      </Box>
    </S.VisitedPageWrapper>
  );
};
