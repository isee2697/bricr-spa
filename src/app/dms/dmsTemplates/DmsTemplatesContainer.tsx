import React, { useEffect, useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';

import { useGetTemplateType, useModalDispatch, usePagination } from 'hooks';
import {
  UpdateQuestionaireInput,
  useCreateQuestionaireMutation,
  useGetQuestionairesQuery,
  useUpdateQuestionaireMutation,
  useGetQuestionairesCountQuery,
  Questionaire,
} from 'api/types';
import { PerPageType } from 'ui/atoms/pagination/Pagination.types';
import { useDmsTemplateQueryParams } from 'app/shared/useDmsTemplateQueryParams/useDmsTemplateQueryParams';

import { DmsTemplates } from './DmsTemplates';
import { DmsTemplatesContainerProps } from './DmsTemplatesContainer.types';
import { DmsTemplatesAmount } from './DmsTemplates.types';

const PER_PAGE_OPTIONS: PerPageType[] = [10, 25, 'All'];

export const DmsTemplatesContainer = ({ category }: DmsTemplatesContainerProps) => {
  const [createQuestionaire] = useCreateQuestionaireMutation();
  const [updateQuestionaire] = useUpdateQuestionaireMutation();
  const { status } = useDmsTemplateQueryParams();
  const { push } = useHistory();
  const type = useGetTemplateType();
  const { close } = useModalDispatch();
  const { pathname } = useLocation();

  const { loading: countLoading, data: countData, refetch: refetchCount } = useGetQuestionairesCountQuery({
    variables: {
      filters: {
        type,
      },
    },
    fetchPolicy: 'no-cache',
  });

  const amounts: DmsTemplatesAmount = {
    active: countData?.active?.count ?? 0,
    inactive: countData?.inactive?.count ?? 0,
  };

  const { pagination, query: paginationQuery } = usePagination({
    itemsCount: amounts ? amounts[status] : 0,
    perPageOptions: PER_PAGE_OPTIONS,
  });

  const { data, loading, refetch: refetchData } = useGetQuestionairesQuery({
    variables: {
      filters: {
        type,
        isActive: status === 'active',
      },
      pagination: paginationQuery,
    },
  });

  const refetch = async () => {
    await refetchData();
    await refetchCount();
  };

  const handleAddTemplate = async (values: { name: string }) => {
    try {
      if (type) {
        const response = await createQuestionaire({
          variables: {
            input: {
              templateName: values.name,
              type,
              entity: {
                type: type,
              },
              isAdmin: true,
              published: false,
            },
          },
        });

        await refetch();

        const id = response?.data?.createQuestionaire?.id;

        close('dms-add-template');

        push(`${pathname}/${id}/general`, { newlyAdded: true, data: response?.data?.createQuestionaire });
      } else {
        throw new Error('common.template.type.not.found');
      }

      return undefined;
    } catch {
      return { error: true };
    }
  };

  const handleUpdateTemplate = async (template: UpdateQuestionaireInput) => {
    try {
      await updateQuestionaire({
        variables: {
          input: {
            id: template.id,
            isActive: template.isActive,
          },
        },
      });

      await refetch();
    } catch (error) {
      throw new Error('common.template.type.update.failed');
    }

    return undefined;
  };

  return (
    <DmsTemplates
      category={category}
      templates={(data?.getQuestionaires?.items as Questionaire[]) || []}
      onAdd={handleAddTemplate}
      onUpdate={handleUpdateTemplate}
      loading={loading || countLoading}
      pagination={pagination}
      amount={amounts}
    />
  );
};
