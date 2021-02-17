export type StepsBarProps = {
  steps: { name: string; optional: string }[];
  step: number;
  onNavigateStep: (step: number) => void;
};
