import React, { useState } from 'react';
import clsx from 'classnames';
import { DateTime } from 'luxon';

import { Avatar, Box, Checkbox, Chip, Emoji, Grid, PersonChip, Typography, RankingIcon } from 'ui/atoms';
import { AllocateResultsRelationRanking } from '../../AllocateResultsDetails.types';
import { useLocale } from 'hooks';
import { ArrowDownIcon, ArrowUpIcon, CheckIcon, ClockIcon } from 'ui/atoms/icons';
import { ListOptionsMenuItem } from 'ui/molecules/listOptionsMenu/menuItem/ListOptionsMenuItem';
import { ListOptionsMenu } from 'ui/molecules';
import { AssignedTableView } from '../assignedTableView/AssignedTableView';

import { ListItemProps } from './ListItem.types';
import { useStyles } from './ListItem.styles';

export const ListItem = ({ checkbox, checked, item, onClick }: ListItemProps) => {
  const classes = useStyles();
  const { formatMessage } = useLocale();
  const [isShowAllocatedRelations, setIsShowAllocatedRelations] = useState(false);

  const highRankedRelations = item.allocatedRelations
    .filter(relation => relation.ranking !== AllocateResultsRelationRanking.None)
    .sort((relation1, relation2) => (relation1.ranking > relation2.ranking ? 1 : -1));

  const lowRankedRelations = item.allocatedRelations.filter(
    relation => relation.ranking === AllocateResultsRelationRanking.None,
  );

  return (
    <Box display="flex" flexDirection="column" className={classes.rowWrapper}>
      <Box className={clsx(classes.row, { [classes.rowChecked]: checked })}>
        {checkbox}
        <Box className={classes.rowItem} display="flex" onClick={onClick}>
          <Box mr={2}>
            <Avatar variant="rounded" src={item.image} className={classes.image}>
              {!item.image && <Emoji>{'📷'}</Emoji>}
            </Avatar>
          </Box>
          <Box width="100%">
            <Box display="flex" justifyContent="space-between">
              <Box>
                <Typography variant="h3" className={classes.fontWeightBold}>
                  {item.name}
                </Typography>
                <Box display="flex" flexWrap="wrap" alignItems="flex-end">
                  <Box mr={2}>
                    <Typography variant="h6" className={clsx(classes.fontWeightBold, classes.gray)}>
                      {item.size} m<sup>2</sup>
                    </Typography>
                  </Box>
                  <Box mr={2}>
                    <Typography variant="h6" className={clsx(classes.fontWeightBold, classes.gray)}>
                      {formatMessage({ id: 'project_details.allocate_results_details.rooms' }, { count: item.rooms })}
                    </Typography>
                  </Box>
                  {item.propertyTypes.map((property, index) => (
                    <Box key={index} mr={2}>
                      <Typography variant="h6" className={clsx(classes.fontWeightBold, classes.gray)}>
                        {formatMessage({ id: `dictionaries.property_type.${property}` })}
                      </Typography>
                    </Box>
                  ))}
                  {item.propertyRelatedItems.map((property, index) => (
                    <Box key={index} mr={2}>
                      <Typography variant="h6" className={clsx(classes.fontWeightBold, classes.gray)}>
                        {formatMessage({ id: `dictionaries.property_related_item.${property}` })}
                      </Typography>
                    </Box>
                  ))}
                  {item.outsideFeatureTypes.map((type, index) => (
                    <Box key={index} mr={2}>
                      <Typography variant="h6" className={clsx(classes.fontWeightBold, classes.gray)}>
                        {formatMessage({ id: `dictionaries.outside_feature_type.${type}` })}
                      </Typography>
                    </Box>
                  ))}
                </Box>
                <Box mt={1}>
                  <RankingIcon rankings={highRankedRelations.map(relation => relation.ranking)} />
                </Box>
              </Box>
              <Box display="flex" flexDirection="column" alignItems="flex-end">
                <Chip
                  size="small"
                  variant="outlined"
                  label={formatMessage({ id: 'project_details.allocate_results_details.name_objecttype' })}
                  className={classes.gray}
                />
                <Box mt={2} className={classes.assigned}>
                  {item.propertyTypes.length}
                </Box>
              </Box>
            </Box>
            <Box display="flex" justifyContent="space-between" alignItems="center" mt={1}>
              <Typography variant="h3" className={classes.fontWeightBold}>
                € {item.monthlyPrice} p/m
              </Typography>
              <Box
                display="flex"
                alignItems="center"
                onClick={() => setIsShowAllocatedRelations(!isShowAllocatedRelations)}
                className={classes.btnShowHide}
              >
                <Typography variant="h5" className={classes.gray}>
                  {formatMessage({
                    id: isShowAllocatedRelations
                      ? 'project_details.allocate_results_details.close_result'
                      : 'project_details.allocate_results_details.show_result',
                  })}
                </Typography>
                {isShowAllocatedRelations ? <ArrowUpIcon /> : <ArrowDownIcon />}
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
      {isShowAllocatedRelations && (
        <>
          <Box ml={4} mr={2}>
            {highRankedRelations.map(relation => (
              <Box display="flex" alignItems="flex-start" className={classes.allocatedRelation}>
                <Box mr={2} display="flex" alignItems="flex-end">
                  <Checkbox className={classes.allocatedRelationCheckbox} color="primary" />
                  <RankingIcon rankings={[relation.ranking]} showActiveOnly />
                </Box>
                <Box width="100%">
                  <Grid container spacing={1}>
                    <Grid item xs={4}>
                      <Box>
                        <Typography variant="h6" className={classes.gray}>
                          {formatMessage({ id: 'project_details.allocate_results_details.relation' })}
                        </Typography>
                        <PersonChip
                          name={`${relation.relation.firstName} ${relation.relation.lastName}`}
                          image={relation.relation.image?.url || ''}
                        />
                      </Box>
                      <Box mt={1.5}>
                        <Typography variant="h6" className={classes.gray}>
                          {formatMessage({ id: 'project_details.allocate_results_details.monthly_income_from' })}
                        </Typography>
                        <Typography variant="h4">
                          {relation.monthlyIncomeFrom ? `€ ${relation.monthlyIncomeFrom}` : '-'}
                        </Typography>
                      </Box>
                      <Box mt={1.5}>
                        <Typography variant="h6" className={classes.gray}>
                          {formatMessage({ id: 'project_details.allocate_results_details.missing_documents' })}
                        </Typography>
                        <Typography variant="h4">
                          {relation.missingDocuments ? `${relation.missingDocuments}` : '-'}
                        </Typography>
                      </Box>
                      <Box mt={1.5}>
                        <Typography variant="h6" className={classes.gray}>
                          {formatMessage({ id: 'project_details.allocate_results_details.missing_documents' })}
                        </Typography>
                        <Typography variant="h4">
                          {relation.dateOfSubscription
                            ? `${relation.dateOfSubscription.toLocaleString(DateTime.DATE_SHORT)}`
                            : '-'}
                        </Typography>
                      </Box>
                    </Grid>
                    <Grid item xs={4}>
                      <Box>
                        <Typography variant="h6" className={classes.gray}>
                          {formatMessage({ id: 'project_details.allocate_results_details.partner' })}
                        </Typography>
                        <PersonChip
                          name={`${relation.partner.firstName} ${relation.partner.lastName}`}
                          image={relation.partner.image?.url || ''}
                        />
                      </Box>
                      <Box mt={1.5}>
                        <Typography variant="h6" className={classes.gray}>
                          {formatMessage({ id: 'project_details.allocate_results_details.monthly_income_to' })}
                        </Typography>
                        <Typography variant="h4">
                          {relation.monthlyIncomeTo ? `€ ${relation.monthlyIncomeTo}` : '-'}
                        </Typography>
                      </Box>
                      <Box mt={1.5}>
                        <Typography variant="h6" className={classes.gray}>
                          {formatMessage({ id: 'project_details.allocate_results_details.missing_documents' })}
                        </Typography>
                        <Typography variant="h4">
                          {relation.missingDocuments ? `${relation.missingDocuments}` : '-'}
                        </Typography>
                      </Box>
                      <Box mt={1.5}>
                        <Typography variant="h6" className={classes.gray}>
                          {formatMessage({ id: 'project_details.allocate_results_details.type_of_interest' })}
                        </Typography>
                        <Typography variant="h4">
                          {relation.typeOfInterest
                            ? formatMessage({ id: `dictionaries.type_of_interest.${relation.typeOfInterest}` })
                            : '-'}
                        </Typography>
                      </Box>
                    </Grid>
                    <Grid item xs={4}>
                      <Box display="flex" justifyContent="space-between">
                        <Box>
                          <Typography variant="h6" className={classes.gray}>
                            {formatMessage({ id: 'project_details.allocate_results_details.role' })}
                          </Typography>
                          <Typography variant="h4">
                            {relation.role ? formatMessage({ id: `dictionaries.person_role.${relation.role}` }) : '-'}
                          </Typography>
                        </Box>
                        <Box>
                          <Typography variant="h6" className={classes.gray}>
                            {formatMessage({ id: 'project_details.allocate_results_details.accepted' })}
                          </Typography>
                          {relation.accepted && (
                            <Box className={classes.checkIconWrapper}>
                              <CheckIcon color="inherit" className={classes.checkIcon} />
                            </Box>
                          )}
                        </Box>
                      </Box>
                      <Box mt={1.5}>
                        <Typography variant="h6" className={classes.gray}>
                          {formatMessage({ id: 'project_details.allocate_results_details.yearly_aggregate_income' })}
                        </Typography>
                        <Typography variant="h4">
                          {relation.yearlyAggregateIncome ? `€ ${relation.yearlyAggregateIncome}` : '-'}
                        </Typography>
                      </Box>
                      <Box mt={1.5}>
                        <Typography variant="h6" className={classes.gray}>
                          {formatMessage({ id: 'project_details.allocate_results_details.maximum_rental_price' })}
                        </Typography>
                        <Typography variant="h4">
                          {relation.maximumRentalPrice ? `${relation.maximumRentalPrice}` : '-'}
                        </Typography>
                      </Box>
                      <Box mt={1.5}>
                        <Typography variant="h6" className={classes.gray}>
                          {formatMessage({ id: 'project_details.allocate_results_details.preference_this_property' })}
                        </Typography>
                        <Typography variant="h4">{relation.preference ? `${relation.preference}` : '-'}</Typography>
                      </Box>
                    </Grid>
                  </Grid>
                </Box>
                <Box>
                  <ListOptionsMenu
                    id={`allocate-results-details-ranking-${item.id}`}
                    onDeleteClick={() => {}}
                    hideEditButton
                  >
                    <ListOptionsMenuItem
                      title={formatMessage({
                        id: 'project_details.allocateResults.mail',
                      })}
                      icon={<ClockIcon />}
                    />
                    <ListOptionsMenuItem
                      title={formatMessage({
                        id: 'project_details.allocateResults.start_workflow',
                      })}
                      icon={<ClockIcon />}
                    />
                    <ListOptionsMenuItem
                      title={formatMessage({
                        id: 'project_details.allocateResults.change_role',
                      })}
                      icon={<ClockIcon />}
                    />
                    <ListOptionsMenuItem
                      title={formatMessage({
                        id: 'project_details.allocateResults.drop_out',
                      })}
                      icon={<ClockIcon />}
                    />
                  </ListOptionsMenu>
                </Box>
              </Box>
            ))}
          </Box>
          <AssignedTableView
            type="assigned"
            properties={lowRankedRelations}
            onClick={() => {}}
            selected={[]}
            onSelectProperty={id => {}}
            onSelectAllProperties={() => {}}
          />
        </>
      )}
    </Box>
  );
};
