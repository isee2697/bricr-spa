import React from 'react';
import { useTheme } from '@material-ui/core/styles';

import { FormSection } from 'ui/organisms';
import { Grid, Box, Avatar, Typography, Placeholder, Button } from 'ui/atoms';
import { useLocale } from 'hooks';
import { AppMessages } from 'i18n/messages';
import { BuildingIcon } from 'ui/atoms/icons/building/BuildingIcon';
import { PimDetailsHeader } from 'app/pimDetails/pimDetailsHeader/PimDetailsHeader';
import { PimDetailsSectionProps } from 'app/pimDetails/PimDetails.types';
import { EditIcon } from 'ui/atoms/icons/edit/EditIcon';

import { useStyles } from './General.styles';

export const General = ({ title, isSidebarVisible, onOpenSidebar }: PimDetailsSectionProps) => {
  const { formatMessage } = useLocale();
  const theme = useTheme();
  const classes = useStyles();

  return (
    <>
      <PimDetailsHeader
        title={title}
        isSidebarVisible={isSidebarVisible}
        onOpenSidebar={onOpenSidebar}
        action={
          <Button
            color="primary"
            startIcon={<EditIcon color="inherit" />}
            variant="contained"
            onClick={() => {}}
            size="small"
          >
            {formatMessage({ id: AppMessages['pim_details.customize'] })}
          </Button>
        }
      />

      <Grid xs={12} item>
        <Box display="flex" alignItems="center">
          <Avatar variant="rounded" bgcolor={theme.palette.red.light} className={classes.avatarIcon}>
            <Box color={theme.palette.red.main}>
              <BuildingIcon color="inherit" />
            </Box>
          </Avatar>
          <Typography variant="h1">{title ? title : <Placeholder variant="text" width={150} />}</Typography>
        </Box>
      </Grid>

      <Grid item xs={12}>
        <FormSection title={formatMessage({ id: AppMessages['pim_details.general.address_information'] })} isExpandable>
          {editing => <p>Form content{!!editing && ' in edit mode'}</p>}
        </FormSection>
      </Grid>

      <Grid item xs={12}>
        <FormSection title={formatMessage({ id: AppMessages['pim_details.general.property_details'] })} isExpandable>
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
        <FormSection title={formatMessage({ id: AppMessages['pim_details.general.status_construction'] })} isExpandable>
          {editing => <p>Form content{!!editing && ' in edit mode'}</p>}
        </FormSection>
      </Grid>
    </>
  );
};
