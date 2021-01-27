import React, { ReactElement, useState } from 'react';

import { useLocale } from 'hooks';
import { FormSection, AutosaveForm } from 'ui/organisms';
import { QuestionNoteOnlyFormProps } from '../DocumentQuestionnaireFlow.types';
import { FormSubSectionHeader } from 'ui/molecules';
import { Box, Typography, MenuItem, Menu } from 'ui/atoms';
import { GenericField } from 'form/fields';
import { DeleteIcon, HistoryIcon } from 'ui/atoms/icons';
import { useStyles } from '../DocumentQuestionnaireFlow.styles';

type SubMenuItemType = {
  title: string;
  onClick?: VoidFunction;
  icon?: ReactElement;
};

const SubMenuItem = ({ title, onClick, icon }: SubMenuItemType) => {
  const classes = useStyles();

  return (
    <MenuItem
      className={classes.menuItem}
      onClick={(event: React.MouseEvent) => {
        event.stopPropagation();
        onClick?.();
      }}
    >
      {icon ?? <HistoryIcon classes={{ root: classes.menuIcon }} />}
      <Box ml={2}>
        <Typography variant="subtitle1">{title}</Typography>
      </Box>
    </MenuItem>
  );
};

export function QuestionNoteOnlyForm({ initOpened, title, subtitle, question }: QuestionNoteOnlyFormProps) {
  const { formatMessage } = useLocale();
  const [menuEl, setMenuEl] = useState<HTMLElement | null>(null);

  const onMenuClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.stopPropagation();
    setMenuEl(menuEl ? null : event.currentTarget);
  };

  const onMenuClose = () => {
    setMenuEl(null);
  };

  return (
    <>
      <FormSection title={title} isExpandable isInitExpanded={initOpened} onOptionsClick={onMenuClick}>
        {editing => (
          <AutosaveForm onSave={() => Promise.resolve(undefined)}>
            {subtitle && (
              <FormSubSectionHeader
                title={subtitle}
                subtitle={formatMessage({ id: 'common.choose_one_option_below' })}
                noBorder
              />
            )}
            <Box mt={3.5} />
            <Typography variant="h5">{question.question}</Typography>
            <Box mt={3.5} />
            <GenericField
              disabled={!editing}
              name="note"
              defaultValue={question.note}
              label="pim_details.documents.note"
              size="medium"
            />
          </AutosaveForm>
        )}
      </FormSection>
      <Menu
        id="question-not-only-form-menu"
        open={Boolean(menuEl)}
        onClose={onMenuClose}
        anchorEl={menuEl}
        placement="bottom-end"
      >
        <SubMenuItem
          title={formatMessage({
            id: 'common.delete',
          })}
          onClick={() => {
            onMenuClose();
          }}
          icon={<DeleteIcon color="secondary" />}
        />
      </Menu>
    </>
  );
}
