import React, { ReactElement } from 'react';
import { Page } from 'ui/templates/page/Page';
import { PageWithListProps } from 'ui/templates/page/Page.types';
import { CardWithList } from 'ui/templates';
import { BaseCardListItemType as Type } from 'ui/templates/cards/cardWithList/CardWithList.types';

export const PageWithList: <T extends Type>(p: PageWithListProps<T>) => ReactElement<PageWithListProps<T>> = ({
  emptyStateTextFirst,
  emptyStateTextSecond,
  emoji,
  renderItem,
  isExpandable,
  isInitExpanded,
  items,
  onSave,
  renderSubOptions,
  cardTitle,
  ...props
}) => {
  return (
    <Page {...props}>
      <CardWithList
        title={cardTitle}
        emptyStateTextFirst={emptyStateTextFirst}
        emptyStateTextSecond={emptyStateTextSecond}
        emoji={emoji}
        renderItem={renderItem}
        items={items}
        onSave={onSave}
      />
    </Page>
  );
};
