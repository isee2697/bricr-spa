import React from 'react';
import _ from 'lodash';
import { Box, Grid, Typography } from '@material-ui/core';
import { useParams } from 'react-router-dom';

import { useLocale } from 'hooks/useLocale/useLocale';
import { SocialMediaIcon } from 'ui/atoms/icons';
import { useModalDispatch } from 'hooks/useModalDispatch/useModalDispatch';
import { ContactSocialMediaType, CrmSocialMedia } from 'api/types';
import { CardWithList } from 'ui/templates';
import { GenericField, RadioGroupField } from 'form/fields';
import { FormSubSectionHeader } from 'ui/molecules';
import { AddNewSocialMediaModalContainer } from '../addNewSocialMediaModal/AddNewSocialMediaModalContainer';

import { SocialMediaProps } from './SocialMedia.types';
import { useStyles } from './SocialMedia.styles';

export const SocialMedia = ({ data, onSave }: SocialMediaProps) => {
  const classes = useStyles();
  const { formatMessage } = useLocale();
  const { open } = useModalDispatch();
  const { id } = useParams<{ id: string }>();

  const handleSave = async (values: CrmSocialMedia) => {
    try {
      await onSave({
        id,
        socialMedia: (data.socialMedia || []).map(item =>
          JSON.parse(
            JSON.stringify(item.id === values.id ? _.omit(values, ['title']) : item, (key, value) =>
              value === null || key === '__typename' || key === 'id' ? undefined : value,
            ),
          ),
        ),
      });

      return undefined;
    } catch (error) {
      return { error: true };
    }
  };

  const addressTypes = Object.keys(ContactSocialMediaType).map(addressType => ({
    label: `dictionaries.contact_information.social_media_type.${addressType}`,
    icon: <SocialMediaIcon />,
    value: addressType,
  }));

  return (
    <>
      <CardWithList<CrmSocialMedia>
        title={formatMessage({ id: 'crm.details.personal_information_contact_information.social_medias.title' })}
        emptyStateTextFirst={formatMessage({
          id: 'crm.details.personal_information_contact_information.social_medias.empty_title',
        })}
        emptyStateTextSecond={formatMessage({
          id: 'crm.details.personal_information_contact_information.social_medias.empty_description',
        })}
        emoji="🙌"
        renderItem={(item: CrmSocialMedia, isEditing: boolean) => (
          <>
            <FormSubSectionHeader
              title={''}
              subtitle={formatMessage({ id: 'common.choose_one_option_below' })}
              noBorder
            />
            <Box mb={2} />
            <RadioGroupField
              spacing={1}
              disabled={!isEditing}
              xs={4}
              md={3}
              lg={2}
              name={'type'}
              options={addressTypes}
            />
            <Box mb={2} />
            <Grid container spacing={1}>
              <Grid item xs={4}>
                <Typography variant="h5">
                  {formatMessage({
                    id: 'crm.details.personal_information_contact_information.social_medias.url_address',
                  })}
                </Typography>
                <GenericField
                  className={classes.formField}
                  name={'url'}
                  disabled={!isEditing}
                  placeholder="crm.details.personal_information_contact_information.social_medias.facebook_placeholder"
                />
              </Grid>
            </Grid>
          </>
        )}
        items={(data.socialMedia || []).map(socialMedia => ({
          ...socialMedia,
          title: formatMessage({ id: `dictionaries.contact_information.social_media_type.${socialMedia.type}` }),
        }))}
        onSave={handleSave}
        onAdd={() => open('add-new-social-media')}
        isInitExpanded
        isInitEditing
        isEditable
        isExpandable={false}
      />
      <AddNewSocialMediaModalContainer id={id} data={data} />
    </>
  );
};
