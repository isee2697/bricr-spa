import { EntityWithFiles } from 'api/types';
import { EntityType } from 'app/shared/entityType';

export const getEntityFilesType = (entityType: EntityType) => {
  switch (entityType) {
    case EntityType.Property:
    case EntityType.LinkedProperty:
      return EntityWithFiles.MediaPicture;
    case EntityType.Project:
      return EntityWithFiles.NcpMediaPicture;
    case EntityType.ObjectType:
      return EntityWithFiles.ObjectTypeMediaPicture;
    default:
      throw new Error('There is no such EntityType');
  }
};
