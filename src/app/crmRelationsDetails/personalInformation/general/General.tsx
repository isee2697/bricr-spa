import React from 'react';
import { useParams } from 'react-router-dom';

import { useEntityType } from 'app/shared/entityType';
import { Grid, IconButton, NavBreadcrumb, Typography, TextField } from 'ui/atoms';
import { joinUrlParams } from 'routing/AppRoute.utils';
import { useLocale } from 'hooks/useLocale/useLocale';
import { Page } from 'ui/templates';
import { HelpIcon, MenuIcon } from 'ui/atoms/icons';

import { useStyles } from './General.styles';
import { PersonalInformation } from './personalInformation/PersonalInformation';
import { Identification } from './identification/Identification';
import { PreferredTitle } from './preferredTitle/PreferredTitle';
import { IdentificationNumber } from './identificationNumber/IdentificationNumber';

export const PersonalInformationGeneral = () => {
  const classes = useStyles();
  const { formatMessage } = useLocale();
  const { baseUrl } = useEntityType();
  const urlParams = useParams();

  return (
    <>
      <NavBreadcrumb
        title={formatMessage({ id: 'crm.details.personal_information_general.title' })}
        to="/personal_information_general"
        urlBase={joinUrlParams(baseUrl, urlParams)}
      />
      <Page withoutHeader>
        <Grid xs={12} item container className={classes.header}>
          <Typography variant="h1" className={classes.title}>
            {formatMessage({ id: 'crm.details.personal_information_general.title' })}
          </Typography>

          <IconButton variant="rounded" size="small" onClick={() => {}} className={classes.marginRightTwo}>
            <HelpIcon />
          </IconButton>

          <IconButton variant="rounded" size="small" onClick={() => {}}>
            <MenuIcon />
          </IconButton>

          <TextField
            variant="standard"
            fullWidth
            placeholder={formatMessage({ id: 'crm.details.personal_information_general.about_placeholder' })}
            className={classes.textFieldAbout}
          />
        </Grid>

        <PersonalInformation />
        <Identification />
        <PreferredTitle />
        <IdentificationNumber />
      </Page>
    </>
  );
};
