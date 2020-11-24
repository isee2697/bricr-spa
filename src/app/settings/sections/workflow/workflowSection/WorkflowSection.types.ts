import { Trigger, AddItemData } from '../Workflow.types';

export type StartPointType = 'start' | 'outside' | 'previous';

export type EndPointType = 'end' | 'outside' | 'next';

export type WorkflowSection = {
  id: string;
  title: string;
  triggers?: Trigger[];
  startpoint?: StartPointType;
  startpointOutside?: string;
  endpoint?: EndPointType;
  endpointOutside?: string;
};

export type WorkflowSectionProps = {
  section: WorkflowSection;
  expanded: boolean;
  onExpanded: VoidFunction;
  onAddItem: (data: AddItemData) => void;
  onSettings: VoidFunction;
};
