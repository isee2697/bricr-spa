import React from 'react';

import { FormSection } from 'ui/organisms';
import { useLocale } from 'hooks';
import { EmptyBox } from '../emptyBox/EmptyBox';

import { FormProps } from './Forms.types';

export const ClientInformation = ({ isInitEditing, isInitExpanded }: FormProps) => {
  const { formatMessage } = useLocale();

  return (
    <FormSection
      title={formatMessage({ id: 'project_details.characteristics.client_information.title' })}
      isEditable
      isExpandable
      isInitExpanded={isInitExpanded}
      isInitEditing={isInitEditing}
    >
      {inEditMode => (
        <EmptyBox
          messageLineFirst={formatMessage({
            id: 'project_details.characteristics.client_information.empty_message_line_1',
          })}
          messageLineSecond={formatMessage({
            id: 'project_details.characteristics.client_information.empty_message_line_2',
          })}
          buttonText={formatMessage({ id: 'project_details.characteristics.client_information.empty_button' })}
          onClick={() => {}}
        />
      )}
    </FormSection>
  );
};
