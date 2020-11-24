import { useTheme } from '@material-ui/core/styles';
import React, { useState } from 'react';
import arrayMutators from 'final-form-arrays';

import { Grid, Box, Avatar, Typography, Placeholder, Button } from 'ui/atoms';
import { useLocale } from 'hooks';
import { BuildingIcon } from 'ui/atoms/icons/building/BuildingIcon';
import { PimDetailsHeader } from 'app/pimDetails/pimDetailsHeader/PimDetailsHeader';
import { EditIcon } from 'ui/atoms/icons/edit/EditIcon';
import { AutosaveForm } from 'ui/organisms';
import { Page } from 'ui/templates';
import { Attention } from 'app/shared/characteristics/forms/Attention';

import { IdentificationNumberFormContainer } from './forms/IdentificationNumberFormContainer';
import { GeneralProps } from './GeneralMain.types';
import { useStyles } from './GeneralMain.styles';
import { AddressForm } from './forms/AddressForm';
import { ExtraAddressForm } from './forms/ExtraAddressForm';
import { ConstructionInformationForm } from './forms/ConstructionInformationForm';
import { AvailabilityForm } from './forms/AvailabilityForm';
import { AdditionalInformationModalContainer } from './additionalInformationModal/AdditionalInformationModalContainer';
import { DetailsForm } from './forms/detailsForms/DetailsForm';

export const GeneralMain = ({ title, isSidebarVisible, onSidebarOpen, pimGeneral, onSave }: GeneralProps) => {
  const { formatMessage } = useLocale();
  const theme = useTheme();
  const classes = useStyles();

  const [isModalOpened, setModalOpened] = useState(false);

  return (
    <>
      <PimDetailsHeader
        title={title}
        isSidebarVisible={isSidebarVisible}
        onSidebarOpen={onSidebarOpen}
        action={
          <Button
            color="primary"
            startIcon={<EditIcon color="inherit" />}
            variant="contained"
            onClick={() => setModalOpened(true)}
            size="small"
          >
            {formatMessage({ id: 'pim_details.general.additional_information' })}
          </Button>
        }
      />
      <Page withoutHeader dateUpdated={pimGeneral.dateUpdated} updatedBy={pimGeneral.lastEditedBy}>
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

        <AutosaveForm initialValues={pimGeneral} mutators={{ ...arrayMutators }} onSave={onSave}>
          <Grid item xs={12}>
            <AddressForm />
          </Grid>

          {!!pimGeneral.showExtraAddress && (
            <Grid item xs={12}>
              <ExtraAddressForm />
            </Grid>
          )}

          {!!pimGeneral.showIdentificationNumber && (
            <Grid item xs={12}>
              <IdentificationNumberFormContainer items={pimGeneral.identificationNumbers || []} />
            </Grid>
          )}

          <Grid item xs={12}>
            <DetailsForm
              title={formatMessage({ id: 'pim_details.general.property_details.title' })}
              type={pimGeneral.propertyType}
            />
          </Grid>

          <Grid item xs={12}>
            <ConstructionInformationForm />
          </Grid>

          <Grid item xs={12}>
            <AvailabilityForm />
          </Grid>
          {!!pimGeneral.showAttentionNote && (
            <Grid item xs={12}>
              <Attention isInitExpanded={false} isInitEditing={false} />
            </Grid>
          )}
        </AutosaveForm>
      </Page>

      {!!isModalOpened && (
        <AdditionalInformationModalContainer
          pimGeneral={pimGeneral}
          isOpened={isModalOpened}
          onClose={() => setModalOpened(false)}
        />
      )}
    </>
  );
};
