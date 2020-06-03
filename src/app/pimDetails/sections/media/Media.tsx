import React from 'react';

import { PimDetailsSectionProps } from 'app/pimDetails/PimDetails.types';
import { PimDetailsHeader } from 'app/pimDetails/pimDetailsHeader/PimDetailsHeader';
import { Box, Grid, Typography } from 'ui/atoms';
import { useLocale } from 'hooks';
import { AutosaveForm } from 'ui/organisms';
import { GenericField } from 'form/fields';

import { PicturesContainer } from './pictures/PicturesContainer';
import { LinksContainer } from './links/LinksContainer';
import { TextChaptersContainer } from './textChapters/TextChaptersContainer';
import { UspsContainer } from './usps/UspsContainer';
import { TagsContainer } from './tags/TagsContainer';

export const Media = ({ title, isSidebarVisible, onOpenSidebar }: PimDetailsSectionProps) => {
  const { formatMessage } = useLocale();

  return (
    <>
      <PimDetailsHeader title={title} isSidebarVisible={isSidebarVisible} onOpenSidebar={onOpenSidebar} />
      <Grid item xs={12}>
        <Typography variant="h1">{formatMessage({ id: 'pim_details.media.title' })}</Typography>
        <AutosaveForm onSave={() => Promise.resolve({ error: false })}>
          <Box mb={1}>
            <GenericField placeholder="pim_details.media.description_placeholder" name="description" />
          </Box>
        </AutosaveForm>
      </Grid>
      <Grid item xs={12}>
        <PicturesContainer />
      </Grid>

      <Grid item xs={12}>
        <LinksContainer />
      </Grid>

      <Grid item xs={12}>
        <TextChaptersContainer />
      </Grid>

      <Grid item xs={12}>
        <UspsContainer />
      </Grid>

      <Grid item xs={12}>
        <TagsContainer />
      </Grid>
    </>
  );
};
