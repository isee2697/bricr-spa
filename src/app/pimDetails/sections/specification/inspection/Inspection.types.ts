import { Inspection, LastUpdatedProfile } from 'api/types';

export type InspectionProps = {
  inspections: Inspection[];
  onSave(values: unknown): Promise<undefined | { error: boolean }>;
  dateUpdated?: string | null;
  updatedBy?: LastUpdatedProfile | null;
  onDescriptionUpdate(values: unknown): Promise<undefined | { error: boolean }>;
  description: string;
};
