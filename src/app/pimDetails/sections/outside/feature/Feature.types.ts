import { OutsideFeature, OutsideFeatureType } from 'api/types';

export type FeatureContainerProps = {
  feature: OutsideFeature;
};

export type FeatureProps = {
  id: string;
  featureType: OutsideFeatureType;
};

export type FeatureFormProps = {
  id: string;
  inEditMode: boolean;
};

export type AliasedFeatureConfiguration = {
  garageTypes: string;
  garageInsulations: string;
  garageServices: string;
  storageTypes: string;
  storageInsulations: string;
  storageServices: string;
};
