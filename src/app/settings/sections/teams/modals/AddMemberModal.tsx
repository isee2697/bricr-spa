import React from 'react';
import { Field, FieldInputProps, Form } from 'react-final-form';

import { Avatar, Box, DialogActions, DialogContent, TileCheckbox } from 'ui/atoms';
import { SearchList } from 'ui/organisms';
import { CancelButton, Modal, SubmitButton } from 'ui/molecules';
import { LinkIcon } from 'ui/atoms/icons';
import { useLocale } from 'hooks';
import { AddMemberModalProps } from 'app/settings/sections/teams/modals/TeamsModals.types';
import { Profile } from 'api/types';

import { useStyles } from './AddMemberModal.styles';

export const AddMemberModal = ({ isOpened, onClose, onSubmit, userList }: AddMemberModalProps) => {
  const { formatMessage } = useLocale();
  const classes = useStyles();

  const filterItem = (item: Profile, currentValue: string) =>
    (item?.firstName?.toLocaleLowerCase().includes(currentValue.toLocaleLowerCase()) ||
      item?.lastName?.toLocaleLowerCase().includes(currentValue.toLocaleLowerCase()) ||
      item?.email?.toLocaleLowerCase().includes(currentValue.toLocaleLowerCase())) ??
    true;

  const handleSelect = (input: FieldInputProps<string[]>, value: string) => {
    if (input.value.includes(value)) {
      input.onChange(input.value.filter((v: string) => v !== value));
    } else {
      input.onChange([value]);
    }
  };

  const formatTitle = (item: Profile) => {
    return `${item.firstName}, ${item.lastName}`;
  };

  return (
    <Modal
      fullWidth
      isOpened={isOpened}
      onClose={onClose}
      title={formatMessage({ id: 'project_details.properties.modal.title' })}
    >
      <Form onSubmit={onSubmit}>
        {({ handleSubmit, submitting, valid, values }) => (
          <form onSubmit={handleSubmit} autoComplete="off">
            <DialogContent>
              <Field name="profileIds">
                {({ input }) => (
                  <SearchList<Profile>
                    items={userList}
                    selectedItemsIds={[]}
                    item={({ item, highlightString }) => (
                      <Box mb={2}>
                        <TileCheckbox
                          onClick={() => handleSelect(input, item.id)}
                          isSelected={input.value.includes(item.id)}
                          title={highlightString(formatTitle(item))}
                          orientation="horizontal"
                        >
                          <Avatar
                            className={classes.avatar}
                            src={item.avatar ?? undefined}
                            alt={item.firstName ?? 'No avatar'}
                          />
                        </TileCheckbox>
                      </Box>
                    )}
                    filterItem={filterItem}
                  />
                )}
              </Field>
            </DialogContent>
            <DialogActions className={classes.actions}>
              <CancelButton variant="outlined" size="large" onClick={onClose}>
                {formatMessage({ id: 'common.cancel' })}
              </CancelButton>
              <Box display="flex">
                <Box mr={0.625}>
                  {/*<CancelButton variant="outlined" size="large" onClick={onAdd}>*/}
                  {/*  {formatMessage({ id: 'project_details.properties.modal.create' })}*/}
                  {/*</CancelButton>*/}
                </Box>
                <SubmitButton
                  type="submit"
                  startIcon={<LinkIcon color="inherit" />}
                  size="large"
                  color="primary"
                  variant="contained"
                  isLoading={submitting}
                  disabled={!valid || userList.length === 0}
                >
                  {formatMessage({ id: 'project_details.properties.modal.confirm' })}
                </SubmitButton>
              </Box>
            </DialogActions>
          </form>
        )}
      </Form>
    </Modal>
  );
};
