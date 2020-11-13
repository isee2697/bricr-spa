import React from 'react';

import { Box, Button, Card, CardContent, Typography } from 'ui/atoms';
import { useLocale, useModalDispatch, useModalState } from 'hooks';
import { AddIcon } from 'ui/atoms/icons';
import { InfoSection } from 'ui/molecules';

import { useStyles } from './LvzProperty.styles';
import { LvzPropertyProps } from './LvzProperty.types';
import { AddLvzPropertyGroupModal } from './addLvzPropertyGroupModal/AddLvzPropertyGroupModal';
import { LzvPropertyItem } from './lzvPropertyItem/LzvPropertyItem';

export const LvzProperty = ({ groups, onAddLvzGroup }: LvzPropertyProps) => {
  const classes = useStyles();
  const { formatMessage } = useLocale();
  const { open, close } = useModalDispatch();
  const { isOpen: isModalOpen } = useModalState('add-lvz-property-group');

  return (
    <>
      <Box mb={2} display="flex" alignItems="center" justifyContent="space-between">
        <Box>
          <Typography variant="h3" className={classes.fontWeightBold}>
            {formatMessage({ id: 'settings.documents.lvz_property.title' })}
          </Typography>
          <Box mt={3}>
            <Typography variant="h3">{formatMessage({ id: 'settings.documents.lvz_property.sub_title' })}</Typography>
          </Box>
        </Box>
        <Button
          color="primary"
          variant="contained"
          startIcon={<AddIcon color="inherit" />}
          onClick={() => open('add-lvz-property-group')}
        >
          {formatMessage({ id: 'settings.documents.lvz_property.add_lvz_group' })}
        </Button>
      </Box>
      {groups.map((group, index) => (
        <LzvPropertyItem key={index} group={group} />
      ))}
      {groups.length === 0 && (
        <Card>
          <CardContent>
            <InfoSection emoji="🤔">
              <Typography variant="h3">
                {formatMessage({ id: 'settings.documents.lvz_property.empty.title' })}
              </Typography>
              <Typography variant="h3">
                {formatMessage({ id: 'settings.documents.lvz_property.empty.description' })}
              </Typography>
            </InfoSection>
          </CardContent>
        </Card>
      )}
      <AddLvzPropertyGroupModal
        isOpened={isModalOpen}
        onClose={() => close('add-lvz-property-group')}
        onSubmit={onAddLvzGroup}
      />
    </>
  );
};
