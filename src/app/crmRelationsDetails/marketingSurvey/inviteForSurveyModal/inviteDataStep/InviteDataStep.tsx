import React from 'react';
import { Field, FieldInputProps, useFormState } from 'react-final-form';

import { Box, DialogActions, DialogContent, TileCheckbox } from 'ui/atoms';
import { useLocale } from 'hooks';
import { AddIcon, HomeIcon, SquareIcon } from 'ui/atoms/icons';
import { CancelButton, SubmitButton } from 'ui/molecules';
import { SurveyCategory, SurveyInviteType } from '../../MarketingSurvey.types';
import { InviteForSurveyStepProps } from '../InviteForSurveyModal.types';
import { SearchList } from 'ui/organisms';
import { CrmListItem } from 'api/types';
import { RadioGroupField } from 'form/fields';

export const InviteDataStep = ({ onPrev }: InviteForSurveyStepProps) => {
  const { formatMessage } = useLocale();
  const { submitting } = useFormState<{ category: SurveyCategory }>({
    subscription: { submitting: true, submitErrors: true, values: true },
  });

  const filterItem = (item: CrmListItem, currentValue: string) =>
    `${item.firstName ?? ''} ${item.lastName ?? ''}`.toLocaleLowerCase().includes(currentValue.toLocaleLowerCase());

  const handleSelect = (input: FieldInputProps<string[]>, value: string) => {
    if (input.value.includes(value)) {
      input.onChange(input.value.filter((v: string) => v !== value));
    } else {
      input.onChange([value]);
    }
  };

  return (
    <>
      <DialogContent>
        <Field name="crm">
          {({ input }) => (
            <SearchList<CrmListItem>
              items={[]}
              selectedItemsIds={[]}
              item={({ item, highlightString }) => (
                <Box mb={2}>
                  <TileCheckbox
                    onClick={() => handleSelect(input, item.id)}
                    isSelected={input.value.includes(item.id)}
                    title={highlightString(`${item.firstName ?? ''} ${item.lastName ?? ''}`)}
                    orientation="horizontal"
                  >
                    <HomeIcon />
                  </TileCheckbox>
                </Box>
              )}
              filterItem={filterItem}
            />
          )}
        </Field>
        <RadioGroupField
          name="inviteType"
          options={Object.keys(SurveyInviteType).map(type => ({
            label: formatMessage({ id: `dictionaries.survey_invite_type.${type}` }),
            value: type,
            icon: <SquareIcon color="inherit" />,
          }))}
        />
      </DialogContent>
      <DialogActions>
        <CancelButton variant="outlined" onClick={onPrev}>
          {formatMessage({ id: 'common.cancel' })}
        </CancelButton>
        <SubmitButton
          type="submit"
          startIcon={<AddIcon color="inherit" />}
          size="large"
          color="primary"
          variant="contained"
          isLoading={submitting}
        >
          {formatMessage({ id: 'crm.details.marketing_survey.invite_for_survey' })}
        </SubmitButton>
      </DialogActions>
    </>
  );
};
