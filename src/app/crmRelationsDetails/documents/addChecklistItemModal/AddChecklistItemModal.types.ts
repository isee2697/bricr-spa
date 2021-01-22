import { PromiseFunction } from 'app/shared/types';
import { AddNewChedklistItemBody } from '../checklistList/ChecklistList.types';

export type AddChecklistItemModalProps = {
  onAddNewChecklistItem: PromiseFunction<AddNewChedklistItemBody>;
};
