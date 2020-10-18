import React, { useState } from 'react';
import clsx from 'classnames';

import { useLocale, useModalDispatch, useModalState } from 'hooks';
import { PromiseFunction } from 'app/shared/types';
import { AddNewFinancialObligationBody } from '../addNewFinancialObligationModal/AddNewFinancialObligationModal.types';
import { SquareIcon } from 'ui/atoms/icons';
import { Grid, Typography, Box } from 'ui/atoms';
import { AutosaveForm, FormSection, FormSubSection } from 'ui/organisms';
import { InfoSection } from 'ui/molecules';
import { GenericField, RadioGroupField } from 'form/fields';
import { AddNewFinancialObligationModal } from '../addNewFinancialObligationModal/AddNewFinancialObligationModal';

import { useStyles } from './FinancialObligations.styles';
import { FinancialObligation, KindOfObligation } from './FinancialObligations.types';

export const FinancialObligations = () => {
  const classes = useStyles();
  const { formatMessage } = useLocale();
  const { open, close } = useModalDispatch();
  const { isOpen: isModalOpen } = useModalState('add-new-financial-obligation');
  const [obligations, setObligations] = useState<FinancialObligation[]>([]);

  const handleAddNewObligation: PromiseFunction<AddNewFinancialObligationBody> = async ({ obligationType }) => {
    try {
      const typeIndex: number = obligations.filter(obligation => obligation.type === obligationType).length + 1;
      setObligations([
        ...obligations,
        {
          type: obligationType,
          typeIndex,
          title: `${formatMessage({
            id: `dictionaries.financial_profile.financial_obligation_type.${obligationType}`,
          })} ${typeIndex}`,
          kindOfObligation: KindOfObligation.OverdraftFacilityOnPaymentAccount,
          obligation: 0,
          extraInformation: '',
        },
      ]);

      close('add-new-financial-obligation');

      return undefined;
    } catch (error) {
      return {
        error: true,
      };
    }
  };

  const initialValues = obligations.reduce((accu, currentValue) => {
    return {
      ...accu,
      [`${currentValue.type}${currentValue.typeIndex}`]: {
        ...currentValue,
      },
    };
  }, {});

  const onSave = async (values: unknown) => {
    return { error: false };
  };

  const kindOfObligations = Object.keys(KindOfObligation).map(kindOfObligation => ({
    label: `dictionaries.financial_profile.kind_of_obligation.${kindOfObligation}`,
    icon: <SquareIcon />,
    value: kindOfObligation,
  }));

  return (
    <>
      <FormSection
        title={formatMessage({ id: 'crm.details.personal_information_financial_profile.financial_obligations.title' })}
        isEditable
        onAdd={() => open('add-new-financial-obligation')}
      >
        {isEditing => (
          <AutosaveForm onSave={onSave} initialValues={initialValues}>
            <Grid item xs={12}>
              {obligations.length === 0 && (
                <InfoSection emoji="🤔">
                  <Typography variant="h3">
                    {formatMessage({
                      id: 'crm.details.personal_information_financial_profile.bank_accounts.empty_title',
                    })}
                  </Typography>
                  <Typography variant="h3">
                    {formatMessage({
                      id: 'crm.details.personal_information_financial_profile.bank_accounts.empty_description',
                    })}
                  </Typography>
                </InfoSection>
              )}
              {obligations.length > 0 &&
                obligations.map((obligation, index) => (
                  <FormSubSection
                    title={
                      <>
                        <Typography variant="h5" className={classes.obligationIndex}>
                          {index + 1}
                        </Typography>
                        <Typography variant="h3" className={classes.obligationTitle}>
                          {obligation.title}
                        </Typography>
                      </>
                    }
                    onOptionsClick={() => {}}
                  >
                    <Box className={clsx(index < obligations.length - 1 && classes.marginBottomFour)}>
                      <Box
                        display="flex"
                        justifyContent="space-between"
                        alignItems="center"
                        className={classes.marginBottomTwo}
                      >
                        <Typography variant="h3">
                          {formatMessage({
                            id:
                              'crm.details.personal_information_financial_profile.financial_obligations.kind_of_obligation',
                          })}
                        </Typography>
                        <Typography variant="h5" className={classes.gray}>
                          {formatMessage({
                            id: 'common.choose_one_option_below',
                          })}
                        </Typography>
                      </Box>
                      <RadioGroupField
                        disabled={!isEditing}
                        name={`${obligation.type + obligation.typeIndex}.kindOfObligation`}
                        options={kindOfObligations}
                      />
                      <Grid container spacing={1} className={classes.obligationInfo}>
                        <Grid item xs={4}>
                          <Typography variant="h5">
                            {formatMessage({
                              id: 'crm.details.personal_information_financial_profile.financial_obligations.obligation',
                            })}
                          </Typography>
                          <GenericField
                            className={classes.formField}
                            name={`${obligation.type + obligation.typeIndex}.obligation`}
                            disabled={!isEditing}
                            placeholder="crm.details.personal_information_financial_profile.financial_obligations.obligation"
                          />
                        </Grid>
                        <Grid item xs={8}>
                          <Typography variant="h5">
                            {formatMessage({
                              id:
                                'crm.details.personal_information_financial_profile.financial_obligations.extra_information',
                            })}
                          </Typography>
                          <GenericField
                            className={classes.formField}
                            name={`${obligation.type + obligation.typeIndex}.extraInformation`}
                            disabled={!isEditing}
                            placeholder="crm.details.personal_information_financial_profile.financial_obligations.extra_information"
                          />
                        </Grid>
                      </Grid>
                    </Box>
                  </FormSubSection>
                ))}
            </Grid>
          </AutosaveForm>
        )}
      </FormSection>
      <AddNewFinancialObligationModal
        isOpened={isModalOpen}
        onClose={() => close('add-new-financial-obligation')}
        onSubmit={handleAddNewObligation}
      />
    </>
  );
};
