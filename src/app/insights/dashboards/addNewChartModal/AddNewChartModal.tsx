import React from 'react';
import { Box, DialogContent, Grid } from '@material-ui/core';

import { useLocale, useModalDispatch, useModalState } from 'hooks';
import { ChartIcon } from 'ui/atoms/icons';
import { Modal, SelectCard } from 'ui/molecules';
import { Avatar, Button } from 'ui/atoms';

import { useStyles } from './AddNewChartModal.styles';
import { AddNewChartBody, AddNewChartModalProps, ChartType } from './AddNewChartModal.types';

export const AddNewChartModal = ({ onAddNewChart }: AddNewChartModalProps) => {
  const { isOpen, options } = useModalState('add_new_chart');
  const { close } = useModalDispatch();
  const { formatMessage } = useLocale();
  const classes = useStyles();

  const handleSubmit = async (values: AddNewChartBody) => {
    if (options?.insightDashboardNewType) {
      onAddNewChart(options?.insightDashboardNewType);
    }

    close('add_new_chart');

    return undefined;
  };

  const chartTypes = [
    {
      type: ChartType.CustomChart,
      translation: 'custom_chart',
      icon: <ChartIcon color="inherit" />,
    },
    {
      type: ChartType.BricrChart,
      translation: 'bricr_chart',
      icon: <ChartIcon color="inherit" />,
    },
    {
      type: ChartType.NewChart,
      translation: 'new_chart',
      icon: <ChartIcon color="inherit" />,
    },
  ];

  return (
    <Modal
      fullWidth
      isOpened={isOpen}
      onClose={() => close('add_new_chart')}
      title={formatMessage({ id: 'insights.dashboard.add_new_chart.title' })}
    >
      <DialogContent>
        <Grid container spacing={2}>
          {chartTypes.map(chartType => (
            <Grid xs={12} item key={chartType.type}>
              <SelectCard fullWidth onClick={() => handleSubmit({ chartType: chartType.type })}>
                <Box width="100%" display="flex" alignItems="center" justifyContent="space-between">
                  <Box display="flex" alignItems="center">
                    <Avatar variant="rounded">
                      <Box>{chartType.icon}</Box>
                    </Avatar>
                    <Box ml={2} />
                    {formatMessage({ id: `dictionaries.chart_type.${chartType.translation}` })}
                    <Box ml={6} className={classes.chip}>
                      {4}
                    </Box>
                  </Box>
                  <Box display="flex" alignItems="center">
                    <Button size="small" color="primary" variant="contained">
                      {formatMessage({ id: 'common.select' })}
                    </Button>
                  </Box>
                </Box>
              </SelectCard>
            </Grid>
          ))}
        </Grid>
      </DialogContent>
    </Modal>
  );
};
