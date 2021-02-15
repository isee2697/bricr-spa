import { useAuthState } from 'hooks/useAuthState/useAuthState';
import { setTokens } from 'context/auth/authActionCreators/authActionCreators';
import { useAuthDispatch } from 'hooks/useAuthDispatch/useAuthDispatch';
import { authStorage } from 'context/auth/authStorage/AuthStorage';

export const useRefreshToken = () => {
  const { refreshToken: token } = useAuthState();
  const dispatch = useAuthDispatch();

  const getRefreshToken = async (headers: HeadersInit): Promise<string | undefined> => {
    if (!token) {
      return undefined;
    }

    return await fetch(process.env.REACT_APP_SECURITY_URL + '/refresh-token', {
      method: 'POST',
      headers,
      body: JSON.stringify({
        token,
      }),
    })
      .then(async response => {
        if (response.ok) {
          const { AuthenticationResult } = await response.json();

          dispatch(setTokens(AuthenticationResult.AccessToken, token));
          authStorage.accessToken = AuthenticationResult.AccessToken;

          return AuthenticationResult?.AccessToken;
        }

        return undefined;
      })
      .catch(() => {
        return undefined;
      });
  };

  return getRefreshToken;
};
