import React from 'react';
import clsx from 'classnames';

import { useLocale } from 'hooks/useLocale/useLocale';
import { Box, Button, ProgressFilling, Table, TableBody, TableCell, TableHead, TableRow, Typography } from 'ui/atoms';

import { ListItemOptantsProps } from './ListItemOptants.types';
import { useStyles } from './ListItemOptants.styles';

export const ListItemOptants = ({ optants }: ListItemOptantsProps) => {
  const classes = useStyles();
  const { formatMessage } = useLocale();

  return (
    <>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell className={classes.tableHeaderCell}>
              {formatMessage({ id: 'crm.details.customer_journey.final_price' })}
            </TableCell>
            <TableCell className={classes.tableHeaderCell}>
              {formatMessage({ id: 'crm.details.customer_journey.conditions' })}
            </TableCell>
            <TableCell className={classes.tableHeaderCell}>
              {formatMessage({ id: 'crm.details.customer_journey.required_documents' })}
            </TableCell>
            <TableCell className={classes.tableHeaderCell} />
          </TableRow>
        </TableHead>
        <TableBody>
          {optants.map((optant, index) => (
            <TableRow key={index}>
              <TableCell className={clsx(index === optants.length - 1 && classes.tableCellNoBorderBottom)}>
                <Typography variant="h4" className={classes.fontWeightMedium}>
                  € {optant.finalPrice}
                </Typography>
                <Typography variant="h6" className={classes.gray}>
                  {optant.finalPriceDate.toFormat('dd-MM-yyyy')}
                </Typography>
              </TableCell>
              <TableCell className={clsx(index === optants.length - 1 && classes.tableCellNoBorderBottom)}>
                <Typography
                  variant="h6"
                  className={clsx(optant.conditions.takeOverListOfCases && classes.conditionUnavailable)}
                >
                  {formatMessage({ id: 'crm.details.customer_journey.condition.take_over_list_of_cases' })}
                </Typography>
                <Typography
                  variant="h6"
                  className={clsx(optant.conditions.technicalBuildingInspection && classes.conditionUnavailable)}
                >
                  {formatMessage({ id: 'crm.details.customer_journey.condition.technical_building_inspection' })}
                </Typography>
                <Typography
                  variant="h6"
                  className={clsx(optant.conditions.reservationOfFunding && classes.conditionUnavailable)}
                >
                  {formatMessage({ id: 'crm.details.customer_journey.condition.reservation_of_funding' })}
                </Typography>
              </TableCell>
              <TableCell className={clsx(index === optants.length - 1 && classes.tableCellNoBorderBottom)}>
                <Typography
                  variant="h6"
                  className={clsx(optant.requiredDocuments.salesContract && classes.documentsUnavailable)}
                >
                  {formatMessage({ id: 'crm.details.customer_journey.document.sales_contract' })}
                </Typography>
                <Typography
                  variant="h6"
                  className={clsx(optant.requiredDocuments.driverLicense && classes.documentsUnavailable)}
                >
                  {formatMessage({ id: 'crm.details.customer_journey.document.driver_license' })}
                </Typography>
                <Typography
                  variant="h6"
                  className={clsx(optant.requiredDocuments.employmentConfirmation && classes.documentsUnavailable)}
                >
                  {formatMessage({ id: 'crm.details.customer_journey.document.employment_confirmation' })}
                </Typography>
              </TableCell>
              <TableCell className={clsx(index === optants.length - 1 && classes.tableCellNoBorderBottom)}>
                <Typography variant="h6" className={classes.dossierCompletePercentage}>
                  {Math.floor(optant.dossierCompletionStatus * 100)}%
                </Typography>
                <Typography variant="h6" className={classes.dossierCompleteLabel}>
                  {formatMessage({ id: 'crm.details.customer_journey.dossier_completion' })}
                </Typography>
                <Box className={classes.dossierCompleteBar}>
                  <ProgressFilling progress={optant.dossierCompletionStatus ?? 0} />
                </Box>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Box className={classes.actions}>
        <Button variant="outlined" color="secondary" className={classes.actionButtons}>
          {formatMessage({ id: 'crm.details.customer_journey.actions.reject_optant' })}
        </Button>
        <Button variant="contained" color="primary" className={classes.actionButtons}>
          {formatMessage({ id: 'crm.details.customer_journey.actions.accept_optant' })}
        </Button>
      </Box>
    </>
  );
};
