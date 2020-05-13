import React, { useState, useCallback } from 'react';

import { Grid, Alert } from 'ui/atoms';
import { FormSection } from 'ui/organisms';
import { useLocale } from 'hooks';
import { AppMessages } from 'i18n/messages';

import { useStyles } from './PimDetails.styles';
import { PimDetailsSidebarMenu } from './pimDetailsSidebarMenu/PimDetailsSidebarMenu';
import { PimDetailsHeader } from './pimDetailsHeader/PimDetailsHeader';
import { PimDetailsProps } from './PimDetails.types';

export const PimDetails = ({ error: isError, data }: PimDetailsProps) => {
  const classes = useStyles();
  const [isSidebarVisible, setSidebarVisiblity] = useState(true);
  const { formatMessage } = useLocale();
  const pim = data?.getPim;
  const title = pim ? `${pim.street} ${pim.houseNumber} ${pim.postalCode} ${pim.city} ${pim.country}` : '';

  const handleSidebarHide = useCallback(() => {
    setSidebarVisiblity(false);
  }, []);

  const handleSidebarOpen = useCallback(() => {
    setSidebarVisiblity(true);
  }, []);

  return (
    <Grid container spacing={0}>
      {isSidebarVisible && (
        <Grid item xs={12} md={3} lg={2}>
          <PimDetailsSidebarMenu onHide={handleSidebarHide} />
        </Grid>
      )}
      <Grid item xs={12} md={isSidebarVisible ? 9 : 12} lg={isSidebarVisible ? 10 : 12}>
        <Grid container spacing={3} className={classes.content}>
          {!!isError && (
            <Grid item xs={12}>
              <Alert severity="error">{formatMessage({ id: AppMessages['common.error'] })}</Alert>
            </Grid>
          )}
          <PimDetailsHeader name={title} isSidebarVisible={isSidebarVisible} onOpenSidebar={handleSidebarOpen} />

          <Grid item xs={12}>
            <FormSection
              title={formatMessage({ id: AppMessages['pim_details.general.address_information'] })}
              isExpandable
            >
              {editing => <p>Form content{!!editing && ' in edit mode'}</p>}
            </FormSection>
          </Grid>

          <Grid item xs={12}>
            <FormSection
              title={formatMessage({ id: AppMessages['pim_details.general.property_details'] })}
              isExpandable
            >
              {editing => <p>Form content{!!editing && ' in edit mode'}</p>}
            </FormSection>
          </Grid>

          <Grid item xs={12}>
            <FormSection
              title={formatMessage({ id: AppMessages['pim_details.general.construction_information'] })}
              isExpandable
            >
              {editing => <p>Form content{!!editing && ' in edit mode'}</p>}
            </FormSection>
          </Grid>

          <Grid item xs={12}>
            <FormSection title={formatMessage({ id: AppMessages['pim_details.general.availability'] })} isExpandable>
              {editing => <p>Form content{!!editing && ' in edit mode'}</p>}
            </FormSection>
          </Grid>

          <Grid item xs={12}>
            <FormSection title={formatMessage({ id: AppMessages['pim_details.general.habitation'] })} isExpandable>
              {editing => <p>Form content{!!editing && ' in edit mode'}</p>}
            </FormSection>
          </Grid>
          <Grid item xs={12}>
            <FormSection
              title={formatMessage({ id: AppMessages['pim_details.general.status_construction'] })}
              isExpandable
            >
              {editing => <p>Form content{!!editing && ' in edit mode'}</p>}
            </FormSection>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};
