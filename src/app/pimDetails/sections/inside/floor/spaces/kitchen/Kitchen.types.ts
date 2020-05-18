import { KitchenSpace } from 'api/types';

export type KitchenContainerProps = {
  spaceId: string;
  spaceName?: string | null;
  isEditMode?: boolean;
  index: number;
  className?: string;
  initialValues: KitchenSpace;
};

export type KitchenProps = Omit<KitchenContainerProps, 'initialValues'>;
