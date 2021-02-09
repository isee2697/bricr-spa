import React, { useState } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

import { useLocale } from 'hooks';
import { FormSection } from 'ui/organisms';
import { Typography, Box } from 'ui/atoms';

import { useStyles } from './SettingsFloorPlans.styles';
import { SettingsFloorPlanItem } from './SettingsFloorPlans.types';
import { PlanItem } from './planItem/PlanItem';
import { PlanItemPlaceholder } from './planItemPlaceholder/PlanItemPlaceholder';

export const SettingsFloorPlans = () => {
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

  const [addedPictures, setAddedPictures] = useState<SettingsFloorPlanItem[]>([]);

  const handleAddToList = (item: SettingsFloorPlanItem) => {
    setAddedPictures([...addedPictures, item]);
  };

  const handleRemoveFromList = (item: SettingsFloorPlanItem) => {
    setAddedPictures([...addedPictures.filter(picture => picture.id !== item.id)]);
  };

  return (
    <FormSection
      title={formatMessage({ id: 'pim_details.publication.funda.settings.floor_plans.title' })}
      isEditable
      isExpandable
    >
      <DndProvider backend={HTML5Backend}>
        <Box display="flex" flexWrap>
          {addedPictures.map((picture, index) => (
            <Box mr={2}>
              <Typography variant="h5" className={classes.fontWeightMedium} color="textSecondary">
                {index === 0
                  ? formatMessage({ id: 'pim_details.publication.funda.settings.floor_plans.main_picture' })
                  : index}
              </Typography>
              <Box mt={1.5} />
              <PlanItem key={index} {...picture} isAdded onRemoveFromList={handleRemoveFromList} />
            </Box>
          ))}
          <Box>
            <Typography variant="h5" className={classes.fontWeightMedium} color="textSecondary">
              {Math.max(addedPictures.length, 1)}
            </Typography>
            <Box mt={1.5} />
            <PlanItemPlaceholder onAddItemToAddedList={handleAddToList} />
          </Box>
        </Box>
      </DndProvider>
      <Box mt={9} />
      <Typography variant="h5" className={classes.fontWeightMedium} color="textSecondary">
        {formatMessage({ id: 'pim_details.publication.funda.settings.floor_plans.available_images' })}
      </Typography>
      <DndProvider backend={HTML5Backend}>
        <Box display="flex" flexWrap mt={1.5}>
          {availableImages
            .filter(picture => addedPictures.findIndex(image => image.id === picture.id) < 0)
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
