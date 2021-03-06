import React, { useState } from 'react';
import { DndProvider } from 'react-dnd';
import { TouchBackend } from 'react-dnd-touch-backend';

import { useLocale } from 'hooks';
import { FormSection } from 'ui/organisms';
import { Typography, Box } from 'ui/atoms';

import { useStyles } from './SettingsFloorPlans.styles';
import { SettingsFloorPlanItem } from './SettingsFloorPlans.types';
import { PlanItem } from './planItem/PlanItem';
import { PlanItemPlaceholder } from './planItemPlaceholder/PlanItemPlaceholder';
import { PlanItemDragObject } from './planItemDragObject/PlanItemDragObject';

export const SettingsFloorPlans = () => {
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

  const [mainPicture, setMainPicture] = useState<SettingsFloorPlanItem>();
  const [addedPictures, setAddedPictures] = useState<SettingsFloorPlanItem[]>([]);

  const handleAddToList = (item: SettingsFloorPlanItem) => {
    const filteredList = addedPictures.filter(picture => picture.id !== item.id);

    if (mainPicture && mainPicture.id === item.id) {
      setMainPicture(undefined);
    }

    setAddedPictures([...filteredList, item]);
  };

  const handleChangeOrder = (source: SettingsFloorPlanItem, target: SettingsFloorPlanItem) => {
    const targetIndex = addedPictures
      .filter(picture => picture.id !== source.id)
      .findIndex(picture => picture.id === target.id);
    const filteredList = addedPictures.filter(picture => picture.id !== source.id);
    setAddedPictures([...filteredList.slice(0, targetIndex + 1), source, ...filteredList.slice(targetIndex + 1)]);
  };

  const handleRemoveFromList = (item: SettingsFloorPlanItem) => {
    setAddedPictures([...addedPictures.filter(picture => picture.id !== item.id)]);
  };

  const handleSetMainPicture = (item: SettingsFloorPlanItem) => {
    handleRemoveFromList(item);
    setMainPicture(item);
  };

  const handleRemoveFromMainPicture = () => {
    setMainPicture(undefined);
  };

  return (
    <FormSection
      title={formatMessage({ id: 'pim_details.publication.funda.settings.floor_plans.title' })}
      isEditable
      isExpandable
    >
      <DndProvider backend={TouchBackend} options={{ enableMouseEvents: true }}>
        <PlanItemDragObject />
        <Box display="flex" flexWrap>
          <Box mr={2}>
            <Typography variant="h5" className={classes.fontWeightMedium} color="textSecondary">
              {formatMessage({ id: 'pim_details.publication.funda.settings.floor_plans.main_picture' })}
            </Typography>
            <Box mt={1.5} />
            {mainPicture ? (
              <PlanItem isAdded onRemoveFromList={handleRemoveFromMainPicture} {...mainPicture} />
            ) : (
              <PlanItemPlaceholder onAddItemToAddedList={handleSetMainPicture} />
            )}
          </Box>
          {addedPictures.map((picture, index) => (
            <Box mr={2}>
              <Typography variant="h5" className={classes.fontWeightMedium} color="textSecondary">
                {index + 1}
              </Typography>
              <Box mt={1.5} />
              <PlanItem
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
            <PlanItemPlaceholder onAddItemToAddedList={handleAddToList} />
          </Box>
        </Box>
        <Box mt={9} />
        <Typography variant="h5" className={classes.fontWeightMedium} color="textSecondary">
          {formatMessage({ id: 'pim_details.publication.funda.settings.floor_plans.available_images' })}
        </Typography>
        <PlanItemDragObject />
        <Box display="flex" flexWrap mt={1.5}>
          {availableImages
            .filter(
              picture =>
                (!mainPicture || mainPicture.id !== picture.id) &&
                addedPictures.findIndex(image => image.id === picture.id) < 0,
            )
            .map((picture, index) => (
              <Box mr={2}>
                <PlanItem key={index} {...picture} />
              </Box>
            ))}
        </Box>
      </DndProvider>
    </FormSection>
  );
};
