export type LinearProgressProps = {
  value: number;
  max?: number;
  className?: string;
  classes?: LinearProgressClasses;
};

export type LinearProgressClasses = {
  root?: string;
  bar?: string;
  colorPrimary?: string;
};
