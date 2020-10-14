import React from 'react';

import { BuildingIcon, FilesIcon, FilterIcon, GraphIcon, HelpIcon, LockIcon, PinIcon } from 'ui/atoms/icons';
import { MenuItem } from 'ui/molecules/sidebarMenu/SidebarMenu.types';

export const generalItem: MenuItem = {
  key: 'general',
  icon: <BuildingIcon />,
  subItems: [
    {
      id: 'location',
      label: 'pim_details.general.location.title',
    },
  ],
};

export const insideItem: MenuItem = {
  key: 'inside',
  icon: <FilesIcon />,
};

export const outsideItem: MenuItem = {
  key: 'outside',
  icon: <LockIcon />,
};

export const cadastreItem: MenuItem = {
  key: 'cadastre',
  icon: <FilterIcon />,
};

export const servicesItem: MenuItem = {
  key: 'services',
  icon: <HelpIcon />,
};

export const metersItem: MenuItem = {
  key: 'meters',
  icon: <HelpIcon />,
};

export const specificationItem: MenuItem = {
  key: 'specification',
  subItems: [
    {
      id: 'advanced',
      label: 'pim_details.specification.advanced.title',
    },
    {
      id: 'linked-property',
      label: 'pim_details.specification.linked_properties.title',
    },
    {
      id: 'inspection',
      label: 'pim_details.specification.inspection.title',
    },
  ],
  icon: <PinIcon />,
};

export const mediaItem: MenuItem = {
  key: 'media',
  icon: <GraphIcon />,
};

export const commercialSpacesItem: MenuItem = {
  key: 'commercialspaces',
  icon: <LockIcon />,
};

export const installationsItem: MenuItem = {
  key: 'installations',
  icon: <LockIcon />,
};

export const groundItem: MenuItem = {
  key: 'ground',
  icon: <HelpIcon />,
};

export const animalsItem: MenuItem = {
  key: 'animals',
  icon: <HelpIcon />,
};

export const buildingsItem: MenuItem = {
  key: 'buildings',
  icon: <HelpIcon />,
};
