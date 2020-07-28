export type AccountManagerProps = {
  inEditMode: boolean;
  account: {
    name: string;
    office: string[];
    phone: string;
    email: string;
    image: {
      url: string;
    };
  };
  onEdit: VoidFunction;
};
