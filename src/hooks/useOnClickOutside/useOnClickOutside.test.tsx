import React, { useRef, RefObject } from 'react';
import { renderHook } from '@testing-library/react-hooks';

import { act, fireEvent, render, wait } from 'tests';

import { useOnClickOutside } from './useOnClickOutside';

describe('useOnClickOutside test', () => {
  it('fires function on click outside ref element', async () => {
    const onClickOutsideFunction = jest.fn();

    const CustomComponent = () => {
      const ref = useRef(null);

      useOnClickOutside(ref, () => {
        onClickOutsideFunction();
      });

      return (
        <div>
          <div>Outside</div>
          <div ref={ref}>Inside</div>
        </div>
      );
    };

    const { getByText } = render(<CustomComponent />);

    await wait(() => getByText('Inside'));

    act(() => {
      fireEvent.mouseDown(getByText('Inside'));
    });

    expect(onClickOutsideFunction).not.toHaveBeenCalled();

    act(() => {
      fireEvent.mouseDown(getByText('Outside'));
    });

    expect(onClickOutsideFunction).toHaveBeenCalled();
  });

  it('does nothing when ref is empty or handle is empty', () => {
    renderHook(() => {
      useOnClickOutside((null as unknown) as RefObject<HTMLDivElement>, null);
    });

    renderHook(() => {
      useOnClickOutside((null as unknown) as RefObject<HTMLDivElement>, () => null);
    });
  });
});
