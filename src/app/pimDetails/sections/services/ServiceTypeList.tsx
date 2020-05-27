import React, { ReactElement } from 'react';
import { Typography } from '@material-ui/core';

import { FormSection } from 'ui/organisms';
import { useLocale } from 'hooks';
import { InfoSection } from 'ui/molecules';

import { ServiceTypeListProps } from './Services.types';

export const ServiceTypeList: <T>(p: ServiceTypeListProps<T>) => ReactElement<ServiceTypeListProps<T>> = ({
  emptyDescription,
  emptyEmoji,
  emptyTitle,
  items,
  title,
}) => {
  const { formatMessage } = useLocale();

  return (
    <FormSection title={formatMessage({ id: title })} isEditable={items.length > 0} onAdd={() => {}}>
      {isEditMode => (
        <>
          {items.length === 0 && (
            <InfoSection emoji={emptyEmoji}>
              <Typography variant="h3">{formatMessage({ id: emptyTitle })}</Typography>
              <Typography variant="h3">{formatMessage({ id: emptyDescription })}</Typography>
            </InfoSection>
          )}
          {items.length > 0 && <>Print lists editable? {isEditMode}</>}
        </>
      )}
    </FormSection>
  );
};
