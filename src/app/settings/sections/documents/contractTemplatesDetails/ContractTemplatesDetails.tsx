import React, { useState } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import clsx from 'classnames';

import { Box, Button, IconButton, Menu, MenuItem, Typography } from 'ui/atoms';
import { useLocale, useModalDispatch, useModalState } from 'hooks';
import { AddIcon, ClockIcon, DeleteIcon, MenuIcon, ExitIcon } from 'ui/atoms/icons';
import { Page } from 'ui/templates';

import { ContractTemplatesDetailsSidebar } from './sidebar/Sidebar';
import { ContractTemplatesDetailsProps } from './ContractTemplatesDetails.types';
import { fieldsGroups } from './dictionaries';
import { useStyles } from './ContractTemplatesDetails.styles';
import { ContractTemplatesDetailsGeneralInfo } from './generalInfo/GeneralInfo';
import { AddArticleGroupModal } from './addArticleGroupModal/AddArticleGroupModal';
import { ArticleGroups } from './articleGroups/ArticleGroups';

export const ContractTemplatesDetails = ({ goBack, generalInfo, onAddArticleGroup }: ContractTemplatesDetailsProps) => {
  const classes = useStyles();
  const { formatMessage } = useLocale();
  const { open, close } = useModalDispatch();
  const [menuEl, setMenuEl] = useState<HTMLElement | null>(null);
  const { isOpen: isModalOpen } = useModalState('add-contract-templates-article-group');

  const onMenuClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.stopPropagation();
    setMenuEl(menuEl ? null : event.currentTarget);
  };

  const onMenuClose = () => {
    setMenuEl(null);
  };

  const actions = [
    {
      value: 'configure',
      icon: <ClockIcon />,
      onClick: () => {},
    },
    {
      value: 'arthive',
      icon: <ClockIcon />,
      onClick: () => {},
    },
    {
      value: 'copy',
      icon: <ClockIcon />,
      onClick: () => {},
    },
    {
      value: 'delete',
      icon: <DeleteIcon color="inherit" />,
      onClick: () => {},
      color: 'red',
    },
  ];

  return (
    <>
      <Box mt={-3} ml={-3} mr={-3} mb={-3}>
        <DndProvider backend={HTML5Backend}>
          <Box display="flex">
            <Box width={216}>
              <ContractTemplatesDetailsSidebar fieldsGroups={fieldsGroups} />
            </Box>
            <Box width="100%" ml={3} mr={3} className={classes.content}>
              <Page withoutHeader>
                <Box width="100%" display="flex" justifyContent="space-between" alignItems="center">
                  <Typography variant="h3" className={classes.fontWeightBolder}>
                    {formatMessage({ id: 'settings.documents.contract_templates_details.title' })}
                  </Typography>
                  <Box display="flex">
                    <IconButton size="small" variant="roundedContained" onClick={goBack}>
                      <ExitIcon />
                    </IconButton>
                    <Box ml={3} />
                    <IconButton size="small" variant="roundedContained" onClick={onMenuClick}>
                      <MenuIcon />
                    </IconButton>
                  </Box>
                </Box>
                <ContractTemplatesDetailsGeneralInfo generalInfo={generalInfo} />
                <Box mt={2} mb={1} width="100%" display="flex" justifyContent="flex-end">
                  <Button
                    color="primary"
                    variant="contained"
                    onClick={() => open('add-contract-templates-article-group')}
                    startIcon={<AddIcon color="inherit" />}
                    size="small"
                  >
                    {formatMessage({ id: 'settings.documents.contract_templates_details.add_article_group' })}
                  </Button>
                </Box>
                <ArticleGroups />
              </Page>
            </Box>
          </Box>
        </DndProvider>
      </Box>
      <AddArticleGroupModal
        isOpened={isModalOpen}
        onClose={() => close('add-contract-templates-article-group')}
        onSubmit={onAddArticleGroup}
      />
      <Menu
        id={`contract_templates_details${generalInfo.id}`}
        open={Boolean(menuEl)}
        onClose={onMenuClose}
        anchorEl={menuEl}
        placement="bottom-end"
      >
        {actions.map((action, index) => (
          <MenuItem
            onClick={(event: React.MouseEvent) => {
              event.stopPropagation();
              setMenuEl(null);
              action.onClick();
            }}
            className={clsx(classes.menuItem, action.color)}
          >
            {action.icon}
            <Typography variant="subtitle1">
              {formatMessage({
                id: `email.action.${action.value}`,
              })}
            </Typography>
          </MenuItem>
        ))}
      </Menu>
    </>
  );
};
