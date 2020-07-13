import React, { ReactElement, useState } from 'react';

import { Avatar, Typography } from 'ui/atoms';
import { Service, ServiceType } from 'api/types';
import { FormSection } from 'ui/organisms';
import { useLocale } from 'hooks';
import { InfoSection } from 'ui/molecules';
import { AddServiceModalContainer } from '../modal/AddServiceModalContainer';
import { ServiceForm } from '../../../../shared/services/forms/ServiceForm';
import { useStyles } from '../../../../shared/services/Service.styles';
import { ServiceRadioType, ServiceTypeListProps } from '../../../../shared/services/Service.types';
import * as dictionaries from '../../../../shared/services/dictionaries';
import { FormSectionRef } from 'ui/organisms/formSection/FormSection.types';

export const ServiceList: <T extends Service>(p: ServiceTypeListProps<T>) => ReactElement<ServiceTypeListProps<T>> = ({
  emptyEmoji,
  items,
  title,
  type,
  onSave,
}) => {
  const { formatMessage } = useLocale();
  const [isOpenAddService, setIsOpenAddService] = useState(false);
  const [toggled, setToggled] = useState<number | undefined>();
  const [newServiceAdded, setNewServiceAdded] = useState<boolean>(false);
  const formRef = React.useRef<FormSectionRef>(null);
  const [expandedService, setExpandedService] = useState<string | undefined>();

  const classes = useStyles();

  const onAddService = () => {
    setNewServiceAdded(true);
    formRef?.current?.handleSetEdit(true);
  };

  const types: ServiceRadioType[] =
    (type === ServiceType.HotWaterSupplies && dictionaries.hotWaterTypes) ||
    (type === ServiceType.HeatingSources && dictionaries.heatingTypes) ||
    (type === ServiceType.AdditionalServices && dictionaries.additionalTypes) ||
    [];

  const handleModalClose = (id?: string) => {
    setIsOpenAddService(false);

    if (id) {
      setExpandedService(id);
      formRef?.current?.handleSetEdit(true);
    }
  };

  const handleSpaceExpand = (id: string) => {
    setExpandedService(serviceId => {
      if (serviceId === id) {
        return undefined;
      }

      return id;
    });
  };

  return (
    <>
      <FormSection
        titleBadge={items.length}
        title={<>{formatMessage({ id: title })}</>}
        isEditable={items.length > 0}
        onAdd={() => setIsOpenAddService(true)}
        onOptionsClick={items.length > 0 ? () => {} : undefined}
        ref={formRef}
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
                const typeItem = types.find(typeItem => typeItem.value === item.configuration.type);
                const newestAdded = newServiceAdded && items.length === key + 1;
                setNewServiceAdded(newestAdded);

                return (
                  <ServiceForm
                    onSave={onSave}
                    key={item.id}
                    isEditMode={isEditMode}
                    toggled={newestAdded || toggled === key}
                    onToggleClick={() => setToggled(toggled === key ? undefined : key)}
                    item={item}
                    types={(type === ServiceType.HotWaterSupplies && dictionaries.hotWaterFuelTypes) || undefined}
                    typesTitle={
                      (type === ServiceType.HotWaterSupplies && 'pim_details.services.service_form.fuel_title') ||
                      undefined
                    }
                    hasOwnership={!!typeItem?.hasOwnership}
                    title={
                      <>
                        <Avatar className={classes.avatar}>{key + 1}</Avatar>
                        {typeItem && formatMessage({ id: typeItem.label }) + (item.name ? ` (${item.name})` : '')}
                      </>
                    }
                    isExpanded={expandedService === item.id}
                    onExpand={handleSpaceExpand}
                  />
                );
              })}
          </>
        )}
      </FormSection>
      <AddServiceModalContainer
        onAddService={onAddService}
        type={type}
        types={types}
        isOpened={isOpenAddService}
        onClose={handleModalClose}
      />
    </>
  );
};
