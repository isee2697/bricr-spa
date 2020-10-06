import React, { useState } from 'react';

import { useLocale } from 'hooks/useLocale/useLocale';
import { Card, CardHeader, FormControlLabel, Switch, IconButton, CardContent, Grid, Typography, Box } from 'ui/atoms';
import { AddIcon, ArrowUpIcon, MenuIcon } from 'ui/atoms/icons';
import { AutosaveForm } from 'ui/organisms';
import { InfoSection } from 'ui/molecules';
import { GenericField } from 'form/fields';

import { useStyles } from './SocialMedia.styles';
import { SocialMediaType } from './SocialMedia.types';

export const SocialMedia = () => {
  const classes = useStyles();
  const { formatMessage } = useLocale();
  const [isEditing, setIsEditing] = useState(false);
  // Temporary code for add new social media before data integrating
  const [socialMedias, setSocialmedias] = useState<SocialMediaType[]>([]);

  const getInitialValues = (socialMediasArray: SocialMediaType[]) => {
    return socialMediasArray.reduce((accu, currentValue) => {
      return {
        ...accu,
        [currentValue.key]: {
          ...currentValue,
        },
      };
    }, {});
  };

  const handleAddNewSocialMedia = () => {
    setSocialmedias([
      ...socialMedias,
      {
        key: 'facebook',
        title: 'Facebook',
        url: '',
      },
    ]);
  };

  const onSave = async (values: unknown) => {
    return { error: false };
  };

  return (
    <Card className={classes.root}>
      <CardHeader
        title={formatMessage({ id: 'crm.details.personal_information_contact_information.addresses.title' })}
        action={
          <>
            <FormControlLabel
              control={<Switch checked={isEditing} onChange={() => setIsEditing(!isEditing)} color="primary" />}
              label={formatMessage({ id: 'form_section.edit_mode' })}
              labelPlacement="start"
              className={classes.editSwitcher}
            />
            <IconButton aria-label="add" color="primary" size="small" onClick={handleAddNewSocialMedia}>
              <AddIcon color="inherit" />
            </IconButton>
          </>
        }
      />
      <CardContent>
        <AutosaveForm onSave={onSave} initialValues={getInitialValues(socialMedias)}>
          <Grid item xs={12}>
            {socialMedias.length === 0 && (
              <InfoSection emoji="🤔">
                <Typography variant="h3">
                  {formatMessage({
                    id: 'crm.details.personal_information_contact_information.social_medias.empty_title',
                  })}
                </Typography>
                <Typography variant="h3">
                  {formatMessage({
                    id: 'crm.details.personal_information_contact_information.social_medias.empty_description',
                  })}
                </Typography>
              </InfoSection>
            )}
            {socialMedias.length > 0 &&
              socialMedias.map((socialMedia, index) => (
                <React.Fragment key={index}>
                  <Box display="flex" className={classes.socialMediaHeader}>
                    <Typography variant="h5" className={classes.socialMediaIndex}>
                      {index + 1}
                    </Typography>
                    <Typography variant="h3" className={classes.socialMediaTitle}>
                      {socialMedia.title}
                    </Typography>
                    <IconButton size="small" variant="rounded" className={classes.marginRightThree}>
                      <MenuIcon />
                    </IconButton>
                    <IconButton size="small" variant="rounded">
                      <ArrowUpIcon />
                    </IconButton>
                  </Box>
                  <Grid container spacing={1} className={classes.socialMediaFormFields}>
                    <Grid item xs={4}>
                      <Typography variant="h5">
                        {formatMessage({
                          id: 'crm.details.personal_information_contact_information.social_medias.url_address',
                        })}
                      </Typography>
                      <GenericField
                        className={classes.formField}
                        name={`${socialMedia.key}.url`}
                        disabled={!isEditing}
                        placeholder="crm.details.personal_information_contact_information.social_medias.facebook_placeholder"
                      />
                    </Grid>
                  </Grid>
                </React.Fragment>
              ))}
          </Grid>
        </AutosaveForm>
      </CardContent>
    </Card>
  );
};
