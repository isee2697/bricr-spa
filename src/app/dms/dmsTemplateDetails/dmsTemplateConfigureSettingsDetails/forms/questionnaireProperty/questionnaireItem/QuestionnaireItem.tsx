import React, { useState } from 'react';

import { useLocale, useModalDispatch, useModalState } from 'hooks';
import { AddQuestionnaireGroupItemBody } from '../addQuestionnaireGroupItemModal/AddQuestionnaireGroupItemModal.types';
import { Box, Card, CardContent, CardHeader, FormControlLabel, Grid, IconButton, Switch } from 'ui/atoms';
import { AddIcon, ArrowDownIcon, ArrowUpIcon, ClockIcon } from 'ui/atoms/icons';
import { AutosaveForm } from 'ui/organisms';
import { GenericField } from 'form/fields';
import { AddQuestionnaireGroupItemModal } from '../addQuestionnaireGroupItemModal/AddQuestionnaireGroupItemModal';
import { ListOptionsMenu } from 'ui/molecules';
import { ListOptionsMenuItem } from 'ui/molecules/listOptionsMenu/menuItem/ListOptionsMenuItem';

import { useStyles } from './QuestionnaireItem.styles';
import { QuestionnaireGroupItem, QuestionnaireItemProps } from './QuestionnaireItem.types';
import { QuestionnaireItemSubItem } from './item/Item';

export const QuestionnaireItem = ({ group }: QuestionnaireItemProps) => {
  const { formatMessage } = useLocale();
  const [isEditing, setIsEditing] = useState(false);
  const [isExpanded, setIsExpanded] = useState(true);
  const [questionnaireItems, setQuestionnaireItems] = useState<QuestionnaireGroupItem[]>([]);
  const classes = useStyles();
  const { open, close } = useModalDispatch();
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
              <ListOptionsMenu id={`questionnaire-property-item-${id}`} onDeleteClick={() => {}} hideEditButton>
                <ListOptionsMenuItem
                  title={formatMessage({
                    id: 'common.copy',
                  })}
                  icon={<ClockIcon />}
                />
              </ListOptionsMenu>
              <Box ml={1} />
              <IconButton size="small" variant="roundedContained" onClick={() => setIsExpanded(!isExpanded)}>
                {isExpanded ? <ArrowUpIcon /> : <ArrowDownIcon />}
              </IconButton>
            </Box>
          }
        />
        {isExpanded ? (
          <CardContent>
            <AutosaveForm onSave={handleSave} initialValues={{ ...initialValues }}>
              <Grid item xs={12}>
                <GenericField
                  fullWidth
                  name="name"
                  label={formatMessage({ id: 'dms.templates.questionnaire.item.name_questionnaire_group' })}
                  placeholder={formatMessage({
                    id: 'dms.templates.questionnaire.item.name_questionnaire_group.placeholder',
                  })}
                  disabled={!isEditing}
                />
                {questionnaireItems.map((item, index) => (
                  <QuestionnaireItemSubItem index={index} item={item} onSave={handleSaveSubItem} />
                ))}
              </Grid>
            </AutosaveForm>
          </CardContent>
        ) : (
          <Box mt={2} />
        )}
      </Card>
      <AddQuestionnaireGroupItemModal
        isOpened={isModalOpen}
        onClose={() => close('add-questionnaire-group-item')}
        onSubmit={handleAddQuestionnaireGroupItem}
      />
    </>
  );
};
