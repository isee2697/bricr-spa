import React from 'react';

import { Grid } from 'ui/atoms';
import { FormSubSection } from 'ui/molecules';
import { FormSection } from 'ui/organisms';
import { useLocale } from 'hooks';
import { AppMessages } from 'i18n/messages';
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
    label: 'pim_details.general.property_details.single_family',
    icon: <AogIcon />,
    value: PropertyTypeDetailed.SingleFamily,
  },
  {
    label: 'pim_details.general.property_details.dyke_house',
    icon: <BogIcon />,
    value: PropertyTypeDetailed.DykeHouse,
  },
  {
    label: 'pim_details.general.property_details.court_house',
    icon: <CalendarIcon />,
    value: PropertyTypeDetailed.CourtHouse,
  },
  {
    label: 'pim_details.general.property_details.drive_in_home',
    icon: <ComplexBuildingIcon />,
    value: PropertyTypeDetailed.DriveInHome,
  },
  {
    label: 'pim_details.general.property_details.split_level',
    icon: <EditIcon />,
    value: PropertyTypeDetailed.SplitLevel,
  },
  {
    label: 'pim_details.general.property_details.quadrant_house',
    icon: <FolderIcon />,
    value: PropertyTypeDetailed.QuadrantHouse,
  },
  {
    label: 'pim_details.general.property_details.patio_house',
    icon: <FilterIcon />,
    value: PropertyTypeDetailed.PatioHouse,
  },
  {
    label: 'pim_details.general.property_details.villa',
    icon: <MailIcon />,
    value: PropertyTypeDetailed.Villa,
  },
  {
    label: 'pim_details.general.property_details.canal_house',
    icon: <MutationIcon />,
    value: PropertyTypeDetailed.CanalHouse,
  },
  {
    label: 'pim_details.general.property_details.water_house',
    icon: <BellIcon />,
    value: PropertyTypeDetailed.WaterHouse,
  },
  {
    label: 'pim_details.general.property_details.bungalow',
    icon: <SiteIcon />,
    value: PropertyTypeDetailed.Bungalow,
  },
  {
    label: 'pim_details.general.property_details.semi_bungalow',
    icon: <BuildingIcon />,
    value: PropertyTypeDetailed.SemiBungalow,
  },
  {
    label: 'pim_details.general.property_details.stilt_house',
    icon: <PinIcon />,
    value: PropertyTypeDetailed.StiltHouse,
  },
  {
    label: 'pim_details.general.property_details.business_or_serivce_home',
    icon: <SaleIcon />,
    value: PropertyTypeDetailed.BusinessOrServiceHome,
  },
  {
    label: 'pim_details.general.property_details.estate',
    icon: <SeeIcon />,
    value: PropertyTypeDetailed.Estate,
  },
  {
    label: 'pim_details.general.property_details.country_house',
    icon: <UploadIcon />,
    value: PropertyTypeDetailed.CountryHouse,
  },
  {
    label: 'pim_details.general.property_details.mansion',
    icon: <WarningIcon />,
    value: PropertyTypeDetailed.Mansion,
  },
];

const CONNECTIONS = [
  {
    label: 'pim_details.general.property_details.semi_detached',
    icon: <AogIcon />,
    value: PropertyConnection.SemiDetached,
  },
  {
    label: 'pim_details.general.property_details.final_house',
    icon: <BogIcon />,
    value: PropertyConnection.FinalHouse,
  },
  {
    label: 'pim_details.general.property_details.corner_house',
    icon: <EditIcon />,
    value: PropertyConnection.CornerHouse,
  },
  {
    label: 'pim_details.general.property_details.terraced_house',
    icon: <CalendarIcon />,
    value: PropertyConnection.TerracedHouse,
  },
  {
    label: 'pim_details.general.property_details.detached_house',
    icon: <ComplexBuildingIcon />,
    value: PropertyConnection.DetachedHouse,
  },
];

export const PropertyDetailsForm = () => {
  const { formatMessage } = useLocale();
  const classes = useStyles();

  return (
    <FormSection title={formatMessage({ id: AppMessages['pim_details.general.property_details.title'] })} isExpandable>
      {editing => (
        <>
          <FormSubSection
            className={classes.subHeader}
            title={formatMessage({
              id: AppMessages['pim_details.general.property_details.pick_type_of_property'],
            })}
            subtitle={formatMessage({ id: AppMessages['pim_details.choose_one_option_below'] })}
          />
          <Grid container spacing={1} className={classes.tilesContainer}>
            <RadioGroupField sm={3} options={TYPES} name="houseGeneral.propertyDetails" disabled={!editing} />
          </Grid>

          <FormSubSection
            className={classes.subHeader}
            title={formatMessage({
              id: AppMessages['pim_details.general.property_details.property_connection'],
            })}
            subtitle={formatMessage({ id: AppMessages['pim_details.choose_one_option_below'] })}
          />
          <Grid container spacing={1} className={classes.tilesContainer}>
            <RadioGroupField sm={3} options={CONNECTIONS} name="houseGeneral.propertyConnection" disabled={!editing} />
          </Grid>
        </>
      )}
    </FormSection>
  );
};
