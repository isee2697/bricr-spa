import React from 'react';
import { useParams } from 'react-router-dom';

import { useEntityType } from 'app/shared/entityType';
import { NavBreadcrumb, TextField } from 'ui/atoms';
import { joinUrlParams } from 'routing/AppRoute.utils';
import { useLocale } from 'hooks/useLocale/useLocale';
import { Page } from 'ui/templates';
import { AutosaveForm } from 'ui/organisms';

import { useStyles } from './General.styles';
import { PersonalInformation } from './personalInformation/PersonalInformation';
import { Identification } from './identification/Identification';
import { PreferredTitle } from './preferredTitle/PreferredTitle';
import { IdentificationNumber } from './identificationNumber/IdentificationNumber';
import { PersonalInformationGeneralProps } from './General.types';

export const PersonalInformationGeneral = ({ data, onSave }: PersonalInformationGeneralProps) => {
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
      <Page title={formatMessage({ id: 'crm.details.personal_information_general.title' })} titleActions={() => {}}>
        <TextField
          variant="standard"
          fullWidth
          placeholder={formatMessage({ id: 'crm.details.personal_information_general.about_placeholder' })}
          className={classes.textFieldAbout}
        />

        <PersonalInformation data={data} onSave={onSave} />
        <Identification data={data} onSave={onSave} />
        <PreferredTitle data={data} onSave={onSave} />
        <IdentificationNumber data={data} onSave={onSave} />
      </Page>
    </>
  );
};
