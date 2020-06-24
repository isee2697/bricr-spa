import { Inspection } from 'api/types';

export type InspectionProps = {
  inspections: Inspection[];
  onSave(values: unknown): Promise<undefined | { error: boolean }>;
};
