import { AdminSettings, FilePermission, Profile } from 'api/types';

export const MAIN_USER: Profile = {
  id: 'test',
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
  email: 'test@example.com',
  isActive: true,
  isAdmin: false,
  adminSettings: Object.values(AdminSettings),
};
