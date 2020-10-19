import React from 'react';

import { SideMenu } from 'ui/molecules';
import { Slide, Grid, SideMenuItem, SidebarHideButton } from 'ui/atoms';
import { useLocale } from 'hooks/useLocale/useLocale';
import { CrmIcon } from 'ui/atoms/icons';

import { useStyles } from './SidebarMenu.styles';
import { SidebarMenuProps } from './SidebarMenu.types';

// const types = [
//   {
//     name: CrmType.Relations,
//     icon: <CrmIcon />,
//   },
//   {
//     name: CrmType.Businesses,
//     icon: <CrmIcon />,
//   },
// ];

export const SidebarMenu = ({ isVisible, onHide }: SidebarMenuProps) => {
  const classes = useStyles();
  const { formatMessage } = useLocale();

  // const handleTypeChange = (name: CrmType) => {
  //   onTypeChange(name);
  // };

  return (
    <Slide unmountOnExit mountOnEnter in={isVisible} direction="right">
      <Grid item xs={12} md={3} lg={2}>
        <div className={classes.root}>
          <div className={classes.hideButton} onClick={onHide}>
            <SidebarHideButton />
          </div>
          <div className={classes.menuWrapper}>
            <SideMenu className={classes.sideMenu}>
              menu
              {/*{types.map(t => (*/}
              {/*  <SideMenuItem*/}
              {/*    key={t.name}*/}
              {/*    icon={t.icon}*/}
              {/*    title={formatMessage({ id: `crm.menu.${t.name}` })}*/}
              {/*    selected={type === t.name}*/}
              {/*    onClick={() => handleTypeChange(t.name)}*/}
              {/*  />*/}
              {/*))}*/}
            </SideMenu>
          </div>
        </div>
      </Grid>
    </Slide>
  );
};
