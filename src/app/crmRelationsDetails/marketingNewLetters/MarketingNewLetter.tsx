import React from 'react';
import { useParams } from 'react-router-dom';

import { Grid, IconButton, NavBreadcrumb, Typography } from 'ui/atoms';
import { joinUrlParams } from 'routing/AppRoute.utils';
import { CrmRelationsDetailsHeader } from '../crmRelationsDetailsHeader/CrmRelationsDetailsHeader';
import { useLocale } from 'hooks';
import { useEntityType } from 'app/shared/entityType';
import { Page } from 'ui/templates';
import { HelpIcon, MenuIcon } from 'ui/atoms/icons';

import { MarketingNewLetterProps } from './MarketingNewLetter.types';
import { useStyles } from './MarketingNewLetter.styles';

export const MarketingNewLetter = ({ path, isSidebarVisible, onSidebarOpen }: MarketingNewLetterProps) => {
  const { formatMessage } = useLocale();
  const { baseUrl } = useEntityType();
  const urlParams = useParams();
  const classes = useStyles();

  return (
    <>
      <NavBreadcrumb
        title={formatMessage({ id: 'crm.details.marketing_news_letter.title' })}
        to="/marketing_news_letter"
        urlBase={joinUrlParams(baseUrl, urlParams)}
      />
      <CrmRelationsDetailsHeader onSidebarOpen={onSidebarOpen} isSidebarVisible={isSidebarVisible} />
      <Page withoutHeader>
        <Grid xs={12} item container className={classes.header}>
          <Typography variant="h1" className={classes.title}>
            {formatMessage({ id: 'crm.details.marketing_news_letter.title' })}
          </Typography>

          <IconButton variant="rounded" size="small" onClick={() => {}} className={classes.marginRightTwo}>
            <HelpIcon />
          </IconButton>

          <IconButton variant="rounded" size="small" onClick={() => {}}>
            <MenuIcon />
          </IconButton>
        </Grid>
      </Page>
    </>
  );
};
