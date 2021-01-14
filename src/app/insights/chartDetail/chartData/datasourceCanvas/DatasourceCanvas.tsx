import React, { useState, useCallback, ReactNode } from 'react';

import { useLocale } from 'hooks';
import { Box, IconButton, Typography } from 'ui/atoms';
import { InfoSection, ConfirmModal } from 'ui/molecules';
import { ConfirmButtonType } from 'ui/molecules/confirmModal/ConfirmModal.types';
import { DatasourceGroupItem } from '../datasourceSidebar/DatasourceSidebar.types';
import { DndItemState } from 'app/settings/sections/workflow/workflowItems';
import { AddIcon } from 'ui/atoms/icons';

import { DatasourceCanvasProps, DatasourceCanvasType } from './DatasourceCanvas.types';
import { useStyles } from './DatasourceCanvas.styles';
import { DropablePlaceholder } from './dropablePlaceholder/DropablePlaceholder';
import { SourceItem } from './sourceItem/SourceItem';

export const DatasourceCanvas = ({ sources, sourceItems, onRemoveSource, onAddSource }: DatasourceCanvasProps) => {
  const { formatMessage } = useLocale();
  const classes = useStyles();

  const [confirmModal, setConfirmModal] = useState<ReactNode | null>(null);

  const handleShowConfirmModal = useCallback(
    (type: string, onConfirm: () => void) => {
      setConfirmModal(
        <ConfirmModal
          emoji="😬"
          isOpened={true}
          title={formatMessage({
            id: `insights.chart_details.datasource.remove.title`,
          })}
          onCancel={() => {
            setConfirmModal(null);
          }}
          onConfirm={() => {
            onConfirm();
            setConfirmModal(null);
          }}
          messageLineFirst={formatMessage({
            id: `insights.chart_details.datasource.remove.confirm_message`,
          })}
          cancelText={formatMessage({
            id: `insights.chart_details.datasource.remove.cancel`,
          })}
          confirmText={formatMessage({
            id: `insights.chart_details.datasource.remove.confirm`,
          })}
          confirmButtonType={ConfirmButtonType.ERROR}
        />,
      );
    },
    [formatMessage, setConfirmModal],
  );

  return (
    <Box overflow="auto">
      <Box className={classes.container}>
        <Box className={classes.imageContainer} />
        <InfoSection emoji="👈">
          <Typography variant="h3">{formatMessage({ id: 'insights.chart_details.add_datasource' })}</Typography>
        </InfoSection>

        {Object.keys(DatasourceCanvasType).map(canvasType => (
          <Box mb={4}>
            <Box
              mx={3}
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              className={classes.groupHeader}
            >
              <Box display="flex" alignItems="center">
                <Typography className={classes.title}>
                  {formatMessage({ id: `insights.chart_details.${canvasType}_as` })}
                </Typography>
                <Box ml={1} />
              </Box>
              <IconButton aria-label="add" color="primary" size="small" onClick={() => {}}>
                <AddIcon color="inherit" />
              </IconButton>
            </Box>
            <Box mt={3} mx={3} display="flex" key={canvasType}>
              {sources?.[canvasType as DatasourceCanvasType].map((source, index) => (
                <Box key={index} mr={4}>
                  <SourceItem
                    icon={sourceItems.find(item => item.id === source.type)?.icon}
                    title={formatMessage({ id: `insights.chart_details.axis.${source.type}` })}
                    state={DndItemState.DROPPED}
                    onDelete={() => {
                      handleShowConfirmModal('trigger', () => onRemoveSource(source.id));
                    }}
                  />
                </Box>
              ))}

              <Box>
                <DropablePlaceholder
                  onDrop={item => onAddSource((item as DatasourceGroupItem).id, canvasType as DatasourceCanvasType)}
                />
              </Box>
            </Box>
          </Box>
        ))}
      </Box>

      {/** Show confirm dialog */}
      {confirmModal}
    </Box>
  );
};
