import React from 'react';
import clsx from 'classnames';
import { DateTime } from 'luxon';

import { Box, Checkbox, Grid, PersonChip, Typography } from 'ui/atoms';
import { AllocateResultsRelationRanking } from '../../AllocateResultsDetails.types';
import { useLocale } from 'hooks';
import { CheckIcon, ClockIcon } from 'ui/atoms/icons';
import { ListOptionsMenu } from 'ui/molecules';
import { ListOptionsMenuItem } from 'ui/molecules/listOptionsMenu/menuItem/ListOptionsMenuItem';

import { RankingListItemProps } from './ListItem.types';
import { useStyles } from './ListItem.styles';

export const RankingListItem = ({ checked, onSelect, item }: RankingListItemProps) => {
  const classes = useStyles();
  const { formatMessage } = useLocale();

  return (
    <Box display="flex" flexDirection="column">
      <Box className={clsx(classes.row, { [classes.rowChecked]: checked })}>
        <Box mx={2} width="100%" display="flex" alignItems="flex-start" className={classes.allocatedRelation}>
          <Box display="flex" alignItems="flex-end">
            <Checkbox checked={checked} onSelect={onSelect} color="primary" />
            <Box
              mb={1.5}
              className={clsx(
                item.ranking === AllocateResultsRelationRanking.Gold
                  ? classes.goldItem
                  : item.ranking === AllocateResultsRelationRanking.Silver
                  ? classes.silverItem
                  : classes.bronzeItem,
                'active',
              )}
              ml={4}
            >
              <Typography
                variant={item.ranking === AllocateResultsRelationRanking.Gold ? 'h2' : 'h3'}
                className={classes.rankingLabel}
              >
                {item.ranking === AllocateResultsRelationRanking.Gold
                  ? 1
                  : item.ranking === AllocateResultsRelationRanking.Silver
                  ? 2
                  : 3}
              </Typography>
            </Box>
          </Box>
          <Box width="100%" ml={5}>
            <Grid container spacing={1}>
              <Grid item xs={4}>
                <Box>
                  <Typography variant="h6" className={classes.gray}>
                    {formatMessage({ id: 'pim_details.allocate_results_details.relation' })}
                  </Typography>
                  <PersonChip
                    name={`${item.relation.firstName} ${item.relation.lastName}`}
                    image={item.relation.image?.url || ''}
                  />
                </Box>
                <Box mt={1.5}>
                  <Typography variant="h6" className={classes.gray}>
                    {formatMessage({ id: 'pim_details.allocate_results_details.monthly_income_from' })}
                  </Typography>
                  <Typography variant="h4">{item.monthlyIncomeFrom ? `€ ${item.monthlyIncomeFrom}` : '-'}</Typography>
                </Box>
                <Box mt={1.5}>
                  <Typography variant="h6" className={classes.gray}>
                    {formatMessage({ id: 'pim_details.allocate_results_details.missing_documents' })}
                  </Typography>
                  <Typography variant="h4">
                    {item.missingDocuments && item.missingDocuments.length > 0
                      ? `${item.missingDocuments.length}`
                      : '-'}
                  </Typography>
                </Box>
                <Box mt={1.5}>
                  <Typography variant="h6" className={classes.gray}>
                    {formatMessage({ id: 'pim_details.allocate_results_details.date_of_subscription' })}
                  </Typography>
                  <Typography variant="h4">
                    {item.dateOfSubscription ? `${item.dateOfSubscription.toLocaleString(DateTime.DATE_SHORT)}` : '-'}
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={4}>
                <Box>
                  <Typography variant="h6" className={classes.gray}>
                    {formatMessage({ id: 'pim_details.allocate_results_details.partner' })}
                  </Typography>
                  <PersonChip
                    name={`${item.partner.firstName} ${item.partner.lastName}`}
                    image={item.partner.image?.url || ''}
                  />
                </Box>
                <Box mt={1.5}>
                  <Typography variant="h6" className={classes.gray}>
                    {formatMessage({ id: 'pim_details.allocate_results_details.monthly_income_to' })}
                  </Typography>
                  <Typography variant="h4">{item.monthlyIncomeTo ? `€ ${item.monthlyIncomeTo}` : '-'}</Typography>
                </Box>
                <Box mt={1.5}>
                  <Typography variant="h6" className={classes.gray}>
                    {formatMessage({ id: 'pim_details.allocate_results_details.missing_documents' })}
                  </Typography>
                  <Typography variant="h4">
                    {item.missingDocuments && item.missingDocuments.length > 0
                      ? `${item.missingDocuments.length}`
                      : '-'}
                  </Typography>
                </Box>
                <Box mt={1.5}>
                  <Typography variant="h6" className={classes.gray}>
                    {formatMessage({ id: 'pim_details.allocate_results_details.preference_this_property' })}
                  </Typography>
                  <Typography variant="h4">{item.preference ? `${item.preference}` : '-'}</Typography>
                </Box>
              </Grid>
              <Grid item xs={4}>
                <Box display="flex" justifyContent="space-between">
                  <Box>
                    <Typography variant="h6" className={classes.gray}>
                      {formatMessage({ id: 'pim_details.allocate_results_details.role' })}
                    </Typography>
                    <Typography variant="h4">
                      {item.role ? formatMessage({ id: `dictionaries.person_role.${item.role}` }) : '-'}
                    </Typography>
                  </Box>
                  <Box>
                    <Typography variant="h6" className={classes.gray}>
                      {formatMessage({ id: 'pim_details.allocate_results_details.accepted' })}
                    </Typography>
                    {item.accepted && (
                      <Box className={classes.checkIconWrapper}>
                        <CheckIcon color="inherit" className={classes.checkIcon} />
                      </Box>
                    )}
                  </Box>
                </Box>
                <Box mt={1.5}>
                  <Typography variant="h6" className={classes.gray}>
                    {formatMessage({ id: 'pim_details.allocate_results_details.yearly_aggregate_income' })}
                  </Typography>
                  <Typography variant="h4">
                    {item.yearlyAggregateIncome ? `€ ${item.yearlyAggregateIncome}` : '-'}
                  </Typography>
                </Box>
                <Box mt={1.5}>
                  <Typography variant="h6" className={classes.gray}>
                    {formatMessage({ id: 'pim_details.allocate_results_details.maximum_mortgage' })}
                  </Typography>
                  <Typography variant="h4">{item.maximumMortgage ? `€ ${item.maximumMortgage}` : '-'}</Typography>
                </Box>
                <Box mt={1.5}>
                  <Typography variant="h6" className={classes.gray}>
                    {formatMessage({ id: 'pim_details.allocate_results_details.type_of_interest' })}
                  </Typography>
                  <Typography variant="h4">
                    {item.houseForSale ? formatMessage({ id: 'common.yes' }) : formatMessage({ id: 'common.no' })}
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Box>
          <Box>
            <ListOptionsMenu id={`allocate-results-details-ranking-${item.id}`} onDeleteClick={() => {}} hideEditButton>
              <ListOptionsMenuItem
                title={formatMessage({
                  id: 'pim.details.allocateResults.mail',
                })}
                icon={<ClockIcon />}
              />
              <ListOptionsMenuItem
                title={formatMessage({
                  id: 'pim.details.allocateResults.start_workflow',
                })}
                icon={<ClockIcon />}
              />
              <ListOptionsMenuItem
                title={formatMessage({
                  id: 'pim.details.allocateResults.change_role',
                })}
                icon={<ClockIcon />}
              />
              <ListOptionsMenuItem
                title={formatMessage({
                  id: 'pim.details.allocateResults.drop_out',
                })}
                icon={<ClockIcon />}
              />
            </ListOptionsMenu>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
