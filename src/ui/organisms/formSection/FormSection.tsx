import React, { useState } from 'react';

import { useLocale } from 'hooks';
import { AppMessages } from 'i18n/messages';
import { Typography, Box, FormControlLabel, Switch, IconButton, ExpansionPanel, ExpansionPanelDetails } from 'ui/atoms';
import { AddIcon } from 'ui/atoms/icons/add/AddIcon';
import { ArrowDownIcon } from 'ui/atoms/icons/arrowDown/ArrowDownIcon';

import { FormSectionProps } from './FormSection.types';
import * as S from './FormSection.styles';

export const FormSection = ({ title, isEditable = true, onAdd, isExpandable, children }: FormSectionProps) => {
  const { formatMessage } = useLocale();
  const classes = S.useStyles();

  const [expanded, setExpanded] = useState(true);
  const [editing, setEditing] = useState(false);

  return (
    <ExpansionPanel expanded={expanded}>
      <S.Header editing={editing.toString()}>
        <Typography variant="h2">{title}</Typography>
        <Box className={classes.actions}>
          {isEditable && (
            <FormControlLabel
              className={classes.editLabel}
              value="start"
              control={<Switch checked={editing} onChange={() => setEditing(editing => !editing)} color="primary" />}
              label={formatMessage({ id: AppMessages['form_section.edit_mode'] })}
              labelPlacement="start"
            />
          )}
          {onAdd && (
            <IconButton color="primary" size="small" onClick={onAdd}>
              <AddIcon color="inherit" />
            </IconButton>
          )}
          {isExpandable && (
            <IconButton
              className="expanding-icon"
              variant="roundedContained"
              size="small"
              onClick={() => setExpanded(expanded => !expanded)}
            >
              <ArrowDownIcon color="inherit" />
            </IconButton>
          )}
        </Box>
      </S.Header>
      <ExpansionPanelDetails className={classes.content}>{children(editing)}</ExpansionPanelDetails>
    </ExpansionPanel>
  );
};
