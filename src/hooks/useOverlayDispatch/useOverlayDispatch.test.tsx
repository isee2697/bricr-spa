import React, { ReactNode } from 'react';
import { renderHook } from '@testing-library/react-hooks';

import { OverlayDispatchContext } from 'context/overlay/overlayContext/OverlayContext';

import { useOverlayDispatch } from './useOverlayDispatch';

describe('useOverlayDispatch', () => {
  const dispatch = jest.fn();

  const wrapper = ({ children }: { children?: ReactNode }) => (
    <OverlayDispatchContext.Provider value={dispatch}>{children}</OverlayDispatchContext.Provider>
  );

  test('returns overlayDispatchContext value', async () => {
    const { result } = renderHook(() => useOverlayDispatch(), {
      wrapper,
    });

    expect(result.current).toEqual(dispatch);
  });

  test('throws error when used outside OverlayContextController', async () => {
    const { result } = renderHook(() => useOverlayDispatch());

    expect(result.error).toEqual(Error('useOverlayDispatch must be used within an OverlayContextController'));
  });
});
