import React, { useState } from 'react';

import { useLocale, useModalDispatch, useModalState } from 'hooks';
import { AddQuestionnaireGroupItemBody } from '../addQuestionnaireGroupItemModal/AddQuestionnaireGroupItemModal.types';
import { Grid, Menu } from 'ui/atoms';
import { ClockIcon, DeleteIcon } from 'ui/atoms/icons';
import { AutosaveForm } from 'ui/organisms';
import { GenericField } from 'form/fields';
import { AddQuestionnaireGroupItemModal } from '../addQuestionnaireGroupItemModal/AddQuestionnaireGroupItemModal';
import { ListOptionsMenuItem } from 'ui/molecules/listOptionsMenu/menuItem/ListOptionsMenuItem';
import { CardWithList } from 'ui/templates';

import { QuestionnaireGroupItem, QuestionnaireItemProps } from './QuestionnaireItem.types';
import { QuestionnaireItemSubItem } from './item/Item';

export const QuestionnaireItem = ({ group }: QuestionnaireItemProps) => {
  const { formatMessage } = useLocale();
  const [questionnaireItems, setQuestionnaireItems] = useState<QuestionnaireGroupItem[]>([]);
  const { open, close } = useModalDispatch();
  const { isOpen: isModalOpen } = useModalState('add-questionnaire-group-item');

  const { id, name } = group;

  const initialValues = {
    name,
    questionnaireItems: questionnaireItems,
  };

  const [menuEl, setMenuEl] = useState<HTMLElement | null>(null);

  const onMenuClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.stopPropagation();
    setMenuEl(menuEl ? null : event.currentTarget);
  };

  const onMenuClose = () => {
    setMenuEl(null);
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
      <CardWithList
        emoji="🤔"
        emptyStateTextFirst={formatMessage({ id: 'dms.template.questionnaire.empty_title' })}
        emptyStateTextSecond={formatMessage({ id: 'dms.template.questionnaire.empty_description' })}
        title={name}
        items={questionnaireItems.map(item => ({ ...item, title: item.question }))}
        onSave={(value: QuestionnaireGroupItem) => handleSaveSubItem(value)}
        onAdd={() => open('add-questionnaire-group-item')}
        onOptionsClick={onMenuClick}
        renderGenericFields={isEditing => (
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
            </Grid>
          </AutosaveForm>
        )}
        renderItem={(item, isEditing) => <QuestionnaireItemSubItem item={item} isEditing={isEditing} />}
      />
      <Menu
        id={`questionnaire-property-item-${id}`}
        open={Boolean(menuEl)}
        onClose={onMenuClose}
        anchorEl={menuEl}
        placement="bottom-end"
      >
        <ListOptionsMenuItem
          title={formatMessage({
            id: 'dms.templates.clone',
          })}
          icon={<ClockIcon />}
        />
        <ListOptionsMenuItem
          title={formatMessage({
            id: 'dms.templates.inactive',
          })}
          icon={<ClockIcon />}
        />
        <ListOptionsMenuItem
          title={formatMessage({
            id: 'common.delete',
          })}
          icon={<DeleteIcon color="secondary" />}
          color="secondary"
        />
      </Menu>
      <AddQuestionnaireGroupItemModal
        isOpened={isModalOpen}
        onClose={() => close('add-questionnaire-group-item')}
        onSubmit={handleAddQuestionnaireGroupItem}
      />
    </>
  );
};
