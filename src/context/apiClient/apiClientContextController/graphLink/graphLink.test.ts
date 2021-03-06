import { ApolloClient, InMemoryCache } from '@apollo/client';

import { CURRENT_USER } from 'api/queries/profile';
import { AdminSettings } from 'api/types';

import { graphLink } from './graphLink';

describe('graphLink', () => {
  test('call set error when error from api returned', async () => {
    const expectedString = 'myError';
    const cache = new InMemoryCache();
    const setError = jest.fn();
    const refetchToken = jest.fn();
    const mockResponse = [{ message: expectedString }];

    const link = graphLink(
      {
        accessToken: 'test',
        refreshToken: 'test',
      },
      setError,
      refetchToken,
    );

    const client = new ApolloClient({
      link,
      cache,
    });

    jest.spyOn(window, 'fetch').mockImplementation(async () => {
      return new Response(
        JSON.stringify({
          data: null,
          errors: mockResponse,
        }),
        {
          status: 200,
        },
      );
    });

    await client.query({
      query: CURRENT_USER,
      errorPolicy: 'all',
    });
    expect(setError).toHaveBeenCalledWith(expectedString);
  });

  test('refresh token when expired and re-run fetch with new one token', async () => {
    const cache = new InMemoryCache();
    const refetchToken = jest.fn().mockReturnValue('token');
    const mockResponse = {
      me: {
        firstName: 'test',
        lastName: 'test',
        email: 'test',
        id: 'test',
        isActive: true,
        image: null,
        language: 'nl',
        isAdmin: true,
        company: {
          id: 'testCompanyId',
        },
        adminSettings: [AdminSettings.General],
        teams: [
          {
            id: 'test',
            name: 'test',
          },
        ],
      },
    };

    const link = graphLink(
      {
        accessToken: 'test',
        refreshToken: 'test',
      },
      (message: string) => {},
      refetchToken,
    );

    const client = new ApolloClient({
      link,
      cache,
    });

    jest.spyOn(window, 'fetch').mockImplementation(async (endpoint, options) => {
      // Response when token is wrong
      if (
        endpoint === process.env.REACT_APP_API_URL &&
        (options?.headers as { authorization: string }).authorization === 'Bearer test'
      ) {
        const response = new Response(
          JSON.stringify({
            error: {
              id: 'Invalid token provided',
            },
          }),
          {
            status: 401,
          },
        );

        return response;
      }

      // Response with success
      if (endpoint === process.env.REACT_APP_API_URL) {
        return new Response(
          JSON.stringify({
            data: mockResponse,
          }),
          {
            status: 200,
          },
        );
      }

      // Response with new token
      return new Response(
        JSON.stringify({
          AuthenticationResult: {
            AccessToken: 'new',
            RefreshToken: 'new',
          },
        }),
        {
          status: 200,
        },
      );
    });

    const test = await client.query({
      query: CURRENT_USER,
    });

    expect(refetchToken).toHaveBeenCalled();

    expect(test.data).toEqual(mockResponse);
  });
});
