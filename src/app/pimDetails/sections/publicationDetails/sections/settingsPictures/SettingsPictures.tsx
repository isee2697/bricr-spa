import React, { useState } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

import { useLocale } from 'hooks';
import { FormSection } from 'ui/organisms';
import { Typography, Box } from 'ui/atoms';

import { useStyles } from './SettingsPictures.styles';
import { SettingsPictureItem } from './SettingsPictures.types';
import { PictureItem } from './pictureItem/PictureItem';
import { PictureItemPlaceholder } from './pictureItemPlaceholder/PictureItemPlaceholder';

export const SettingsPictures = () => {
  const { formatMessage } = useLocale();
  const classes = useStyles();
  const availableImages = [
    {
      id: '0001',
      image: 'http://placeimg.com/104/152/arch',
      title: 'Badkamer 1',
    },
    {
      id: '0002',
      image: 'http://placeimg.com/104/152/arch',
      title: 'Badkamer 2',
    },
    {
      id: '0003',
      image: 'http://placeimg.com/104/152/arch',
      title: 'Badkamer 2',
    },
    {
      id: '0004',
      image: 'http://placeimg.com/104/152/arch',
      title: 'Badkamer 2',
    },
  ];

  const [addedPictures, setAddedPictures] = useState<SettingsPictureItem[]>([]);

  const handleAddToList = (item: SettingsPictureItem) => {
    setAddedPictures([...addedPictures, item]);
  };

  const handleRemoveFromList = (item: SettingsPictureItem) => {
    setAddedPictures([...addedPictures.filter(picture => picture.id !== item.id)]);
  };

  return (
    <FormSection
      title={formatMessage({ id: 'pim_details.publication.funda.settings.pictures.title' })}
      isEditable
      isExpandable
    >
      <DndProvider backend={HTML5Backend}>
        <Box display="flex" flexWrap>
          {addedPictures.map((picture, index) => (
            <Box mr={2}>
              <Typography variant="h5" className={classes.fontWeightMedium} color="textSecondary">
                {index === 0
                  ? formatMessage({ id: 'pim_details.publication.funda.settings.pictures.main_picture' })
                  : index}
              </Typography>
              <Box mt={1.5} />
              <PictureItem key={index} {...picture} isAdded onRemoveFromList={handleRemoveFromList} />
            </Box>
          ))}
          <Box>
            <Typography variant="h5" className={classes.fontWeightMedium} color="textSecondary">
              {Math.max(addedPictures.length, 1)}
            </Typography>
            <Box mt={1.5} />
            <PictureItemPlaceholder onAddItemToAddedList={handleAddToList} />
          </Box>
        </Box>
      </DndProvider>
      <Box mt={9} />
      <Typography variant="h5" className={classes.fontWeightMedium} color="textSecondary">
        {formatMessage({ id: 'pim_details.publication.funda.settings.pictures.available_images' })}
      </Typography>
      <DndProvider backend={HTML5Backend}>
        <Box display="flex" flexWrap mt={1.5}>
          {availableImages
            .filter(picture => addedPictures.findIndex(image => image.id === picture.id) < 0)
            .map((picture, index) => (
              <Box mr={2}>
                <PictureItem key={index} {...picture} />
              </Box>
            ))}
        </Box>
      </DndProvider>
    </FormSection>
  );
};
