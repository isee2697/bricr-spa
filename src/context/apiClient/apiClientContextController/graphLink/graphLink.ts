import { createHttpLink } from '@apollo/client';

import { AppRoute } from 'routing/AppRoute.enum';

let refreshTokenPromise: Promise<string | undefined> | undefined;

const goToLogout = () => {
  window.location.href = AppRoute.logout;
};
export const graphLink = (
  tokens: { accessToken: null | string; refreshToken: null | string },
  showError: (message: string) => void,
  refetchToken: (headers: HeadersInit) => Promise<string | undefined>,
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
        const copyResponse = response.clone();
        const json = await copyResponse.json();

        if (json.errors) {
          showError(json.errors[0].message);
        }

        if (tokens.accessToken && tokens.refreshToken && response.status === 401) {
          if (!refreshTokenPromise) {
            refreshTokenPromise = refetchToken(newOptions.headers);
            const newToken = await refreshTokenPromise;
            refreshTokenPromise = undefined;

            if (newToken) {
              return fetch(endpoint, {
                ...newOptions,
                headers: {
                  ...newOptions.headers,
                  authorization: `Bearer ${newToken}`,
                },
              });
            } else {
              goToLogout();
            }
          }
        }

        return response;
      });
    },
  });
