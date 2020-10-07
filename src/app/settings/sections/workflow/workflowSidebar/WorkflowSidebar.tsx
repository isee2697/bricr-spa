import React, { ChangeEvent, useState } from 'react';
import { Box, Collapse, Tab, Tabs, Typography } from 'ui/atoms';
import { useLocale } from 'hooks';
import { ArrowDownIcon, ArrowUpIcon } from 'ui/atoms/icons';
import { SimpleSearch } from 'ui/molecules';
import { WorkflowItemType } from '../Workflow.types';

import { WorkflowSidebarGroup, WorkflowSidebarProps } from './WorkflowSidebar.types';
import { useStyles } from './WorkflowSidebar.styles';
import { WorkflowSidebarItem } from './workflowSidebarItem/WorkflowSidebarItem';

export const WorkflowSidebar = ({ isFullScreen, actionsGroups, triggersGroups }: WorkflowSidebarProps) => {
  const classes = useStyles({ isFullScreen });
  const { formatMessage } = useLocale();
  const [isGroupOpen, setGroupOpen] = React.useState<Record<string, boolean>>({});
  const [value, setValue] = useState('');
  const [groups, setGroups] = useState<WorkflowSidebarGroup[]>(triggersGroups);
  const [filteredGroups, setFilteredGroups] = useState(triggersGroups);
  const [activeTab, setActiveTab] = useState<WorkflowItemType>(WorkflowItemType.TRIGGER);

  const handleChange = (v: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const currentValue = v.target.value;
    setValue(currentValue);

    filterProperties(currentValue);
  };

  const filterProperties = (currentValue: string) => {
    const results = groups.reduce<WorkflowSidebarGroup[]>((newGroups, group) => {
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

  const isGroupCollapseOpen = (group: WorkflowSidebarGroup) => {
    if (isGroupOpen[group.title] === undefined) {
      setGroupOpen(groups => ({
        ...groups,
        [group.title as string]: true,
      }));

      return true;
    }

    return isGroupOpen[group.title];
  };

  const handleTabChange = (tab: WorkflowItemType) => {
    setActiveTab(tab);
    setValue('');

    if (tab === WorkflowItemType.TRIGGER) {
      setGroups(triggersGroups);
      setFilteredGroups(triggersGroups);
    } else {
      setGroups(actionsGroups);
      setFilteredGroups(actionsGroups);
    }
  };

  return (
    <>
      <Tabs
        value={activeTab === WorkflowItemType.TRIGGER ? 0 : 1}
        indicatorColor="primary"
        textColor="primary"
        variant="fullWidth"
      >
        <Tab
          className={classes.root}
          label={formatMessage({ id: 'settings.workflow.triggers' })}
          onClick={() => handleTabChange(WorkflowItemType.TRIGGER)}
        />
        <Tab
          className={classes.root}
          label={formatMessage({ id: 'settings.workflow.actions' })}
          onClick={() => handleTabChange(WorkflowItemType.ACTION)}
        />
      </Tabs>
      <div className={classes.content}>
        <SimpleSearch
          onChange={v => handleChange(v)}
          value={value}
          placeholderId="settings.workflow.search_placeholder"
        />
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
                <WorkflowSidebarItem
                  type={activeTab}
                  item={item}
                  searchValue={value}
                  key={`${group.title}_item_${index}`}
                />
              ))}
            </Collapse>
          </Box>
        ))}
      </div>
    </>
  );
};
