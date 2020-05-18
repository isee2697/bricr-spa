import React from 'react';
import { useTheme } from '@material-ui/core/styles';
import { useParams, useHistory } from 'react-router-dom';

import { Grid, Box, Avatar, Typography, Placeholder, Button } from 'ui/atoms';
import { useLocale } from 'hooks';
import { AppMessages } from 'i18n/messages';
import { BuildingIcon } from 'ui/atoms/icons/building/BuildingIcon';
import { PimDetailsHeader } from 'app/pimDetails/pimDetailsHeader/PimDetailsHeader';
import { EditIcon } from 'ui/atoms/icons/edit/EditIcon';
import { AutosaveForm } from 'ui/organisms';
import { AppRoute } from 'routing/AppRoute.enum';

import { GeneralProps } from './General.types';
import { useStyles } from './General.styles';
import { AddressForm } from './forms/AddressForm';
import { PropertyDetailsForm } from './forms/PropertyDetailsForm';
import { ConstructionInformationForm } from './forms/ConstructionInformationForm';
import { AvailabilityForm } from './forms/AvailabilityForm';

export const General = ({ title, isSidebarVisible, onOpenSidebar, pim, onSave }: GeneralProps) => {
  const { id } = useParams<{ id: string }>();
  const { push } = useHistory();
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
            onClick={() => push(`${AppRoute.pimDetails.replace(':id', id)}/inside`)}
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

      <AutosaveForm initialValues={pim || undefined} onSave={onSave} subscription={{}}>
        <Grid item xs={12}>
          <AddressForm />
        </Grid>

        <Grid item xs={12}>
          <PropertyDetailsForm />
        </Grid>

        <Grid item xs={12}>
          <ConstructionInformationForm />
        </Grid>

        <Grid item xs={12}>
          <AvailabilityForm />
        </Grid>
      </AutosaveForm>
    </>
  );
};
