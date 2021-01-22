import React, { ChangeEvent, useState } from 'react';

import { Box, Collapse, Tab, Tabs, Typography } from 'ui/atoms';
import { useLocale } from 'hooks';
import { ArrowDownIcon, ArrowUpIcon } from 'ui/atoms/icons';
import { SimpleSearch } from 'ui/molecules';
import { DatasourceSidebarItem } from '../datasourceSidebarItem/DatasourceSidebarItem';

import { DatasourceGroup, DatasourceSidebarProps, DatasourceTabType } from './DatasourceSidebar.types';
import { useStyles } from './DatasourceSidebar.styles';

export const DatasourceSidebar = ({ sourceGroups }: DatasourceSidebarProps) => {
  const classes = useStyles();
  const { formatMessage } = useLocale();
  const [isGroupOpen, setGroupOpen] = React.useState<Record<string, boolean>>({});
  const [value, setValue] = useState('');
  const [groups] = useState<DatasourceGroup[]>(sourceGroups);
  const [filteredGroups, setFilteredGroups] = useState(sourceGroups);
  const [activeTab, setActiveTab] = useState<DatasourceTabType>(DatasourceTabType.DATASOURCE);

  const handleChange = (v: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const currentValue = v.target.value;
    setValue(currentValue);

    filterProperties(currentValue);
  };

  const filterProperties = (currentValue: string) => {
    const results = groups.reduce<DatasourceGroup[]>((newGroups, group) => {
      const filteredItems = group.items.filter(
        item => item.title.toLocaleLowerCase().includes(currentValue.toLocaleLowerCase()) ?? true,
      );

      if (filteredItems.length > 0) {
        return [...newGroups, { ...group, items: filteredItems }];
      } else {
        return newGroups;
      }
    }, []);

    setFilteredGroups(results);
  };

  const isGroupCollapseOpen = (group: DatasourceGroup) => {
    if (isGroupOpen[group.title] === undefined) {
      setGroupOpen(groups => ({
        ...groups,
        [group.title as string]: true,
      }));

      return true;
    }

    return isGroupOpen[group.title];
  };

  const handleTabChange = (tab: DatasourceTabType) => {
    setActiveTab(tab);
    setValue('');
  };

  return (
    <>
      <Tabs
        value={activeTab === DatasourceTabType.DATASOURCE ? 0 : 1}
        indicatorColor="primary"
        textColor="primary"
        variant="fullWidth"
      >
        <Tab
          className={classes.root}
          label={formatMessage({ id: 'insights.chart_details.datasource' })}
          onClick={() => handleTabChange(DatasourceTabType.DATASOURCE)}
        />
      </Tabs>
      <div className={classes.content}>
        <SimpleSearch onChange={v => handleChange(v)} value={value} placeholderId="common.search" />
        {filteredGroups.map((group, index) => (
          <Box className={classes.groupsContainer} key={`${activeTab}_group_${index}`}>
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
              {group.items.map((item, index) => (
                <DatasourceSidebarItem item={item} searchValue={value} key={`${group.title}_item_${index}`} />
              ))}
            </Collapse>
          </Box>
        ))}
      </div>
    </>
  );
};
