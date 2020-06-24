import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

import { useLocale, useCustomLabels } from 'hooks';
import { Box, Collapse } from 'ui/atoms';
import { TileButton } from 'ui/molecules';
import { FormSubSection, SubSectionHeader } from 'ui/molecules';
import { AddCustomPropertyModalContainer } from 'ui/organisms';
import { CheckboxGroupField, GenericField, RadioGroupField } from 'form/fields';
import { CheckboxDataType } from 'form/fields/checkboxGroupField/CheckboxGroupField.types';
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
  labelPropertyType,
  isDisabled,
}: SpecialSubsectionProps) => {
  const { id: pimId } = useParams<{ id: string }>();
  const { formatMessage } = useLocale();
  const classes = useStyles();

  const customLabels = useCustomLabels(pimId, [labelPropertyType])[labelPropertyType] ?? [];

  const [toggled, setToggled] = useState(true);
  const [isModalOpened, setModalOpened] = useState(false);

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
            disabled={isDisabled}
            xs={2}
            name={actionGroupName}
            options={[...options, ...customLabels]}
            actionElement={<TileButton onClick={() => setModalOpened(true)} isDisabled={isDisabled} />}
          />
        )}
        {actionGroupType === 'checkbox' && (
          <Box paddingLeft={2}>
            <CheckboxGroupField
              disabled={isDisabled}
              xs={2}
              name={actionGroupName}
              options={[...options, ...customLabels] as CheckboxDataType[]}
              actionElement={
                <TileButton
                  className={classes.tileButton}
                  onClick={() => setModalOpened(true)}
                  isDisabled={isDisabled}
                  title={formatMessage({ id: 'pim_details.specification.advanced.add_custom' })}
                />
              }
            />
          </Box>
        )}
        <GenericField name={inputName} label={label} placeholder={placeholder} disabled={isDisabled} />
      </Collapse>
      {isModalOpened && (
        <AddCustomPropertyModalContainer
          property={labelPropertyType}
          isOpened={isModalOpened}
          onClose={() => setModalOpened(false)}
        />
      )}
    </>
  );
};
