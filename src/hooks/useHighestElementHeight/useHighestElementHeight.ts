import { useEffect, useState } from 'react';

import { useHighestElementHeightArguments } from './useHighestElementHeight.types';

export const useHighestElementHeight = ({ containerRef, options, minHeight = 0 }: useHighestElementHeightArguments) => {
  const [height, setHeight] = useState<number>(minHeight);

  useEffect(() => {
    const elementsHeights = Array.from(containerRef?.current?.children || []).map(
      (htmlElement: Element) => htmlElement.clientHeight,
    );
    const biggestTileHeight = !!elementsHeights.length ? Math.max(...elementsHeights) : minHeight;

    setHeight(biggestTileHeight);
  }, [containerRef, minHeight, options]);

  return height;
};
