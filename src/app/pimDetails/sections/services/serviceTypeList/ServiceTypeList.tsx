import React, { ReactElement, useState } from 'react';
import classNames from 'classnames';

import { Avatar, Typography } from 'ui/atoms';
import { Service, ServiceType } from 'api/types';
import { FormSection } from 'ui/organisms';
import { useLocale } from 'hooks';
import { InfoSection } from 'ui/molecules';
import { ServiceTypeListProps } from '../Services.types';
import { AddServiceModalContainer } from '../addServiceModal/AddServiceModalContainer';
import { ServiceForm } from '../forms/ServiceForm';
import { useStyles } from '../Services.styles';
import { ServiceRadioType } from '../Services.types';
import { hotWaterTypes, heatingTypes, additionalTypes, hotWaterFuelTypes } from '../dictionaries';

export const ServiceTypeList: <T extends Service>(
  p: ServiceTypeListProps<T>,
) => ReactElement<ServiceTypeListProps<T>> = ({ emptyEmoji, items, title, type, onSave }) => {
  const { formatMessage } = useLocale();
  const [isOpenAddService, setIsOpenAddService] = useState(false);
  const [toggled, setToggled] = useState<number | undefined>();
  const classes = useStyles();

  let types: ServiceRadioType[] = [];
  let formTypes: ServiceRadioType[] | undefined;
  let formTypeTitle: string | undefined;

  switch (type) {
    case ServiceType.HotWaterSupplies:
      types = hotWaterTypes;
      formTypes = hotWaterFuelTypes;
      formTypeTitle = 'pim_details.services.service_form.fuel_title';
      break;
    case ServiceType.HeatingSources:
      types = heatingTypes;
      break;
    case ServiceType.AdditionalServices:
      types = additionalTypes;
      break;
  }

  return (
    <>
      <FormSection
        title={
          <>
            {formatMessage({ id: title })}{' '}
            {items.length > 0 && (
              <Avatar className={classNames(classes.avatar, classes.counter)}>{items.length}</Avatar>
            )}
          </>
        }
        isEditable={items.length > 0}
        onAdd={() => setIsOpenAddService(true)}
        onOptionsClick={items.length > 0 ? () => {} : undefined}
      >
        {isEditMode => (
          <>
            {items.length === 0 && (
              <InfoSection emoji={emptyEmoji}>
                <Typography variant="h3">
                  {formatMessage({ id: `pim_details.services.${type.toLowerCase()}_empty_title` })}
                </Typography>
                <Typography variant="h3">
                  {formatMessage({ id: `pim_details.services.${type.toLowerCase()}_empty_description` })}
                </Typography>
              </InfoSection>
            )}
            {items.length > 0 &&
              items.map((item, key) => {
                const type = types.find(type => type.value === item.configuration.type);

                return (
                  <ServiceForm
                    onSave={onSave}
                    key={item.id}
                    isEditMode={isEditMode}
                    toggled={toggled === key}
                    onToggleClick={() => setToggled(toggled === key ? undefined : key)}
                    item={item}
                    types={formTypes}
                    typesTitle={formTypeTitle}
                    hasOwnership={!!type?.hasOwnership}
                    title={
                      <>
                        <Avatar className={classes.avatar}>{key + 1}</Avatar>
                        {`${type && formatMessage({ id: type.label })} (${item.name})`}
                      </>
                    }
                  />
                );
              })}
          </>
        )}
      </FormSection>
      <AddServiceModalContainer
        type={type}
        types={types}
        isOpened={isOpenAddService}
        onClose={() => setIsOpenAddService(false)}
      />
    </>
  );
};
