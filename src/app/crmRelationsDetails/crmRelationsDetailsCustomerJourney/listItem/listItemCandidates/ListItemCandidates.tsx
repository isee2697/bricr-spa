import React from 'react';
import clsx from 'classnames';

import { useLocale } from 'hooks/useLocale/useLocale';
import { Table, TableHead, TableRow, TableCell, TableBody, Typography, ProgressFilling, Box, Button } from 'ui/atoms';

import { ListItemCandidatesProps } from './ListItemCandidates.types';
import { useStyles } from './ListItemCandidates.styles';

export const ListItemCandidates = ({ candidates }: ListItemCandidatesProps) => {
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
            <TableCell className={classes.tableHeaderCell}>
              {formatMessage({ id: 'crm.details.customer_journey.dossier_completion' })}:
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {candidates.map((candidate, index) => (
            <TableRow key={index}>
              <TableCell className={clsx(index === candidates.length - 1 && classes.tableCellNoBorderBottom)}>
                <Typography variant="h4" className={classes.fontWeightMedium}>
                  € {candidate.finalPrice}
                </Typography>
                <Typography variant="h6" className={classes.gray}>
                  {candidate.finalPriceDate.toFormat('dd-MM-yyyy')}
                </Typography>
              </TableCell>
              <TableCell className={clsx(index === candidates.length - 1 && classes.tableCellNoBorderBottom)}>
                <Typography
                  variant="h6"
                  className={clsx(candidate.conditions.takeOverListOfCases && classes.conditionUnavailable)}
                >
                  {formatMessage({ id: 'crm.details.customer_journey.condition.take_over_list_of_cases' })}
                </Typography>
                <Typography
                  variant="h6"
                  className={clsx(candidate.conditions.technicalBuildingInspection && classes.conditionUnavailable)}
                >
                  {formatMessage({ id: 'crm.details.customer_journey.condition.technical_building_inspection' })}
                </Typography>
                <Typography
                  variant="h6"
                  className={clsx(candidate.conditions.reservationOfFunding && classes.conditionUnavailable)}
                >
                  {formatMessage({ id: 'crm.details.customer_journey.condition.reservation_of_funding' })}
                </Typography>
              </TableCell>
              <TableCell className={clsx(index === candidates.length - 1 && classes.tableCellNoBorderBottom)}>
                <Typography
                  variant="h6"
                  className={clsx(candidate.requiredDocuments.salesContract && classes.documentsUnavailable)}
                >
                  {formatMessage({ id: 'crm.details.customer_journey.document.sales_contract' })}
                </Typography>
                <Typography
                  variant="h6"
                  className={clsx(candidate.requiredDocuments.driverLicense && classes.documentsUnavailable)}
                >
                  {formatMessage({ id: 'crm.details.customer_journey.document.driver_license' })}
                </Typography>
                <Typography
                  variant="h6"
                  className={clsx(candidate.requiredDocuments.employmentConfirmation && classes.documentsUnavailable)}
                >
                  {formatMessage({ id: 'crm.details.customer_journey.document.employment_confirmation' })}
                </Typography>
              </TableCell>
              <TableCell className={clsx(index === candidates.length - 1 && classes.tableCellNoBorderBottom)}>
                <ProgressFilling progress={candidate.dossierCompletionStatus ?? 0} />
                <Typography variant="h6" className={classes.dossierCompletePercentage}>
                  {Math.floor(candidate.dossierCompletionStatus * 100)}%
                </Typography>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Box className={classes.actions}>
        <Button variant="outlined" color="secondary" className={classes.actionButtons}>
          {formatMessage({ id: 'crm.details.customer_journey.actions.reject_candidate' })}
        </Button>
        <Button variant="contained" color="primary" className={classes.actionButtons}>
          {formatMessage({ id: 'crm.details.customer_journey.actions.accept_candidate' })}
        </Button>
      </Box>
    </>
  );
};
