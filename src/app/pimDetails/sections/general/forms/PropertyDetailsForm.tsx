import React, { useState } from 'react';

import { TileRadio, Grid } from 'ui/atoms';
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

const TYPES = [
  {
    key: 'single_family',
    icon: <AogIcon />,
  },
  {
    key: 'dyke_house',
    icon: <BogIcon />,
  },
  {
    key: 'court_house',
    icon: <CalendarIcon />,
  },
  {
    key: 'drive_in_home',
    icon: <ComplexBuildingIcon />,
  },
  {
    key: 'split_level',
    icon: <EditIcon />,
  },
  {
    key: 'quadrant_house',
    icon: <FolderIcon />,
  },
  {
    key: 'patio_house',
    icon: <FilterIcon />,
  },
  {
    key: 'villa',
    icon: <MailIcon />,
  },
  {
    key: 'canal_house',
    icon: <MutationIcon />,
  },
  {
    key: 'water_house',
    icon: <BellIcon />,
  },
  {
    key: 'bungalow',
    icon: <SiteIcon />,
  },
  {
    key: 'semi_bungalow',
    icon: <BuildingIcon />,
  },
  {
    key: 'stilt_house',
    icon: <PinIcon />,
  },
  {
    key: 'business_or_serivce_home',
    icon: <SaleIcon />,
  },
  {
    key: 'estate',
    icon: <SeeIcon />,
  },
  {
    key: 'country_house',
    icon: <UploadIcon />,
  },
  {
    key: 'mansion',
    icon: <WarningIcon />,
  },
];

const CONNECTIONS = [
  {
    key: 'semi_detached',
    icon: <AogIcon />,
  },
  {
    key: 'final_house',
    icon: <BogIcon />,
  },
  {
    key: 'corner_house',
    icon: <EditIcon />,
  },
  {
    key: 'terraced_house',
    icon: <CalendarIcon />,
  },
  {
    key: 'detached_house',
    icon: <ComplexBuildingIcon />,
  },
];

export const PropertyDetailsForm = () => {
  const { formatMessage } = useLocale();
  const classes = useStyles();

  const [selectedType, setSelectedType] = useState('');
  const [selectedConnection, setSelectedConnection] = useState('');

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
            {TYPES.map(({ key, icon }) => (
              <Grid item sm={3} md={2} key={key}>
                <TileRadio
                  title={formatMessage({
                    id: `pim_details.general.property_details.${key}`,
                  })}
                  onClick={() => setSelectedType(key)}
                  isSelected={selectedType === key}
                  isDisabled={!editing}
                >
                  {icon}
                </TileRadio>
              </Grid>
            ))}
          </Grid>

          <FormSubSection
            className={classes.subHeader}
            title={formatMessage({
              id: AppMessages['pim_details.general.property_details.property_connection'],
            })}
            subtitle={formatMessage({ id: AppMessages['pim_details.choose_one_option_below'] })}
          />
          <Grid container spacing={1} className={classes.tilesContainer}>
            {CONNECTIONS.map(({ key, icon }) => (
              <Grid item sm={3} md={2} key={key}>
                <TileRadio
                  title={formatMessage({
                    id: `pim_details.general.property_details.${key}`,
                  })}
                  onClick={() => setSelectedConnection(key)}
                  isSelected={selectedConnection === key}
                  isDisabled={!editing}
                >
                  {icon}
                </TileRadio>
              </Grid>
            ))}
          </Grid>
        </>
      )}
    </FormSection>
  );
};
