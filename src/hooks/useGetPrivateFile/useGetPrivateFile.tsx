import { useState } from 'react';

import { EntityWithFiles, File } from 'api/types';
import { useAuthState } from 'hooks';

export const useGetPrivateFile = (key: string, entity: EntityWithFiles, entityID: string) => {
  const { accessToken } = useAuthState();
  const [data, setData] = useState<File | undefined>(undefined);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const getFile = async () => {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_FILE_URL}/file?key=${key}&entity=${entity}&entityID=${entityID}`,
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + accessToken,
          },
        },
      );

      if (response.ok) {
        const file: File = await response.json();

        setLoading(false);
        setData(file);
      } else {
        throw new Error('Failed to fetch private file from server');
      }
    } catch {
      setLoading(false);
      setError(true);
    }
  };

  if (accessToken && !data && !loading) {
    setLoading(true);
    getFile();
  }

  return { data, loading, error };
};
