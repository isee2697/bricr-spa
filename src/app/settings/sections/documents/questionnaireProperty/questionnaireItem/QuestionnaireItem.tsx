import React, { useState } from 'react';
import clsx from 'classnames';

import { useLocale, useModalDispatch, useModalState } from 'hooks';
import { AddQuestionnaireGroupItemBody } from '../addQuestionnaireGroupItemModal/AddQuestionnaireGroupItemModal.types';
import {
  Box,
  Card,
  CardContent,
  CardHeader,
  FormControlLabel,
  Grid,
  IconButton,
  Menu,
  MenuItem,
  Switch,
  Typography,
} from 'ui/atoms';
import { AddIcon, ArrowUpIcon, ClockIcon, DeleteIcon, MenuIcon } from 'ui/atoms/icons';
import { AutosaveForm } from 'ui/organisms';
import { GenericField } from 'form/fields';
import { AddQuestionnaireGroupItemModal } from '../addQuestionnaireGroupItemModal/AddQuestionnaireGroupItemModal';

import { useStyles } from './QuestionnaireItem.styles';
import { QuestionnaireGroupItem, QuestionnaireItemProps } from './QuestionnaireItem.types';
import { QuestionnaireItemSubItem } from './item/Item';

export const QuestionnaireItem = ({ group }: QuestionnaireItemProps) => {
  const { formatMessage } = useLocale();
  const [isEditing, setIsEditing] = useState(false);
  const [questionnaireItems, setQuestionnaireItems] = useState<QuestionnaireGroupItem[]>([]);
  const classes = useStyles();
  const { open, close } = useModalDispatch();
  const [menuEl, setMenuEl] = useState<HTMLElement | null>(null);
  const { isOpen: isModalOpen } = useModalState('add-questionnaire-group-item');

  const { id, name } = group;

  const initialValues = {
    name,
    questionnaireItems: questionnaireItems,
  };

  const handleSave = async (body: { name: string }) => {
    // TODO: Save group name

    return undefined;
  };

  const handleSaveSubItem = async (value: QuestionnaireGroupItem) => {
    // TODO: Save group sub item

    return undefined;
  };

  const handleAddQuestionnaireGroupItem = async (body: AddQuestionnaireGroupItemBody) => {
    setQuestionnaireItems([
      ...questionnaireItems,
      {
        id: `${questionnaireItems.length}`,
        ...body,
      },
    ]);

    close('add-questionnaire-group-item');

    return undefined;
  };

  const onMenuClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.stopPropagation();
    setMenuEl(menuEl ? null : event.currentTarget);
  };

  const onMenuClose = () => {
    setMenuEl(null);
  };

  return (
    <>
      <Card className={classes.root}>
        <CardHeader
          title={name}
          action={
            <Box display="flex" alignItems="center">
              <FormControlLabel
                control={<Switch checked={isEditing} onChange={() => setIsEditing(!isEditing)} color="primary" />}
                label={formatMessage({ id: 'form_section.edit_mode' })}
                labelPlacement="start"
              />
              <Box ml={1} />
              <IconButton
                aria-label="add"
                color="primary"
                size="small"
                onClick={() => open('add-questionnaire-group-item')}
              >
                <AddIcon color="inherit" />
              </IconButton>
              <Box ml={1} />
              <IconButton size="small" variant="roundedContained" onClick={onMenuClick}>
                <MenuIcon />
              </IconButton>
              <Box ml={1} />
              <IconButton size="small" variant="roundedContained">
                <ArrowUpIcon />
              </IconButton>
              <Menu
                id={`lvz-property-item-${id}`}
                open={Boolean(menuEl)}
                onClose={onMenuClose}
                anchorEl={menuEl}
                placement="bottom-end"
              >
                <MenuItem
                  className={classes.menuItem}
                  onClick={(event: React.MouseEvent) => {
                    event.stopPropagation();
                  }}
                >
                  <ClockIcon />
                  <Box ml={2}>
                    <Typography variant="subtitle1">
                      {formatMessage({
                        id: 'common.copy',
                      })}
                    </Typography>
                  </Box>
                </MenuItem>
                <MenuItem
                  className={clsx(classes.menuItem, 'red')}
                  onClick={(event: React.MouseEvent) => {
                    event.stopPropagation();
                  }}
                >
                  <DeleteIcon color="inherit" />
                  <Box ml={2}>
                    <Typography variant="subtitle1">
                      {formatMessage({
                        id: 'common.delete',
                      })}
                    </Typography>
                  </Box>
                </MenuItem>
              </Menu>
            </Box>
          }
        />
        <CardContent>
          <AutosaveForm onSave={handleSave} initialValues={{ ...initialValues }}>
            <Grid item xs={12}>
              <GenericField
                fullWidth
                name="name"
                label={formatMessage({ id: 'settings.documents.questionnaire.item.name_questionnaire_group' })}
                placeholder={formatMessage({
                  id: 'settings.documents.questionnaire.item.name_questionnaire_group.placeholder',
                })}
                disabled={!isEditing}
              />
              {questionnaireItems.map((item, index) => (
                <QuestionnaireItemSubItem index={index} item={item} onSave={handleSaveSubItem} />
              ))}
            </Grid>
          </AutosaveForm>
        </CardContent>
      </Card>
      <AddQuestionnaireGroupItemModal
        isOpened={isModalOpen}
        onClose={() => close('add-questionnaire-group-item')}
        onSubmit={handleAddQuestionnaireGroupItem}
      />
    </>
  );
};
