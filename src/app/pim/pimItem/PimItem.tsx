import React from 'react';

import { useLocale, useModalDispatch } from 'hooks';
import { Pim } from 'api/types';
import { PropertyItem, ListOptionsMenu } from 'ui/molecules';
import { PropertyCategory } from 'app/shared/addPimModal/AddPimModal.types';
import { ListOptionsMenuItem } from 'ui/molecules/listOptionsMenu/menuItem/ListOptionsMenuItem';

const generateNonemptyList = (obj: { [key: string]: unknown }) =>
  Object.keys(obj)
    .filter(key => !!obj[key])
    .reduce((list, key) => [...list, key], [] as string[]);

export const PimItem = ({
  id,
  street,
  houseNumberPrefix,
  houseNumber,
  houseNumberAddition,
  constructionNumberPrefix,
  constructionNumber,
  constructionNumberAddition,
  city,
  dateCreated,
  livingArea,
  propertyType,
  pictures,
  salePrice,
  rentPrice,
  completeness,
  attentionNote,
  archived,
  mainPicture,
}: Pim) => {
  const { formatMessage } = useLocale();
  const { open } = useModalDispatch();

  const title = `${street} ${houseNumberPrefix ?? ''}${houseNumber}${houseNumberAddition ?? ''}${
    constructionNumber
      ? ` (${constructionNumberPrefix ?? ''}${constructionNumber}${constructionNumberAddition ?? ''})`
      : ''
  }, ${city}`;
  const labels = generateNonemptyList({ [`${livingArea} m2`]: livingArea, [`${propertyType}`]: propertyType });
  const stageItems = !archived
    ? ['Acquisition', 'Order', 'List up', 'Reactions', 'Bidding', 'Sign'].map(title => ({
        title,
      }))
    : undefined; // TODO: replace it with real transaction data
  const categories = !archived
    ? generateNonemptyList({
        [formatMessage({ id: 'pim.type.sale' })]: salePrice,
        [formatMessage({ id: 'pim.type.rent' })]: rentPrice,
      })
    : [formatMessage({ id: 'property_item.sold' })];

  return (
    <>
      <PropertyItem
        image={mainPicture?.file?.url ?? undefined}
        date={dateCreated}
        title={title}
        labels={labels}
        salePrice={salePrice}
        rentPrice={rentPrice}
        completeness={completeness}
        categories={categories}
        stageItems={stageItems}
        stageIndex={0}
        isArchived={archived}
        formerOwners="Unknown"
        buyers="Unknown"
        alert={attentionNote ? attentionNote : undefined}
        actionsMenu={
          <ListOptionsMenu id={`pim-item-menu-${id}`} onDeleteClick={() => {}} hideEditButton>
            <ListOptionsMenuItem
              title={formatMessage({
                id: 'pim.menu.move_pim',
              })}
              onClick={() => {
                open('move-pim-item', { propertyCategory: PropertyCategory.PROPERTY, propertyType });
              }}
            />
          </ListOptionsMenu>
        }
      />
    </>
  );
};
