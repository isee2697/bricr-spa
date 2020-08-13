import { Trigger } from '../Workflow.types';

export type Point = {
  x: number;
  y: number;
};

export type WorkflowCanvasProps = {
  trigger?: Trigger;
};
