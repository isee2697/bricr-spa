import React from 'react';

import { Card, CardHeader, CardContent, CardActions, IconButton, Button } from '../../atoms';
import { ManageIcon } from 'ui/atoms/icons/manage/ManageIcon';
import { AppMessages } from 'i18n/messages';
import { useLocale } from 'hooks/useLocale/useLocale';

import { useStyles } from './VisitedPages.styles';
import { VisitedPagesProps } from './VisitedPages.types';

export const VisitedPages = ({ children, onMoreClick, onManageClick }: VisitedPagesProps) => {
  const classes = useStyles();
  const { formatMessage } = useLocale();

  return (
    <Card>
      <CardHeader
        title={formatMessage({ id: AppMessages['visited_pages.title'] })}
        action={
          <IconButton aria-label="manage" size="small" variant="roundedContained" onClick={onManageClick}>
            <ManageIcon color="inherit" />
          </IconButton>
        }
      />
      <CardContent className={classes.card}>{children}</CardContent>
      <CardActions>
        <Button fullWidth onClick={onMoreClick}>
          {formatMessage({ id: AppMessages['visited_pages.view_more'] })}
        </Button>
      </CardActions>
    </Card>
  );
};
