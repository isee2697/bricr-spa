import React, { useState } from 'react';
import { Card, CardHeader, CardContent, FormControlLabel, Switch, Grid, IconButton, Typography } from 'ui/atoms';
import { AddIcon } from 'ui/atoms/icons';
import { AddNewIncomeInformationModal } from '../addNewIncomeInformationModal/AddNewIncomeInformationModal';
import { useLocale } from 'hooks/useLocale/useLocale';
import { useModalDispatch } from 'hooks/useModalDispatch/useModalDispatch';
import { useModalState } from 'hooks/useModalState/useModalState';
import { PromiseFunction } from 'app/shared/types';
import { AddNewIncomeInformationBody } from '../addNewIncomeInformationModal/AddNewIncomeInformationModal.types';
import { AutosaveForm, FormSubSection } from '../../../../../ui/organisms';
import { InfoSection } from '../../../../../ui/molecules';

import { useStyles } from './IncomeInformation.styles';
import { IncomeInformationItem } from './IncomeInformation.types';

export const IncomeInformation = () => {
  const classes = useStyles();
  const { formatMessage } = useLocale();
  const [isEditing, setIsEditing] = useState(false);
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
          key: incomeInformationType,
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
      [currentValue.key]: {
        ...currentValue,
      },
    };
  }, {});

  const onSave = async (values: unknown) => {
    return { error: false };
  };

  return (
    <Card>
      <CardHeader
        title={formatMessage({ id: 'crm.details.personal_information_financial_profile.income_information.title' })}
        action={
          <>
            <FormControlLabel
              control={<Switch checked={isEditing} onChange={() => setIsEditing(!isEditing)} color="primary" />}
              label={formatMessage({ id: 'form_section.edit_mode' })}
              labelPlacement="start"
              className={classes.editSwitcher}
            />
            <IconButton
              aria-label="add"
              color="primary"
              size="small"
              onClick={() => open('add-new-income-information')}
            >
              <AddIcon color="inherit" />
            </IconButton>
          </>
        }
      />
      <CardContent>
        <AutosaveForm onSave={onSave} initialValues={initialValues}>
          <Grid item xs={12}>
            {incomeInformationItems.length === 0 && (
              <InfoSection emoji="🤔">
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
                          id: `dictionaries.financial_profile.income_information.${incomeInformation.key}`,
                        })}
                      </Typography>
                    </>
                  }
                  onOptionsClick={() => {}}
                >
                  <Grid container></Grid>
                </FormSubSection>
              ))}
          </Grid>
        </AutosaveForm>
        <AddNewIncomeInformationModal
          isOpened={isModalOpen}
          onClose={() => close('add-new-income-information')}
          onSubmit={handleAddNewIncomeInformation}
        />
      </CardContent>
    </Card>
  );
};
