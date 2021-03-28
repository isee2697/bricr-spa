import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';

import { useGetTemplateType, useModalDispatch, usePagination } from 'hooks';
import {
  GetQuestionairesDocument,
  UpdateQuestionaireInput,
  useCreateQuestionaireMutation,
  useGetQuestionairesQuery,
  useUpdateQuestionaireMutation,
  useGetQuestionairesCountQuery,
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

  const { data: countData } = useGetQuestionairesCountQuery({
    variables: {
      filters: {
        type,
      },
    },
    fetchPolicy: 'no-cache',
  });

  const amounts: DmsTemplatesAmount = {
    active: countData?.active || 0,
    inactive: countData?.inactive || 0,
  };

  const { pagination, query: paginationQuery } = usePagination({
    itemsCount: amounts ? amounts[status] : 0,
    perPageOptions: PER_PAGE_OPTIONS,
  });

  const { data, loading } = useGetQuestionairesQuery({
    variables: {
      filters: {
        type,
        isActive: status === 'active',
        ...paginationQuery,
      },
    },
  });

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
          refetchQueries: [
            {
              query: GetQuestionairesDocument,
              variables: {
                filters: {
                  type,
                  isActive: status === 'active',
                  ...paginationQuery,
                },
              },
            },
          ],
        });

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
        refetchQueries: [
          {
            query: GetQuestionairesDocument,
            variables: {
              filters: {
                type,
                isActive: status === 'active',
                ...paginationQuery,
              },
            },
          },
        ],
      });
    } catch (error) {
      throw new Error('common.template.type.update.failed');
    }

    return undefined;
  };

  return (
    <DmsTemplates
      category={category}
      templates={data?.getQuestionaires || []}
      onAdd={handleAddTemplate}
      onUpdate={handleUpdateTemplate}
      loading={loading}
      pagination={pagination}
      amount={amounts}
    />
  );
};
