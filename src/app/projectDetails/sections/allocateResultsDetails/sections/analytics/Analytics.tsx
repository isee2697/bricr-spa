import React from 'react';
import clsx from 'classnames';

import { Card, CardContent, Table, TableHead, TableRow, TableBody, TableCell, Typography, Box } from 'ui/atoms';
import { useLocale } from 'hooks';
import { ArrowRightIcon } from 'ui/atoms/icons';

import { useStyles } from './Analytics.styles';

export const Analytics = () => {
  const { formatMessage } = useLocale();
  const classes = useStyles();

  return (
    <Card>
      <CardContent className={classes.content}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell className={classes.rowItem}>
                <Typography variant="h5" className={clsx(classes.fontWeightMedium, classes.gray)}>
                  {formatMessage({ id: 'project_details.allocate_results_details.started_with' })}
                </Typography>
              </TableCell>
              <TableCell padding="none" />
              <TableCell className={classes.rowItem}>
                <Typography variant="h5" className={clsx(classes.fontWeightMedium, classes.gray)}>
                  {formatMessage({ id: 'project_details.allocate_results_details.ended_with' })}
                </Typography>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell className={classes.rowItem}>
                <Typography variant="h4" className={classes.fontWeightMedium}>
                  300
                </Typography>
              </TableCell>
              <TableCell padding="none" className={classes.rowItem}>
                <ArrowRightIcon />
              </TableCell>
              <TableCell className={classes.rowItem}>
                <Box display="flex" alignItems="center">
                  <Box mr={3}>
                    <Typography variant="h2" className={classes.fontWeightBold}>
                      40
                    </Typography>
                  </Box>
                  <Typography variant="h6" className={classes.gray}>
                    {formatMessage({ id: 'project_details.allocate_results_details.relations' })}
                  </Typography>
                </Box>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className={classes.rowItem}>
                <Typography variant="h4" className={classes.fontWeightMedium}>
                  5
                </Typography>
              </TableCell>
              <TableCell padding="none" className={classes.rowItem}>
                <ArrowRightIcon />
              </TableCell>
              <TableCell className={classes.rowItem}>
                <Box display="flex" alignItems="center">
                  <Box mr={3}>
                    <Typography variant="h2" className={classes.fontWeightBold}>
                      44
                    </Typography>
                  </Box>
                  <Typography variant="h6" className={classes.gray}>
                    {formatMessage({ id: 'project_details.allocate_results_details.objecttypes' })}
                  </Typography>
                </Box>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className={clsx(classes.rowItem, 'no-margin')}>
                <Typography variant="h4" className={classes.fontWeightMedium}>
                  44
                </Typography>
              </TableCell>
              <TableCell padding="none" className={clsx(classes.rowItem, 'no-margin')}>
                <ArrowRightIcon />
              </TableCell>
              <TableCell className={clsx(classes.rowItem, 'no-margin')}>
                <Box display="flex" alignItems="center">
                  <Box mr={3}>
                    <Typography variant="h2" className={classes.fontWeightBold}>
                      24
                    </Typography>
                  </Box>
                  <Typography variant="h6" className={classes.gray}>
                    {formatMessage({ id: 'project_details.allocate_results_details.properties' })}
                  </Typography>
                </Box>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};
