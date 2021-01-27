import React from 'react';
import { DateTime } from 'luxon';
import clsx from 'classnames';

import { useLocale } from 'hooks';
import {
  Card,
  CardContent,
  CardHeader,
  Radio,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from 'ui/atoms';
import { StarIcon, StarFilledIcon } from 'ui/atoms/icons';

import { PencilAppointmentDate, PencilAppointmentResults } from './PencilAppointment.types';
import { useStyles } from './PencilAppointment.styles';

export const PencilAppointment = () => {
  const classes = useStyles();
  const { formatMessage } = useLocale();
  const mockData: PencilAppointmentResults = {
    dates: [
      {
        from: DateTime.local(),
        to: DateTime.local(),
        isFavorite: false,
      },
      {
        from: DateTime.local(),
        to: DateTime.local(),
        isFavorite: false,
      },
      {
        from: DateTime.local(),
        to: DateTime.local(),
        isFavorite: true,
      },
    ],
    data: [
      {
        user: {
          id: '0001',
          firstName: 'John',
          lastName: 'Doe',
          email: 'johndoe@email.com',
          isActive: true,
          isAdmin: true,
        },
        checkedDates: [0, 2],
      },
    ],
  };

  return (
    <Card>
      <CardHeader title={formatMessage({ id: 'calendar.appointments.result_of_pencil_appointment' })} />
      <CardContent>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell />
              {mockData.dates.map((date: PencilAppointmentDate, index: number) => (
                <TableCell key={index} className={classes.textAlignCenter}>
                  <Typography variant="h6">{date.from.weekdayShort}</Typography>
                  <Typography variant="h3">{date.from.toLocaleString(DateTime.DATE_SHORT)}</Typography>
                  <Typography variant="h3" className={classes.fontWeightBold}>
                    {date.from.toLocaleString(DateTime.TIME_24_SIMPLE)} -{' '}
                    {date.to.toLocaleString(DateTime.TIME_24_SIMPLE)}
                  </Typography>
                </TableCell>
              ))}
            </TableRow>
            <TableRow className={classes.backBlue}>
              <TableCell className={classes.whiteBorder}>
                <Typography variant="h5" className={classes.fontWeightBold}>
                  {formatMessage({ id: 'calendar.appointments.final_appointment' })}
                </Typography>
              </TableCell>
              {mockData.dates.map((date: PencilAppointmentDate, index: number) => (
                <TableCell key={index} className={clsx(classes.textAlignCenter, classes.whiteBorder)}>
                  {date.isFavorite ? <StarFilledIcon /> : <StarIcon />}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {mockData.data.map((row, index) => (
              <TableRow key={index}>
                <TableCell>
                  <Typography variant="h5">
                    {row.user.firstName} {row.user.lastName}
                  </Typography>
                </TableCell>
                {mockData.dates.map((_date: PencilAppointmentDate, index: number) => (
                  <TableCell key={index} className={classes.textAlignCenter}>
                    <Radio color="primary" checked={row.checkedDates.includes(index)} />
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};
