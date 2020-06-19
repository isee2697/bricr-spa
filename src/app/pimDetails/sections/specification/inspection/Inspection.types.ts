import { Inspection } from 'api/types';

export type InspectionContainerProps = {
  onAddCustomType: VoidFunction;
};

export type InspectionProps = InspectionContainerProps & {
  inspections: Inspection[];
  onSave(values: unknown): Promise<undefined | { error: boolean }>;
};
