import { File, FilePermission, EntityWithFiles } from 'api/types';

export const FILE_1: File = {
  id: 'Q46l-tdgdf-4356fhf',
  fileName: 'myFile.png',
  description: 'file description',
  status: 1,
  fileType: 'image/png',
  permission: FilePermission.Public,
  key: 'sfsdfg-435dfggfd-gdfgdfg',
  createdAt: new Date().toISOString(),
  signedUrl: process.env.REACT_APP_FILE_URL + '/upload',
  url: 'https://picsum.photos/200/300',
  bucket: 'MyS3Bucket',
  entityID: 'MyENtityId',
  entity: EntityWithFiles.CadastreMap,
};
