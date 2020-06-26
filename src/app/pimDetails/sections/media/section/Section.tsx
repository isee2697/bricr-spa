import React, { useRef } from 'react';

import { FormSection } from 'ui/organisms';
import { Avatar, Typography } from 'ui/atoms';
import { InfoSection } from 'ui/molecules';
import { FormSectionRef } from 'ui/organisms/formSection/FormSection.types';

import { SectionProps } from './Section.types';
import { useStyles } from './Section.styles';

export const Section = ({
  children,
  count,
  icon,
  emptyLineFirst,
  emptyLineSecond,
  title,
  onAdd,
  isExpandable = false,
  buttons,
}: SectionProps) => {
  const styles = useStyles();
  const formSectionRef = useRef<FormSectionRef>(null);

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

  const handleAdd = () => {
    formSectionRef?.current?.handleSetEdit(true);
    onAdd();
  };

  return (
    <FormSection
      title={
        <div className={styles.titleContainer}>
          {title}
          <Avatar className={styles.count}>{count}</Avatar>
        </div>
      }
      isEditable={children && count > 0}
      isExpandable={children && count > 0 && isExpandable}
      onAdd={handleAdd}
      buttons={children && count > 0 && buttons}
      ref={formSectionRef}
    >
      {renderContent}
    </FormSection>
  );
};
