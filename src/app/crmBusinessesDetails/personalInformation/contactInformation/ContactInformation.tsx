import React from 'react';
import { useParams } from 'react-router-dom';

import { useLocale } from 'hooks/useLocale/useLocale';
import { Grid, IconButton, NavBreadcrumb, Typography } from 'ui/atoms';
import { joinUrlParams } from 'routing/AppRoute.utils';
import { useEntityType } from 'app/shared/entityType';
import { Page } from 'ui/templates';
import { HelpIcon, MenuIcon } from 'ui/atoms/icons';

import { useStyles } from './ContactInformation.styles';
import { Addresses } from './addresses/Addresses';
import { PhoneNumbers } from './phoneNumbers/PhoneNumbers';
import { EmailAddresses } from './emailAddresses/EmailAddresses';
import { SocialMedia } from './socialMedia/SocialMedia';
import { ContactInformationProps } from './ContactInformation.types';

export const ContactInformation = ({ onSave }: ContactInformationProps) => {
  const classes = useStyles();
  const { formatMessage } = useLocale();
  const { baseUrl } = useEntityType();
  const urlParams = useParams();

  return (
    <>
      <NavBreadcrumb
        title={formatMessage({ id: 'crm.details.personal_information_contact_information.title' })}
        to="/personal_information_contact_information"
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

        <Addresses onSave={onSave} />
        <PhoneNumbers onSave={onSave} />
        <EmailAddresses onSave={onSave} />
        <SocialMedia onSave={onSave} />
      </Page>
    </>
  );
};
