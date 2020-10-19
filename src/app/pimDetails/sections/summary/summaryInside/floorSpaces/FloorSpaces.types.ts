import {
  BathroomSpace,
  BedroomSpace,
  FloorType,
  HomeOfficeSpace,
  KitchenSpace,
  LivingRoomSpace,
  OtherSpace,
  Space,
} from 'api/types';

export type FloorSpacesProps = {
  floorIndex: number;
  floorType: FloorType;
  spaces: Space[];
};

export type KitchenProps = {
  space: KitchenSpace;
};

export type BathroomProps = {
  space: BathroomSpace;
};

export type LivingRoomProps = {
  space: LivingRoomSpace;
};

export type BedroomProps = {
  space: BedroomSpace;
};

export type HomeOfficeProps = {
  space: HomeOfficeSpace;
};

export type OtherProps = {
  space: OtherSpace;
};
