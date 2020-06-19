import { InspectionType, Inspection } from 'api/types';

export type InspectionTypeProps = {
  type: InspectionType;
  emoji: string;
  onSave(values: unknown): Promise<undefined | { error: boolean }>;
  onAddCustomType: VoidFunction;
  inspections: Inspection[];
};
