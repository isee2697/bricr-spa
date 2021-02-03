import React from 'react';
import { useParams } from 'react-router-dom';
import arrayMutators from 'final-form-arrays';

import { useLocale } from 'hooks';
import { AutosaveForm, FormSection } from 'ui/organisms';
import { UploadImageGroupField } from 'form/fields';
import { EntityWithFiles, EntityWithMultipleFiles } from 'api/types';
import { Avatar, Typography, Box } from 'ui/atoms';

import { useStyles } from './SettingsPictures.styles';

export const SettingsPictures = () => {
  const { formatMessage } = useLocale();
  const classes = useStyles();

  const { id } = useParams<{ id: string }>();

  const handleSaveSettingsPictures = async () => {
    return undefined;
  };

  const pictures = [
    {
      image: 'http://placeimg.com/104/152/arch',
      title: 'Badkamer 1',
    },
    {
      image: 'http://placeimg.com/104/152/arch',
      title: 'Badkamer 2',
    },
  ];

  return (
    <FormSection
      title={formatMessage({ id: 'pim_details.publication.funda.settings.pictures.title' })}
      isEditable
      isExpandable
    >
      {isEditing => (
        <AutosaveForm onSave={handleSaveSettingsPictures} mutators={{ ...arrayMutators }}>
          <UploadImageGroupField
            entity={EntityWithFiles.Pim}
            entityID={id}
            max={300}
            disabled={!isEditing}
            name="pim_details.publication.funda.settings.pictures.images"
            removeEntity={EntityWithMultipleFiles.Pim}
          />
          <Box mt={9} />
          <Box display="flex" flexWrap>
            {pictures.map((picture, index) => (
              <Box mr={2}>
                <Avatar variant="rounded" src={picture.image} className={classes.avatar} />
                <Typography variant="caption" className={classes.fontWeightBold} color="textSecondary">
                  {picture.title}
                </Typography>
              </Box>
            ))}
          </Box>
        </AutosaveForm>
      )}
    </FormSection>
  );
};
