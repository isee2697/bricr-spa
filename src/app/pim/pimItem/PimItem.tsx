import React from 'react';

import { useLocale } from 'hooks';
import { PictureType, Pim } from 'api/types';
import { PropertyItem } from 'ui/molecules';

const generateNonemptyList = (obj: { [key: string]: unknown }) =>
  Object.keys(obj)
    .filter(key => !!obj[key])
    .reduce((list, key) => [...list, key], [] as string[]);

export const PimItem = ({
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
}: Pim) => {
  const { formatMessage } = useLocale();

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

  const images = pictures || [];
  const image = images.find(picture => picture.type === PictureType.General) || images[0];

  return (
    <PropertyItem
      image={image?.file?.url ?? undefined}
      date={dateCreated}
      title={title}
      labels={labels}
      salePrice={salePrice}
      rentPrice={rentPrice}
      completeness={completeness}
      categories={categories}
      stageItems={stageItems}
      stageIndex={0}
      onMenuClick={() => alert('Menu clicked')}
      isArchived={archived}
      formerOwners="Unknown"
      buyers="Unknown"
      alert={attentionNote ? attentionNote : undefined}
    />
  );
};
