import React from 'react';
import { Stack, Animation } from '@devexpress/dx-react-chart';
import { Chart, BarSeries, ArgumentAxis, ValueAxis } from '@devexpress/dx-react-chart-material-ui';
import { useTheme } from '@material-ui/core';

import { Card, CardContent } from 'ui/atoms';

import { useStyles } from './Graph.styles';
import { ChartDataItem, CustomBarProps } from './Graph.types';

const CustomBar = ({ arg, barWidth, maxBarWidth, val, startVal, index, color, value }: CustomBarProps) => {
  const theme = useTheme();
  const width = theme.spacing(1.5);

  const colors = [
    theme.palette.orange.main,
    theme.palette.primary.main,
    theme.palette.green.main,
    theme.palette.pink.main,
  ];

  return <rect x={arg - width / 2} y={val} width={13} height={startVal - val} rx={4} fill={colors[index]} />;
};

export const Graph = () => {
  const classes = useStyles();
  const theme = useTheme();

  const data = [
    {
      state: 'Objecttype1',
      values: [20, 15, 25],
    },
    {
      state: 'Objecttype2',
      values: [8, 11, 10, 18, 20],
    },
    {
      state: 'Objecttype3',
      values: [12, 17],
    },
    {
      state: 'Objecttype4',
      values: [25, 17],
    },
  ];

  const chartData = data.map(state => {
    let value: ChartDataItem = { state: state.state };
    for (let index = 0; index < state.values.length; index++) {
      value = {
        ...value,
        [`value${index}`]: state.values[index],
      };
    }

    return value;
  });

  return (
    <Card>
      <CardContent className={classes.content}>
        <Chart data={chartData} height={theme.spacing(19.5)}>
          <ArgumentAxis />
          <ValueAxis showGrid={false} />
          <BarSeries valueField="value1" name="value1" argumentField={'state'} pointComponent={CustomBar} />
          <BarSeries valueField="value2" name="value2" argumentField={'state'} pointComponent={CustomBar} />
          <BarSeries valueField="value3" name="value3" argumentField={'state'} pointComponent={CustomBar} />
          <BarSeries valueField="value4" name="value4" argumentField={'state'} pointComponent={CustomBar} />
          <BarSeries valueField="value5" name="value5" argumentField={'state'} pointComponent={CustomBar} />
          <Animation />
          <Stack />
        </Chart>
      </CardContent>
    </Card>
  );
};
