import groupBy from 'lodash/groupBy';

import { CadastreType, FloorType, PimOverallInfoQuery } from 'api/types';
import { MenuItem } from 'ui/molecules/sidebarMenu/SidebarMenu.types';

import { SubMenuItem, MessageFormat, SideBarItemTypes } from './PimDetailsSidebarMenu.types';
import {
  buildingsItem,
  cadastreItem,
  commercialSpacesItem,
  generalItem,
  groundItem,
  insideItem,
  installationsItem,
  mediaItem,
  outsideItem,
  servicesItem,
  metersItem,
  specificationItem,
  animalsItem,
} from './dictionaries';

export const getMenuItem = (
  item: SideBarItemTypes,
  data: PimOverallInfoQuery,
  formatMessage: (data: MessageFormat) => string,
): MenuItem => {
  switch (item) {
    case SideBarItemTypes.General:
      return generalItem;
    case SideBarItemTypes.Inside:
      return getInsideItem(data);
    case SideBarItemTypes.Outside:
      return getOutsideItem(data, formatMessage);
    case SideBarItemTypes.Cadastre:
      return getCadastreItem(data, formatMessage);
    case SideBarItemTypes.Services:
      return servicesItem;
    case SideBarItemTypes.Meters:
      return getMetersItem(data, formatMessage);
    case SideBarItemTypes.Specification:
      return specificationItem;
    case SideBarItemTypes.Media:
      return mediaItem;
    case SideBarItemTypes.Commercial:
      return commercialSpacesItem;
    case SideBarItemTypes.Ground:
      return groundItem;
    case SideBarItemTypes.Installations:
      return installationsItem;
    case SideBarItemTypes.Buildings:
      return buildingsItem;
    case SideBarItemTypes.Animals:
      return animalsItem;
  }

  return { key: item };
};

export const createSubMenuData = (
  id: string,
  label: string,
  amount: number,
  key: number,
  formatMessage: (data: MessageFormat) => string,
): SubMenuItem => {
  const number = amount > 1 ? amount - key : undefined;

  return { id, title: `${formatMessage({ id: label })} ${number ?? ''}` };
};

const getInsideItem = (data: PimOverallInfoQuery) => {
  const floorGroups = groupBy(data.getPimInside.floors || [], floor => floor.floorType);

  return {
    ...insideItem,
    subItems: Object.values(floorGroups).flatMap(values =>
      values.map(({ id, floorType }, index) => {
        const amount = floorGroups[floorType].length,
          indexAscending = index + 1,
          indexDescending = amount - index;
        const number = amount > 1 ? (floorType === FloorType.Basement ? indexAscending : indexDescending) : undefined;

        return {
          id,
          label: `dictionaries.floor_type.${floorType}`,
          number,
        };
      }),
    ),
  };
};

const getOutsideItem = (data: PimOverallInfoQuery, formatMessage: (data: MessageFormat) => string) => {
  const outsideGroups = groupBy(data.getPimOutside.outsideFeatures || [], outside => outside.type);

  return {
    ...outsideItem,
    subItems: Object.values(outsideGroups).flatMap(values =>
      values.map((outside, key) =>
        createSubMenuData(
          outside.id,
          `dictionaries.outside_type.${outside.type}`,
          outsideGroups[outside.type].length,
          key,
          formatMessage,
        ),
      ),
    ),
  };
};

const getCadastreItem = (data: PimOverallInfoQuery, formatMessage: (data: MessageFormat) => string) => {
  const plotGroups = groupBy(
    data.getPimCadastre.cadastre?.filter(c => c.type === CadastreType.Plot) || [],
    c => c.type,
  );

  return {
    ...cadastreItem,
    subItems: [
      {
        id: 'cadastreMap',
        label: 'pim_details.cadastre.cadastre_map',
      },
      ...Object.values(plotGroups).flatMap(values =>
        values.map((plot, key) =>
          createSubMenuData(
            plot.id,
            'pim_details.cadastre.plot.title',
            plotGroups[plot.type].length,
            key,
            formatMessage,
          ),
        ),
      ),
    ],
  };
};

export const getMetersItem = (data: PimOverallInfoQuery, formatMessage: (data: MessageFormat) => string) => {
  const meterGroups = groupBy(data.getPimServices.meters || [], meter => meter.type);

  return {
    ...metersItem,
    subItems: Object.entries(meterGroups).map((values, key) =>
      createSubMenuData(
        values[0].toLowerCase(),
        `dictionaries.service.meter.${values[0]}Meters`,
        0,
        key,
        formatMessage,
      ),
    ),
  };
};
