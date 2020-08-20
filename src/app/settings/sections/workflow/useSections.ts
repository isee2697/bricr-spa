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
      section.trigger = { ...item, actions: [] };
    }

    if (type === WorkflowItemType.ACTION) {
      if (!section.trigger) {
        return;
      }

      if (section.trigger.id === parentId) {
        section.trigger.actions = [...section.trigger.actions, item];
      } else {
        const action = section.trigger.actions
          .map(action => getLastAction(action))
          .find(action => action.id === parentId);

        if (!action) {
          return;
        }

        action.nextAction = item;
      }
    }

    setSections(sections => [...sections]);
  };

  return [sections, addSection, addItem];
};
