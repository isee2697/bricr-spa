import React, { ReactElement, useState } from 'react';

import { useLocale } from 'hooks';
import { FormSection, AutosaveForm } from 'ui/organisms';
import { QuestionYesNoFormProps } from '../DocumentQuestionnaireFlow.types';
import { FormSubSectionHeader } from 'ui/molecules';
import { Box, Typography, RadioGroup, FormControlLabel, Radio, Menu, MenuItem } from 'ui/atoms';
import { YesNoType } from '../../DocumentQuestionnaire.types';
import { GenericField } from 'form/fields';
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

export function QuestionYesNoForm({ initOpened, title, subtitle, question, isNote }: QuestionYesNoFormProps) {
  const { formatMessage } = useLocale();
  const classes = useStyles();
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
            <Box display="flex" alignItems="flex-start">
              <Typography variant="h5">{question.question}</Typography>
              <Box ml={4} />
              <Box display="flex" className={classes.yesNoRadioWrapper}>
                <RadioGroup row>
                  <FormControlLabel
                    value={YesNoType.Yes}
                    name="result"
                    control={<Radio color="primary" defaultChecked={question.result === YesNoType.Yes} />}
                    label={formatMessage({ id: 'common.yes' })}
                    disabled={!editing}
                  />
                  <FormControlLabel
                    value={YesNoType.No}
                    name="result"
                    control={<Radio color="primary" defaultChecked={question.result === YesNoType.Yes} />}
                    label={formatMessage({ id: 'common.no' })}
                    disabled={!editing}
                  />
                </RadioGroup>
              </Box>
            </Box>
            {isNote && (
              <>
                <Box mt={1} />
                <GenericField
                  disabled={!editing}
                  name="note"
                  defaultValue={question.note}
                  label="pim_details.documents.note"
                  size="medium"
                />
              </>
            )}
          </AutosaveForm>
        )}
      </FormSection>
      <Menu
        id="question-yes-no-form-menu"
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
