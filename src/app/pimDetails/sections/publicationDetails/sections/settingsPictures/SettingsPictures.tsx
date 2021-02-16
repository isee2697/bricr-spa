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
      image: 'https://via.placeholder.com/150/0000FF/808080?Text=FIRST',
      title: 'Badkamer 1',
    },
    {
      id: '0002',
      image: 'https://via.placeholder.com/150/FF0000/FFFFFF?Text=SECOND',
      title: 'Badkamer 2',
    },
    {
      id: '0003',
      image: 'https://via.placeholder.com/150/FFFF00/000000?Text=THIRD',
      title: 'Badkamer 2',
    },
    {
      id: '0004',
      image: 'https://via.placeholder.com/150/000000/FFFFFF?Text=FOURTH',
      title: 'Badkamer 2',
    },
  ];

  const [mainPicture, setMainPicture] = useState<SettingsPictureItem>();
  const [addedPictures, setAddedPictures] = useState<SettingsPictureItem[]>([]);

  const handleAddToList = (item: SettingsPictureItem) => {
    const filteredList = addedPictures.filter(picture => picture.id !== item.id);
    setAddedPictures([...filteredList, item]);
  };

  const handleChangeOrder = (source: SettingsPictureItem, target: SettingsPictureItem) => {
    const targetIndex = addedPictures
      .filter(picture => picture.id !== source.id)
      .findIndex(picture => picture.id === target.id);
    const filteredList = addedPictures.filter(picture => picture.id !== source.id);
    setAddedPictures([...filteredList.slice(0, targetIndex + 1), source, ...filteredList.slice(targetIndex + 1)]);
  };

  const handleRemoveFromList = (item: SettingsPictureItem) => {
    setAddedPictures([...addedPictures.filter(picture => picture.id !== item.id)]);
  };

  const handleSetMainPicture = (item: SettingsPictureItem) => {
    handleRemoveFromList(item);
    setMainPicture(item);
  };

  const handleRemoveFromMainPicture = () => {
    setAddedPictures([mainPicture!, ...addedPictures]);
    setMainPicture(undefined);
  };

  return (
    <FormSection
      title={formatMessage({ id: 'pim_details.publication.funda.settings.pictures.title' })}
      isEditable
      isExpandable
    >
      <DndProvider backend={HTML5Backend}>
        <Box display="flex" flexWrap>
          <Box mr={2}>
            <Typography variant="h5" className={classes.fontWeightMedium} color="textSecondary">
              {formatMessage({ id: 'pim_details.publication.funda.settings.floor_plans.main_picture' })}
            </Typography>
            <Box mt={1.5} />
            {mainPicture ? (
              <PictureItem isAdded onRemoveFromList={handleRemoveFromMainPicture} {...mainPicture} />
            ) : (
              <PictureItemPlaceholder onAddItemToAddedList={handleSetMainPicture} />
            )}
          </Box>
          {addedPictures.map((picture, index) => (
            <Box mr={2}>
              <Typography variant="h5" className={classes.fontWeightMedium} color="textSecondary">
                {index + 1}
              </Typography>
              <Box mt={1.5} />
              <PictureItem
                key={index}
                {...picture}
                isAdded
                onRemoveFromList={handleRemoveFromList}
                onChangeOrder={handleChangeOrder}
              />
            </Box>
          ))}
          <Box>
            <Typography variant="h5" className={classes.fontWeightMedium} color="textSecondary">
              {Math.max(addedPictures.length + 1, 1)}
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
            .filter(
              picture =>
                (!mainPicture || mainPicture.id !== picture.id) &&
                addedPictures.findIndex(image => image.id === picture.id) < 0,
            )
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
