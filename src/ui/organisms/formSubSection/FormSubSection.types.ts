export type FormSubSectionProps = {
  title: string;
  children: React.ReactNode;
  onOptionsClick: VoidFunction;
  counter?: number;
  initiallyOpened?: boolean;
};
