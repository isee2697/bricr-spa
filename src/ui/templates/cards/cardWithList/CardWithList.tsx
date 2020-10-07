import React, { ReactElement, useEffect, useState } from 'react';
import arrayMutators from 'final-form-arrays';
import { AutosaveForm, FormSection, FormSubSection } from 'ui/organisms';
import { InfoSection } from 'ui/molecules';
import { Typography } from 'ui/atoms';
import { useToggleOnNewlyCreatedFromArray } from 'hooks';
import { FormSectionRef } from 'ui/organisms/formSection/FormSection.types';

import { CardWithListProps, BaseCardListItemType as Type } from './CardWithList.types';

export const CardWithList: <T extends Type>(p: CardWithListProps<T>) => ReactElement<CardWithListProps<T>> = ({
  emptyStateTextFirst,
  emptyStateTextSecond,
  emoji,
  renderItem,
  isExpandable = true,
  isInitExpanded = false,
  items,
  onSave,
  renderSubOptions,
  ...props
}) => {
  const [toggledKey, setToggledKey] = useState<string>();
  const formRef = React.useRef<FormSectionRef>(null);

  useEffect(() => {
    if (!!toggledKey) {
      formRef?.current?.handleSetEdit(true);
    }
  }, [formRef, toggledKey]);

  useToggleOnNewlyCreatedFromArray(items, setToggledKey);

  return (
    <FormSection
      ref={formRef}
      {...props}
      isExpandable={isExpandable}
      isInitExpanded={isInitExpanded}
      titleBadge={items.length}
    >
      {editing => (
        <>
          {items.length > 0 ? (
            items.map((item, key) => (
              <FormSubSection
                key={item.id}
                isExpanded={item.id === toggledKey}
                onExpand={() => setToggledKey(toggledKey !== item.id ? item.id : undefined)}
                initiallyOpened={false}
                title={!!item?.title ? item.title : item.name}
                customOption={renderSubOptions && renderSubOptions(item)}
                onOptionsClick={() => {}}
                counter={key + 1}
              >
                <AutosaveForm initialValues={item} mutators={{ ...arrayMutators }} onSave={onSave}>
                  {renderItem(item, editing)}
                </AutosaveForm>
              </FormSubSection>
            ))
          ) : (
            <InfoSection emoji={emoji}>
              <Typography variant="h3">{emptyStateTextFirst}</Typography>
              <Typography variant="h3">{emptyStateTextSecond}</Typography>
            </InfoSection>
          )}
        </>
      )}
    </FormSection>
  );
};
