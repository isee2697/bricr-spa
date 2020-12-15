import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { Pim } from 'api/types';
import { useAuthState, useModalDispatch } from 'hooks';

import { PimObject } from './PimObject';

export const PimObjectContainer = () => {
  const { id } = useParams<{ id: string }>();
  const { accessToken } = useAuthState();
  const [salesPims, setSalesPims] = useState<Pim[]>([]);
  const { close } = useModalDispatch();

  const handleLinkPims = async (pims: string[]) => {
    try {
      const response = await fetch(`${process.env.REACT_APP_FILE_URL}/link-sales-pims`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          cyclusId: id,
          pimIds: pims,
        }),
      });

      if (response.ok) {
        const pims = await response.json();
        setSalesPims([...salesPims, ...pims]);
      }

      close('link-pim-object');

      return undefined;
    } catch (error) {
      close('link-pim-object');

      return error;
    }
  };

  useEffect(() => {
    const getSalesPims = async () => {
      try {
        const response = await fetch(`${process.env.REACT_APP_FILE_URL}/get-sales-pims-list?id=${id}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + accessToken,
          },
        });

        if (response.ok) {
          const salesPimsObject = await response.json();
          const pims = salesPimsObject.salesPimsItems;

          setSalesPims(pims);
        }
      } catch (error) {
        setSalesPims([]);
      }
    };

    getSalesPims();
  }, [accessToken, id]);

  return <PimObject pims={salesPims} onLinkPims={handleLinkPims} />;
};
