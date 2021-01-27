import React, { ReactElement, useState } from 'react';

import { useLocale } from 'hooks';
import { Box, MenuItem, Menu, Typography } from 'ui/atoms';
import { FormSection } from 'ui/organisms';
import { QuestionFormProps } from '../DocumentQuestionnaireFlow.types';
import { useStyles } from '../DocumentQuestionnaireFlow.styles';
import { DeleteIcon, HistoryIcon } from 'ui/atoms/icons';

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

export function QuestionNotesForm({ initOpened }: QuestionFormProps) {
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
      <FormSection
        title={formatMessage({ id: 'pim_details.specification.notes_label' })}
        isExpandable
        isInitExpanded={initOpened}
        onOptionsClick={onMenuClick}
      >
        {editing => null}
      </FormSection>
      <Menu
        id="question-note-form-menu"
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
