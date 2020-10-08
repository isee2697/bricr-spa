import React, { useState } from 'react';

import { FormSection } from 'ui/organisms';
import { Button, Box, Grid, Typography } from 'ui/atoms';
import { FormSubSectionHeader, InfoSection } from 'ui/molecules';
import { GenericField, RadioGroupField, DatePickerField, TimePickerField } from 'form/fields';
import { HomeIcon } from 'ui/atoms/icons/home/HomeIcon';
import { SeeIcon } from 'ui/atoms/icons/see/SeeIcon';
import { useLocale } from 'hooks';
import { Form } from 'app/shared/media/form/Form';
import { LinkIcon } from 'ui/atoms/icons';
import { AvailabilityPicker } from '../availabilityPicker/AvailabilityPicker';

const moments = [
  { id: 1, name: 'test' },
  { id: 2, name: 'test2' },
];

const onlineSchedule = [
  {
    label: 'dictionaries.kitchen_construction.DenseKitchen',
    icon: <HomeIcon color="inherit" />,
    value: 'DenseKitchen',
  },
  {
    label: 'dictionaries.kitchen_construction.EatInKitchen',
    icon: <SeeIcon color="inherit" />,
    value: 'EatInKitchen',
  },
];

const days = [
  {
    label: 'Mon',
    icon: <></>,
    value: 'mon',
  },
  {
    label: 'Tue',
    icon: <></>,
    value: 'tue',
  },
  {
    label: 'Wed',
    icon: <></>,
    value: 'wed',
  },
  {
    label: 'Thu',
    icon: <></>,
    value: 'thu',
  },
  {
    label: 'Fri',
    icon: <></>,
    value: 'fri',
  },
  {
    label: 'Sat',
    icon: <></>,
    value: 'sat',
  },
  {
    label: 'Sun',
    icon: <></>,
    value: 'sun',
  },
];

const appointmentType = [
  {
    label: 'dictionaries.kitchen_construction.DenseKitchen',
    icon: <HomeIcon color="inherit" />,
    value: 'DenseKitchen',
  },
  {
    label: 'dictionaries.kitchen_construction.EatInKitchen',
    icon: <SeeIcon color="inherit" />,
    value: 'EatInKitchen',
  },
];

export const Moments = () => {
  const [toggled, setToggled] = useState<number | undefined>(0);
  const { formatMessage } = useLocale();
  const baseName = 'sales_settings.general';

  const onSave = async (values: unknown) => {
    try {
      console.log(await values);

      return { error: false };
    } catch (error) {
      return { error: true };
    }
  };

  return (
    <>
      <FormSection title="Moments" onAdd={() => {}}>
        {editing => (
          <>
            <Grid container>
              <Grid item xs={12}>
                <Box mb={4}>
                  <Box mb={3} px={2}>
                    <FormSubSectionHeader noBorder title="general settings" subtitle="Choose one option below" />
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
                    />
                  </Box>
                </Box>
              </Grid>
            </Grid>
            {moments.map((moment, index) => (
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
                      <FormSubSectionHeader noBorder title="Type of appointment" subtitle="Choose one option below" />
                    </Box>
                    <Box px={2}>
                      <RadioGroupField disabled={!editing} name={`${baseName}.schedule`} options={appointmentType} />
                    </Box>
                  </Box>
                  <Box mb={4}>
                    <Box mb={3} px={2}>
                      <FormSubSectionHeader noBorder title="Account managers" subtitle="Choose one option below" />
                    </Box>
                    <Box px={2}>
                      <AvailabilityPicker days={days} />
                    </Box>
                  </Box>
                  <Box mb={4}>
                    <Box mb={3} px={2}>
                      <FormSubSectionHeader noBorder title="Account managers" subtitle="Choose one option below" />
                    </Box>
                    <Box px={2}>
                      <InfoSection color="gradient" emoji="🤔">
                        <Box mb={4}>
                          <Typography variant="h3">You don't have any links</Typography>
                          <Typography variant="h3">You don't have any links</Typography>
                        </Box>
                        <Box display="inline-block">
                          <Button
                            variant="contained"
                            color="primary"
                            fullWidth
                            type="submit"
                            // disabled={submitting || isSuccess}
                            size="large"
                          >
                            <LinkIcon color="inherit" /> Link user
                          </Button>
                        </Box>
                      </InfoSection>
                    </Box>
                  </Box>
                </Grid>
              </Form>
            ))}
          </>
        )}
      </FormSection>
    </>
  );
};
