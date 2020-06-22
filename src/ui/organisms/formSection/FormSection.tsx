import React, { forwardRef, useImperativeHandle, useState } from 'react';
import classNames from 'classnames';

import { useLocale } from 'hooks';
import { Card, Collapse, Typography, Box, FormControlLabel, Switch, IconButton } from 'ui/atoms';
import { AddIcon, MenuIcon } from 'ui/atoms/icons';
import { ArrowDownIcon } from 'ui/atoms/icons/arrowDown/ArrowDownIcon';

import { FormSectionProps, FormSectionRef, FunctionChildren } from './FormSection.types';
import { useStyles } from './FormSection.styles';

export const FormSection = forwardRef<FormSectionRef, FormSectionProps>(
  (
    {
      title,
      isEditable = true,
      onAdd,
      onOptionsClick,
      isExpandable,
      isInitExpanded = true,
      children,
      className,
      titleBadge,
      buttons,
      isInitEditing = false,
    },
    ref,
  ) => {
    const { formatMessage } = useLocale();
    const classes = useStyles();

    const [expanded, setExpanded] = useState(isInitExpanded);
    const [editing, setEditing] = useState(isInitEditing);

    const handleSetEdit = (isEdititng: boolean) => {
      isEdititng && setExpanded(true);
      setEditing(isEdititng);
    };

    useImperativeHandle(ref, () => ({
      handleSetEdit: (value: boolean) => {
        handleSetEdit(value);
      },
    }));

    return (
      <Card className={classNames(classes.root, className)}>
        <Box className={classNames(classes.header, { 'edit-mode': editing })}>
          <Typography variant="h2" className={classNames(classes.title, 'form-section-title')}>
            {title}
            {titleBadge && <div className={classes.titleBadge}>{titleBadge}</div>}
          </Typography>
          <Box className={classes.actions}>
            {buttons}
            {isEditable && (
              <FormControlLabel
                className={classes.editLabel}
                value="start"
                control={<Switch checked={editing} onChange={() => handleSetEdit(!editing)} color="primary" />}
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
          {typeof children === 'function' ? (children as FunctionChildren)(editing) : children}
        </Collapse>
      </Card>
    );
  },
);
