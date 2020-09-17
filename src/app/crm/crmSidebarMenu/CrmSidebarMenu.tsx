import React from 'react';

import { SideMenu } from 'ui/molecules';
import { SideMenuItem } from 'ui/atoms';
import { CrmIcon } from 'ui/atoms/icons';
import { useLocale } from 'hooks/useLocale/useLocale';
import { CrmType } from '../Crm.types';

import { useStyles } from './CrmSidebarMenu.style';
import { CrmSidebarMenuProps } from './CrmSidebarMenu.types';

const types = [
  {
    name: CrmType.Relations,
    icon: <CrmIcon />,
  },
  {
    name: CrmType.Businesses,
    icon: <CrmIcon />,
  },
];

export const CrmSidebarMenu = ({ type, onTypeChange }: CrmSidebarMenuProps) => {
  const classes = useStyles();
  const { formatMessage } = useLocale();

  const handleTypeChange = (name: CrmType) => {
    onTypeChange(name);
  };

  return (
    <SideMenu className={classes.root}>
      {types.map(t => (
        <SideMenuItem
          key={t.name}
          icon={t.icon}
          title={formatMessage({ id: `crm.type.${t.name}` })}
          selected={type === t.name}
          onClick={() => handleTypeChange(t.name)}
        />
      ))}
    </SideMenu>
  );
};
