import React, { useState } from 'react';
import { useLocale } from 'hooks/useLocale/useLocale';
import {
  Card,
  CardHeader,
  FormControlLabel,
  Switch,
  IconButton,
  CardContent,
  Grid,
  Typography,
  Button,
} from 'ui/atoms';
import { AddIcon, LinkIcon } from 'ui/atoms/icons';
import { InfoSection } from 'ui/molecules';
import { Profile } from 'api/types';

import { useStyles } from './Partner.styles';
import { PartnerProps } from './Partner.types';
import { PartnerItem } from './partnerItem/PartnerItem';

export const Partner = ({ users }: PartnerProps) => {
  const classes = useStyles();
  const { formatMessage } = useLocale();
  const [isEditing, setIsEditing] = useState(false);
  const [partners, setPartners] = useState<Profile[]>([]);

  const handleAddNewPartner = () => {
    setPartners([...partners, { ...users[0] }]);
  };

  return (
    <Card className={classes.root}>
      <CardHeader
        title={formatMessage({ id: 'crm.details.personal_information_family_and_contacts.partner.title' })}
        action={
          <>
            <FormControlLabel
              control={<Switch checked={isEditing} onChange={() => setIsEditing(!isEditing)} color="primary" />}
              label={formatMessage({ id: 'form_section.edit_mode' })}
              labelPlacement="start"
              className={classes.editSwitcher}
            />
            <IconButton aria-label="add" color="primary" size="small" onClick={handleAddNewPartner}>
              <AddIcon color="inherit" />
            </IconButton>
          </>
        }
      />
      <CardContent>
        <Grid item xs={12}>
          {partners.length === 0 && (
            <InfoSection emoji="🤔" className={classes.content}>
              <Typography variant="h3">
                {formatMessage({
                  id: 'crm.details.personal_information_family_and_contacts.partner.empty_title',
                })}
              </Typography>
              <Typography variant="h3">
                {formatMessage({
                  id: 'crm.details.personal_information_family_and_contacts.partner.empty_description',
                })}
              </Typography>
              <Button
                color="primary"
                variant="contained"
                onClick={() => handleAddNewPartner()}
                startIcon={<LinkIcon color="inherit" />}
                size="small"
                className={classes.marginTopTwo}
              >
                {formatMessage({ id: 'crm.details.personal_information_family_and_contacts.partner.link_user' })}
              </Button>
            </InfoSection>
          )}
          {partners.length > 0 &&
            partners.map((partner, index) => <PartnerItem className={classes.partnerItem} partner={partner} />)}
        </Grid>
      </CardContent>
    </Card>
  );
};
