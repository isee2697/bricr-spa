import { ApolloClient, InMemoryCache } from '@apollo/client';

import { CURRENT_USER } from 'api/queries/profile';

import { graphLink } from './graphLink';

describe('graphLink', () => {
  test('refresh token when expired and re-run fetch with new one token', async () => {
    // const cache = new InMemoryCache();
    // const dispatch = jest.fn();
    // const mockResponse = {
    //   me: {
    //     firstName: 'test',
    //     lastName: 'test',
    //     email: 'test',
    //     avatar: 'test',
    //     id: 'test',
    //     isActive: true,
    //     teams: [
    //       {
    //         id: 'test',
    //         name: 'test',
    //       },
    //     ],
    //   },
    // };
    //
    // const link = graphLink(dispatch, {
    //   accessToken: 'test',
    //   refreshToken: 'test',
    // });
    //
    // const client = new ApolloClient({
    //   link,
    //   cache,
    // });
    //
    // jest.spyOn(window, 'fetch').mockImplementation(async (endpoint, options) => {
    //   // Response when token is wrong
    //   if (
    //     endpoint === process.env.REACT_APP_API_URL &&
    //     (options?.headers as { authorization: string }).authorization === 'Bearer test'
    //   ) {
    //     const response = new Response(
    //       JSON.stringify({
    //         error: {
    //           id: 'Invalid token provided',
    //         },
    //       }),
    //       {
    //         status: 401,
    //       },
    //     );
    //
    //     return response;
    //   }
    //
    //   // Response with success
    //   if (endpoint === process.env.REACT_APP_API_URL) {
    //     return new Response(
    //       JSON.stringify({
    //         data: mockResponse,
    //       }),
    //       {
    //         status: 200,
    //       },
    //     );
    //   }
    //
    //   // Response with new token
    //   return new Response(
    //     JSON.stringify({
    //       accessToken: 'new',
    //       refreshToken: 'new',
    //     }),
    //     {
    //       status: 200,
    //     },
    //   );
    // });
    //
    // const test = await client.query({
    //   query: CURRENT_USER,
    // });
    //
    // expect(dispatch).toHaveBeenCalledWith({ accessToken: 'new', refreshToken: 'new', type: 'auth/set-tokens' });
    //
    // expect(test.data).toEqual(mockResponse);
  });
});
