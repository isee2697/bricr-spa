import React, { useState } from 'react';

import { Grid, Typography } from 'ui/atoms';
import { useLocale, useModalDispatch, useModalState } from 'hooks';
import { AddNewAnnualFigureModal } from '../addNewAnnualFigureModal/AddNewAnnualFigureModal';
import { AutosaveForm, FormSection, FormSubSection } from 'ui/organisms';
import { GenericField } from 'form/fields';
import { InfoSection } from 'ui/molecules';

import { AnnualFigure, AnnualFigureType } from './AnnualFigures.types';
import { useStyles } from './AnnualFigures.styles';

export const AnnualFigures = () => {
  const classes = useStyles();
  const { open, close } = useModalDispatch();
  const { formatMessage } = useLocale();
  const { isOpen: isModalOpen } = useModalState('add-new-annual-figure');
  const [annualFigures, setAnnualFigures] = useState<AnnualFigure[]>([]);

  const handleAddNewAnnualFigure = async ({ annualFigureType }: { annualFigureType: AnnualFigureType }) => {
    setAnnualFigures([
      ...annualFigures,
      {
        id: `${annualFigures.length}`,
        year: 2020,
        basicFigures: '',
        type: annualFigureType,
      },
    ]);

    close('add-new-annual-figure');

    return undefined;
  };

  const initialValues = annualFigures.reduce((accu, currentValue) => {
    return {
      ...accu,
      [`annualFigures${currentValue.year}`]: {
        ...currentValue,
      },
    };
  }, {});

  const onSave = async (values: unknown) => {
    return { error: false };
  };

  console.log(initialValues);

  return (
    <>
      <FormSection
        title={formatMessage({ id: 'crm.details.personal_information_financial_profile.annual_figures.title' })}
        isEditable
        onAdd={() => open('add-new-annual-figure')}
      >
        {isEditing => (
          <AutosaveForm onSave={onSave} initialValues={initialValues}>
            <Grid item xs={12}>
              {annualFigures.length === 0 && (
                <InfoSection emoji="🤔">
                  <Typography variant="h3">
                    {formatMessage({
                      id: 'crm.details.personal_information_financial_profile.annual_figures.empty_title',
                    })}
                  </Typography>
                  <Typography variant="h3">
                    {formatMessage({
                      id: 'crm.details.personal_information_financial_profile.annual_figures.empty_description',
                    })}
                  </Typography>
                </InfoSection>
              )}
              {annualFigures.map((annualFigure, index) => (
                <FormSubSection
                  key={index}
                  title={
                    <>
                      <Typography variant="h5" className={classes.index}>
                        {index + 1}
                      </Typography>
                      <Typography variant="h3" className={classes.title}>
                        {annualFigure.year}
                      </Typography>
                    </>
                  }
                  onOptionsClick={() => {}}
                >
                  <Grid container spacing={1}>
                    <Grid item xs={8}>
                      <GenericField
                        name={`annualFigures${annualFigure.year}.basicFigures`}
                        disabled={!isEditing}
                        label={formatMessage({
                          id: 'crm.details.personal_information_financial_profile.annual_figures.basic_figures',
                        })}
                        placeholder="crm.details.personal_information_financial_profile.annual_figures.basic_figures_placeholder"
                      />
                    </Grid>
                  </Grid>
                </FormSubSection>
              ))}
            </Grid>
          </AutosaveForm>
        )}
      </FormSection>
      <AddNewAnnualFigureModal
        isOpened={isModalOpen}
        onClose={() => {
          close('add-new-annual-figure');
        }}
        onSubmit={handleAddNewAnnualFigure}
      />
    </>
  );
};
