import { ReactElement } from 'react';
import { EntityType } from 'app/shared/entityType';

export type SidebarTitleTileProps = {
  title: string | undefined;
  subtitle?: string;
  category?: EntityType | SidebarTileCategory;
  icon: ReactElement;
  prevPage?: string;
  prevPageicon?: ReactElement;
};

export enum SidebarTileCategory {
  OTHER = 'Other',
}
