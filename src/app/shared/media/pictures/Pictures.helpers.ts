import {
  EntityWithFiles,
  NcpMediaDocument,
  ObjectTypeMediaDocument,
  PimMediaDocument,
  useUpdateNcpPictureMutation,
  useUpdateObjectTypePictureMutation,
  useUpdatePictureMutation,
} from 'api/types';
import { EntityType, useEntityType } from 'app/shared/entityType';

import { EditPictureForm } from './editPictureModal/EditPictureModal.types';

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

export const useUpdateImage = (parentId: string) => {
  const { entityType } = useEntityType();

  const [updatePicture] = useUpdatePictureMutation();
  const [updateNcpPicture] = useUpdateNcpPictureMutation();
  const [updateObjectTypePicture] = useUpdateObjectTypePictureMutation();

  const save = async ({ file, description, name, type, isMainPicture, id: pictureId }: EditPictureForm) => {
    try {
      if (!parentId) {
        throw new Error('No parentId defined');
      }

      const updatedPicture = {
        fileId: file?.id,
        id: pictureId,
        isMainPicture,
        description,
        name,
        type,
      };

      if (entityType === EntityType.Property || entityType === EntityType.LinkedProperty)
        await updatePicture({
          variables: {
            input: {
              ...updatedPicture,
              pimId: parentId,
            },
          },
          refetchQueries: [
            {
              query: PimMediaDocument,
              variables: { id: parentId },
            },
          ],
        });

      if (entityType === EntityType.Project)
        await updateNcpPicture({
          variables: {
            input: {
              ...updatedPicture,
              parentId,
            },
          },
          refetchQueries: [
            {
              query: NcpMediaDocument,
              variables: { id: parentId },
            },
          ],
        });

      if (entityType === EntityType.ObjectType)
        await updateObjectTypePicture({
          variables: {
            input: {
              ...updatedPicture,
              parentId,
            },
          },
          refetchQueries: [
            {
              query: ObjectTypeMediaDocument,
              variables: { id: parentId },
            },
          ],
        });

      return undefined;
    } catch (error) {
      return {
        error: true,
      };
    }
  };

  return { save };
};
