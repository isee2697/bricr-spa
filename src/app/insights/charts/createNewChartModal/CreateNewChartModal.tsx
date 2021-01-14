import React from 'react';

import { useLocale } from 'hooks';
import { FormModal } from 'ui/organisms';
import { AddIcon, SquareIcon } from 'ui/atoms/icons';
import { GenericField, RadioGroupField } from 'form/fields';
import { RadioDataType } from 'form/fields/radioGroupField/RadioGroupField.types';
import { FormSubSectionHeader } from 'ui/molecules';

import { ChartType, CreateNewChartBody, CreateNewChartModalProps } from './CreateNewChartModal.types';

export const CreateNewChartModal = ({ onClose, isOpened, onSubmit }: CreateNewChartModalProps) => {
  const { formatMessage } = useLocale();

  const handleSubmit = async (values: CreateNewChartBody) => {
    onSubmit(values);

    return undefined;
  };

  const types: RadioDataType[] = Object.keys(ChartType).map(key => ({
    label: formatMessage({ id: `dictionaries.insight_chart_type.${key}` }),
    value: key,
    icon: <SquareIcon />,
  }));

  return (
    <FormModal
      onSubmit={handleSubmit}
      isOpened={isOpened}
      onClose={onClose}
      title={formatMessage({ id: 'insights.charts.create_new_chart.title' })}
      addIcon={<AddIcon color="inherit" />}
      addText={formatMessage({ id: 'insights.charts.create_new_chart.start_visualization' })}
    >
      <FormSubSectionHeader
        title={formatMessage({
          id: 'insights.charts.create_new_chart.type_of_report',
        })}
        subtitle={formatMessage({ id: 'common.choose_one_option_below' })}
        noBorder
      />
      <RadioGroupField xs={2} name="type" options={types} />
      <GenericField name="title" label={formatMessage({ id: 'insights.charts.create_new_chart.name_of_report' })} />
    </FormModal>
  );
};
