import React from 'react';
import { FormSection } from 'ui/organisms';
import { InfoSection } from 'ui/molecules';
import { Button, Typography, Box } from 'ui/atoms';
import { LinkIcon } from 'ui/atoms/icons';

import { CardWithLinkedItemProps } from './CardWithLinkedItem.types';

export const CardWithLinkedItem = ({
  emptyStateTextFirst,
  emptyStateTextSecond,
  emoji,
  showEmptyState,
  children,
  onLinkButtonClick,
  linkButtonText,
  isExpandable = true,
  isInitExpanded = false,
  ...props
}: CardWithLinkedItemProps) => {
  return (
    <FormSection {...props} isExpandable={isExpandable} isInitExpanded={isInitExpanded}>
      {!showEmptyState
        ? children
        : editable => (
            <InfoSection color="gradient" emoji={emoji}>
              <Typography variant="h3">{emptyStateTextFirst}</Typography>
              <Typography variant="h3">{emptyStateTextSecond}</Typography>
              <Box mb={2} />
              <Button
                color="primary"
                startIcon={<LinkIcon color="inherit" />}
                variant="contained"
                onClick={onLinkButtonClick}
                size="small"
                disabled={!editable}
              >
                {linkButtonText}
              </Button>
            </InfoSection>
          )}
    </FormSection>
  );
};
