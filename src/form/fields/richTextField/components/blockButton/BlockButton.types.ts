import { ElementTypes } from '../element/Element.types';

export type BlockButtonProps = {
  format: Exclude<ElementTypes, ElementTypes.LIST_ITEM | ElementTypes.PARAGRAPH>;
};
