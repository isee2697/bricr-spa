import React, { ReactNode } from 'react';
import { scaleBand } from '@devexpress/dx-chart-core';
import { Stack, Animation, EventTracker, Palette, Colors, ArgumentScale } from '@devexpress/dx-react-chart';
import {
  Chart,
  Legend,
  Tooltip,
  ArgumentAxis,
  ValueAxis,
  BarSeries,
  AreaSeries,
  LineSeries,
  PieSeries,
  ScatterSeries,
  SplineSeries,
} from '@devexpress/dx-react-chart-material-ui';
import { useTheme } from '@material-ui/core';

import { useLocale } from 'hooks';
import { AutosaveForm, FormSection } from 'ui/organisms';
import { ChartType, PreviewProps } from '../ChartDetail.types';
import { Box, Typography } from 'ui/atoms';
import { InfoSection } from 'ui/molecules';

import { ChartDataItem } from './Preview.types';
import { useStyles } from './Preview.styles';

interface ChartComponentProps {
  chartType?: ChartType;
  valueField: string;
  name: string;
  argumentField: string;
}

const ChartComponent = ({ chartType, valueField, name, argumentField }: ChartComponentProps) => {
  switch (chartType) {
    case ChartType.Area:
      return (
        <AreaSeries valueField={valueField} name={`${argumentField}-${valueField}`} argumentField={argumentField} />
      );
    case ChartType.Column:
      return (
        <SplineSeries valueField={valueField} name={`${argumentField}-${valueField}`} argumentField={argumentField} />
      );
    case ChartType.Line:
      return (
        <LineSeries valueField={valueField} name={`${argumentField}-${valueField}`} argumentField={argumentField} />
      );
    case ChartType.Bar:
      return (
        <BarSeries valueField={valueField} name={`${argumentField}-${valueField}`} argumentField={argumentField} />
      );
    case ChartType.Pie:
      return (
        <PieSeries valueField={valueField} name={`${argumentField}-${valueField}`} argumentField={argumentField} />
      );
    case ChartType.Donut:
      return (
        <PieSeries valueField={valueField} name={`${argumentField}-${valueField}`} argumentField={argumentField} />
      );
    case ChartType.Summary:
      return (
        <ScatterSeries valueField={valueField} name={`${argumentField}-${valueField}`} argumentField={argumentField} />
      );
    case ChartType.Table:
      return (
        <BarSeries valueField={valueField} name={`${argumentField}-${valueField}`} argumentField={argumentField} />
      );
    default:
      return (
        <BarSeries valueField={valueField} name={`${argumentField}-${valueField}`} argumentField={argumentField} />
      );
  }
};

export function Preview({ data }: PreviewProps) {
  const { formatMessage } = useLocale();
  const classes = useStyles();
  const theme = useTheme();

  const chartData: ChartDataItem[] = [];

  for (let i = 0; i < (data.displayValuesAmount || 10); i++) {
    const value: ChartDataItem = {};
    data.sources?.xSources.forEach(xAxis => (value[xAxis.type] = String(i)));
    data.sources?.ySources.forEach(yAxis => (value[yAxis.type] = Math.floor(Math.random() * 100)));

    chartData.push(value);
  }

  const scheme: Colors = [
    data.primaryColor || '#40C4FF',
    data.secondaryColor || '#FF5252',
    '#00C853',
    '#FFEB3B',
    '#FF4081',
    '#E040FB',
  ];

  return (
    <FormSection title={formatMessage({ id: 'insights.chart_details.preview' })} isExpandable isInitExpanded>
      {editing => (
        <AutosaveForm onSave={() => Promise.resolve(undefined)}>
          {!data.sources?.xSources.length || !data.sources?.ySources.length ? (
            <InfoSection emoji="🤔">
              <Typography variant="h3">{formatMessage({ id: 'insights.chart_details.add_axis' })}</Typography>
            </InfoSection>
          ) : (
            <Box className={classes.chartWrapper}>
              <Chart data={chartData} height={theme.spacing(50)}>
                <Palette scheme={scheme} />
                {data.chartType !== ChartType.Pie && (
                  <>
                    <ArgumentScale factory={scaleBand} />
                    <ArgumentAxis />
                  </>
                )}
                {data.chartType !== ChartType.Pie && <ValueAxis />}

                {data.sources?.xSources.reduce(
                  (prev: ReactNode[], xAxis) => [
                    ...prev,
                    ...(data.sources?.ySources.map(yAxis => (
                      <ChartComponent
                        chartType={data.chartType}
                        valueField={yAxis.type}
                        name={`${xAxis.type}-${yAxis.type}`}
                        argumentField={xAxis.type}
                      />
                    )) || []),
                  ],
                  [],
                )}
                <Animation />
                <Stack />
                <Legend />
                <EventTracker />
                <Tooltip />
              </Chart>
            </Box>
          )}
        </AutosaveForm>
      )}
    </FormSection>
  );
}
