import React from 'react';

import { CrmStatus, DevelopmentType, PricingType, PropertyType } from 'api/types';
import { BuildingIcon, EuroIcon, HamburgerIcon, ListIcon, LocationIcon, NewConstructionIcon } from 'ui/atoms/icons';
import { FiltersSizes, FiltersTypes, Types } from 'ui/molecules/filters/Filters.types';
import { ListView } from 'ui/templates/page/PageWithListsCard/PageWithListsCard.types';
import { CrmItem } from 'app/crm/Crm.types';
import { Box } from 'ui/atoms';
import { CrmListItem } from 'app/crm/crmListItem/CrmListItem';
import { ListTableItem } from 'ui/molecules';
import { ListTableCell } from 'ui/molecules/listTableItem/ListTableItem.types';
import { renderCell } from 'app/crm/crmTableView/CrmTableView';
import { HeaderColumnItemType } from 'ui/molecules/columnModal/ColumnModal.types';
import { ActionTab } from 'ui/molecules/actionTabs/ActionTabs.types';
import { RelationsProps } from 'app/crm/relations/Relations.types';

export const CrmsFilters: FiltersTypes[] = [
  {
    key: 'city',
    type: Types.Text,
    size: FiltersSizes.L,
  },
  {
    key: 'propertyTypes',
    type: Types.Checkbox,
    size: FiltersSizes.M,
    options: [
      { label: PropertyType.Apartment, value: PropertyType.Apartment, icon: <BuildingIcon /> },
      { label: PropertyType.House, value: PropertyType.House, icon: <BuildingIcon /> },
      { label: PropertyType.Commercial, value: PropertyType.Commercial, icon: <BuildingIcon /> },
      { label: PropertyType.Agricultural, value: PropertyType.Agricultural, icon: <BuildingIcon /> },
      { label: PropertyType.ParkingLot, value: PropertyType.ParkingLot, icon: <BuildingIcon /> },
      { label: PropertyType.BuildingPlot, value: PropertyType.BuildingPlot, icon: <BuildingIcon /> },
    ],
  },
  {
    key: 'pricingType',
    type: Types.RadioButton,
    size: FiltersSizes.L,
    options: [
      { label: PricingType.Sale, value: PricingType.Sale, icon: <EuroIcon /> },
      { label: PricingType.Rent, value: PricingType.Rent, icon: <EuroIcon /> },
    ],
  },
  {
    key: 'developmentType',
    type: Types.RadioButton,
    size: FiltersSizes.M,
    options: [
      { label: DevelopmentType.New, value: DevelopmentType.New, icon: <NewConstructionIcon /> },
      { label: DevelopmentType.Existing, value: DevelopmentType.Existing, icon: <NewConstructionIcon /> },
    ],
  },
];

export const createCrmViewsDict = (headerCells: ListTableCell<CrmItem>[]): ListView<CrmItem>[] => [
  {
    viewIcon: <ListIcon />,
    renderViewComponent: (item: CrmItem) => (
      <Box pt={3.75} pr={2} pl={3.75}>
        <CrmListItem crm={item} />
      </Box>
    ),
    isActive: true,
  },
  {
    viewIcon: <HamburgerIcon />,
    renderViewComponent: (item: CrmItem) => (
      <ListTableItem renderCell={renderCell} headerCells={headerCells} item={item} />
    ),
    isTable: true,
  },
  {
    viewIcon: <LocationIcon />,
    renderViewComponent: (item: CrmItem) => (
      <>
        {item.firstName} {item.lastName}
      </>
    ),
  },
];

export const FIXED_HEADER_COLUMNS: (keyof CrmItem)[] = ['firstName', 'lastName'];
export const MOVABLE_HEADER_COLUMNS: HeaderColumnItemType<CrmItem>[] = [
  {
    value: 'firstName',
    hidden: false,
  },
  {
    value: 'lastName',
    hidden: false,
  },
  {
    value: 'email',
    hidden: true,
  },
  {
    value: 'phoneNumber',
    hidden: true,
  },
  {
    value: 'partners',
    hidden: true,
  },
  {
    value: 'manager',
    hidden: true,
  },
  {
    value: 'property',
    hidden: true,
  },
  {
    value: 'status',
    hidden: true,
  },
  {
    value: 'initials',
    hidden: true,
  },
  {
    value: 'gender',
    hidden: true,
  },
];

export const createActionTabsDict = (amounts: RelationsProps['amounts']): ActionTab[] => [
  {
    value: CrmStatus.ActionRequired,
    amount: amounts?.ActionRequired || 0,
    hasBadge: true,
    badgeColor: 'secondary',
    label: 'crm.status.action_required',
  },
  {
    value: CrmStatus.Active,
    amount: amounts?.Active || 0,
    label: 'crm.status.active',
  },
  {
    value: CrmStatus.Inactive,
    amount: amounts?.Inactive || 0,
    label: 'crm.status.inactive',
  },
];
