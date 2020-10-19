import React, { useState } from 'react';

import { useLocale } from 'hooks';
import { Grid } from 'ui/atoms';
import { useStyles } from '../TriggerConditions.styles';
import { ConditionTabPanelProps } from '../TriggerConditions.types';
import { SimpleSearch } from 'ui/molecules/simpleSearch/SimpleSearch';

export const ConditionTabPanel = ({ children, activeTab, id, conditionType }: ConditionTabPanelProps) => {
  const classes = useStyles();
  const { formatMessage } = useLocale();
  const [search, updateSearch] = useState('');

  const handleDeleteCondition = async () => {};

  const handleLinkedSelector = async () => {};

  return (
    <div role="tabpanel" hidden={activeTab !== id} id={`simple-tabpanel-${id}`} aria-labelledby={`simple-tab-${id}`}>
      <Grid container className={classes.tabContentHeader} justify="space-between">
        <span className="linked_selector" onClick={handleLinkedSelector}>
          {formatMessage({
            id: 'settings.workflow.trigger_condition.check_criteria',
          })}
        </span>
        <span className="delete_condition" onClick={handleDeleteCondition}>
          {formatMessage({
            id: 'settings.workflow.trigger_condition.clear_condition',
          })}
        </span>
      </Grid>

      {conditionType === 'checkbox' && (
        <Grid item className={classes.tabSearchWrapper}>
          <SimpleSearch
            value={search}
            onChange={e => {
              updateSearch(e.target.value);
            }}
          />
        </Grid>
      )}
      {activeTab === id && children}
    </div>
  );
};
