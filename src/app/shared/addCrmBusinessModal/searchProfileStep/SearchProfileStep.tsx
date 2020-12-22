import React from 'react';
import { Form, Field, FieldInputProps } from 'react-final-form';
import arrayMutators from 'final-form-arrays';

import { AddCrmBusinessStepProps, Business } from '../AddCrmBusinessModal.types';
import { useLocale } from 'hooks';
import { useStyles } from '../AddCrmBusinessModal.styles';
import { Button, DialogActions, Box, DialogContent, TileCheckbox } from 'ui/atoms';
import { AddIcon, HomeIcon } from 'ui/atoms/icons';
import { SearchList } from 'ui/organisms';
import { SubmitButton } from 'ui/molecules';

export const SearchProfileStep = ({ onClose, onRequestBricrData, handleGoTo }: AddCrmBusinessStepProps) => {
  const { formatMessage } = useLocale();
  const classes = useStyles();

  const options: Business[] = [
    {
      id: '0001',
      name: 'Anna Kowalska',
    },
    {
      id: '0002',
      name: 'Victor Martin Brochner',
    },
    {
      id: '0003',
      name: 'Martin Brochner',
    },
  ];

  const handleSelect = (input: FieldInputProps<string[]>, value: string) => {
    if (input.value.includes(value)) {
      input.onChange(input.value.filter((v: string) => v !== value));
    } else {
      input.onChange([value]);
    }
  };

  const filterItem = (item: Business, currentValue: string) =>
    item.name.toLocaleLowerCase().includes(currentValue.toLocaleLowerCase());

  return (
    <Form onSubmit={onRequestBricrData} initialValues={{ businesses: ['0001'] }} mutators={{ ...arrayMutators }}>
      {({ handleSubmit, submitErrors, values }) => (
        <form onSubmit={handleSubmit}>
          <DialogContent>
            <Field name="businesses">
              {({ input }) => (
                <SearchList<Business>
                  items={options}
                  selectedItemsIds={[]}
                  item={({ item, highlightString }) => (
                    <Box mb={2}>
                      <TileCheckbox
                        onClick={() => handleSelect(input, item.id)}
                        isSelected={input.value.includes(item.id)}
                        title={highlightString(item.name)}
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
          </DialogContent>
          <DialogActions className={classes.actions}>
            <Button color="ghost" size="small" onClick={onClose}>
              {formatMessage({ id: 'common.cancel' })}
            </Button>
            <Box display="flex">
              <Button
                type="submit"
                size="large"
                color="primary"
                variant="outlined"
                className={classes.marginRightHalf}
                onClick={() => handleGoTo(1)}
              >
                {formatMessage({ id: 'crm.business.add_business.create_new' })}
              </Button>
              <SubmitButton
                startIcon={<AddIcon color="inherit" />}
                type="submit"
                size="large"
                color="primary"
                variant="contained"
              >
                {formatMessage({ id: 'crm.business.add_business.request_mybricr_data' })}
              </SubmitButton>
            </Box>
          </DialogActions>
        </form>
      )}
    </Form>
  );
};
