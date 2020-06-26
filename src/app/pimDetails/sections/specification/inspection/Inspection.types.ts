import { Inspection, Profile } from 'api/types';

export type InspectionProps = {
  inspections: Inspection[];
  onSave(values: unknown): Promise<undefined | { error: boolean }>;
  dateUpdated?: string | null;
  updatedBy?: Profile | null;
};
