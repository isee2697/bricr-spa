import React from 'react';
import { FormSpy, useForm } from 'react-final-form';
import { FormState } from 'final-form';

import { Grid } from 'ui/atoms';
import { FormSubSectionHeader } from 'ui/molecules';
import { useLocale } from 'hooks';
import { useStyles } from 'app/pimDetails/sections/general/generalMain/GeneralMain.styles';
import { RadioGroupField, GenericField, CheckboxButtonField } from 'form/fields';
import { SquareMeterIcon, GraphIcon, MeterIcon } from 'ui/atoms/icons';
import { AogSpecificationsType, PimGeneralInput } from 'api/types';
import { DetailsFormProps } from '../DetailsForm.types';
import { ADDITIONAL_POSITION, AGRICULTURAL_TYPES } from '../dictionaries';

export const AgriculturalDetailsForm = ({ editing }: DetailsFormProps) => {
  const { formatMessage } = useLocale();
  const form = useForm();
  const classes = useStyles();

  return (
    <>
      <FormSubSectionHeader
        className={classes.subHeader}
        title={formatMessage({ id: 'pim_details.general.property_details.pick_type_of_property' })}
        subtitle={formatMessage({ id: 'common.choose_one_option_below' })}
      />
      <div className={classes.tilesContainer}>
        <RadioGroupField
          sm={2}
          md={2}
          spacing={1}
          options={AGRICULTURAL_TYPES}
          name="aogGeneral.generalType"
          disabled={!editing}
        />
      </div>

      <FormSubSectionHeader
        className={classes.subHeader}
        title={formatMessage({ id: 'pim_details.general.aog_details.additional_position' })}
        subtitle={formatMessage({ id: 'pim_details.choose_one_or_more_option_below' })}
      />
      <div className={classes.tilesContainer}>
        <RadioGroupField options={ADDITIONAL_POSITION} name="aogGeneral.additionalPosition" disabled={!editing} />
      </div>

      <FormSubSectionHeader
        className={classes.subHeader}
        title={formatMessage({ id: 'pim_details.general.aog_details.houselot' })}
      />
      <FormSpy
        onChange={({ values, active }: FormState<PimGeneralInput>) => {
          if (values?.aogGeneral?.houseLot) {
            const { length, width, surface } = values?.aogGeneral?.houseLot;
            const activeWidthOrLength =
              active === 'aogGeneral.houseLot.length' || active === 'aogGeneral.houseLot.width';

            if (active === 'aogGeneral.houseLot.surface' && surface) {
              form.change('aogGeneral.surface', surface);
            } else if (activeWidthOrLength && length && width) {
              form.change('aogGeneral.houseLot.surface', length * width);
            }
          }
        }}
      />
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <GenericField
            name="aogGeneral.houseLot.length"
            label="common.length"
            placeholder="common.length_placeholder"
            disabled={!editing}
            type="number"
            InputProps={{
              endAdornment: <MeterIcon />,
            }}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <GenericField
            name="aogGeneral.houseLot.width"
            label="common.width"
            placeholder="common.width_placeholder"
            disabled={!editing}
            type="number"
            InputProps={{
              endAdornment: <MeterIcon />,
            }}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <GenericField
            name="aogGeneral.houseLot.surface"
            label="common.surface"
            placeholder="common.surface_placeholder"
            disabled={!editing}
            type="number"
            InputProps={{
              endAdornment: <SquareMeterIcon />,
            }}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <GenericField
            name="aogGeneral.houseLot.amountOfHouses"
            label="pim_details.general.aog_details.amount_of_houses"
            placeholder="pim_details.general.aog_details.amount_of_houses_placeholder"
            disabled={!editing}
            type="number"
          />
        </Grid>
        <Grid item xs={12}>
          <FormSubSectionHeader className={classes.subHeader} title={formatMessage({ id: 'common.specifications' })} />
        </Grid>
        <Grid item xs={4} md={2}>
          <CheckboxButtonField
            xs={12}
            name="aogGeneral.specifications[0].type"
            onChange={selected =>
              form.change(
                'aogGeneral.specifications[0].type',
                selected ? AogSpecificationsType.EnvironmentalPermit : undefined,
              )
            }
            option={{
              label: 'pim_details.general.aog_details.environmental_permit',
              icon: <GraphIcon />,
            }}
          />
        </Grid>
        <Grid item xs={8} md={10}>
          <GenericField
            name="aogGeneral.specifications[0].notes"
            label="common.notes"
            placeholder="pim_details.general.aog_details.notes_placeholder"
            disabled={!editing}
          />
        </Grid>
      </Grid>
    </>
  );
};
