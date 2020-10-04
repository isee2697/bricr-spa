import React, { useState } from 'react';
import { groupBy } from 'lodash';

import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  FormControlLabel,
  Grid,
  IconButton,
  Switch,
  Typography,
} from 'ui/atoms';
import { AddIcon, ArrowUpIcon, LinkIcon, MenuIcon } from 'ui/atoms/icons';
import { useLocale } from 'hooks';
import { InfoSection } from 'ui/molecules';

import { useStyles } from './People.styles';
import { Contact, ContactType, PeopleProps } from './People.types';
import { ContactItem } from './contactItem/ContactItem';

export const People = ({ users }: PeopleProps) => {
  const classes = useStyles();
  const { formatMessage } = useLocale();
  const [isEditing, setIsEditing] = useState(false);
  const [people, setPeoples] = useState<Contact[]>([]);

  const handleAddNewPerson = () => {
    setPeoples([
      ...people,
      {
        profile: users[0],
        type: ContactType.MainContact,
      },
      {
        profile: users[0],
        type: ContactType.Broker,
      },
      {
        profile: users[0],
        type: ContactType.Broker,
      },
    ]);
  };

  const groupPeople = () => {
    const groups = groupBy(people, 'type');

    return Object.keys(groups).map(key => ({
      group: key,
      contacts: groups[key],
    }));
  };

  return (
    <Card>
      <CardHeader
        title={formatMessage({ id: 'crm.details.personal_information_family_and_contacts.people.title' })}
        action={
          <>
            <FormControlLabel
              control={<Switch checked={isEditing} onChange={() => setIsEditing(!isEditing)} color="primary" />}
              label={formatMessage({ id: 'form_section.edit_mode' })}
              labelPlacement="start"
              className={classes.editSwitcher}
            />
            <IconButton aria-label="add" color="primary" size="small" onClick={handleAddNewPerson}>
              <AddIcon color="inherit" />
            </IconButton>
          </>
        }
      />
      <CardContent>
        <Grid item xs={12}>
          {people.length === 0 && (
            <InfoSection emoji="🤔" className={classes.content}>
              <Typography variant="h3">
                {formatMessage({
                  id: 'crm.details.personal_information_family_and_contacts.people.empty_title',
                })}
              </Typography>
              <Typography variant="h3">
                {formatMessage({
                  id: 'crm.details.personal_information_family_and_contacts.people.empty_description',
                })}
              </Typography>
              <Button
                color="primary"
                variant="contained"
                onClick={() => handleAddNewPerson()}
                startIcon={<LinkIcon color="inherit" />}
                size="small"
                className={classes.marginTopTwo}
              >
                {formatMessage({ id: 'crm.details.personal_information_family_and_contacts.people.link_user' })}
              </Button>
            </InfoSection>
          )}
          {people.length > 0 &&
            groupPeople().map((group, index) => (
              <React.Fragment key={index}>
                <Box display="flex" className={classes.groupHeader}>
                  <Typography variant="h5" className={classes.groupIndex}>
                    {index + 1}
                  </Typography>
                  <Typography variant="h3" className={classes.groupTitle}>
                    {formatMessage({
                      id: `crm.details.personal_information_family_and_contacts.people.${group.group}`,
                    })}
                  </Typography>
                  <IconButton size="small" variant="rounded" className={classes.marginRightThree}>
                    <MenuIcon />
                  </IconButton>
                  <IconButton size="small" variant="rounded">
                    <ArrowUpIcon />
                  </IconButton>
                </Box>
                {group.contacts.map((contact, contactIndex) => (
                  <ContactItem key={contactIndex} className={classes.contactItem} contact={contact} />
                ))}
              </React.Fragment>
            ))}
        </Grid>
      </CardContent>
    </Card>
  );
};
