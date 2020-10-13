import React, { useState } from 'react';
import { Button, Box, Grid, Typography } from 'ui/atoms';
import { FormSubSectionHeader, InfoSection, LinkedPerson } from 'ui/molecules';
import { RadioGroupField } from 'form/fields';
import { useLocale } from 'hooks';
import { Form } from 'app/shared/media/form/Form';
import { LinkIcon, SquareIcon } from 'ui/atoms/icons';
import { AvailabilityPicker } from '../availabilityPicker/AvailabilityPicker';
import { LinkedPersonType, MomentFormProps } from '../addMomentModal/AddMomentModal.types';

const baseName = 'sales_settings.general';

const appointmentType = [
  {
    label: baseName + 'appointment_type.viewing.label',
    icon: <SquareIcon color="inherit" />,
    value: baseName + 'appointment_type.viewing.value',
  },
  {
    label: baseName + 'appointment_type.online_viewing.label',
    icon: <SquareIcon color="inherit" />,
    value: baseName + 'appointment_type.online_viewing.value',
  },
];

const days = [
  { label: 'Mon', icon: <></>, value: 'mon' },
  { label: 'Tue', icon: <></>, value: 'tue' },
  { label: 'Wed', icon: <></>, value: 'wed' },
  { label: 'Thu', icon: <></>, value: 'thu' },
  { label: 'Fri', icon: <></>, value: 'fri' },
  { label: 'Sat', icon: <></>, value: 'sat' },
  { label: 'Sun', icon: <></>, value: 'sun' },
];

export const MomentForm = ({ moment, onSave, onAddMoment, index, isEditing }: MomentFormProps) => {
  const [toggled, setToggled] = useState<number | undefined>(0);
  const { formatMessage } = useLocale();
  const baseName = 'sales_settings.general';

  return (
    <Form
      key={moment.id}
      title={moment.name ?? formatMessage({ id: 'pim_details.media.links.default_name' })}
      onSave={onSave}
      initialValues={moment}
      onExpand={() => setToggled(toggled => (toggled !== moment.id ? moment.id : undefined))}
      counter={index + 1}
      isExpanded={toggled === moment.id}
    >
      <Grid item xs={12}>
        <Box mb={4}>
          <Box mb={3} px={2}>
            <FormSubSectionHeader
              noBorder
              title={formatMessage({ id: 'pim_details.appointment_type' })}
              subtitle={formatMessage({ id: 'pim_details.choose_one_option_below' })}
            />
          </Box>
          <Box px={2}>
            <RadioGroupField disabled={!isEditing} name={`${baseName}.schedule`} options={appointmentType} />
          </Box>
        </Box>
        <Box mb={4}>
          <Box mb={3} px={2}>
            <FormSubSectionHeader
              noBorder
              title={formatMessage({ id: 'pim_details.moment_schedule' })}
              subtitle={formatMessage({ id: 'pim_details.choose_one_option_below' })}
            />
          </Box>
          <Box px={2}>
            <AvailabilityPicker days={days} />
          </Box>
        </Box>
        <Box mb={4}>
          <Box mb={3} px={2}>
            <FormSubSectionHeader
              noBorder
              title={formatMessage({ id: 'pim_details.account_managers' })}
              subtitle={formatMessage({ id: 'pim_details.choose_one_option_below' })}
            />
          </Box>
          <Box px={2}>
            {moment.persons.length > 0 ? (
              moment.persons.map((person: LinkedPersonType) => (
                <Box mb={3}>
                  <LinkedPerson {...person} onChangeClick={() => {}} />
                </Box>
              ))
            ) : (
              <InfoSection color="gradient" emoji="🤔">
                <Box mb={4}>
                  <Typography variant="h3">
                    {formatMessage({ id: 'pim_details.account_managers.empty_title' })}
                  </Typography>
                  <Typography variant="h3">
                    {formatMessage({ id: 'pim_details.account_managers.empty_description' })}
                  </Typography>
                </Box>
                <Box display="inline-block">
                  <Button
                    variant="contained"
                    color="primary"
                    fullWidth
                    type="submit"
                    onClick={onAddMoment}
                    size="large"
                  >
                    <LinkIcon color="inherit" /> {formatMessage({ id: 'pim_details.account_managers.add' })}
                  </Button>
                </Box>
              </InfoSection>
            )}
          </Box>
        </Box>
      </Grid>
    </Form>
  );
};
