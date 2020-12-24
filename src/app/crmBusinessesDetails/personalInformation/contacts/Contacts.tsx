import React from 'react';
import { useParams } from 'react-router-dom';

import { useLocale } from 'hooks';
import { NavBreadcrumb, Grid, IconButton, Typography } from 'ui/atoms';
import { joinUrlParams } from 'routing/AppRoute.utils';
import { useEntityType } from 'app/shared/entityType';
import { Page } from 'ui/templates';
import { HelpIcon, MenuIcon } from 'ui/atoms/icons';

import { ContactsProps } from './Contacts.types';
import { useStyles } from './Contacts.styles';
import { People } from './people/People';

export const Contacts = ({ onSave }: ContactsProps) => {
  const { formatMessage } = useLocale();
  const { baseUrl } = useEntityType();
  const urlParams = useParams();
  const classes = useStyles();

  return (
    <>
      <NavBreadcrumb
        title={formatMessage({ id: 'crm.details.personal_information_contacts.title' })}
        to="/personal_information_contacts"
        urlBase={joinUrlParams(baseUrl, urlParams)}
      />
      <Page withoutHeader>
        <Grid xs={12} item container className={classes.header}>
          <Typography variant="h1" className={classes.title}>
            {formatMessage({ id: 'crm.details.personal_information_contact_information.title' })}
          </Typography>
          <IconButton variant="rounded" size="small" onClick={() => {}} className={classes.marginRightTwo}>
            <HelpIcon />
          </IconButton>
          <IconButton variant="rounded" size="small" onClick={() => {}}>
            <MenuIcon />
          </IconButton>
        </Grid>

        <People />
      </Page>
    </>
  );
};
