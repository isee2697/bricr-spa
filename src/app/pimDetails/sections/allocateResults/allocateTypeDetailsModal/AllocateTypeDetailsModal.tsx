import React, { useState } from 'react';
import { Button, DialogContent, useTheme } from '@material-ui/core';

import { Modal, SelectCard } from 'ui/molecules';
import { useLocale } from 'hooks';
import { Avatar, Grid, Box, TileRadio } from 'ui/atoms';
import { BuildingIcon, NewConstructionIcon } from 'ui/atoms/icons';
import { AllocateType } from '../allocateTypeModal/AllocateTypeModal.types';
import { CheckboxDataType } from 'ui/molecules/filters/Filters.types';

import { AdminSettingsType, AllocateTypeDetailsModalProps, ThisPropertyType } from './AllocateTypeDetailsModal.types';
import { useStyles } from './AllocateTypeDetailsModal.styles';

export const AllocateTypeDetailsModal = ({
  allocateType,
  onClose,
  onNext,
  onPrev,
  isOpen,
}: AllocateTypeDetailsModalProps) => {
  const { formatMessage } = useLocale();
  const theme = useTheme();
  const classes = useStyles();

  const [selected, setSelected] = useState<string[]>([]);

  const options: CheckboxDataType[] = Object.keys(
    allocateType === AllocateType.StartFromAdmin ? AdminSettingsType : ThisPropertyType,
  ).map(key => ({
    label: formatMessage({ id: `pim.details.allocate_settings.${key}` }),
    value: key,
    icon: null,
  }));

  const handleSubmit = () => {
    onNext(selected);
  };

  const handleToggleSelected = (item: string) => {
    if (selected.indexOf(item) === -1) {
      setSelected([...selected, item]);
    } else {
      selected.splice(selected.indexOf(item), 1);
      setSelected([...selected]);
    }
  };

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
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <SelectCard
              fullWidth
              withButton
              onClick={() => {
                onPrev();
              }}
              selected={true}
            >
              <Avatar
                variant="rounded"
                bgcolor={
                  allocateType === AllocateType.StartFromAdmin ? theme.palette.red.light : theme.palette.green.light
                }
              >
                <Box
                  color={
                    allocateType === AllocateType.StartFromAdmin ? theme.palette.red.main : theme.palette.green.main
                  }
                >
                  {allocateType === AllocateType.StartFromAdmin ? (
                    <BuildingIcon color="inherit" />
                  ) : (
                    <NewConstructionIcon color="inherit" />
                  )}
                </Box>
              </Avatar>
              {formatMessage({ id: `pim.details.allocate_type.${allocateType}` })}
            </SelectCard>
          </Grid>
          <Grid item xs={12}>
            <Grid container spacing={1}>
              {options.map(item => (
                <Grid item xs={6} sm={4} md={3} key={item.value}>
                  <TileRadio
                    onClick={() => handleToggleSelected(item.value)}
                    isSelected={selected.indexOf(item.value) !== -1}
                    title={item.label}
                  >
                    {item.icon}
                  </TileRadio>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
        <Box mt={4} display="flex" justifyContent="center">
          <Button
            onClick={handleSubmit}
            disabled={!selected?.length}
            variant="contained"
            color="primary"
            className={classes.submitButton}
          >
            {formatMessage({ id: 'common.next' })}
          </Button>
        </Box>
      </DialogContent>
    </Modal>
  );
};
