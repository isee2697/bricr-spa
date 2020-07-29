import { useReducer, useEffect, Reducer } from 'react';

import { SelectState, SelectAction } from './useSelect.types';

export const useSelect = <T>(items: T[], itemIndex: keyof T, disabled?: boolean) => {
  const [checkedKeys, dispatch] = useReducer<Reducer<SelectState, SelectAction>>((state, action) => {
    switch (action.type) {
      case 'TOGGLE':
        if (!action.key) {
          return state;
        }

        return state.includes(action.key) ? state.filter(key => key !== action.key) : [...state, action.key];

      case 'TOGGLE_ALL':
        if (state.length === items.length) {
          return [];
        }

        return items.map(item => `${item[itemIndex]}`);

      case 'CLEAR_ALL':
        return !!state.length ? [] : state;

      default:
        return state;
    }
  }, []);

  useEffect(() => {
    if (disabled) {
      dispatch({ type: 'CLEAR_ALL' });
    }
  }, [disabled]);

  return {
    checkedKeys,
    checkAllStatus: {
      indeterminate: !!checkedKeys.length && checkedKeys.length < items.length,
      checked: !!checkedKeys.length,
    },
    handleCheck(key: string) {
      dispatch({ type: 'TOGGLE', key });
    },
    handleCheckAll() {
      dispatch({ type: 'TOGGLE_ALL' });
    },
  };
};
