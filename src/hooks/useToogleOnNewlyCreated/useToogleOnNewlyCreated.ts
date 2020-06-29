import { useEffect, useRef } from 'react';

import { CadastreMap, Cost, Reading } from 'api/types';

export const useToogleOnNewlyCreated = (
  array: Array<CadastreMap | Cost | Reading> | null | undefined,
  setToggled: React.Dispatch<React.SetStateAction<string | undefined>>,
) => {
  const isInitialMount = useRef(true);

  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;

      return;
    }

    if (array?.length) {
      setToggled(array[array.length - 1].id);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [array?.length]);

  return;
};
