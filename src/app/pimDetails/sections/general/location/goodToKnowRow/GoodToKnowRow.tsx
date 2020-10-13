import React, { useState } from 'react';
import { useField } from 'react-final-form';
import { Grid, TileCheckbox, Box } from 'ui/atoms';
import { BellIcon } from 'ui/atoms/icons';
import { DropdownField, GenericField } from 'form/fields';
import { GoodToKnowProps } from 'app/pimDetails/sections/general/location/goodToKnowRow/GoodToKnowRow.types';
import { DistanceUnit } from 'api/types';
import { useLocale } from 'hooks';

export const GoodToKnowRow = ({ disabled, type, index, icon }: GoodToKnowProps) => {
  const { formatMessage } = useLocale();
  const { input: inputType } = useField(`goodToKnows[${index}].type`);
  const { input: inputChecked } = useField(`goodToKnows[${index}].checked`);
  const [isSelected, setSelected] = useState(inputChecked.value);

  inputType.onChange(type);

  const handleSelect = () => {
    setSelected((s: boolean) => {
      inputChecked.onChange(!s);

      return !s;
    });
  };

  const unitOptions = Object.values(DistanceUnit).map(unit => ({
    value: unit,
    label: formatMessage({ id: `dictionaries.general_location.distance_units.${unit}` }),
  }));

  return (
    <Grid container spacing={1} direction="row" justify="space-between" alignItems="center">
      <Grid item xs={1}>
        <Box pl={2}>
          <TileCheckbox
            onClick={handleSelect}
            isSelected={isSelected}
            title={formatMessage({ id: `dictionaries.general_location.good_to_know.${type}`, defaultMessage: type })}
            isDisabled={disabled}
          >
            {icon ?? <BellIcon color="inherit" />}
          </TileCheckbox>
        </Box>
      </Grid>
      <Grid item xs={4}>
        <GenericField
          placeholder="pim_details.general.location.distance"
          name={`goodToKnows[${index}].distance`}
          disabled={disabled || !isSelected}
          label="pim_details.general.location.distance"
          type="number"
        />
      </Grid>
      <Grid item xs={4}>
        <DropdownField
          name={`goodToKnows[${index}].units`}
          items={unitOptions}
          placeholder="common.select_placeholder"
          disabled={disabled || !isSelected}
          label="pim_details.general.location.units"
        />
      </Grid>
    </Grid>
  );
};
