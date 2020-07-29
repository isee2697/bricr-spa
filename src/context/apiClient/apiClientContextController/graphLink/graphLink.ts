import React from 'react';
import { createHttpLink } from '@apollo/client';

import { setTokens } from 'context/auth/authActionCreators/authActionCreators';
import { AuthAction } from 'context/auth/authReducer/authReducer.types';
import { AppRoute } from 'routing/AppRoute.enum';

let refreshTokenPromise: Promise<Response> | null = null;

export const graphLink = (
  dispatch: React.Dispatch<AuthAction>,
  tokens: { accessToken: null | string; refreshToken: null | string },
) =>
  createHttpLink({
    uri: process.env.REACT_APP_API_URL,
    fetch: (endpoint, options) => {
      const newOptions = {
        ...options,
        headers: {
          ...options?.headers,
          ...(tokens.accessToken
            ? {
                authorization: `Bearer ${tokens.accessToken}`,
              }
            : undefined),
        },
      };

      return fetch(endpoint, newOptions).then(async response => {
        if (tokens.accessToken && tokens.refreshToken && response.status === 401) {
          const copyResponse = response.clone();
          const json = await copyResponse.json();

          if (json && json.error && json.error.id === 'Invalid token provided') {
            if (!refreshTokenPromise) {
              refreshTokenPromise = fetch(process.env.REACT_APP_SECURITY_URL + '/public/auth/refresh-token', {
                method: 'POST',
                headers: newOptions.headers,
                body: JSON.stringify({
                  accessToken: tokens.accessToken,
                  refreshToken: tokens.refreshToken,
                }),
              }).then(async response => {
                if (response.ok) {
                  const newTokens = await response.json();
                  dispatch(setTokens(newTokens.accessToken, newTokens.refreshToken));

                  return newTokens.accessToken;
                }
              });
            }

            const newToken = await refreshTokenPromise;
            refreshTokenPromise = null;

            if (newToken) {
              return fetch(endpoint, {
                ...newOptions,
                headers: {
                  ...newOptions.headers,
                  authorization: `Bearer ${newToken}`,
                },
              });
            } else {
              window.location.href = AppRoute.logout;
            }
          } else {
            window.location.href = AppRoute.logout;
          }
        }

        return response;
      });
    },
  });
