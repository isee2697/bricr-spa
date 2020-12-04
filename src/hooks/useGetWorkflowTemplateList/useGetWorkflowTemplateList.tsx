import { useQueryParam } from 'use-query-params';
import { useEffect, useState } from 'react';

import { useAuthState } from 'hooks/useAuthState/useAuthState';
import { WorkflowTemplateStatus } from 'api/types';
import { GetWorkflowTemplateListData } from 'app/settings/sections/workflowTemplates/WorkflowTemplates.types';

export const useGetWorkflowTemplateList = () => {
  const { accessToken } = useAuthState();
  const [status = WorkflowTemplateStatus.Inactive, setStatus] = useQueryParam<WorkflowTemplateStatus>('status');
  const [data, setData] = useState<GetWorkflowTemplateListData | undefined>(undefined);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const getWorkflowTemplateList = async () => {
      try {
        const response = await fetch(`${process.env.REACT_APP_FILE_URL}/get-workflow-template-list?status=${status}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + accessToken,
          },
        });

        if (response.ok) {
          const workflowTemplates: GetWorkflowTemplateListData = await response.json();

          setData(workflowTemplates);
          setLoading(false);
        } else {
          throw new Error('Failed to fetch workflow template list from server');
        }
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    setLoading(true);
    getWorkflowTemplateList();
  }, [accessToken, status]);

  return { data, loading, error, status, setStatus };
};
