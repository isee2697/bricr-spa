import React from 'react';
import { DialogContent, useTheme } from '@material-ui/core';

import { Modal, SelectCard } from 'ui/molecules';
import { useLocale } from 'hooks';
import { Avatar, Grid, Box } from 'ui/atoms';
import { BuildingIcon, NewConstructionIcon, ComplexBuildingIcon } from 'ui/atoms/icons';

import { AllocateTypeModalProps, AllocateType } from './AllocateTypeModal.types';

export const AllocateTypeModal = ({ onClose, onSelect, isOpen }: AllocateTypeModalProps) => {
  const { formatMessage } = useLocale();
  const theme = useTheme();

  return (
    <Modal
      fullWidth
      isOpened={isOpen}
      onClose={onClose}
      title={formatMessage({
        id: `pim.details.allocate_results.type_modal.title`,
      })}
    >
      <DialogContent>
        <Grid container spacing={1}>
          <Grid item xs={12}>
            <SelectCard
              fullWidth
              withButton
              onClick={() => {
                onSelect(AllocateType.StartFromAdmin);
              }}
            >
              <Avatar variant="rounded" bgcolor={theme.palette.red.light}>
                <Box color={theme.palette.red.main}>
                  <BuildingIcon color="inherit" />
                </Box>
              </Avatar>
              {formatMessage({ id: `pim.details.allocate_type.${AllocateType.StartFromAdmin}` })}
            </SelectCard>
          </Grid>
          <Grid item xs={12}>
            <SelectCard
              fullWidth
              withButton
              onClick={() => {
                onSelect(AllocateType.StartForThis);
              }}
            >
              <Avatar variant="rounded" bgcolor={theme.palette.green.light}>
                <Box color={theme.palette.green.main}>
                  <NewConstructionIcon color="inherit" />
                </Box>
              </Avatar>
              {formatMessage({ id: `pim.details.allocate_type.${AllocateType.StartForThis}` })}
            </SelectCard>
          </Grid>
          <Grid item xs={12}>
            <SelectCard
              fullWidth
              withButton
              onClick={() => {
                onSelect(AllocateType.StartWithBlank);
              }}
            >
              <Avatar variant="rounded" bgcolor={theme.palette.purple.light}>
                <Box color={theme.palette.purple.main}>
                  <ComplexBuildingIcon color="inherit" />
                </Box>
              </Avatar>
              {formatMessage({ id: `pim.details.allocate_type.${AllocateType.StartWithBlank}` })}
            </SelectCard>
          </Grid>
        </Grid>
      </DialogContent>
    </Modal>
  );
};
