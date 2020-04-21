import { AuthStateContextType } from '../authContext/AuthContext.types';
import { Me } from 'api/types';

import { authReducer, LOGOUT, SET_AUTHORIZED, SET_TOKENS, SET_UNAUTHORIZED, START_AUTHORIZING } from './authReducer';

function AuthStateFactory(state: Partial<AuthStateContextType> = {}): AuthStateContextType {
  return {
    accessToken: null,
    refreshToken: null,
    isAuthorizing: false,
    isAuthorized: false,
    ...state,
  };
}

describe('authReducer', () => {
  test('handles START_AUTHORIZING action', () => {
    const state = AuthStateFactory();
    const action = {
      type: START_AUTHORIZING,
    };

    expect(authReducer(state, action)).toEqual({
      accessToken: null,
      refreshToken: null,
      isAuthorizing: true,
      isAuthorized: false,
    });
  });

  test('handles SET_AUTHORIZED action', () => {
    const state = AuthStateFactory({
      isAuthorizing: true,
    });
    const action = {
      type: SET_AUTHORIZED,
      user: ({ foo: 'bar' } as unknown) as Me,
    };

    expect(authReducer(state, action)).toEqual({
      accessToken: null,
      refreshToken: null,
      isAuthorizing: false,
      isAuthorized: true,
      user: {
        foo: 'bar',
      },
    });
  });

  test('handles SET_UNAUTHORIZED action', () => {
    const state = AuthStateFactory({
      isAuthorized: true,
      user: ({ foo: 'bar' } as unknown) as Me,
    });
    const action = {
      type: SET_UNAUTHORIZED,
    };

    expect(authReducer(state, action)).toEqual({
      accessToken: null,
      refreshToken: null,
      isAuthorizing: false,
      isAuthorized: false,
      user: undefined,
    });
  });

  test('handles LOGOUT action', () => {
    const state = AuthStateFactory({
      accessToken: 'foo',
      refreshToken: 'foo',
      isAuthorized: true,
      user: ({ foo: 'bar' } as unknown) as Me,
    });
    const action = {
      type: LOGOUT,
    };

    expect(authReducer(state, action)).toEqual({
      accessToken: null,
      refreshToken: null,
      isAuthorizing: false,
      isAuthorized: false,
      user: undefined,
    });
  });

  test('handles SET_TOKENS action', () => {
    const state = AuthStateFactory();
    const action = {
      type: SET_TOKENS,
      accessToken: 'foo',
      refreshToken: 'bar',
    };

    expect(authReducer(state, action)).toEqual({
      accessToken: 'foo',
      refreshToken: 'bar',
      isAuthorizing: false,
      isAuthorized: true,
    });
  });
});
