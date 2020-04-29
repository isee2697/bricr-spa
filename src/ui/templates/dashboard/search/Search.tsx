import React, { useState, useEffect } from 'react';

import { Search as BaseSearch } from 'ui/molecules';
import { useOverlayDispatch } from 'hooks/useOverlayDispatch/useOverlayDispatch';

export const Search = () => {
  const [hasFocus, setFocus] = useState(false);
  const setOverlay = useOverlayDispatch();

  useEffect(() => {
    setOverlay(hasFocus);
  }, [hasFocus, setOverlay]);

  return (
    <BaseSearch
      hasFocus={hasFocus}
      setFocus={setFocus}
      options={[
        { title: 'Stationstraat 25, Amsterdam', type: 'Property' },
        { title: 'The Software House', type: 'Email', subline: 'Marcin Piela', date: new Date() },
        { title: 'CubicEyes', type: 'Email', subline: 'Christian van Gils', date: new Date() },
        { title: 'Amsterdam bezichtiging inpannen', type: 'Note', date: new Date() },
        { title: 'Amsterdam bezichtiging inpannen 2', type: 'Note', date: new Date() },
        { title: 'Amsterdam bezichtiging inpannen 2', type: 'Note', date: new Date() },
      ]}
    />
  );
};
