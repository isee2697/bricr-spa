import React, { ReactNode } from 'react';
import { renderHook } from '@testing-library/react-hooks';

import { OverlayStateContext } from 'context/overlay/overlayContext/OverlayContext';

import { useOverlayState } from './useOverlayState';

describe('useOverlayState', () => {
  const wrapper = ({ children }: { children?: ReactNode }) => (
    <OverlayStateContext.Provider value={false}>{children}</OverlayStateContext.Provider>
  );

  test('returns overlayStateContext value', async () => {
    const { result } = renderHook(() => useOverlayState(), {
      wrapper,
    });

    expect(result.current).toEqual(false);
  });

  test('throws error when used outside OverlayContextController', async () => {
    const { result } = renderHook(() => useOverlayState());

    expect(result.error).toEqual(Error('useOverlayState must be used within an OverlayContextController'));
  });
});
