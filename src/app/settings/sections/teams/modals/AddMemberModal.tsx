import React from 'react';
import { Field, FieldInputProps } from 'react-final-form';
import { Avatar, Box, TileCheckbox } from 'ui/atoms';
import { FormModal, SearchList } from 'ui/organisms';
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
    <FormModal
      title={formatMessage({ id: 'settings.teams.add_members.title' })}
      isOpened={isOpened}
      onClose={onClose}
      onSubmit={onSubmit}
    >
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
                    src={item?.image?.url ?? undefined}
                    alt={item.firstName ?? 'No avatar'}
                  />
                </TileCheckbox>
              </Box>
            )}
            filterItem={filterItem}
          />
        )}
      </Field>
    </FormModal>
  );
};
