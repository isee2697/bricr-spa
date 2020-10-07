import React from 'react';
import clsx from 'classnames';
import { DateTime } from 'luxon';

import { VerticalTimeline } from 'ui/molecules';
import { Box, Button, Typography, UserAvatar } from 'ui/atoms';
import { VerticalTimelineItem } from 'ui/molecules/verticalTimeline/VerticalTimeline.types';
import { CheckIcon, CloseIcon, NewConstructionIcon } from 'ui/atoms/icons';
import { useLocale } from 'hooks/useLocale/useLocale';
import { Timeline } from '../../crmRelationsDetailsDashboard/crmRelationsDetailsDashboardBoards/crmRelationsDetailsDashboardBoardsTimeline/CrmRelationsDetailsDashboardBoardsTimeline.types';

import { useStyles } from './CrmRelationsDetailsTimelineBoards.styles';
import { CrmRelationsDetailsTimelineBoardsProps } from './CrmRelationsDetailsTimelineBoards.types';

export const CrmRelationsDetailsTimelineBoards = ({ timelineItems }: CrmRelationsDetailsTimelineBoardsProps) => {
  const { formatMessage } = useLocale();
  const classes = useStyles();

  const renderTimelineItems = (items: Timeline[]): VerticalTimelineItem[] => {
    return items.map(item => ({
      title: item.title,
      icon:
        item.status === 'done' ? (
          <CheckIcon className={classes.checkIcon} />
        ) : (
          <CloseIcon className={classes.closeIcon} />
        ),
      children: (
        <Box className={classes.stepLabelContent}>
          <Box display="flex">
            <Box mr={3}>
              <Typography
                variant="h5"
                className={clsx(classes.timelineStatus, item.status === 'done' ? classes.green : classes.red)}
              >
                {formatMessage({ id: `crm.details.dashboard.timeline.${item.status}` })}
              </Typography>
              <Typography variant="h6" className={classes.timelineDate}>
                {item.date.toLocaleString(DateTime.DATETIME_SHORT).split(', ')[0]}
              </Typography>
              <Typography variant="h6" className={classes.timelineTime}>
                {item.date.toLocaleString(DateTime.DATETIME_SHORT).split(', ')[1]}
              </Typography>
            </Box>
            <Box className={classes.flexGridGrow}>
              <Box display="flex" className={classes.flexGridGrow}>
                <NewConstructionIcon className={classes.timelineTitleIcon} />
                <Typography variant="h3" className={classes.timelineTitle}>
                  {item.title}
                </Typography>
                <Box className={classes.flexGridGrow} />
                {item.status === 'done' && !item.isComplete && (
                  <Button variant="outlined" size="small" color="primary" className={classes.btnComplete}>
                    {formatMessage({ id: 'crm.details.timeline.complete' })}
                  </Button>
                )}
              </Box>
              {item.memo && (
                <Box mt={3}>
                  <Typography variant="h6">{formatMessage({ id: 'crm.details.timeline.memo' })}:</Typography>
                  <Typography variant="h5">{item.memo}</Typography>
                </Box>
              )}
              {item.sentTo && item.sentTo.length > 0 && (
                <Box mt={2}>
                  <Typography variant="h6">{formatMessage({ id: 'crm.details.timeline.sent_to' })}:</Typography>
                  <Box>
                    {item.sentTo.map(sentTo => (
                      <Box mr={2} className={classes.sentToItem}>
                        <UserAvatar
                          variant="square"
                          name={`${sentTo.firstName} ${sentTo.lastName}`}
                          avatar={sentTo.image?.url || ''}
                          className={classes.sentToItemAvatar}
                        />
                        <Typography variant="h4" className={classes.sentToItemName}>
                          {sentTo.firstName} {sentTo.lastName}
                        </Typography>
                      </Box>
                    ))}
                  </Box>
                </Box>
              )}
              {item.location && (
                <Box mt={2}>
                  <Typography variant="h6">{formatMessage({ id: 'crm.details.timeline.location' })}:</Typography>
                  <Box className={classes.sentToItem}>
                    <UserAvatar
                      variant="square"
                      name={item.location?.address}
                      avatar={item.location?.image || ''}
                      className={classes.sentToItemAvatar}
                    />
                    <Typography variant="h4" className={classes.sentToItemName}>
                      {item.location.address}
                    </Typography>
                  </Box>
                </Box>
              )}
              {item.bog && (
                <Box mt={2}>
                  <Typography variant="h6">{formatMessage({ id: 'crm.details.timeline.location' })}:</Typography>
                  <Box className={classes.sentToItem}>
                    <UserAvatar
                      variant="square"
                      name={item.bog?.address}
                      avatar={item.bog?.image || ''}
                      className={classes.sentToItemAvatar}
                    />
                    <Typography variant="h4" className={classes.sentToItemName}>
                      {item.bog.address}
                    </Typography>
                  </Box>
                </Box>
              )}
              <Box display="flex" justifyContent="flex-end">
                <Typography variant="h5" className={classes.timelinePoster}>
                  {formatMessage({ id: 'crm.details.timleine.posted_by' })}{' '}
                  <b>
                    {item.postedBy?.firstName} {item.postedBy?.lastName}
                  </b>
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      ),
    }));
  };

  return <VerticalTimeline items={renderTimelineItems(timelineItems)} />;
};
