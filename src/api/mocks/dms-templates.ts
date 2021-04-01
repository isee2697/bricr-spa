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
    {
      id: '0002',
      name: 'Interest',
      permissions: {
        create: false,
        read: true,
        update: false,
        delete: true,
      },
    },
    {
      id: '0003',
      name: 'Viewing',
      permissions: {
        create: false,
        read: true,
        update: false,
        delete: true,
      },
    },
    {
      id: '0004',
      name: 'Candidate',
      permissions: {
        create: false,
        read: true,
        update: false,
        delete: true,
      },
    },
    {
      id: '0005',
      name: 'Bidding',
      permissions: {
        create: false,
        read: true,
        update: false,
        delete: true,
      },
    },
    {
      id: '0006',
      name: 'Optant',
      permissions: {
        create: false,
        read: true,
        update: false,
        delete: true,
      },
    },
    {
      id: '0007',
      name: 'Buyer',
      permissions: {
        create: false,
        read: true,
        update: false,
        delete: true,
      },
    },
    {
      id: '0008',
      name: 'Tenant',
      permissions: {
        create: false,
        read: true,
        update: false,
        delete: true,
      },
    },
    {
      id: '0009',
      name: 'Owner',
      permissions: {
        create: false,
        read: true,
        update: false,
        delete: true,
      },
    },
    {
      id: '00010',
      name: 'Broker',
      permissions: {
        create: false,
        read: true,
        update: false,
        delete: true,
      },
    },
    {
      id: '00011',
      name: 'Notary',
      permissions: {
        create: false,
        read: true,
        update: false,
        delete: true,
      },
    },
    {
      id: '00012',
      name: 'Appraiser',
      permissions: {
        create: false,
        read: true,
        update: false,
        delete: true,
      },
    },
    {
      id: '00013',
      name: 'Purchase broker',
      permissions: {
        create: false,
        read: true,
        update: false,
        delete: true,
      },
    },
  ],
};
