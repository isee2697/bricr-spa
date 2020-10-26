import React from 'react';
import { Field, FieldInputProps, Form } from 'react-final-form';
import arrayMutators from 'final-form-arrays';

import { useLocale } from 'hooks';
import { Modal, SubmitButton } from 'ui/molecules';
import { Button, DialogActions, DialogContent, Typography, Box, TileCheckbox } from 'ui/atoms';
import { AddIcon, BogIcon, SquareIcon } from 'ui/atoms/icons';
import { RadioGroupField } from 'form/fields';
import { SearchList } from 'ui/organisms';

import { useStyles } from './LinkContactModal.styles';
import { LinkContactModalCrmListItem, LinkContactModalProps, LinkProfileType } from './LinkContactModal.types';

export const LinkContactModal = ({ isOpened, onClose, onSubmit, crmList }: LinkContactModalProps) => {
  const { formatMessage } = useLocale();
  const classes = useStyles();

  const filterItem = (item: LinkContactModalCrmListItem, currentValue: string) =>
    `${item.firstName ?? ''} ${item.insertion ?? ''} ${item.lastName ?? ''}`
      .toLocaleLowerCase()
      .includes(currentValue.toLocaleLowerCase());

  const handleSelect = (input: FieldInputProps<string[]>, value: string) => {
    if (input.value.includes(value)) {
      input.onChange(input.value.filter((v: string) => v !== value));
    } else {
      input.onChange([value]);
    }
  };

  const types = Object.keys(LinkProfileType).map(type => ({
    label: formatMessage({ id: `crm.relation.link_profile.type.${type}` }),
    icon: <SquareIcon />,
    value: type,
  }));

  return (
    <Modal
      fullWidth
      isOpened={isOpened}
      onClose={onClose}
      title={formatMessage({ id: 'crm.partner.link_person' })}
      className={classes.modal}
    >
      <Form onSubmit={onSubmit} mutators={{ ...arrayMutators }}>
        {({ handleSubmit, submitErrors, values }) => (
          <form onSubmit={handleSubmit}>
            <DialogContent>
              <Typography variant="h6" className={classes.userList}>
                {formatMessage({ id: 'crm.relation.search_results' })}
              </Typography>
              <Field name="contact">
                {({ input }) => (
                  <SearchList<LinkContactModalCrmListItem>
                    items={crmList}
                    selectedItemsIds={[]}
                    item={({ item, highlightString }) => (
                      <Box mb={2}>
                        <TileCheckbox
                          onClick={() => handleSelect(input, item.id)}
                          isSelected={input.value.includes(item.id)}
                          title={highlightString(
                            `${item.firstName ?? ''} ${item.insertion ?? ''} ${item.lastName ?? ''}`,
                          )}
                          orientation="horizontal"
                        >
                          <BogIcon />
                        </TileCheckbox>
                      </Box>
                    )}
                    filterItem={filterItem}
                  />
                )}
              </Field>
              <Box mt={4}>
                <Typography variant="h2" className={classes.userList}>
                  {formatMessage({ id: 'crm.relation.link_profile.select_type' })}
                </Typography>
                <RadioGroupField name="type" options={types} />
              </Box>
            </DialogContent>
            <DialogActions className={classes.actions}>
              <Button color="ghost" size="small" onClick={onClose}>
                {formatMessage({ id: 'common.cancel' })}
              </Button>
              <SubmitButton
                startIcon={<AddIcon color="inherit" />}
                type="submit"
                size="large"
                color="primary"
                variant="outlined"
              >
                {formatMessage({ id: 'crm.relation.link_profile' })}
              </SubmitButton>
            </DialogActions>
          </form>
        )}
      </Form>
    </Modal>
  );
};
