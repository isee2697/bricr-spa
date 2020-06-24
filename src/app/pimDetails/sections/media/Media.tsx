import React from 'react';

import { PimDetailsHeader } from 'app/pimDetails/pimDetailsHeader/PimDetailsHeader';
import { Grid } from 'ui/atoms';
import { useLocale } from 'hooks';
import { Page } from 'ui/templates';

import { PicturesContainer } from './pictures/PicturesContainer';
import { LinksContainer } from './links/LinksContainer';
import { TextChaptersContainer } from './textChapters/TextChaptersContainer';
import { UspsContainer } from './usps/UspsContainer';
import { TagsContainer } from './tags/TagsContainer';
import { MediaProps } from './Media.types';

export const Media = ({ title, isSidebarVisible, onOpenSidebar, media }: MediaProps) => {
  const { formatMessage } = useLocale();

  return (
    <>
      <PimDetailsHeader title={title} isSidebarVisible={isSidebarVisible} onOpenSidebar={onOpenSidebar} />
      <Page
        title={formatMessage({ id: 'pim_details.media.title' })}
        onSave={() => Promise.resolve({ error: false })}
        placeholder="pim_details.media.description_placeholder"
        name="name"
      >
        <Grid item xs={12}>
          <PicturesContainer pictures={media.pictures} />
        </Grid>

        <Grid item xs={12}>
          <LinksContainer links={media.mediaLinks} />
        </Grid>

        <Grid item xs={12}>
          <TextChaptersContainer chapters={media.textChapters} />
        </Grid>

        <Grid item xs={12}>
          <UspsContainer usps={media.usps} />
        </Grid>

        <Grid item xs={12}>
          <TagsContainer tags={media.tags} />
        </Grid>
      </Page>
    </>
  );
};
