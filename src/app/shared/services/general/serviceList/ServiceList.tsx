import React, { ReactElement, useState } from 'react';

import { Service, ServiceType } from 'api/types';
import { useLocale } from 'hooks';
import { AddServiceModalContainer } from '../modal/AddServiceModalContainer';
import { ServiceForm } from 'app/shared/services/forms/ServiceForm';
import { ServiceRadioType, ServiceTypeListProps } from 'app/shared/services/Service.types';
import * as dictionaries from 'app/shared/services/dictionaries';
import { CardWithList } from 'ui/templates';
import { yearToDate } from 'form/fields';

export const ServiceList: <T extends Service>(p: ServiceTypeListProps<T>) => ReactElement<ServiceTypeListProps<T>> = ({
  emptyEmoji,
  items,
  title,
  type,
  onSave,
}) => {
  const { formatMessage } = useLocale();
  const [isOpenAddService, setIsOpenAddService] = useState(false);
  const types: ServiceRadioType[] =
    (type === ServiceType.HotWaterSupplies && dictionaries.hotWaterTypes) ||
    (type === ServiceType.HeatingSources && dictionaries.heatingTypes) ||
    (type === ServiceType.AdditionalServices && dictionaries.additionalTypes) ||
    [];

  const itemsWithYear = items.map(item => ({
    ...item,
    name: `${item.configuration.type &&
      formatMessage({
        id: `dictionaries.service.${type.toLowerCase()}.${item.configuration.type}`,
      })} ${item?.name ?? '-'} ${item.name}`,
    yearOfInstallation: yearToDate(item.yearOfInstallation),
  }));

  return (
    <>
      <CardWithList
        title={formatMessage({ id: title })}
        emptyStateTextFirst={formatMessage({ id: `pim_details.services.${type.toLowerCase()}_empty_title` })}
        emptyStateTextSecond={formatMessage({ id: `pim_details.services.${type.toLowerCase()}_empty_description` })}
        emoji={emptyEmoji}
        items={itemsWithYear}
        onAdd={() => setIsOpenAddService(true)}
        onOptionsClick={items.length > 0 ? () => {} : undefined}
        onSave={onSave}
        renderItem={(item, isEditMode) => {
          const typeItem = types.find(typeItem => typeItem.value === item.configuration.type);

          return (
            <ServiceForm
              item={item}
              types={(type === ServiceType.HotWaterSupplies && dictionaries.hotWaterFuelTypes) || undefined}
              typesTitle={
                (type === ServiceType.HotWaterSupplies && 'pim_details.services.service_form.fuel_title') || undefined
              }
              isEditMode={isEditMode}
              hasOwnership={!!typeItem?.hasOwnership}
            />
          );
        }}
      />
      <AddServiceModalContainer
        onAddService={() => setIsOpenAddService(true)}
        type={type}
        types={types}
        isOpened={isOpenAddService}
        onClose={() => setIsOpenAddService(false)}
      />
    </>
  );
};
