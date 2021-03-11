import React from 'react';
import _ from 'lodash';
import { useParams } from 'react-router-dom';

import { useLocale, useModalDispatch } from 'hooks';
import { SquareIcon } from 'ui/atoms/icons';
import { Grid, Typography, Box } from 'ui/atoms';
import { GenericField, RadioGroupField } from 'form/fields';
import { AddNewFinancialObligationModalContainer } from '../addNewFinancialObligationModal/AddNewFinancialObligationModalContainer';
import { CrmFinancialObligation, FinancialObligationType } from 'api/types';
import { CardWithList } from 'ui/templates';

import { useStyles } from './FinancialObligations.styles';
import { FinancialObligationsProps } from './FinancialObligations.types';

export const FinancialObligations = ({ data, onSave }: FinancialObligationsProps) => {
  const classes = useStyles();
  const { formatMessage } = useLocale();
  const { open } = useModalDispatch();
  const { id } = useParams<{ id: string }>();

  const kindOfObligations = Object.keys(FinancialObligationType).map(kindOfObligation => ({
    label: `dictionaries.financial_profile.kind_of_obligation.${kindOfObligation}`,
    icon: <SquareIcon />,
    value: kindOfObligation,
  }));

  const handleSave = async (values: CrmFinancialObligation) => {
    try {
      await onSave({
        id,
        financialObligations: (data?.financialObligations || []).map(item =>
          JSON.parse(
            JSON.stringify(item.id === values.id ? _.omit(values, ['title']) : item, (key, value) =>
              value === null || key === '__typename' || key === 'id' ? undefined : value,
            ),
          ),
        ),
      });

      return undefined;
    } catch (error) {
      return { error: true };
    }
  };

  return (
    <>
      <CardWithList<CrmFinancialObligation>
        title={formatMessage({ id: 'crm.details.personal_information_contact_information.financial_obliation.title' })}
        emptyStateTextFirst={formatMessage({
          id: 'crm.details.personal_information_contact_information.financial_obliation.empty_title',
        })}
        emptyStateTextSecond={formatMessage({
          id: 'crm.details.personal_information_contact_information.financial_obliation.empty_description',
        })}
        emoji="🙌"
        renderItem={(item: CrmFinancialObligation, isEditing: boolean) => (
          <>
            <Box display="flex" justifyContent="space-between" alignItems="center" className={classes.marginBottomTwo}>
              <Typography variant="h3">
                {formatMessage({
                  id: 'crm.details.personal_information_financial_profile.financial_obligations.kind_of_obligation',
                })}
              </Typography>
              <Typography variant="h5" className={classes.gray}>
                {formatMessage({
                  id: 'common.choose_one_option_below',
                })}
              </Typography>
            </Box>
            <RadioGroupField disabled={!isEditing} name={'type'} options={kindOfObligations} />
            <Grid container spacing={1} className={classes.obligationInfo}>
              <Grid item xs={4}>
                <GenericField
                  className={classes.formField}
                  label={formatMessage({
                    id: 'crm.details.personal_information_financial_profile.financial_obligations.obligation',
                  })}
                  name={'financialObligation'}
                  disabled={!isEditing}
                  placeholder="crm.details.personal_information_financial_profile.financial_obligations.obligation"
                  type="number"
                />
              </Grid>
              <Grid item xs={8}>
                <GenericField
                  className={classes.formField}
                  label={formatMessage({
                    id: 'crm.details.personal_information_financial_profile.financial_obligations.extra_information',
                  })}
                  name={'information'}
                  disabled={!isEditing}
                  placeholder="crm.details.personal_information_financial_profile.financial_obligations.extra_information"
                />
              </Grid>
            </Grid>
          </>
        )}
        items={(data?.financialObligations || []).map(socialMedia => ({
          ...socialMedia,
          title: formatMessage({ id: `dictionaries.contact_information.kind_of_obligation.${socialMedia.type}` }),
        }))}
        onSave={handleSave}
        onAdd={() => open('add-new-financial-obligation')}
        isInitExpanded
        isInitEditing
        isEditable
        isExpandable
      />
      <AddNewFinancialObligationModalContainer id={id} data={data} />
    </>
  );
};
