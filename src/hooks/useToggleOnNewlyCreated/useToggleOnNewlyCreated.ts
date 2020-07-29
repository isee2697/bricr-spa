import React, { useEffect } from 'react';

export const useToggleOnNewlyCreated = (
  id: string | undefined,
  setToggle: React.Dispatch<React.SetStateAction<string | undefined>>,
) => {
  useEffect(() => {
    if (id) {
      setToggle(id);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);
};
