export type ConfirmInviteProps = {
  onSubmit: (data: ConfirmInviteData) => void;
  error?: string;
};

export type ConfirmInviteData = {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
};
