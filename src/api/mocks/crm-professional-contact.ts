import { AdminSettings, FilePermission } from 'api/types';
import { LinkedBroker } from 'app/crmRelationsDetails/professionalContacts/brokers/Brokers.types';
import { LinkedNotary, LinkedNotaryItem } from 'app/crmRelationsDetails/professionalContacts/notary/Notary.types';

export const CRM_PROFESSIONAL_CONTACT_BROKER: LinkedBroker = {
  id: '0001',
  firstName: 'test',
  lastName: 'test',
  image: {
    url:
      'https://images.unsplash.com/photo-1476900966873-ab290e38e3f7?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=fe0976a79ece0ee8effca4cab4527ae2',
    key: 'testKey',
    id: 'imageId',
    fileName: 'userProfile',
    fileType: 'jpg',
    status: 1,
    permission: FilePermission.Public,
  },
  phoneNumbers: [
    {
      id: '0001',
      phoneNumber: '06-4876044',
    },
  ],
  email: 'test@example.com',
  isAccountmanager: true,
  isActive: true,
  isAdmin: true,
  functionDescription: 'Accountmanager',
  teams: [
    {
      id: '0001',
      name: 'Team Hendriks',
      createPermission: true,
      updatePermission: true,
      readPermission: true,
      deletePermission: true,
    },
    {
      id: '0002',
      name: 'Team CRM',
      createPermission: true,
      updatePermission: true,
      readPermission: true,
      deletePermission: true,
    },
    {
      id: '0003',
      name: 'Team Sales',
      createPermission: true,
      updatePermission: true,
      readPermission: true,
      deletePermission: true,
    },
  ],
  adminSettings: Object.values(AdminSettings),
  notes: 'Rights set for only 6 of 8 teams where user is member of',
};

export const CRM_PROFESSIONAL_CONTACT_NOTARY_ITEM: LinkedNotaryItem = {
  id: '0001',
  firstName: 'test',
  lastName: 'test',
  image: {
    url:
      'https://images.unsplash.com/photo-1476900966873-ab290e38e3f7?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=fe0976a79ece0ee8effca4cab4527ae2',
    key: 'testKey',
    id: 'imageId',
    fileName: 'userProfile',
    fileType: 'jpg',
    status: 1,
    permission: FilePermission.Public,
  },
  phoneNumbers: [
    {
      id: '0001',
      phoneNumber: '06-4876044',
    },
  ],
  email: 'test@example.com',
  isAccountmanager: true,
  isActive: true,
  isAdmin: true,
  functionDescription: 'Accountmanager',
  teams: [
    {
      id: '0001',
      name: 'Team Hendriks',
      createPermission: true,
      updatePermission: true,
      readPermission: true,
      deletePermission: true,
    },
    {
      id: '0002',
      name: 'Team CRM',
      createPermission: true,
      updatePermission: true,
      readPermission: true,
      deletePermission: true,
    },
    {
      id: '0003',
      name: 'Team Sales',
      createPermission: true,
      updatePermission: true,
      readPermission: true,
      deletePermission: true,
    },
  ],
  adminSettings: Object.values(AdminSettings),
  notes: 'Rights set for only 6 of 8 teams where user is member of',
};

export const CRM_PROFESSIONAL_CONTACT_NOTARY: LinkedNotary = {
  id: '0001',
  notary: {
    id: '0001',
    firstName: 'Notaris',
    lastName: 'Ronald',
    avatar: {
      url:
        'https://images.unsplash.com/photo-1476900966873-ab290e38e3f7?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=fe0976a79ece0ee8effca4cab4527ae2',
      key: 'testKey',
      id: 'imageId',
      fileName: 'userProfile',
      fileType: 'jpg',
      status: 1,
      permission: FilePermission.Public,
    },
    email: 'test@example.com',
    phoneNumber: '064876044',
  },
  items: [CRM_PROFESSIONAL_CONTACT_NOTARY_ITEM],
};
