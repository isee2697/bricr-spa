import React, { useState } from 'react';
import classNames from 'classnames';

import { useLocale } from 'hooks';
import { Card, Collapse, Typography, Box, FormControlLabel, Switch, IconButton } from 'ui/atoms';
import { AddIcon, MenuIcon } from 'ui/atoms/icons';
import { ArrowDownIcon } from 'ui/atoms/icons/arrowDown/ArrowDownIcon';

import { FormSectionProps } from './FormSection.types';
import { useStyles } from './FormSection.styles';

export const FormSection = ({
  title,
  titleBadge,
  isEditable = true,
  onAdd,
  onOptionsClick,
  isExpandable,
  isInitExpanded = true,
  children,
  className,
}: FormSectionProps) => {
  const { formatMessage } = useLocale();
  const classes = useStyles();

  const [expanded, setExpanded] = useState(isInitExpanded);
  const [editing, setEditing] = useState(false);

  const handleSetEdit = () => {
    !editing && setExpanded(true);
    setEditing(editing => !editing);
  };

  return (
    <Card className={classNames(classes.root, className)}>
      <Box className={classNames(classes.header, { 'edit-mode': editing })}>
        <Typography variant="h2" className={classes.title}>
          {title}
          {titleBadge && <div className={classes.titleBadge}>{titleBadge}</div>}
        </Typography>
        <Box className={classes.actions}>
          {isEditable && (
            <FormControlLabel
              className={classes.editLabel}
              value="start"
              control={<Switch checked={editing} onChange={() => handleSetEdit()} color="primary" />}
              label={formatMessage({ id: 'form_section.edit_mode' })}
              labelPlacement="start"
            />
          )}
          {onOptionsClick && (
            <IconButton className={classes.options} variant="rounded" size="small" onClick={onOptionsClick}>
              <MenuIcon color="inherit" />
            </IconButton>
          )}
          {onAdd && (
            <IconButton color="primary" size="small" className="form-section-add" onClick={onAdd}>
              <AddIcon color="inherit" />
            </IconButton>
          )}
          {isExpandable && (
            <IconButton
              className={classNames({ 'icon-reversed': expanded })}
              variant="roundedContained"
              size="small"
              onClick={() => setExpanded(expanded => !expanded)}
            >
              <ArrowDownIcon color="inherit" />
            </IconButton>
          )}
        </Box>
      </Box>
      <Collapse in={expanded} timeout="auto" unmountOnExit className={classes.content}>
        {typeof children === 'function' ? children(editing) : children}
      </Collapse>
    </Card>
  );
};
