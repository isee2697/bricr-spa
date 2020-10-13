import {
  BathroomSpace,
  BedroomSpace,
  Floor,
  HomeOfficeSpace,
  KitchenSpace,
  KitchenType,
  LivingRoomSpace,
  OtherSpace,
} from 'api/types';

export type GroundfloorSpacesProps = {
  className?: string;
  floor: Floor;
};

export type KitchenProps = {
  space: KitchenSpace & {
    kitchenType: KitchenType;
  };
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
