import React, { useState } from 'react';
import { DateTime } from 'luxon';

import { Avatar, Box, IconButton, Typography } from 'ui/atoms';
import { VerticalTimeline } from 'ui/molecules';
import { VerticalTimelineItem } from 'ui/molecules/verticalTimeline/VerticalTimeline.types';
import {
  ArrowDownIcon,
  ArrowUpIcon,
  BuildingIcon,
  CheckIcon,
  CloseIcon,
  ComplexBuildingIcon,
  NewConstructionIcon,
} from 'ui/atoms/icons';

import { StatusTimelineStep } from './StatusTimeline.types';
import { useStyles } from './StatusTimeline.styles';

export const StatusTimeline = () => {
  const classes = useStyles();
  const [selectedStep, setSelectedStep] = useState<string | undefined>();

  const timelineItems: StatusTimelineStep[] = [
    {
      id: '0001',
      date: DateTime.local(),
      title: 'Aanmelding gewijzigd',
      isComplete: true,
    },
    {
      id: '0002',
      date: DateTime.local(),
      title: 'Aanmelding verwijderd',
      isComplete: true,
    },
    {
      id: '0003',
      date: DateTime.local(),
      title: '3 beelden gewijzigd, 1 mislukt',
      isComplete: false,
      steps: [
        {
          image: 'http://placeimg.com/104/72/arch',
          isComplete: true,
        },
        {
          image: 'http://placeimg.com/104/72/arch',
          isComplete: true,
        },
        {
          image: 'http://placeimg.com/104/72/arch',
          isComplete: false,
        },
      ],
    },
    {
      id: '0004',
      date: DateTime.local(),
      title: '10 beelden aangemeld',
      isComplete: true,
    },
    {
      id: '0005',
      date: DateTime.local(),
      title: 'PIM object/objecttype/project aangemeld',
      isComplete: false,
      isProject: true,
      projectSteps: [
        {
          title: 'Living in the green',
          isComplete: true,
          items: [
            {
              title: 'Diamant',
              isComplete: true,
              subItems: [
                {
                  title: 'Isenburgstraat 36',
                  isComplete: true,
                },
                {
                  title: 'Isenburgstraat 36',
                  isComplete: true,
                },
                {
                  title: 'Isenburgstraat 36',
                  isComplete: false,
                  message: 'Place here the reason of the error message',
                },
              ],
            },
          ],
        },
      ],
    },
  ];

  const renderTimelineItems = (items: StatusTimelineStep[]): VerticalTimelineItem[] => {
    return items.map(item => ({
      title: item.title,
      icon: item.isComplete ? <CheckIcon className={classes.checkIcon} /> : <CloseIcon className={classes.closeIcon} />,
      children: (
        <Box className={classes.stepLabelContent}>
          <Box display="flex">
            <Box mr={3}>
              <Typography variant="h6" className={classes.timelineDate}>
                {item.date.toLocaleString(DateTime.DATETIME_SHORT).split(', ')[0]}
              </Typography>
              <Typography variant="h6" className={classes.timelineTime}>
                {item.date.toLocaleString(DateTime.DATETIME_SHORT).split(', ')[1]}
              </Typography>
            </Box>
            <Box className={classes.flexGridGrow}>
              <Box display="flex">
                <Box className={classes.flexGridGrow}>
                  <Typography variant="h5" className={classes.timelineTitle}>
                    {item.title}
                  </Typography>
                </Box>
                {!item.isComplete && (
                  <Box>
                    <IconButton size="small" variant="rounded" onClick={() => setSelectedStep(item.id)}>
                      {!!selectedStep && selectedStep === item.id ? <ArrowUpIcon /> : <ArrowDownIcon />}
                    </IconButton>
                  </Box>
                )}
              </Box>
              {!!selectedStep && selectedStep === item.id && (
                <Box className={classes.selectedStepDetail}>
                  {!item.isProject && (
                    <Box display="flex">
                      {item.steps?.map(step => (
                        <Box ml={3} display="flex" flexDirection="column" alignItems="center">
                          <Avatar variant="rounded" src={step.image} className={classes.propertyStepImage} />
                          <Box mt={2} />
                          {step.isComplete ? (
                            <CheckIcon className={classes.checkIcon} />
                          ) : (
                            <CloseIcon className={classes.closeIcon} />
                          )}
                        </Box>
                      ))}
                    </Box>
                  )}
                  {item.isProject &&
                    item.projectSteps?.map(step => (
                      <Box>
                        <Box display="flex" mb={1.5}>
                          <Box width="50%" display="flex" alignItems="center" justifyContent="space-between" pr={2}>
                            <Box display="flex" alignItems="center">
                              <Box display="flex" className={classes.green} mr={1}>
                                <NewConstructionIcon color="inherit" />
                              </Box>
                              <Typography variant="h5" className={classes.fontWeightBold}>
                                {step.title}
                              </Typography>
                            </Box>
                            {step.isComplete ? (
                              <CheckIcon className={classes.checkIcon} />
                            ) : (
                              <CloseIcon className={classes.closeIcon} />
                            )}
                          </Box>
                          <Box width="50%" pl={2} display="flex" alignItems="center">
                            {!!step.message && (
                              <Typography variant="h5" color="textSecondary" className={classes.fontWeightBold}>
                                {step.message}
                              </Typography>
                            )}
                          </Box>
                        </Box>
                        <Box>
                          {(step.items || [])?.map(item => (
                            <Box>
                              <Box display="flex" mb={1.5}>
                                <Box
                                  width="50%"
                                  display="flex"
                                  alignItems="center"
                                  justifyContent="space-between"
                                  pr={2}
                                >
                                  <Box display="flex" alignItems="center">
                                    <Box display="flex" className={classes.purple} ml={3} mr={1}>
                                      <ComplexBuildingIcon color="inherit" />
                                    </Box>
                                    <Typography variant="h5" className={classes.fontWeightBold}>
                                      {item.title}
                                    </Typography>
                                  </Box>
                                  {item.isComplete ? (
                                    <CheckIcon className={classes.checkIcon} />
                                  ) : (
                                    <CloseIcon className={classes.closeIcon} />
                                  )}
                                </Box>
                                <Box width="50%" pl={2} display="flex" alignItems="center">
                                  {!!item.message && (
                                    <Typography variant="h5" color="textSecondary" className={classes.fontWeightBold}>
                                      {item.message}
                                    </Typography>
                                  )}
                                </Box>
                              </Box>
                              <Box>
                                {(item.subItems || []).map(subItem => (
                                  <Box display="flex" mb={1.5}>
                                    <Box
                                      width="50%"
                                      display="flex"
                                      alignItems="center"
                                      justifyContent="space-between"
                                      pr={2}
                                    >
                                      <Box display="flex" alignItems="center">
                                        <Box display="flex" className={classes.blue} ml={6} mr={1}>
                                          <BuildingIcon color="inherit" />
                                        </Box>
                                        <Typography variant="h5" className={classes.fontWeightBold}>
                                          {subItem.title}
                                        </Typography>
                                      </Box>
                                      {subItem.isComplete ? (
                                        <CheckIcon className={classes.checkIcon} />
                                      ) : (
                                        <CloseIcon className={classes.closeIcon} />
                                      )}
                                    </Box>
                                    <Box width="50%" pl={2} display="flex" alignItems="center">
                                      {!!subItem.message && (
                                        <Typography
                                          variant="h5"
                                          color="textSecondary"
                                          className={classes.fontWeightBold}
                                        >
                                          {subItem.message}
                                        </Typography>
                                      )}
                                    </Box>
                                  </Box>
                                ))}
                              </Box>
                            </Box>
                          ))}
                        </Box>
                      </Box>
                    ))}
                </Box>
              )}
            </Box>
          </Box>
        </Box>
      ),
    }));
  };

  return <VerticalTimeline items={renderTimelineItems(timelineItems)} noSideMargin />;
};
