import React, { ReactElement, useState } from 'react';
import classNames from 'classnames';

import { FormSection } from 'ui/organisms';
import { useLocale } from 'hooks';
import { InfoSection } from 'ui/molecules';
import { Avatar, Typography } from 'ui/atoms';

import { ServiceTypeListProps } from './Services.types';
import { AddServiceModalContainer } from './addServiceModal/AddServiceModalContainer';
import { ServiceForm } from './ServiceForm';
import { useStyles } from './Services.styles';
import { ServiceRadioType } from './Services.types';
import { hotWaterTypes, heatingTypes, additionalTypes, hotWaterFuelTypes } from './dictionaries';

export const ServiceTypeList: <T extends { id: string; name: string; type: string }>(
  p: ServiceTypeListProps<T>,
) => ReactElement<ServiceTypeListProps<T>> = ({ emptyEmoji, items, title, type }) => {
  const { formatMessage } = useLocale();
  const [isOpenAddService, setIsOpenAddService] = useState(false);
  const [toggled, setToggled] = useState<number | undefined>(0);
  const classes = useStyles();

  let types: ServiceRadioType[] = [];
  let formTypes: ServiceRadioType[] | undefined;
  let formTypeTitle: string | undefined;

  switch (type) {
    case 'HotWater':
      types = hotWaterTypes;
      formTypes = hotWaterFuelTypes;
      formTypeTitle = 'pim_details.services.service_form.fuel_title';
      break;
    case 'Heating':
      types = heatingTypes;
      break;
    case 'Additional':
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
              items.map((item, key) => (
                <ServiceForm
                  key={item.id}
                  isEditMode={isEditMode}
                  toggled={toggled === key}
                  onToggleClick={() => setToggled(toggled === key ? undefined : key)}
                  item={item}
                  types={formTypes}
                  typesTitle={formTypeTitle}
                  hasOwnership={!!types.find(type => type.value === item.type)?.hasOwnership}
                  title={
                    <>
                      <Avatar className={classes.avatar}>{key + 1}</Avatar> {item.name}
                    </>
                  }
                />
              ))}
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
