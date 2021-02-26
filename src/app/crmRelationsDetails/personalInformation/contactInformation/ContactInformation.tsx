import React from 'react';
import { useParams } from 'react-router-dom';

import { useLocale } from 'hooks/useLocale/useLocale';
import { NavBreadcrumb } from 'ui/atoms';
import { joinUrlParams } from 'routing/AppRoute.utils';
import { useEntityType } from 'app/shared/entityType';
import { Page } from 'ui/templates';

import { Addresses } from './addresses/Addresses';
import { PhoneNumbers } from './phoneNumbers/PhoneNumbers';
import { EmailAddresses } from './emailAddresses/EmailAddresses';
import { SocialMedia } from './socialMedia/SocialMedia';
import { ContactInformationProps } from './ContactInformation.types';

export const ContactInformation = ({ data, onSave }: ContactInformationProps) => {
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
      <Page
        title={formatMessage({ id: 'crm.details.personal_information_contact_information.title' })}
        titleActions={<></>}
        onSave={onSave}
        name="contactInfoDescription"
        initialValues={data}
        placeholder={formatMessage({
          id: 'crm.details.personal_information_contact_information.description.placeholder',
        })}
        updatedBy={data.lastEditedBy}
        dateUpdated={data.dateUpdated}
      >
        <Addresses data={data} onSave={onSave} />
        <PhoneNumbers data={data} onSave={onSave} />
        <EmailAddresses data={data} onSave={onSave} />
        <SocialMedia data={data} onSave={onSave} />
      </Page>
    </>
  );
};
