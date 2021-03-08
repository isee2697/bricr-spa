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
import { CrmPartner, CrmPartnerInput } from 'api/types';
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
  const [partners] = useState<CrmPartner[] | undefined>(data.partners ? data.partners : undefined);

  const handleAddNewPartner = async (partnerIds: string[]) => {
    close('link-partner');

    let partners: CrmPartnerInput[] = data.partners?.map(partner => ({ id: partner.partner.id })) || [];
    partners = [...partners, ...partnerIds.map(id => ({ id }))];

    return await onSave({ id: data.id, partners });
  };

  const handleUpdatePartner = async (updated: CrmPartner) => {
    const partners: CrmPartnerInput[] =
      data.partners?.map(partner => ({
        id: partner.partner.id,
        isPassedAway: partner.partner.isPassedAway,
        dateOfDeath: partner.partner.dateOfDeath,
        isDivorced: partner.isDivorced,
      })) || [];
    const index = partners.findIndex(item => item.id === updated.partner.id);

    if (index !== -1) {
      partners[index].isPassedAway = updated.partner.isPassedAway;
      partners[index].dateOfDeath = updated.partner.dateOfDeath;
      partners[index].isDivorced = updated.isDivorced;

      await onSave({ id: data.id, partners });
    }

    return undefined;
  };

  const handleDeletePartner = async (partnerId: string) => {
    const partners = data.partners?.map(partner => ({ id: partner.partner.id })) || [];
    const index = partners.findIndex(partner => partner.id === partnerId);

    if (index !== -1) {
      partners.splice(index, 1);
      await onSave({ id: data.id, partners });
    }

    return undefined;
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
          {!partners?.length ? (
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
          ) : (
            partners.map(partner => (
              <PartnerItem
                key={partner.partner.id}
                className={classes.partnerItem}
                partner={partner}
                onUpdate={handleUpdatePartner}
                onDelete={() => handleDeletePartner(partner.partner.id)}
              />
            ))
          )}
        </Grid>
      </CardContent>
    </Card>
  );
};
