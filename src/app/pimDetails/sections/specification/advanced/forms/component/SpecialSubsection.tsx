import React, { useState } from 'react';

import { Box, Collapse } from 'ui/atoms';
import { TileButton } from 'ui/molecules';
import { useLocale } from 'hooks';
import { FormSubSection, SubSectionHeader } from 'ui/molecules';
import { CheckboxGroupField, GenericField, RadioGroupField } from 'form/fields';
import { useStyles } from '../../Advanced.styles';

import { SpecialSubsectionProps } from './SpecialSubsection.types';

export const SpecialSubsection = ({
  title,
  subSectionTitle,
  subSectionSubtitle,
  actionGroupName,
  actionGroupType,
  options,
  inputName,
  label,
  placeholder,
  isDisabled,
}: SpecialSubsectionProps) => {
  const { formatMessage } = useLocale();
  const [toggled, setToggled] = useState(true);
  const classes = useStyles();

  return (
    <>
      <SubSectionHeader onOptionsClick={() => {}} onToggleClick={() => setToggled(v => !v)} toggled={toggled}>
        {title}
      </SubSectionHeader>
      <Collapse in={toggled}>
        <Box mb={2}>
          <FormSubSection noBorder title={subSectionTitle} subtitle={subSectionSubtitle} />
        </Box>
        {actionGroupType === 'radio' && (
          <RadioGroupField
            disabled={!isDisabled}
            xs={2}
            name={actionGroupName}
            options={options}
            actionElement={<TileButton onClick={() => {}} isDisabled={!isDisabled} />}
          />
        )}
        {actionGroupType === 'checkbox' && (
          <CheckboxGroupField
            disabled={!isDisabled}
            xs={2}
            name={actionGroupName}
            options={options}
            actionElement={
              <TileButton
                className={classes.tileButton}
                onClick={() => {}}
                isDisabled={!isDisabled}
                title={formatMessage({ id: 'pim_details.specification.advanced.add_custom' })}
              />
            }
          />
        )}
        <GenericField name={inputName} label={label} placeholder={placeholder} disabled={!isDisabled} />
      </Collapse>
    </>
  );
};
