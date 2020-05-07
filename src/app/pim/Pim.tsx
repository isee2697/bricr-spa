import React from 'react';

import { Grid, Card, CardHeader, CardContent, Tabs, Tab, Typography } from 'ui/atoms';
import { InfoSection } from 'ui/molecules';
import { useLocale } from 'hooks/useLocale/useLocale';
import { AppMessages } from 'i18n/messages';

import { PimSidebarMenu } from './pimSidebarMenu/PimSidebarMenu';
import { useStyles } from './Pim.styles';
import { PimHeader } from './pimHeader/PimHeader';
import { PimProps } from './Pim.types';

export const Pim = ({ status, onStatusChange, type, onTypeChange }: PimProps) => {
  const classes = useStyles();
  const { formatMessage } = useLocale();

  return (
    <>
      <Grid container spacing={0}>
        <Grid item xs={12} md={3} lg={2}>
          <PimSidebarMenu type={type} onTypeChange={onTypeChange} />
        </Grid>
        <Grid item xs={12} md={9} lg={10}>
          <Grid container spacing={3} className={classes.content}>
            <PimHeader />
            <Grid item xs={12}>
              <Card>
                <CardHeader title={formatMessage({ id: `pim.type.${type}` })} />
                <CardContent>
                  <Tabs
                    value={status}
                    onChange={(event, value) => onStatusChange(value)}
                    indicatorColor="primary"
                    textColor="primary"
                  >
                    <Tab
                      value="action_required"
                      label={formatMessage({ id: AppMessages['pim.status.acion_required'] }, { count: 0 })}
                    />
                    <Tab value="active" label={formatMessage({ id: AppMessages['pim.status.active'] }, { count: 0 })} />
                    <Tab
                      value="archived"
                      label={formatMessage({ id: AppMessages['pim.status.archived'] }, { count: 0 })}
                    />
                  </Tabs>
                  <InfoSection emoji="🤔">
                    <Typography variant="h3">{formatMessage({ id: AppMessages['pim.list.empty_title'] })}</Typography>
                    <Typography variant="h3">
                      {formatMessage({ id: AppMessages['pim.list.empty_description'] })}
                    </Typography>
                  </InfoSection>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};
