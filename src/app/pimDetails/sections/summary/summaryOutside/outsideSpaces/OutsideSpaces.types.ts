import {
  GarageFeature,
  GardenFeature,
  OutsideFeature,
  ParkingLotFeature,
  StorageFeature,
  TerrainFeature,
} from 'api/types';

export type OutsideSpacesProps = {
  outsideFeatures: OutsideFeature[];
};

export type GardenProps = {
  configuration: GardenFeature;
};

export type GarageProps = {
  configuration: GarageFeature;
};

export type StorageProps = {
  configuration: StorageFeature;
};

export type TerrainProps = {
  configuration: TerrainFeature;
};

export type ParkingLotProps = {
  configuration: ParkingLotFeature;
};
