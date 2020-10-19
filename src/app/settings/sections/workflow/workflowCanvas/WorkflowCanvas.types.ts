import { Trigger, AddItemData } from '../Workflow.types';

export type Point = {
  x: number;
  y: number;
};

export type WorkflowCanvasProps = {
  triggers?: Trigger[];
  onAddItem: (data: Pick<AddItemData, 'item' | 'type' | 'parentId'>) => void;
};
