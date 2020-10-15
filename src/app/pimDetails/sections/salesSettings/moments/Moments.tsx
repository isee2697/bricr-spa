import React, { useState } from 'react';

import { FormSection } from 'ui/organisms';
import { Box, Grid } from 'ui/atoms';
import { FormSubSectionHeader } from 'ui/molecules';
import { GenericField, RadioGroupField } from 'form/fields';
import { useLocale } from 'hooks';
import { SquareIcon } from 'ui/atoms/icons';
import { AddMomentmodalContainer } from '../addMomentModal/AddMomentModalContainer';
import { AddModalSubmit } from '../addMomentModal/AddMomentModal.types';
import { MomentForm } from '../momentForm/MomentForm';
import { MomentArrayType } from '../addMomentModal/AddMomentModal.types';

const baseName = 'sales_settings.general';

const momentsArray: MomentArrayType[] = [
  { id: 1, name: 'Viewing moment  1', persons: [] },
  { id: 2, name: 'Viewing moment  2', persons: [] },
];

const onlineSchedule = [
  {
    label: baseName + 'online_schedule.online.label',
    icon: <SquareIcon color="inherit" />,
    value: baseName + 'online_schedule.online.value',
  },
  {
    label: baseName + 'online_schedule.not_online.label',
    icon: <SquareIcon color="inherit" />,
    value: baseName + 'online_schedule.not_online.value',
  },
];

export const Moments = () => {
  const [currentModal, setCurrentModal] = useState<number>(0);
  const [moments, updateMoments] = useState(momentsArray);
  const [isAddModaVisible, setAddModalVisible] = useState(false);
  const { formatMessage } = useLocale();

  const onModalSubmit: AddModalSubmit = async (index, persons) => {
    try {
      momentsArray[index].persons = persons;

      updateMoments(momentsArray);
      setAddModalVisible(false);

      return undefined;
    } catch {
      return { error: true };
    }
  };

  const onSave = async (values: unknown) => {
    try {
      return undefined;
    } catch {
      return { error: true };
    }
  };

  const handleAddMoment = () => {
    updateMoments([
      ...moments,
      { id: moments.length + 1, name: 'Viewing moment ' + (moments.length + 1), persons: [] },
    ]);
  };

  return (
    <>
      <FormSection title={formatMessage({ id: baseName + 'title' })} onAdd={handleAddMoment}>
        {editing => (
          <>
            <Grid container>
              <Grid item xs={12}>
                <Box mb={4}>
                  <Box mb={3} px={2}>
                    <FormSubSectionHeader
                      noBorder
                      title={formatMessage({ id: `${baseName}.general.settings.title` })}
                      subtitle={formatMessage({ id: 'pim_details.choose_one_option_below' })}
                    />
                  </Box>
                  <Box px={2}>
                    <RadioGroupField
                      disabled={!editing}
                      xs={6}
                      name={`${baseName}.schedule`}
                      options={onlineSchedule}
                    />
                  </Box>
                </Box>
              </Grid>

              <Grid item xs={3}>
                <Box mb={4}>
                  <Box px={2}>
                    <GenericField
                      name={`${baseName}.viewing_amount`}
                      label={formatMessage({ id: `${baseName}.viewing_amount.label` })}
                      placeholder={formatMessage({ id: `${baseName}.viewing_amount.placeholder` })}
                      size="medium"
                      type="number"
                      disabled={!editing}
                    />
                  </Box>
                </Box>
              </Grid>
            </Grid>
            {moments.map((moment, index) => (
              <MomentForm
                moment={moment}
                onSave={onSave}
                onAddMoment={() => {
                  setCurrentModal(index);
                  setAddModalVisible(true);
                }}
                index={index}
                isEditing={editing}
              />
            ))}
          </>
        )}
      </FormSection>
      <AddMomentmodalContainer
        onAddMoment={onModalSubmit}
        type={'person'}
        isOpened={isAddModaVisible}
        currentModalIndex={currentModal}
        onClose={() => setAddModalVisible(false)}
      />
    </>
  );
};
