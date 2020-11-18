import React, { ChangeEvent, useState } from 'react';

import { Box, Collapse, Grid, Tab, Tabs, Typography } from 'ui/atoms';
import { useLocale } from 'hooks';
import { SimpleSearch } from 'ui/molecules';
import { ArrowDownIcon, ArrowUpIcon } from 'ui/atoms/icons';

import { useStyles } from './Sidebar.styles';
import { ContractTemplatesDetailsSidebarGroup, ContractTemplatesDetailsSidebarProps } from './Sidebar.types';
import { ContractTemplatesDetailsSidebarItem } from './sidebarItem/SidebarItem';

export const ContractTemplatesDetailsSidebar = ({ fieldsGroups }: ContractTemplatesDetailsSidebarProps) => {
  const { formatMessage } = useLocale();
  const classes = useStyles();
  const [value, setValue] = useState('');
  const [isGroupOpen, setGroupOpen] = React.useState<Record<string, boolean>>({});
  const [filteredGroups, setFilteredGroups] = useState<ContractTemplatesDetailsSidebarGroup[]>(fieldsGroups);

  const handleChange = (v: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const currentValue = v.target.value;
    setValue(currentValue);

    filterProperties(currentValue);
  };

  const filterProperties = (currentValue: string) => {
    const results = fieldsGroups.reduce<ContractTemplatesDetailsSidebarGroup[]>((newGroups, group) => {
      const filteredItems = group.items.filter(
        item =>
          formatMessage({ id: `dictionaries.contract_templates_details.${item.value}` })
            .toLocaleLowerCase()
            .includes(currentValue.toLocaleLowerCase()) ?? true,
      );

      if (filteredItems.length > 0) {
        return [...newGroups, { ...group, items: filteredItems }];
      } else {
        return newGroups;
      }
    }, []);

    setFilteredGroups(results);
  };

  const isGroupCollapseOpen = (group: ContractTemplatesDetailsSidebarGroup) => {
    if (isGroupOpen[group.title] === undefined) {
      setGroupOpen(groups => ({
        ...groups,
        [group.title as string]: true,
      }));

      return true;
    }

    return isGroupOpen[group.title];
  };

  return (
    <Box className={classes.root}>
      <Tabs value={0} indicatorColor="primary" textColor="primary">
        <Tab className={classes.tab} label={formatMessage({ id: 'settings.contract_templates_details.fields' })} />
      </Tabs>
      <div className={classes.content}>
        <SimpleSearch
          onChange={v => handleChange(v)}
          value={value}
          placeholderId="settings.contract_templates_details.search_placeholder"
        />
        {filteredGroups.map((group, index) => (
          <Box className={classes.groupsContainer} key={index}>
            <Box
              onClick={() =>
                setGroupOpen(groups => ({
                  ...groups,
                  [group.title as string]: !groups[group.title as string],
                }))
              }
              className={classes.collapseHeader}
            >
              <Typography className={classes.collapseTitle}>{group.title}</Typography>
              {isGroupCollapseOpen(group) ? <ArrowUpIcon /> : <ArrowDownIcon />}
            </Box>

            <Collapse in={isGroupCollapseOpen(group)} timeout="auto" unmountOnExit className={classes.collapseContent}>
              <Grid container alignItems="center" justify="flex-start">
                {group.items.map((item, index) => (
                  <Grid item xs={6}>
                    <ContractTemplatesDetailsSidebarItem key={index} item={item} searchValue={value} />
                  </Grid>
                ))}
              </Grid>
            </Collapse>
          </Box>
        ))}
      </div>
    </Box>
  );
};
