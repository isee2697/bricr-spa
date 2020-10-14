import * as uuid from 'uuid';
import React, { useState } from 'react';

import { useLocale } from 'hooks/useLocale/useLocale';
import { Card, CardHeader, FormControlLabel, Switch, IconButton, CardContent, Grid, Typography } from 'ui/atoms';
import { AddIcon } from 'ui/atoms/icons';
import { AutosaveForm, FormSubSection } from 'ui/organisms';
import { InfoSection } from 'ui/molecules';
import { GenericField } from 'form/fields';
import { useModalState } from 'hooks/useModalState/useModalState';
import { useModalDispatch } from 'hooks/useModalDispatch/useModalDispatch';
import { AddNewSocialMediaBody } from '../addNewSocialMediaModal/AddNewSocialMediaModal.types';
import { AddNewSocialMediaModal } from '../addNewSocialMediaModal/AddNewSocialMediaModal';
import { PromiseFunction } from 'app/shared/types';

import { SocialMediaItem, SocialMediaProps } from './SocialMedia.types';
import { useStyles } from './SocialMedia.styles';

export const SocialMedia = ({ data, onSave }: SocialMediaProps) => {
  const classes = useStyles();
  const { formatMessage } = useLocale();
  const [isEditing, setIsEditing] = useState(false);
  const { open, close } = useModalDispatch();
  const { isOpen: isModalOpen } = useModalState('add-new-social-media');
  const [socialMedias, setSocialMedias] = useState<SocialMediaItem[]>(
    (data.socialMedia || []).map(socialMedia => ({ ...socialMedia, key: uuid.v4() })),
  );

  const handleAddNewSocialMedia: PromiseFunction<AddNewSocialMediaBody> = async ({ socialMediaType }) => {
    try {
      setSocialMedias([
        ...socialMedias,
        {
          key: uuid.v4(),
          type: socialMediaType,
          url: '',
        },
      ]);

      close('add-new-social-media');

      return undefined;
    } catch (error) {
      return {
        error: true,
      };
    }
  };

  const initialValues = socialMedias.reduce((accu, currentValue) => {
    return {
      ...accu,
      [currentValue.key]: {
        ...currentValue,
      },
    };
  }, {});

  const handleSave = async (values: Record<string, SocialMediaItem>) => {
    const removeKeyAndAddType = (key: string, value: SocialMediaItem) => {
      const { key: myKey, ...rest } = value;

      return { ...rest, type: socialMedias.find(socialMedia => socialMedia.key === key)?.type };
    };

    const newData = {
      socialMedia: Object.entries(values).map(([key, value]) => removeKeyAndAddType(key, value)),
    };

    return await onSave(newData);
  };

  return (
    <Card className={classes.root}>
      <CardHeader
        title={formatMessage({ id: 'crm.details.personal_information_contact_information.social_medias.title' })}
        action={
          <>
            <FormControlLabel
              control={<Switch checked={isEditing} onChange={() => setIsEditing(!isEditing)} color="primary" />}
              label={formatMessage({ id: 'form_section.edit_mode' })}
              labelPlacement="start"
              className={classes.editSwitcher}
            />
            <IconButton aria-label="add" color="primary" size="small" onClick={() => open('add-new-social-media')}>
              <AddIcon color="inherit" />
            </IconButton>
          </>
        }
      />
      <CardContent>
        <AutosaveForm onSave={handleSave} initialValues={initialValues}>
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
                <FormSubSection
                  key={index}
                  title={
                    <>
                      <Typography variant="h5" className={classes.socialMediaIndex}>
                        {index + 1}
                      </Typography>
                      <Typography variant="h3" className={classes.socialMediaTitle}>
                        {formatMessage({
                          id: `dictionaries.contact_information.social_media_type.${socialMedia.type}`,
                        })}
                      </Typography>
                    </>
                  }
                  onOptionsClick={() => {}}
                >
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
                </FormSubSection>
              ))}
          </Grid>
        </AutosaveForm>
        <AddNewSocialMediaModal
          onSubmit={handleAddNewSocialMedia}
          isOpened={isModalOpen}
          onClose={() => close('add-new-social-media')}
        />
      </CardContent>
    </Card>
  );
};
