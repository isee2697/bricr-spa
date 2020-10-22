import React, { useState } from 'react';

import { Box, DialogActions, DialogContent, Typography } from 'ui/atoms/index';
import { ArrowUpIcon } from 'ui/atoms/icons';
import { useLocale } from 'hooks';
import { ShowMoreProps } from 'ui/atoms/showMore/ShowMore.types';
import { useStyles } from 'ui/atoms/showMore/ShowMore.styles';
import { CancelButton, Modal } from 'ui/molecules';
import { AppointmentComponent, AppointmentContent } from 'ui/organisms';
import { CalendarTypeResource, DateView } from 'ui/molecules/calendar/Calandar.types';

export const ShowMore = ({ amount, data }: ShowMoreProps) => {
  const classes = useStyles();
  const { formatMessage } = useLocale();
  const [isModalOpen, setModalOpen] = useState(false);

  return (
    <>
      <Box onClick={() => setModalOpen(true)} className={classes.root}>
        <ArrowUpIcon />
        <Typography variant="h5" className={classes.text}>
          +{amount} {formatMessage({ id: 'common.show_more' })}
        </Typography>
      </Box>
      <Modal
        title={formatMessage({ id: 'calendar.appointments.title_more' })}
        isOpened={isModalOpen}
        onClose={() => setModalOpen(false)}
      >
        <DialogContent>
          {data.map(appointment => (
            <AppointmentComponent
              view={DateView.Month}
              className={classes.appointment}
              draggable={false}
              resources={CalendarTypeResource}
              data={appointment}
            >
              <AppointmentContent
                formatDate={() => ''}
                recurringIconComponent={() => <></>}
                durationType="middle"
                type="horizontal"
                resources={CalendarTypeResource}
                data={appointment}
              />
            </AppointmentComponent>
          ))}
        </DialogContent>
        <DialogActions className={classes.actions}>
          <CancelButton variant="outlined" size="large" onClick={() => setModalOpen(false)}>
            {formatMessage({ id: 'common.close' })}
          </CancelButton>
        </DialogActions>
      </Modal>
    </>
  );
};
