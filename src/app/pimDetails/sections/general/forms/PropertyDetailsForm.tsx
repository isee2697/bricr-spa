import React from 'react';

import { FormSubSection } from 'ui/molecules';
import { FormSection } from 'ui/organisms';
import { useLocale } from 'hooks';
import {
  AogIcon,
  BogIcon,
  CalendarIcon,
  ComplexBuildingIcon,
  EditIcon,
  FolderIcon,
  FilterIcon,
  MailIcon,
  MutationIcon,
  BellIcon,
  SiteIcon,
  BuildingIcon,
  PinIcon,
  SaleIcon,
  SeeIcon,
  UploadIcon,
  WarningIcon,
} from 'ui/atoms/icons';
import { useStyles } from '../General.styles';
import { PropertyTypeDetailed, PropertyConnection } from 'api/types';
import { RadioGroupField } from 'form/fields';

const TYPES = [
  {
    label: 'dictionaries.property_details.SingleFamily',
    icon: <AogIcon />,
    value: PropertyTypeDetailed.SingleFamily,
  },
  {
    label: 'dictionaries.property_details.DykeHouse',
    icon: <BogIcon />,
    value: PropertyTypeDetailed.DykeHouse,
  },
  {
    label: 'dictionaries.property_details.CourtHouse',
    icon: <CalendarIcon />,
    value: PropertyTypeDetailed.CourtHouse,
  },
  {
    label: 'dictionaries.property_details.DriveInHome',
    icon: <ComplexBuildingIcon />,
    value: PropertyTypeDetailed.DriveInHome,
  },
  {
    label: 'dictionaries.property_details.SplitLevel',
    icon: <EditIcon />,
    value: PropertyTypeDetailed.SplitLevel,
  },
  {
    label: 'dictionaries.property_details.QuadrantHouse',
    icon: <FolderIcon />,
    value: PropertyTypeDetailed.QuadrantHouse,
  },
  {
    label: 'dictionaries.property_details.PatioHouse',
    icon: <FilterIcon />,
    value: PropertyTypeDetailed.PatioHouse,
  },
  {
    label: 'dictionaries.property_details.Villa',
    icon: <MailIcon />,
    value: PropertyTypeDetailed.Villa,
  },
  {
    label: 'dictionaries.property_details.CanalHouse',
    icon: <MutationIcon />,
    value: PropertyTypeDetailed.CanalHouse,
  },
  {
    label: 'dictionaries.property_details.WaterHouse',
    icon: <BellIcon />,
    value: PropertyTypeDetailed.WaterHouse,
  },
  {
    label: 'dictionaries.property_details.Bungalow',
    icon: <SiteIcon />,
    value: PropertyTypeDetailed.Bungalow,
  },
  {
    label: 'dictionaries.property_details.SemiBungalow',
    icon: <BuildingIcon />,
    value: PropertyTypeDetailed.SemiBungalow,
  },
  {
    label: 'dictionaries.property_details.StiltHouse',
    icon: <PinIcon />,
    value: PropertyTypeDetailed.StiltHouse,
  },
  {
    label: 'dictionaries.property_details.BusinessOrServiceHome',
    icon: <SaleIcon />,
    value: PropertyTypeDetailed.BusinessOrServiceHome,
  },
  {
    label: 'dictionaries.property_details.Estate',
    icon: <SeeIcon />,
    value: PropertyTypeDetailed.Estate,
  },
  {
    label: 'dictionaries.property_details.CountryHouse',
    icon: <UploadIcon />,
    value: PropertyTypeDetailed.CountryHouse,
  },
  {
    label: 'dictionaries.property_details.Mansion',
    icon: <WarningIcon />,
    value: PropertyTypeDetailed.Mansion,
  },
];

const CONNECTIONS = [
  {
    label: 'dictionaries.property_connections.SemiDetached',
    icon: <AogIcon />,
    value: PropertyConnection.SemiDetached,
  },
  {
    label: 'dictionaries.property_connections.FinalHouse',
    icon: <BogIcon />,
    value: PropertyConnection.FinalHouse,
  },
  {
    label: 'dictionaries.property_connections.CornerHouse',
    icon: <EditIcon />,
    value: PropertyConnection.CornerHouse,
  },
  {
    label: 'dictionaries.property_connections.TerracedHouse',
    icon: <CalendarIcon />,
    value: PropertyConnection.TerracedHouse,
  },
  {
    label: 'dictionaries.property_connections.DetachedHouse',
    icon: <ComplexBuildingIcon />,
    value: PropertyConnection.DetachedHouse,
  },
];

export const PropertyDetailsForm = () => {
  const { formatMessage } = useLocale();
  const classes = useStyles();

  return (
    <FormSection
      title={formatMessage({ id: 'pim_details.general.property_details.title' })}
      isExpandable
      isInitExpanded={false}
    >
      {editing => (
        <>
          <FormSubSection
            className={classes.subHeader}
            title={formatMessage({ id: 'pim_details.general.property_details.pick_type_of_property' })}
            subtitle={formatMessage({ id: 'pim_details.choose_one_option_below' })}
          />
          <div className={classes.tilesContainer}>
            <RadioGroupField
              sm={2}
              spacing={1}
              options={TYPES}
              name="houseGeneral.propertyDetails"
              disabled={!editing}
            />
          </div>

          <FormSubSection
            className={classes.subHeader}
            title={formatMessage({ id: 'pim_details.general.property_details.property_connection' })}
            subtitle={formatMessage({ id: 'pim_details.choose_one_option_below' })}
          />
          <div className={classes.tilesContainer}>
            <RadioGroupField
              sm={2}
              spacing={1}
              options={CONNECTIONS}
              name="houseGeneral.propertyConnection"
              disabled={!editing}
            />
          </div>
        </>
      )}
    </FormSection>
  );
};
