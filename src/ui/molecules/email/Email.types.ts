export type EmailProps = {
  name: string;
  avatar: string;
  title: string;
  children: string;
  date: Date;
  open: boolean;
  onClick: (id: string) => void;
  id: string;
};
