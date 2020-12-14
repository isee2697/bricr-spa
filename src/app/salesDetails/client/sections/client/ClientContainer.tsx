import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { CRM as mockCrm } from 'api/mocks/crm';
import { useAuthState, useModalDispatch } from 'hooks';
import { CrmItem } from 'app/crm/Crm.types';

import { Client } from './Client';

export const ClientContainer = () => {
  const { id } = useParams<{ id: string }>();
  const { accessToken } = useAuthState();
  const [salesCrms, setSalesCrms] = useState<CrmItem[]>([]);
  const { close } = useModalDispatch();

  const handleLinkCrms = async ({ contact }: { contact: string[] }) => {
    try {
      const response = await fetch(`${process.env.REACT_APP_FILE_URL}/link-sales-crms`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          cyclusId: id,
          crmIds: contact,
        }),
      });

      if (response.ok) {
        const crmItems = await response.json();

        setSalesCrms([...salesCrms, ...crmItems]);
      }

      close('link-contact');

      return undefined;
    } catch (error) {
      close('link-contact');

      return error;
    }
  };

  useEffect(() => {
    const getSalesPims = async () => {
      try {
        const response = await fetch(`${process.env.REACT_APP_FILE_URL}/get-sales-crms-list?id=${id}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + accessToken,
          },
        });

        if (response.ok) {
          const salesCrmsObject = await response.json();
          const crms = salesCrmsObject.salesCrmsItems;

          setSalesCrms(crms);
        }
      } catch (error) {
        setSalesCrms([]);
      }
    };

    getSalesPims();
  }, [accessToken, id]);

  return <Client crms={salesCrms.map(crm => ({ ...mockCrm, ...crm }))} onLinkSalesCrm={handleLinkCrms} />;
};
