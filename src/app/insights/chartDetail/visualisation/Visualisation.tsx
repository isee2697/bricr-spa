import React from 'react';

import { useLocale } from 'hooks';
import { AutosaveForm, FormSection } from 'ui/organisms';
import { ColorPickerField, RadioGroupField, CheckboxField, SelectField } from 'form/fields';
import { Box, Grid, MenuItem } from 'ui/atoms';
import { FormSubSectionHeader } from 'ui/molecules';
import {
  VisualisationProps,
  ChartType,
  ChartSortbyType,
  ChartComparisonType,
  ChartDataType,
} from '../ChartDetail.types';
import { SquareIcon } from 'ui/atoms/icons';

export function Visualisation({ data, onUpdate }: VisualisationProps) {
  const { formatMessage } = useLocale();

  const chartTypeOptions = Object.keys(ChartType).map(type => ({
    label: `common.chart_type.${type}`,
    icon: <SquareIcon />,
    value: type,
  }));

  const comparisonTypes = Object.keys(ChartComparisonType);

  const sortByTypes = Object.keys(ChartSortbyType);

  const amountOptions = [5, 10, 15, 25, 50];

  return (
    <FormSection title={formatMessage({ id: 'insights.chart_details.visualisation' })} isExpandable isInitExpanded>
      {editing => (
        <AutosaveForm initialValues={data} onSave={(values: ChartDataType) => onUpdate(values)}>
          <FormSubSectionHeader
            title={formatMessage({ id: 'insights.chart_details.pick_chart_type' })}
            subtitle={formatMessage({ id: 'common.choose_one_option_below' })}
          />
          <Box mt={2} />
          <RadioGroupField disabled={!editing} name="chartType" options={chartTypeOptions} />
          <Box mt={4} />
          <FormSubSectionHeader title={formatMessage({ id: 'insights.chart_details.chart_color' })} />
          <Box mt={2} />
          <Grid container spacing={1}>
            <Grid item xs={12} sm={6}>
              <ColorPickerField
                name="primaryColor"
                disabled={!editing}
                label="insights.chart_details.chart_color_one"
                placeholder="common.color_placeholder"
                defaultColor="#194D33"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <ColorPickerField
                name="secondaryColor"
                disabled={!editing}
                label="insights.chart_details.chart_color_two"
                placeholder="common.color_placeholder"
                defaultColor="#EE2F57"
              />
            </Grid>
          </Grid>
          <Box mt={4} />
          <FormSubSectionHeader title={formatMessage({ id: 'insights.chart_details.display_options' })} />
          <Box mt={2} />
          <Grid container spacing={1}>
            <Grid item xs={12} sm={6}>
              <CheckboxField
                name="showTotalRow"
                label={formatMessage({ id: 'insights.chart_details.show_total_row' })}
                disabled={!editing}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <CheckboxField
                name="hideDataLabels"
                label={formatMessage({ id: 'insights.chart_details.hide_data_labels' })}
                disabled={!editing}
              />
            </Grid>
          </Grid>
          <Box mt={2} />
          <Grid container spacing={1}>
            <Grid item xs={12} sm={4}>
              <SelectField
                name="comparison"
                label={formatMessage({ id: 'insights.chart_details.comparison' })}
                disabled={!editing}
              >
                {comparisonTypes.map(option => (
                  <MenuItem key={option} value={option}>
                    {formatMessage({ id: `insights.chart_details.comparison_type.${option}` })}
                  </MenuItem>
                ))}
              </SelectField>
            </Grid>
            <Grid item xs={12} sm={4}>
              <SelectField
                name="sortBy"
                label={formatMessage({ id: 'insights.chart_details.sort_by' })}
                disabled={!editing}
              >
                {sortByTypes.map(option => (
                  <MenuItem key={option} value={option}>
                    {formatMessage({ id: `insights.chart_details.sort_by_type.${option}` })}
                  </MenuItem>
                ))}
              </SelectField>
            </Grid>
            <Grid item xs={12} sm={4}>
              <SelectField
                name="displayValuesAmount"
                label={formatMessage({ id: 'insights.chart_details.data_amount' })}
                disabled={!editing}
              >
                {amountOptions.map(option => (
                  <MenuItem key={option} value={option}>
                    {formatMessage({ id: `insights.chart_details.data_amount:count` }).replace(
                      ':count',
                      String(option),
                    )}
                  </MenuItem>
                ))}
              </SelectField>
            </Grid>
          </Grid>
        </AutosaveForm>
      )}
    </FormSection>
  );
}
