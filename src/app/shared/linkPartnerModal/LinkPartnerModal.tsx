import React from 'react';
import { Field, FieldInputProps, Form } from 'react-final-form';
import arrayMutators from 'final-form-arrays';

import { useLocale } from 'hooks';
import { Modal, SubmitButton } from 'ui/molecules';
import { Button, DialogActions, DialogContent, Typography, Box, TileCheckbox } from 'ui/atoms';
import { AddIcon, BogIcon } from 'ui/atoms/icons';
import { SearchList } from 'ui/organisms';

import { useStyles } from './LinkPartnerModal.styles';
import { LinkPartnerModalCrmListItem, LinkPartnerModalProps } from './LinkPartnerModal.types';

export const LinkPartnerModal = ({ isOpened, onClose, onSubmit, crmList }: LinkPartnerModalProps) => {
  const { formatMessage } = useLocale();
  const classes = useStyles();

  const filterItem = (item: LinkPartnerModalCrmListItem, currentValue: string) =>
    `${item.firstName ?? ''} ${item.lastName ?? ''}`.toLocaleLowerCase().includes(currentValue.toLocaleLowerCase());

  const handleSelect = (input: FieldInputProps<string[]>, value: string) => {
    if (input.value.includes(value)) {
      input.onChange(input.value.filter((v: string) => v !== value));
    } else {
      input.onChange([value]);
    }
  };

  return (
    <Modal
      fullWidth
      isOpened={isOpened}
      onClose={onClose}
      title={formatMessage({ id: 'crm.partner.link_partner' })}
      className={classes.modal}
    >
      <Form onSubmit={onSubmit} mutators={{ ...arrayMutators }}>
        {({ handleSubmit, submitErrors, values }) => (
          <form onSubmit={handleSubmit}>
            <DialogContent>
              <Typography variant="h6" className={classes.userList}>
                {formatMessage({ id: 'crm.relation.search_results' })}
              </Typography>
              <Field name="partner">
                {({ input }) => (
                  <SearchList<LinkPartnerModalCrmListItem>
                    items={crmList}
                    selectedItemsIds={[]}
                    item={({ item, highlightString }) => (
                      <Box mb={2}>
                        <TileCheckbox
                          onClick={() => handleSelect(input, item.id)}
                          isSelected={input.value.includes(item.id)}
                          title={highlightString(`${item.firstName ?? ''} ${item.lastName ?? ''}`)}
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
                disabled={!values.partner?.length}
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
