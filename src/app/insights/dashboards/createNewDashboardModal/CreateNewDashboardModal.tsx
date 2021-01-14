import React from 'react';

import { useLocale } from 'hooks';
import { FormModal } from 'ui/organisms';
import { AddIcon, SquareIcon } from 'ui/atoms/icons';
import { GenericField, RadioGroupField } from 'form/fields';
import { RadioDataType } from 'form/fields/radioGroupField/RadioGroupField.types';
import { FormSubSectionHeader } from 'ui/molecules';
import { DashboardType } from '../Dashboards.types';

import { CreateNewDashboardBody, CreateNewDashboardModalProps } from './CreateNewDashboardModal.types';

export const CreateNewDashboardModal = ({ onClose, isOpened, onSubmit }: CreateNewDashboardModalProps) => {
  const { formatMessage } = useLocale();

  const handleSubmit = async (values: CreateNewDashboardBody) => {
    onSubmit(values);

    return undefined;
  };

  const types: RadioDataType[] = [
    ...Object.keys(DashboardType).map(key => ({
      label: formatMessage({ id: `dictionaries.insight_dashboard_type.${key}` }),
      value: key,
      icon: <SquareIcon />,
    })),
    {
      label: formatMessage({ id: 'dictionaries.insight_dashboard_type.blank_dashboard' }),
      value: 'BlankDashboard',
      icon: <AddIcon />,
    },
  ];

  return (
    <FormModal
      onSubmit={handleSubmit}
      isOpened={isOpened}
      onClose={onClose}
      title={formatMessage({ id: 'insights.dashboards.create_new_dashboard.title' })}
      addIcon={<AddIcon color="inherit" />}
      addText={formatMessage({ id: 'insights.dashboards.create_new_dashboard.add_new_dashboard' })}
    >
      <FormSubSectionHeader
        title={formatMessage({
          id: 'insights.dashboards.create_new_dashboard.type_of_dashboard',
        })}
        subtitle={formatMessage({ id: 'common.choose_one_option_below' })}
        noBorder
      />
      <RadioGroupField xs={2} name="type" options={types} />
      <GenericField
        name="name"
        label={formatMessage({ id: 'insights.dashboards.create_new_dashboard.name_of_dashboard' })}
      />
    </FormModal>
  );
};
