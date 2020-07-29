import { OutsideFeature } from 'api/types';

export type FeatureContainerProps = {
  features: OutsideFeature[];
};

export type FeatureProps = {
  feature: OutsideFeature;
  count?: number;
  onDimensionChange: (field: string) => void;
};

export type FeatureFormProps = {
  id: string;
  inEditMode: boolean;
  onDimensionChange: (field: string) => void;
};

export type AliasedFeatureConfiguration = {
  garageTypes: string;
  garageInsulations: string;
  garageServices: string;
  storageTypes: string;
  storageInsulations: string;
  storageServices: string;
};
