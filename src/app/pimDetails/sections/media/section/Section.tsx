import React from 'react';

import { FormSection } from 'ui/organisms';
import { Avatar, Typography } from 'ui/atoms';
import { InfoSection } from 'ui/molecules';

import { SectionProps } from './Section.types';
import { useStyles } from './Section.styles';

export const Section = ({ children, count, icon, emptyLineFirst, emptyLineSecond, title, onAdd }: SectionProps) => {
  const styles = useStyles();

  const renderContent = (editable: boolean) => {
    if (count > 0 && children) {
      return children(editable);
    }

    return (
      <InfoSection emoji={icon}>
        <Typography variant="h3">{emptyLineFirst}</Typography>
        <Typography variant="h3">{emptyLineSecond}</Typography>
      </InfoSection>
    );
  };

  return (
    <FormSection
      title={
        <div className={styles.titleContainer}>
          {title}
          <Avatar className={styles.count}>{count}</Avatar>
        </div>
      }
      isEditable
      onAdd={onAdd}
    >
      {renderContent}
    </FormSection>
  );
};
