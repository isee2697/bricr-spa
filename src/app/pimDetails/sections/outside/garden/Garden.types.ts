import { OutsideFeature } from 'api/types';

export type GardenContainerProps = {
  feature: OutsideFeature;
};

export type GardenProps = GardenContainerProps & {
  onSave: (values: unknown) => Promise<{ error: boolean } | undefined>;
  id: string;
};
