import React, { useCallback, useEffect, useState } from 'react';

import { useLocale } from 'hooks';
import { useStyles } from '../TriggerConditions.styles';
import { SideMenuItem } from 'ui/atoms';
import { ConditionSidenavProps, TriggerConditionsTypes } from '../TriggerConditions.types';
import { CheckIcon } from 'ui/atoms/icons';
import { SideMenu } from 'ui/molecules/sideMenu/SideMenu';

export const ConditionSideMenu = ({ conditions, onChange, selectedConditions }: ConditionSidenavProps) => {
  const classes = useStyles();
  const [value, setValue] = useState(0);
  const { formatMessage } = useLocale();

  const handleTabChange = useCallback(
    (index: number) => {
      setValue(index);
      onChange(index);
    },
    [onChange, setValue],
  );

  useEffect(() => {
    handleTabChange(value);
  }, [value, handleTabChange]);

  return (
    <SideMenu>
      {conditions.map((item: TriggerConditionsTypes, i) => {
        return (
          <SideMenuItem
            className={classes.conditionTab + ' pim-side-menu-item'}
            key={i}
            title={formatMessage({ id: `settings.workflow.trigger_condition.${item.key}.label` })}
            icon={selectedConditions && selectedConditions[item.key] && <CheckIcon />}
            selected={i === value}
            onClick={() => handleTabChange(i)}
          />
        );
      })}
    </SideMenu>
  );
};
