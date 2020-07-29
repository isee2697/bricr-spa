import { RefObject } from 'react';

export type useHighestElementHeightArguments = {
  containerRef: RefObject<ParentNode>;
  options: unknown[];
  minHeight?: number;
};
