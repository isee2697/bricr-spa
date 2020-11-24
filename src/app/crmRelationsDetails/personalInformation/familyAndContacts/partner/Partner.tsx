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
import { LinkedCrm } from 'api/types';
import { useModalDispatch } from 'hooks';
import { LinkPartnerModalContainer } from 'app/shared/linkPartnerModal/LinkPartnerModalContainer';

import { useStyles } from './Partner.styles';
import { PartnerProps } from './Partner.types';
import { PartnerItem } from './partnerItem/PartnerItem';

export const Partner = ({ data, onSave }: PartnerProps) => {
  const classes = useStyles();
  const { open, close } = useModalDispatch();
  const { formatMessage } = useLocale();
  const [isEditing, setIsEditing] = useState(false);
  const [partner] = useState<LinkedCrm | undefined>(data.partner ? data.partner : undefined);

  const handleAddNewPartner = async (partnerId: string | null) => {
    close('link-partner');

    return await onSave({ id: data.id, partnerId });
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
            <IconButton aria-label="add" color="primary" size="small" onClick={() => open('link-partner')}>
              <AddIcon color="inherit" />
            </IconButton>
            <LinkPartnerModalContainer onSubmit={handleAddNewPartner} />
          </>
        }
      />
      <CardContent>
        <Grid item xs={12}>
          {partner === undefined && (
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
                onClick={() => open('link-partner')}
                startIcon={<LinkIcon color="inherit" />}
                size="small"
                className={classes.marginTopTwo}
              >
                {formatMessage({ id: 'crm.details.personal_information_family_and_contacts.partner.link_user' })}
              </Button>
            </InfoSection>
          )}
          {partner && <PartnerItem className={classes.partnerItem} partner={partner} />}
        </Grid>
      </CardContent>
    </Card>
  );
};
