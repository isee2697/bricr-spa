import React, { ReactElement } from 'react';
import arrayMutators from 'final-form-arrays';

import { AutosaveForm, FormSection } from 'ui/organisms';
import { AutosaveCardProps, BaseCardAutosave } from 'ui/templates/cards/autosaveCard/AutoSaveCard.types';

import { useStyles } from './AutosaveCard.styles';

export const AutosaveCard: <T extends BaseCardAutosave>(
  p: AutosaveCardProps<T>,
) => ReactElement<AutosaveCardProps<T>> = ({
  renderChildren,
  isExpandable = true,
  isInitExpanded = false,
  data,
  onSave,
  ...props
}) => {
  const classes = useStyles();

  return (
    <FormSection
      className={classes.root}
      key={data.id}
      {...props}
      isExpandable={isExpandable}
      isInitExpanded={isInitExpanded}
    >
      {editing => (
        <AutosaveForm key={data.id} initialValues={data} mutators={{ ...arrayMutators }} onSave={onSave}>
          {renderChildren(editing)}
        </AutosaveForm>
      )}
    </FormSection>
  );
};
