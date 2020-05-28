import React, { ReactElement, useState } from 'react';
import { Typography } from '@material-ui/core';

import { FormSection } from 'ui/organisms';
import { useLocale } from 'hooks';
import { InfoSection } from 'ui/molecules';

import { ServiceTypeListProps } from './Services.types';
import { AddServiceModalContainer } from './addServiceModal/AddServiceModalContainer';

export const ServiceTypeList: <T>(p: ServiceTypeListProps<T>) => ReactElement<ServiceTypeListProps<T>> = ({
  emptyEmoji,
  items,
  title,
  type,
}) => {
  const { formatMessage } = useLocale();
  const [isOpenAddService, setIsOpenAddService] = useState(false);

  return (
    <>
      <FormSection
        title={formatMessage({ id: title })}
        isEditable={items.length > 0}
        onAdd={() => setIsOpenAddService(true)}
      >
        {isEditMode => (
          <>
            {items.length === 0 && (
              <InfoSection emoji={emptyEmoji}>
                <Typography variant="h3">
                  {formatMessage({ id: `pim_details.services.${type}_empty_title` })}
                </Typography>
                <Typography variant="h3">
                  {formatMessage({ id: `pim_details.services.${type}_empty_description` })}
                </Typography>
              </InfoSection>
            )}
            {items.length > 0 && <>Print lists editable? {isEditMode}</>}
          </>
        )}
      </FormSection>
      <AddServiceModalContainer type={type} isOpened={isOpenAddService} onClose={() => setIsOpenAddService(false)} />
    </>
  );
};
