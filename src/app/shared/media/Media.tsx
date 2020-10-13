import React, { useState } from 'react';
import { PimDetailsHeader } from 'app/pimDetails/pimDetailsHeader/PimDetailsHeader';
import { Grid } from 'ui/atoms';
import { useLocale } from 'hooks';
import { Page } from 'ui/templates';
import { AddCustomPropertyModalContainer } from 'ui/organisms';
import { LabelProperty } from 'api/types';
import { useEntityType } from '../entityType';

import { PicturesContainer } from './pictures/PicturesContainer';
import { LinksContainer } from './links/LinksContainer';
import { TextChaptersContainer } from './textChapters/TextChaptersContainer';
import { UspsContainer } from './usps/UspsContainer';
import { TagsContainer } from './tags/TagsContainer';
import { MediaProps } from './Media.types';

export const Media = ({
  title,
  isSidebarVisible,
  onSidebarOpen,
  media,
  description,
  onDescriptionUpdate,
  sorting,
  sortQuery,
}: MediaProps) => {
  const { formatMessage } = useLocale();
  const { entityType } = useEntityType();
  const [isLabelModalOpened, setLabelModalOpened] = useState(false);
  const [labelProperty, setLabelProperty] = useState<LabelProperty | null>(null);

  const handleAddCustomType = (label: LabelProperty) => {
    setLabelProperty(label);
    setLabelModalOpened(true);
  };

  return (
    <>
      <PimDetailsHeader title={title} isSidebarVisible={isSidebarVisible} onSidebarOpen={onSidebarOpen} />
      <Page
        title={formatMessage({ id: 'pim_details.media.title' })}
        onSave={onDescriptionUpdate}
        placeholder="pim_details.media.description_placeholder"
        name="description"
        initialValues={{ description }}
        dateUpdated={media.dateUpdated}
        updatedBy={media.lastEditedBy}
      >
        <Grid item xs={12}>
          <PicturesContainer
            mainPictureId={media?.mainPictureId ?? undefined}
            pictures={media.pictures}
            sorting={sorting}
            sortQuery={sortQuery}
          />
        </Grid>

        <Grid item xs={12}>
          <LinksContainer
            links={media.mediaLinks}
            onAddCustomType={() => handleAddCustomType(LabelProperty.MediaLink)}
          />
        </Grid>

        <Grid item xs={12}>
          <TextChaptersContainer
            chapters={media.textChapters}
            onAddCustomType={() => handleAddCustomType(LabelProperty.TextChapter)}
          />
        </Grid>

        <Grid item xs={12}>
          <UspsContainer usps={media.usps} onAddCustomType={() => handleAddCustomType(LabelProperty.Usp)} />
        </Grid>

        <Grid item xs={12}>
          <TagsContainer tags={media.tags} onAddCustomType={() => handleAddCustomType(LabelProperty.Tag)} />
        </Grid>
      </Page>
      {isLabelModalOpened && labelProperty && (
        <AddCustomPropertyModalContainer
          property={labelProperty}
          isOpened={isLabelModalOpened}
          entityType={entityType}
          onClose={() => setLabelModalOpened(false)}
        />
      )}
    </>
  );
};
