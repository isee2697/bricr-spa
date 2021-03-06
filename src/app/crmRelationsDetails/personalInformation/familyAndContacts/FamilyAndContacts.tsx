import React from 'react';
import { useParams } from 'react-router-dom';

import { joinUrlParams } from 'routing/AppRoute.utils';
import { useLocale } from 'hooks/useLocale/useLocale';
import { useEntityType } from 'app/shared/entityType';
import { NavBreadcrumb, Grid, IconButton, Typography } from 'ui/atoms';
import { Page } from 'ui/templates';
import { HelpIcon, MenuIcon } from 'ui/atoms/icons';

import { useStyles } from './FamilyAndContacts.styles';
import { Family } from './family/Family';
import { PartnerContainer } from './partner/PartnerContainer';
import { PeopleContainer } from './people/PeopleContainer';
import { FamilyAndContactsProps } from './FamilyAndContacts.types';

export const FamilyAndContacts = ({ data, onSave }: FamilyAndContactsProps) => {
  const classes = useStyles();
  const { formatMessage } = useLocale();
  const { baseUrl } = useEntityType();
  const urlParams = useParams();

  return (
    <>
      <NavBreadcrumb
        title={formatMessage({ id: 'crm.details.personal_information_family_and_contacts.title' })}
        to="/personal_information_family_and_contacts"
        urlBase={joinUrlParams(baseUrl, urlParams)}
      />
      <Page withoutHeader>
        <Grid xs={12} item container className={classes.header}>
          <Typography variant="h1" className={classes.title}>
            {formatMessage({ id: 'crm.details.personal_information_family_and_contacts.title' })}
          </Typography>

          <IconButton variant="rounded" size="small" onClick={() => {}} className={classes.marginRightTwo}>
            <HelpIcon />
          </IconButton>

          <IconButton variant="rounded" size="small" onClick={() => {}}>
            <MenuIcon />
          </IconButton>
        </Grid>

        <Family data={data} onSave={onSave} />
        <PartnerContainer data={data} onSave={onSave} />
        <PeopleContainer data={data} onSave={onSave} />
      </Page>
    </>
  );
};
