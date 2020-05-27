import { OutsideFeature } from 'api/types';

export type GardenProps = {
  onSave: (values: unknown) => Promise<{ error: boolean } | undefined>;
  feature: OutsideFeature;
};
