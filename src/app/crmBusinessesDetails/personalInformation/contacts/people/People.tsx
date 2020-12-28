import React, { useState } from 'react';

import { useLocale, useModalDispatch } from 'hooks';
import { PromiseFunction } from 'app/shared/types';
import { Card, CardHeader, CardContent, FormControlLabel, Switch, IconButton, Typography } from 'ui/atoms';
import { AddNewPersonBody } from '../addNewPersonModal/AddNewPersonModal.types';
import { AddIcon } from 'ui/atoms/icons';
import { InfoSection } from 'ui/molecules';
import { AddNewPersonModalContainer } from '../addNewPersonModal/AddNewPersonModalContainer';
import { FormSubSection } from 'ui/organisms';

import { PeopleGroup, PersonItem as PersonItemType } from './People.types';
import { useStyles } from './People.styles';
import { PersonItem } from './personItem/PersonItem';

export const People = () => {
  const { formatMessage } = useLocale();
  const [isEditing, setIsEditing] = useState(false);
  const { open, close } = useModalDispatch();
  const [people, setPeople] = useState<PersonItemType[]>([]);
  const classes = useStyles();

  const handleAddNewPerson: PromiseFunction<AddNewPersonBody> = async ({ crm, type }) => {
    try {
      setPeople([
        ...people,
        {
          ...crm,
          linkedType: type,
        },
      ]);

      close('add-new-person');

      return undefined;
    } catch (error) {
      return {
        error: true,
      };
    }
  };

  const groupedPeople: PeopleGroup[] = people.reduce((accum: PeopleGroup[], person: PersonItemType) => {
    const index = accum.findIndex(group => group.type === person.linkedType);

    if (index >= 0) {
      return [
        ...accum.slice(index, 1),
        {
          type: accum[index].type,
          items: [...accum[index].items, person],
        },
      ];
    } else {
      return [
        {
          type: person.linkedType,
          items: [person],
        },
      ];
    }
  }, []);

  return (
    <Card>
      <CardHeader
        title={formatMessage({ id: 'crm.details.personal_information_contacts.people.title' })}
        action={
          <>
            <FormControlLabel
              control={<Switch checked={isEditing} onChange={() => setIsEditing(!isEditing)} color="primary" />}
              label={formatMessage({ id: 'form_section.edit_mode' })}
              labelPlacement="start"
              className={classes.editSwitcher}
            />
            <IconButton aria-label="add" color="primary" size="small" onClick={() => open('add-new-person')}>
              <AddIcon color="inherit" />
            </IconButton>
          </>
        }
      />
      <CardContent>
        {people.length === 0 && (
          <InfoSection emoji="🤔" color="gradient">
            <Typography variant="h3">
              {formatMessage({
                id: 'crm.details.personal_information_contacts.people.empty_title',
              })}
            </Typography>
            <Typography variant="h3">
              {formatMessage({
                id: 'crm.details.personal_information_contacts.people.empty_description',
              })}
            </Typography>
          </InfoSection>
        )}
        {groupedPeople.map((group, index) => (
          <FormSubSection
            title={formatMessage({ id: `dictionaries.person_type.${group.type}` })}
            onOptionsClick={() => {}}
            counter={group.items.length}
          >
            {group.items.map((item, itemIndex) => (
              <PersonItem key={itemIndex} person={item} />
            ))}
          </FormSubSection>
        ))}
        <AddNewPersonModalContainer onSubmit={handleAddNewPerson} />
      </CardContent>
    </Card>
  );
};
