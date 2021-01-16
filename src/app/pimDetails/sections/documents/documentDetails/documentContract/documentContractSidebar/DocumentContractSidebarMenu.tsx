import React, { useState } from 'react';
import { useHistory, useRouteMatch } from 'react-router-dom';
import { DateTime } from 'luxon';
import clsx from 'classnames';

import { SidebarMenu } from 'ui/molecules';
import { SaleIcon, EditIcon, TriggerIcon, LockIcon } from 'ui/atoms/icons';
import { Scrollable, Stepper, Step, Typography, Box, IconButton, StepContent, Avatar, Collapse } from 'ui/atoms';
import { StageIcon } from 'ui/molecules/propertyStage/stageIcon/StageIcon';
import { ContractStepStatus, ContractStepType } from '../DocumentContract.types';
import { useLocale } from 'hooks';

import { useStyles, Connector, Labels } from './DocumentContractSidebarMenu.styles';
import { DocumentContractGroup, DocumentContractSidebarMenuProps } from './DocumentContractSidebarMenu.types';

export const DocumentContractSidebarMenu = ({
  onHide,
  isVisible,
  data,
  group,
  onChangeGroup,
}: DocumentContractSidebarMenuProps) => {
  const { formatMessage } = useLocale();
  const classes = useStyles();
  const { url } = useRouteMatch();
  const { push, location } = useHistory();

  const menu = {
    url,
    groups: [],
  };

  const [activeItem, setActiveItem] = useState(
    data.steps.findIndex(step => step.status === ContractStepStatus.InProgress),
  );

  const handleChangeStep = (index: number) => {
    const id = data.steps[index].id;
    const url = location.pathname.split('#')[0];
    push(`${url}#${id}`);
    setActiveItem(index);
  };

  const handleEditStep = (id: string) => {};

  return (
    <SidebarMenu
      onHide={onHide}
      isVisible={isVisible}
      translationPrefix="pim_details.documents.menu"
      menu={menu}
      menuTitleIcon={<SaleIcon />}
      menuTitle={'Van der Meerstraat'}
      menuSubTitle={'Residential'}
    >
      <Box className={classes.menuWrapper}>
        <Scrollable width="100%" height="100%">
          {group !== DocumentContractGroup.Data && (
            <Box onClick={() => onChangeGroup(DocumentContractGroup.Data)} className={classes.sideBarButtonWrapper}>
              <Box display="flex" alignItems="center" className={classes.sideBarButton}>
                <TriggerIcon />
                <Box ml={0.5} />
                <Typography variant="h5">
                  {formatMessage({ id: 'pim_details.document_details.contract.data' })}
                </Typography>
              </Box>
              <Box width="100%" className={classes.sideBarBottomBorder} />
            </Box>
          )}
          <Collapse in={group === DocumentContractGroup.Data}>
            <Stepper
              activeStep={activeItem}
              connector={<Connector />}
              className={classes.stepper}
              orientation="vertical"
            >
              {data.steps.map(({ id, type, title, modifiedAt, users, description }, index) => (
                <Step key={title} className={classes.step} onClick={() => handleChangeStep(index)}>
                  <Labels StepIconComponent={StageIcon}>
                    <Box display="flex" alignItems="flex-start">
                      <Box display="flex" flexDirection="column" alignItems="flex-start">
                        <Box my={0.5}>
                          <Typography variant="h5">{title}</Typography>
                        </Box>
                        {modifiedAt ? (
                          <Typography variant="h6" className={classes.date}>
                            {DateTime.fromJSDate(new Date(modifiedAt)).toFormat('dd-MM-yyyy')}
                          </Typography>
                        ) : null}
                      </Box>
                      {type === ContractStepType.Seller ||
                      type === ContractStepType.Buyer ||
                      type === ContractStepType.Notary ? (
                        <IconButton onClick={() => handleEditStep(id)}>
                          <EditIcon color="inherit" fontSize="small" />
                        </IconButton>
                      ) : null}
                    </Box>
                  </Labels>
                  {users?.length ? (
                    <StepContent>
                      {users.map((user: string, index: number) => (
                        <Box mb={1} display="flex" alignItems="center">
                          <Avatar size="small" className={classes.avatar}>
                            <Typography variant="h6">
                              {user
                                .match(/\b(\w)/g)
                                ?.join('')
                                .slice(0, 2)}
                            </Typography>
                          </Avatar>
                          <Typography variant="h5" className={classes.boldText}>
                            {user}
                          </Typography>
                        </Box>
                      ))}
                    </StepContent>
                  ) : description ? (
                    <StepContent>
                      <Typography variant="h5" className={classes.boldText}>
                        {description}
                      </Typography>
                    </StepContent>
                  ) : null}
                </Step>
              ))}
            </Stepper>
          </Collapse>
          <Box onClick={() => onChangeGroup(DocumentContractGroup.Security)} className={classes.sideBarButtonWrapper}>
            <Box
              display="flex"
              alignItems="center"
              className={clsx(classes.sideBarButton, group === DocumentContractGroup.Security && 'selected')}
            >
              <LockIcon color={group === DocumentContractGroup.Security ? 'primary' : 'inherit'} />
              <Box ml={0.5} />
              <Typography variant="h5">
                {formatMessage({ id: 'pim_details.document_details.contract.security' })}
              </Typography>
            </Box>
            <Box
              width="100%"
              className={clsx(classes.sideBarBottomBorder, group === DocumentContractGroup.Security && 'selected')}
            />
          </Box>
        </Scrollable>
      </Box>
    </SidebarMenu>
  );
};
