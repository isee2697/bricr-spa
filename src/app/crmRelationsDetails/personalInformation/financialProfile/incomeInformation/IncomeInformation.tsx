import React, { useState } from 'react';
import arrayMutators from 'final-form-arrays';

import { Box, Grid, Typography } from 'ui/atoms';
import { AddNewIncomeInformationModal } from '../addNewIncomeInformationModal/AddNewIncomeInformationModal';
import { useLocale } from 'hooks/useLocale/useLocale';
import { useModalDispatch } from 'hooks/useModalDispatch/useModalDispatch';
import { useModalState } from 'hooks/useModalState/useModalState';
import { PromiseFunction } from 'app/shared/types';
import { AddNewIncomeInformationBody } from '../addNewIncomeInformationModal/AddNewIncomeInformationModal.types';
import { AutosaveForm, FormSection, FormSubSection } from 'ui/organisms';
import { InfoSection } from 'ui/molecules';

import { useStyles } from './IncomeInformation.styles';
import { IncomeInformationItem, IncomeInformationType } from './IncomeInformation.types';
import { Employer } from './employer/Employer';
import { IncomeEquity } from './incomeEquity/IncomeEquity';
import { Pension } from './pension/Pension';
import { Entrepreneur } from './entrepreneur/Entrepreneur';
import { SocialBenefit } from './socialBenefit/SocialBenefit';

export const IncomeInformation = () => {
  const classes = useStyles();
  const { formatMessage } = useLocale();
  const { open, close } = useModalDispatch();
  const { isOpen: isModalOpen } = useModalState('add-new-income-information');
  const [incomeInformationItems, setIncomeInformationItems] = useState<IncomeInformationItem[]>([]);

  const handleAddNewIncomeInformation: PromiseFunction<AddNewIncomeInformationBody> = async ({
    incomeInformationType,
  }) => {
    try {
      setIncomeInformationItems([
        ...incomeInformationItems,
        {
          type: incomeInformationType,
        },
      ]);

      close('add-new-income-information');

      return undefined;
    } catch (error) {
      return {
        error: true,
      };
    }
  };

  const initialValues = incomeInformationItems.reduce((accu, currentValue) => {
    return {
      ...accu,
      [currentValue.type]: {
        ...currentValue,
      },
    };
  }, {});

  const onSave = async (values: unknown) => {
    return { error: false };
  };

  return (
    <>
      <FormSection
        title={formatMessage({ id: 'crm.details.personal_information_financial_profile.income_information.title' })}
        onAdd={() => open('add-new-income-information')}
        isEditable={false}
      >
        {isEditing => (
          <AutosaveForm onSave={onSave} initialValues={initialValues} mutators={{ ...arrayMutators }}>
            <Grid item xs={12}>
              {incomeInformationItems.length === 0 && (
                <InfoSection emoji="🙌">
                  <Typography variant="h3">
                    {formatMessage({
                      id: 'crm.details.personal_information_contact_information.addresses.empty_title',
                    })}
                  </Typography>
                  <Typography variant="h3">
                    {formatMessage({
                      id: 'crm.details.personal_information_contact_information.addresses.empty_description',
                    })}
                  </Typography>
                </InfoSection>
              )}
              {incomeInformationItems.length > 0 &&
                incomeInformationItems.map((incomeInformation, index) => (
                  <FormSubSection
                    title={
                      <>
                        <Typography variant="h5" className={classes.incomeInformationIndex}>
                          {index + 1}
                        </Typography>
                        <Typography variant="h3" className={classes.incomeInformationTitle}>
                          {formatMessage({
                            id: `dictionaries.financial_profile.income_information.${incomeInformation.type}`,
                          })}
                        </Typography>
                      </>
                    }
                    onOptionsClick={() => {}}
                  >
                    <Box>
                      {incomeInformation.type === IncomeInformationType.Employer && <Employer isEditing={isEditing} />}
                      {incomeInformation.type === IncomeInformationType.IncomeFromEquity && <IncomeEquity />}
                      {incomeInformation.type === IncomeInformationType.Pension && <Pension />}
                      {incomeInformation.type === IncomeInformationType.SocialBenefit && <SocialBenefit />}
                      {incomeInformation.type === IncomeInformationType.Entrepreneur && <Entrepreneur />}
                    </Box>
                  </FormSubSection>
                ))}
            </Grid>
          </AutosaveForm>
        )}
      </FormSection>
      <AddNewIncomeInformationModal
        isOpened={isModalOpen}
        onClose={() => close('add-new-income-information')}
        onSubmit={handleAddNewIncomeInformation}
      />
    </>
  );
};
