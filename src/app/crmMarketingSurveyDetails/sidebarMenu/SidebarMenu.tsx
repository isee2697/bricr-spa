import React from 'react';
import { useRouteMatch } from 'react-router-dom';
import { DateTime } from 'luxon';

import { SidebarMenu as SidebarMenuComponent } from 'ui/molecules';
import { SaleIcon } from 'ui/atoms/icons';
import { Box, Scrollable, SidebarTitleTile, Step, Stepper, Typography, UserAvatar } from 'ui/atoms';
import { StageIcon } from 'ui/molecules/propertyStage/stageIcon/StageIcon';
import { useLocale } from 'hooks';
import { SidebarMenuType } from 'ui/molecules/sidebarMenu/SidebarMenu.types';

import { Connector, Labels, useStyles } from './SidebarMenu.styles';
import { SidebarMenuProps } from './SidebarMenu.types';

export const SidebarMenu = ({ onHide, isVisible, data, activeItem, onChangeStep }: SidebarMenuProps) => {
  const classes = useStyles();
  const { formatMessage } = useLocale();
  const { url } = useRouteMatch();

  const baseSize = 90;

  const menu: SidebarMenuType = {
    url,
    groups: [],
  };

  return (
    <SidebarMenuComponent
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
          <Scrollable width="100%" height={baseSize * data.steps.length}>
            <Stepper
              style={{ height: baseSize }}
              activeStep={activeItem}
              connector={<Connector />}
              className={classes.stepper}
              orientation="vertical"
            >
              {data.steps.map(({ title, modifiedAt, score, approved, declined }, index: number) => (
                <Step
                  completed={index < activeItem}
                  key={title}
                  className={`${classes.step} ${index < activeItem && classes.completed}`}
                  onClick={() => onChangeStep(index)}
                >
                  <Labels
                    completed={index < activeItem}
                    icon={<StageIcon active={activeItem === index} completed={index < activeItem} icon={index} />}
                  >
                    <Box display="flex" alignItems="flex-start" justifyContent="space-between">
                      <Box display="flex" flexDirection="column" alignItems="flex-start">
                        <Box my={0.5}>
                          <Typography variant="h5">{title}</Typography>
                        </Box>
                        <Typography variant="h6" className={classes.date}>
                          {modifiedAt ? DateTime.fromJSDate(new Date(modifiedAt)).toFormat('dd-MM-yyyy') : '-'}
                        </Typography>
                      </Box>
                      <Box display="flex" flexDirection="column" alignItems="flex-start" ml={2}>
                        <Typography variant="h3" className={classes.score}>
                          {score}
                        </Typography>
                      </Box>
                    </Box>
                  </Labels>
                </Step>
              ))}
            </Stepper>
          </Scrollable>
        </>
      }
    />
  );
};
