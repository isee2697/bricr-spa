import React from 'react';
import { useLocation, useRouteMatch } from 'react-router-dom';
import { DateTime } from 'luxon';

import { SidebarMenu } from 'ui/molecules';
import { CheckIcon, SaleIcon, CloseIcon, TriggerIcon, LockIcon } from 'ui/atoms/icons';
import { MenuItem } from 'ui/molecules/sidebarMenu/SidebarMenu.types';
import { Scrollable, Stepper, Step, Typography, Box, Chip, SidebarTitleTile, UserAvatar } from 'ui/atoms';
import { StageIcon } from 'ui/molecules/propertyStage/stageIcon/StageIcon';
import { useLocale } from 'hooks';

import { useStyles, Connector, Labels } from './DocumentQuestionnaireSidebarMenu.styles';
import { DocumentQuestionnaireSidebarMenuProps } from './DocumentQuestionnaireSidebarMenu.types';

export const DocumentQuestionnaireSidebarMenu = ({
  onHide,
  isVisible,
  data,
  activeItem,
  onChangeStep,
}: DocumentQuestionnaireSidebarMenuProps) => {
  const classes = useStyles();
  const { formatMessage } = useLocale();
  const { url } = useRouteMatch();
  const { pathname } = useLocation();

  const baseSize = 90;

  const isOnSecurityPage = pathname.endsWith('/security');

  const items: MenuItem[] = [{ key: 'security', icon: <LockIcon /> }];

  if (isOnSecurityPage) {
    items.unshift({ key: 'data', icon: <TriggerIcon /> });
  }

  const menu = {
    url,
    groups: [
      {
        items,
      },
    ],
  };

  return (
    <SidebarMenu
      onHide={onHide}
      isVisible={isVisible}
      translationPrefix="pim_details.documents.menu"
      menu={menu}
      menuTitleIcon={<SaleIcon />}
      menuTitle={
        <>
          <SidebarTitleTile
            title={'Van der Meerstraat'}
            subtitle={formatMessage({ id: 'documents.questionnaire.residential' })}
            icon={
              <UserAvatar name={'Van der Meerstraat'} avatar={'http://placeimg.com/32/32/arch'} variant="rounded" />
            }
          />
          <Box mt={2} />
          {!isOnSecurityPage && (
            <Scrollable width="100%" height={baseSize * data.steps.length}>
              <Stepper
                style={{ height: baseSize }}
                activeStep={activeItem}
                connector={<Connector />}
                className={classes.stepper}
                orientation="vertical"
              >
                {data.steps.map(({ title, modifiedAt, approved, declined }, index) => (
                  <Step key={title} className={classes.step} onClick={() => onChangeStep(index)}>
                    <Labels StepIconComponent={StageIcon}>
                      <Box display="flex" alignItems="flex-start">
                        <Box display="flex" flexDirection="column" alignItems="flex-start">
                          <Box my={0.5}>
                            <Typography variant="h5">{title}</Typography>
                          </Box>
                          <Typography variant="h6" className={classes.date}>
                            {modifiedAt ? DateTime.fromJSDate(new Date(modifiedAt)).toFormat('dd-MM-yyyy') : '-'}
                          </Typography>
                        </Box>
                        {index ? (
                          <Box display="flex" flexDirection="column" alignItems="flex-start" ml={2}>
                            <Box display="flex" alignItems="center">
                              <Box display="flex" alignItems="center" className={classes.checkIcon}>
                                <CheckIcon color="inherit" fontSize="small" />
                              </Box>
                              <Chip className={classes.chipText} label={approved || '-'} />
                            </Box>
                            <Box display="flex" alignItems="center" mt={0.5}>
                              <Box display="flex" alignItems="center" className={classes.closeIcon}>
                                <CloseIcon color="inherit" fontSize="small" />
                              </Box>
                              <Chip className={classes.chipText} label={declined || '-'} />
                            </Box>
                          </Box>
                        ) : null}
                      </Box>
                    </Labels>
                  </Step>
                ))}
              </Stepper>
            </Scrollable>
          )}
        </>
      }
    />
  );
};
