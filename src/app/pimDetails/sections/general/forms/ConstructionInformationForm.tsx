import React from 'react';

import { Grid, Box } from 'ui/atoms';
import { ListIcon, NcSaleIcon } from 'ui/atoms/icons';
import { FormSubSection } from 'ui/molecules';
import { FormSection } from 'ui/organisms';
import { GenericField, DatePickerField, RadioGroupField } from 'form/fields';
import { useLocale } from 'hooks';
import { useStyles } from '../General.styles';
import { ConstructionType } from 'api/types';

const CONSTRUCTIONS = [
  {
    label: 'pim_details.general.construction_information.under_construction',
    icon: <ListIcon />,
    value: ConstructionType.UnderConstruction,
  },
  {
    label: 'pim_details.general.construction_information.in_development',
    icon: <NcSaleIcon />,
    value: ConstructionType.InDevelopment,
  },
];

export const ConstructionInformationForm = () => {
  const { formatMessage } = useLocale();
  const classes = useStyles();

  return (
    <FormSection title={formatMessage({ id: 'pim_details.general.construction_information.title' })} isExpandable>
      {editing => (
        <>
          <FormSubSection
            className={classes.subHeader}
            title={formatMessage({ id: 'pim_details.general.construction_information.status_construction' })}
            subtitle={formatMessage({ id: 'pim_details.choose_one_option_below' })}
          />
          <Grid container spacing={1} className={classes.tilesContainer}>
            <RadioGroupField sm={3} options={CONSTRUCTIONS} name="houseGeneral.construction.type" disabled={!editing} />
          </Grid>
          <Box mt={4}>
            <Grid className={classes.textFields} container spacing={3}>
              <Grid item xs={4}>
                <DatePickerField
                  name="houseGeneral.construction.from"
                  label="common.from"
                  placeholder="common.from_placeholder"
                  disabled={!editing}
                />
              </Grid>
              <Grid item xs={4}>
                <DatePickerField
                  name="houseGeneral.construction.to"
                  label="common.to"
                  placeholder="common.to_placeholder"
                  disabled={!editing}
                />
              </Grid>
              <Grid item xs={12}>
                <GenericField
                  name="houseGeneral.construction.notes"
                  label="common.notes"
                  placeholder="common.notes_placeholder"
                  disabled={!editing}
                />
              </Grid>
            </Grid>
          </Box>
        </>
      )}
    </FormSection>
  );
};
