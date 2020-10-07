import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import classNames from 'classnames';
import { useLocale, useCustomLabels } from 'hooks';
import { Box } from 'ui/atoms';
import { TileButton, FormSubSectionHeader } from 'ui/molecules';
import { FormSubSection, AddCustomPropertyModalContainer } from 'ui/organisms';
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

  const [isModalOpened, setModalOpened] = useState(false);

  return (
    <>
      <FormSubSection title={title} onOptionsClick={() => {}}>
        <Box mb={2}>
          <FormSubSectionHeader noBorder title={subSectionTitle} subtitle={subSectionSubtitle} />
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
                  className={classNames(classes.tileButton, { [classes.preventClick]: isDisabled })}
                  onClick={() => setModalOpened(true)}
                  isDisabled={isDisabled}
                  title={formatMessage({ id: 'pim_details.specification.advanced.add_custom' })}
                />
              }
            />
          </Box>
        )}
        <GenericField name={inputName} label={label} placeholder={placeholder} disabled={isDisabled} />
      </FormSubSection>
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
