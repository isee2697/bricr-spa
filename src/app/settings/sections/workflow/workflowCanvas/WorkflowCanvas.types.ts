import { Trigger, AddItemData } from '../Workflow.types';

export type Point = {
  x: number;
  y: number;
};

export type WorkflowCanvasProps = {
  trigger?: Trigger;
  onAddItem: (data: Pick<AddItemData, 'item' | 'type' | 'parentId'>) => void;
};
