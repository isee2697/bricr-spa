import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

import { NavBreadcrumb } from 'ui/atoms';
import { AppRoute } from 'routing/AppRoute.enum';
import { useLocale } from 'hooks';
import { PIM_DOCUMENT_QUESTIONNAIRE } from 'api/mocks/pim';

import { DocumentQuestionnaire } from './DocumentQuestionnaire';
import { DocumentQuestionnaireType, QuestionStepStatus } from './DocumentQuestionnaire.types';
import { AddQuestionnaireGroupBody } from './addQuestionnaireGroupModal/AddQuestionnaireGroupModal.types';
import { AddQuestionnaireItemBody } from './addQuestionnaireItemModal/AddQuestionnaireItemModal.types';

export const DocumentQuestionnaireContainer = () => {
  const { id: pimId, kind, docId } = useParams<{ id: string; kind: string; docId: string }>();
  const { formatMessage } = useLocale();
  const [data, setData] = useState<DocumentQuestionnaireType>(PIM_DOCUMENT_QUESTIONNAIRE);

  const loading = false;
  const error = undefined;

  const pathname = AppRoute.pimDocumentDetails
    .replace(':id', pimId)
    .replace(':kind', kind)
    .replace(':docId', docId);

  const breadcrumbs = (
    <>
      <NavBreadcrumb title={formatMessage({ id: `header.links.${kind}_list` })} to={pathname} />
      <NavBreadcrumb title={data?.name} urlBase={''} />
    </>
  );

  const handleAddNewQuestionnaire = async (values: AddQuestionnaireGroupBody) => {
    setData({
      ...data,
      steps: [
        ...data.steps,
        {
          id: `step-${data.steps.length}`,
          title: values.name,
          status: QuestionStepStatus.Pending,
          questions: [],
        },
      ],
    });

    return true;
  };

  const handleAddNewQuestionnaireItem = async (values: AddQuestionnaireItemBody) => {
    return undefined;
  };

  return (
    <DocumentQuestionnaire
      loading={loading}
      error={error}
      pimId={pimId}
      data={data}
      breadcrumbs={breadcrumbs}
      onAddNewDocumentQuestionnaireGroup={handleAddNewQuestionnaire}
      onAddNewDocumentQuestionnaireItem={handleAddNewQuestionnaireItem}
    />
  );
};
