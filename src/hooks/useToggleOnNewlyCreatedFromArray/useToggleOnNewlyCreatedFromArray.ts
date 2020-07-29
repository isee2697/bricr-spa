import { useEffect, useRef } from 'react';

export const useToggleOnNewlyCreatedFromArray = <T extends { id: string }>(
  array: Array<T> | null | undefined,
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
