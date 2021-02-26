import React from 'react';
import { Field, FieldInputProps, Form } from 'react-final-form';
import arrayMutators from 'final-form-arrays';

import { useLocale } from 'hooks';
import { Modal, SubmitButton, CancelButton, TileButton } from 'ui/molecules';
import { DialogActions, DialogContent, Typography, Box, TileCheckbox } from 'ui/atoms';
import { AddIcon, HomeIcon, RoundBusinessCenterIcon } from 'ui/atoms/icons';
import { SearchList } from 'ui/organisms';
import { RadioGroupField } from 'form/fields';
import { RadioDataType } from 'form/fields/radioGroupField/RadioGroupField.types';

import { useStyles } from './LinkBusinessModal.styles';
import { BusinessListItem, LinkBusinessModalProps, LinkBusinessType } from './LinkBusinessModal.types';

export const LinkBusinessModal = ({ isOpened, onClose, onSubmit, businessList }: LinkBusinessModalProps) => {
  const { formatMessage } = useLocale();
  const classes = useStyles();

  const filterItem = (item: BusinessListItem, currentValue: string) =>
    (item.name ?? '').toLocaleLowerCase().includes(currentValue.toLocaleLowerCase());

  const handleSelect = (input: FieldInputProps<string[]>, value: string) => {
    if (input.value.includes(value)) {
      input.onChange(input.value.filter((v: string) => v !== value));
    } else {
      input.onChange([value]);
    }
  };

  const linkTypes: RadioDataType[] = Object.keys(LinkBusinessType).map(key => ({
    label: formatMessage({ id: `dictionaries.link_business_type.${key}` }),
    icon: <HomeIcon />,
    value: key,
  }));

  return (
    <Modal
      fullWidth
      isOpened={isOpened}
      onClose={onClose}
      title={formatMessage({ id: 'crm.details.linked_businesses.link_business' })}
      className={classes.modal}
    >
      <Form onSubmit={onSubmit} mutators={{ ...arrayMutators }}>
        {({ handleSubmit, submitErrors, values }) => (
          <form onSubmit={handleSubmit}>
            <DialogContent>
              <Field name="partner">
                {({ input }) => (
                  <SearchList<BusinessListItem>
                    items={businessList}
                    selectedItemsIds={[]}
                    item={({ item, highlightString }) => (
                      <Box mb={2}>
                        <TileCheckbox
                          onClick={() => handleSelect(input, item.id)}
                          isSelected={input.value.includes(item.id)}
                          title={highlightString(item.name ?? '')}
                          orientation="horizontal"
                        >
                          <RoundBusinessCenterIcon />
                        </TileCheckbox>
                      </Box>
                    )}
                    filterItem={filterItem}
                  />
                )}
              </Field>
              <Box mt={4}>
                <Typography variant="h3" className={classes.fontWeightMedium}>
                  {formatMessage({ id: 'common.select_role_to_business' })}
                </Typography>
              </Box>
              <Box mt={2}>
                <RadioGroupField name="type" options={linkTypes} actionElement={<TileButton onClick={() => {}} />} />
              </Box>
            </DialogContent>
            <DialogActions className={classes.actions}>
              <CancelButton size="large" variant="outlined" onClick={onClose}>
                {formatMessage({ id: 'common.cancel' })}
              </CancelButton>
              <SubmitButton
                startIcon={<AddIcon color="inherit" />}
                type="submit"
                size="large"
                color="primary"
                variant="contained"
              >
                {formatMessage({ id: 'crm.details.linked_businesses.link_business' })}
              </SubmitButton>
            </DialogActions>
          </form>
        )}
      </Form>
    </Modal>
  );
};
