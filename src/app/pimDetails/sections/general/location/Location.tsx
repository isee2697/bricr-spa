import React from 'react';
import { useIntl } from 'react-intl';

import { PimDetailsHeader } from 'app/pimDetails/pimDetailsHeader/PimDetailsHeader';
import { Box, Button, Grid, Typography } from 'ui/atoms';
import { HelpIcon, MenuIcon } from 'ui/atoms/icons';
import { AutosaveForm, FormSection } from 'ui/organisms';
import { GenericField, RadioGroupField } from 'form/fields';
import { FormSubSection } from 'ui/molecules';
import { GoodToKnowRow } from 'app/pimDetails/sections/general/location/goodToKnowRow/GoodToKnowRow';
import { LocationGoodToKnowType } from 'api/types';
import { useStyles } from 'app/pimDetails/sections/general/location/Location.styles';

import { LocationProps } from './Location.types';
import { LocationMap } from './locationMap/LocationMap';

export const Location = ({
  title,
  isSidebarVisible,
  onOpenSidebar,
  initialValues,
  typeOptions,
  onSave,
}: LocationProps) => {
  const { formatMessage } = useIntl();
  const classes = useStyles();

  return (
    <>
      <PimDetailsHeader
        title={title}
        isSidebarVisible={isSidebarVisible}
        onOpenSidebar={onOpenSidebar}
        action={
          <Button color="primary" variant="outlined" onClick={() => {}} size="small">
            {formatMessage({ id: 'pim_details.general.location.autocheck' })}
          </Button>
        }
      />
      <Grid item xs={12}>
        <Typography className={classes.title} variant="h1">
          {formatMessage({ id: 'pim_details.general.location.header' })}
        </Typography>
        <div className={classes.iconsHolder}>
          <HelpIcon />
          <MenuIcon />
        </div>
      </Grid>
      <Grid item xs={12}>
        <AutosaveForm onSave={onSave} initialValues={initialValues}>
          <Grid item xs={12}>
            <FormSection title={formatMessage({ id: 'pim_details.general.location.header' })}>
              {editable => (
                <>
                  <FormSubSection
                    noBorder
                    title={formatMessage({ id: 'pim_details.general.location.type' })}
                    subtitle={formatMessage({ id: 'pim_details.choose_one_option_below' })}
                  />
                  <Grid container spacing={3}>
                    <Grid item xs={4}>
                      <GenericField
                        label="pim_details.general.location.latitude"
                        placeholder="pim_details.general.location.latitude_placeholder"
                        name="latitude"
                        disabled={!editable}
                      />
                    </Grid>
                    <Grid item xs={4}>
                      <GenericField
                        label="pim_details.general.location.longitude"
                        placeholder="pim_details.general.location.longitude_placeholder"
                        name="longitude"
                        disabled={!editable}
                      />
                    </Grid>
                  </Grid>
                  <Box mb={1} />
                  <LocationMap disabled={!editable} latitudeName="latitude" longitudeName="longitude" />
                  <Box mb={3} />

                  <FormSubSection
                    noBorder
                    title={formatMessage({ id: 'pim_details.general.location.type' })}
                    subtitle={formatMessage({ id: 'pim_details.choose_one_option_below' })}
                  />
                  <Box paddingTop={2} mb={2}>
                    <RadioGroupField xs={2} name="type" options={typeOptions} disabled={!editable} />
                  </Box>
                  <GenericField
                    label="pim_details.general.location.notes"
                    placeholder="pim_details.general.location.notes_placeholder"
                    name="notes"
                  />
                  <Box mb={3} />

                  <FormSubSection
                    noBorder
                    title={formatMessage({ id: 'pim_details.general.location.good_to_know' })}
                    subtitle={formatMessage({ id: 'pim_details.choose_one_option_below' })}
                  />
                  {Object.values(LocationGoodToKnowType).map((type, index) => (
                    <GoodToKnowRow key={`${type}-${index}`} type={type} disabled={!editable} index={index} />
                  ))}
                </>
              )}
            </FormSection>
          </Grid>
        </AutosaveForm>
      </Grid>
    </>
  );
};
