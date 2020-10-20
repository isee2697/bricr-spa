import { useState } from 'react';

import { WorkflowSection } from './workflowSection/WorkflowSection.types';
import { AddItemData, WorkflowItemType, Action } from './Workflow.types';

const getLastAction = (action: Action): Action => {
  if (!action.nextAction) {
    return action;
  }

  return getLastAction(action.nextAction);
};

export const useSections = (
  initValues: WorkflowSection[],
): [WorkflowSection[], (newSectionId: string, newTitle: string) => void, (data: AddItemData) => void] => {
  const [sections, setSections] = useState(initValues);

  const addSection = (newSectionId: string, newTitle: string) => {
    setSections(s => [...s, { id: newSectionId, title: newTitle }]);
  };

  const addItem = ({ item, type, parentId, sectionId }: AddItemData) => {
    const section = sections.find(({ id }) => id === sectionId);

    if (!section) {
      return;
    }

    if (type === WorkflowItemType.TRIGGER) {
      // Add trigger
      if (!section.triggers) section.triggers = [];
      section.triggers.push({
        ...item,
        newActions: { id: item.id + '-new' },
        updateActions: { id: item.id + '-update' },
        deleteActions: { id: item.id + '-delete' },
      });
    }

    if (type === WorkflowItemType.ACTION) {
      if (!section.triggers?.length) {
        return;
      }

      section.triggers.forEach(trigger => {
        if (trigger.newActions && trigger.newActions?.id === parentId) {
          // Right after if rule
          trigger.newActions.actions = [...(trigger.newActions.actions || []), item];
        } else if (trigger.updateActions && trigger.updateActions?.id === parentId) {
          // Right after update rule
          trigger.updateActions.actions = [...(trigger.updateActions.actions || []), item];
        } else if (trigger.deleteActions && trigger.deleteActions?.id === parentId) {
          // Right after delete rule
          trigger.deleteActions.actions = [...(trigger.deleteActions.actions || []), item];
        } else {
          // After action
          let action = trigger.newActions?.actions
            ?.map(action => getLastAction(action))
            .find(action => action.id === parentId);

          if (action) {
            action.nextAction = item;
          }

          action = trigger.updateActions?.actions
            ?.map(action => getLastAction(action))
            .find(action => action.id === parentId);

          if (action) {
            action.nextAction = item;
          }

          action = trigger.deleteActions?.actions
            ?.map(action => getLastAction(action))
            .find(action => action.id === parentId);

          if (action) {
            action.nextAction = item;
          }

          return;
        }
      });
    }

    setSections(sections => [...sections]);
  };

  return [sections, addSection, addItem];
};
