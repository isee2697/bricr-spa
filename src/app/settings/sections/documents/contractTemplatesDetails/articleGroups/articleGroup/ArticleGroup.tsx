import React, { useState } from 'react';
import clsx from 'classnames';

import { useLocale } from 'hooks';
import {
  Box,
  Card,
  CardContent,
  CardHeader,
  FormControlLabel,
  IconButton,
  Menu,
  MenuItem,
  Radio,
  Switch,
  Typography,
} from 'ui/atoms';
import { ArrowUpIcon, ClockIcon, DeleteIcon, MenuIcon } from 'ui/atoms/icons';
import { ContractTemplatesDetailsSidebarItemDragObject } from '../../sidebar/sidebarItem/SidebarItem.types';
import { InfoSection } from 'ui/molecules';
import { Field } from '../../ContractTemplatesDetails.types';
import { ArticleGroupProps } from '../ArticleGroups.types';
import { ArticleGroupPlaceholder } from '../articleGroupPlaceholder/ArticleGroupPlaceholder';

import { useStyles } from './ArticleGroup.styles';

export const ArticleGroup = ({ index }: ArticleGroupProps) => {
  const classes = useStyles();
  const { formatMessage } = useLocale();
  const [isEditing, setIsEditing] = useState(false);
  const [fields, setFields] = useState<Field[]>([]);
  const [menuEl, setMenuEl] = useState<HTMLElement | null>(null);

  const onMenuClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.stopPropagation();
    setMenuEl(menuEl ? null : event.currentTarget);
  };

  const onMenuClose = () => {
    setMenuEl(null);
  };

  const actions = [
    {
      value: 'editName',
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

  const handleAddArticleField = (item: ContractTemplatesDetailsSidebarItemDragObject) => {
    setFields([...fields, item]);
  };

  return (
    <>
      <Card>
        <CardHeader
          title={formatMessage(
            { id: 'settings.documents.contract_templates_details.article_groups.title' },
            { index: index + 1 },
          )}
          action={
            <Box display="flex" alignItems="center">
              <FormControlLabel
                control={<Switch checked={isEditing} onChange={() => setIsEditing(!isEditing)} color="primary" />}
                label={formatMessage({ id: 'common.edit_mode' })}
                labelPlacement="start"
              />
              <Box ml={2.5} />
              <IconButton size="small" variant="roundedContained" onClick={onMenuClick}>
                <MenuIcon />
              </IconButton>
              <Box ml={2.5} />
              <IconButton size="small" variant="roundedContained">
                <ArrowUpIcon />
              </IconButton>
            </Box>
          }
        />
        <CardContent>
          {fields.map((field, fieldIndex) => (
            <Box key={fieldIndex} display="flex" alignItems="flex-start" mb={2.5}>
              <Box
                display="flex"
                alignItems="center"
                justifyContent="center"
                flexDirection="column"
                className={classes.fieldIconWrapper}
              >
                <Box className={classes.fieldIcon}>{field.icon}</Box>
                <Typography variant="h5">
                  {formatMessage({ id: `dictionaries.contract_templates_details.${field.value}` })}
                </Typography>
              </Box>
              <Box ml={4.5}>
                <Typography variant="h5">
                  {formatMessage({ id: `dictionaries.contract_templates_details.${field.value}` })}
                </Typography>
                <Box display="flex">
                  <FormControlLabel
                    control={<Radio name={`deposit${fieldIndex}`} color="primary" />}
                    label={<Typography variant="h5">{formatMessage({ id: 'common.yes' })}</Typography>}
                  />
                  <Box ml={2.5} />
                  <FormControlLabel
                    control={<Radio name={`deposit${fieldIndex}`} color="primary" />}
                    label={<Typography variant="h5">{formatMessage({ id: 'common.no' })}</Typography>}
                  />
                </Box>
                <Typography variant="h6" color="textSecondary">
                  Here will be text about the explanation for the use of this field. Lorem ipsum etc an de bla die bla
                  die bla. Lorem ipsum etc an de bla die bla die bla.
                </Typography>
              </Box>
            </Box>
          ))}
          <Box display="flex" alignItems="center">
            <ArticleGroupPlaceholder onDrop={handleAddArticleField} />
            {fields.length === 0 && (
              <Box width="100%">
                <InfoSection emoji="👈" noPadding>
                  <Typography variant="h3">
                    {formatMessage({ id: 'settings.documents.contract_templates.article_group.drag_drop_title' })}
                  </Typography>
                </InfoSection>
              </Box>
            )}
          </Box>
        </CardContent>
      </Card>
      <Menu
        id={`contract_templates_details_article_group${index}`}
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
