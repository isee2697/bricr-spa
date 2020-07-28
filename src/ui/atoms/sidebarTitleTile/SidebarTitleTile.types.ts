import { ReactElement } from 'react';

import { EntityType } from 'app/shared/entityType';

export type SidebarTitleTileProps = {
  title: string | undefined;
  subtitle: string;
  category?: EntityType.Project | EntityType.ObjectType | EntityType.Property;
  icon: ReactElement;
  prevPage?: string;
  prevPageicon?: ReactElement;
};
