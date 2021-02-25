import React from 'react';
import { useParams } from 'react-router-dom';
import { DateTime } from 'luxon';
import uuid from 'uuid';

import { ContactAddressType, useGetCrmGeneralQuery } from 'api/types';
import { Loader } from 'ui/atoms';
import { CRM as mockCrm } from 'api/mocks/crm';
import { CRM_BUSINESS_MATCH_PROFILES } from 'api/mocks/crm-business';
import { useSnackbar, useLocale } from 'hooks';

import { MergeCrmRelation } from './MergeCrmRelation';
import { CrmDetailItem, MergeCrmRelationContainerProps, ObjectType } from './MergeCrmRelation.types';

const matches: CrmDetailItem[] = [
  {
    ...mockCrm,
    id: uuid.v4(),
    address: {
      type: ContactAddressType.HomeAddress,
      street: 'Isenburgstraat 36 bis',
      houseNumber: 4811,
      city: 'Breda',
    },
    createdAt: DateTime.fromJSDate(new Date()),
    matchedPercent: 90,
    matchProfiles: CRM_BUSINESS_MATCH_PROFILES.slice(0, 1).map(item => ({ ...item, id: uuid.v4() })),
  },
  {
    ...mockCrm,
    id: uuid.v4(),
    address: {
      type: ContactAddressType.HomeAddress,
      street: 'Isenburgstraat 11 bis',
      houseNumber: 4814,
      city: 'Breda',
    },
    createdAt: DateTime.fromJSDate(new Date()),
    matchedPercent: 40,
    matchProfiles: CRM_BUSINESS_MATCH_PROFILES.map(item => ({ ...item, id: uuid.v4() })),
  },
];

export const MergeCrmRelationContainer = (props: MergeCrmRelationContainerProps) => {
  const { id } = useParams<{ id: string }>();
  const { formatMessage } = useLocale();
  const { open: openSnackbar } = useSnackbar();
  const { data } = useGetCrmGeneralQuery({ variables: { id } });

  if (!data?.getCrmGeneral) {
    return <Loader />;
  }

  const {
    getCrmGeneral: { firstName, initials, lastName, avatar },
  } = data;

  const crm: CrmDetailItem = {
    ...mockCrm,
    id,
    firstName,
    initials,
    lastName,
    avatar,
    address: {
      type: ContactAddressType.HomeAddress,
      street: 'Isenburgstraat 12 bis',
      houseNumber: 4811,
      city: 'Breda',
    },
    createdAt: DateTime.fromJSDate(new Date()),
    matchProfiles: CRM_BUSINESS_MATCH_PROFILES.map(item => ({ ...item, id: uuid.v4() })),
  };

  const handleUndo = async () => {
    return undefined;
  };

  const handleSubmit = async (values: ObjectType) => {
    openSnackbar({
      severity: 'success',
      message: formatMessage({ id: `crm.merge_relation.success_message` }),
      modalContent: <></>,
      modalTitle: formatMessage({ id: `crm.merge_relation.success_message.title` }),
      onUndo: () => handleUndo(),
    });

    return undefined;
  };

  return <MergeCrmRelation onSubmit={handleSubmit} crm={crm} matches={matches} {...props} />;
};
