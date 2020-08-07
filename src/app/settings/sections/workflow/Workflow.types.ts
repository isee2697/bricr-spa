import { ReactNode } from 'react';

export type WorkflowProps = {
  onToggleFullScreen: (isFullScreen: boolean) => void;
  name: string;
  icon: ReactNode;
};
