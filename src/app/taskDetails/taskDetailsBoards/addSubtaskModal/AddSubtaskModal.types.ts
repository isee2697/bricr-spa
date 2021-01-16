import { PromiseFunction } from 'app/shared/types';

export type AddSubtaskBody = {
  title: string;
};

export type AddSubtaskModalProps = {
  onAddSubtask: PromiseFunction<AddSubtaskBody>;
};
