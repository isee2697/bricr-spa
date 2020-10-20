import React, { useState } from 'react';

import { FormSection } from 'ui/organisms';
import { useLocale } from 'hooks';
import { Grid, Box, Typography, Button } from 'ui/atoms';
import { InfoSection, LinkedPerson } from 'ui/molecules';
import { AddModalSubmit, LinkedPersonType } from '../../addMomentModal/AddMomentModal.types';
import { AddMomentmodalContainer } from '../../addMomentModal/AddMomentModalContainer';

export const SegmentationFrom = () => {
  const [modalIsOpen, setModalOpen] = useState<boolean>(false);
  const [personSegments, updatePersonSegments] = useState<LinkedPersonType[]>([]);
  const { formatMessage } = useLocale();

  const handleAddSegment: AddModalSubmit = async (index, persons) => {
    try {
      updatePersonSegments(persons);
      setModalOpen(false);

      return undefined;
    } catch (error) {
      return { error: true };
    }
  };

  return (
    <>
      <FormSection
        title={formatMessage({ id: 'pim_details.sales_settings.segmentation.title' })}
        isExpandable
        isInitExpanded={false}
        onAdd={() => setModalOpen(true)}
      >
        {editing => (
          <Grid>
            <Box px={2}>
              {personSegments.length > 0 ? (
                personSegments.map((person: LinkedPersonType) => (
                  <Box mb={3}>
                    <LinkedPerson {...person} onChangeClick={() => {}} />
                  </Box>
                ))
              ) : (
                <InfoSection color="gradient" emoji="🤔">
                  <Box mb={4}>
                    <Typography variant="h3">
                      {formatMessage({ id: 'pim_details.sales_settings.segmentation.empty_title' })}
                    </Typography>
                    <Typography variant="h3">
                      {formatMessage({ id: 'pim_details.sales_settings.segmentation.empty_description' })}
                    </Typography>
                  </Box>
                  <Box display="inline-block">
                    <Button
                      variant="contained"
                      color="primary"
                      fullWidth
                      type="submit"
                      disabled={!editing}
                      onClick={() => setModalOpen(true)}
                      size="large"
                    >
                      {formatMessage({ id: 'pim_details.account_managers.add' })}
                    </Button>
                  </Box>
                </InfoSection>
              )}
            </Box>
          </Grid>
        )}
      </FormSection>
      <AddMomentmodalContainer
        onAddMoment={handleAddSegment}
        type={'person'}
        isOpened={modalIsOpen}
        currentModalIndex={0}
        onClose={() => setModalOpen(false)}
      />
    </>
  );
};
