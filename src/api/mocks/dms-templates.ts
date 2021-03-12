import { SecurityData } from 'app/shared/dms/security/Security.types';

export const DMS_TEMPLATE_RIGHTS: SecurityData = {
  documentRights: [
    {
      id: '0001',
      name: 'Match',
      permissions: {
        create: false,
        read: true,
        update: false,
        delete: true,
      },
    },
  ],
};
