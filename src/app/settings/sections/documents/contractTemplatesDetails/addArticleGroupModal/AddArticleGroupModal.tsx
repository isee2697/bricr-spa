import React from 'react';
import arrayMutators from 'final-form-arrays';

import { useLocale } from 'hooks';
import { FormModal } from 'ui/organisms';
import { GenericField } from 'form/fields';

import { AddArticleGroupModalProps } from './AddArticleGroupModal.types';

export const AddArticleGroupModal = ({ isOpened, onClose, onSubmit }: AddArticleGroupModalProps) => {
  const { formatMessage } = useLocale();

  return (
    <FormModal
      isOpened={isOpened}
      onClose={onClose}
      title={formatMessage({ id: 'settings.documents.contract_templates_details.add_article_group.title' })}
      onSubmit={onSubmit}
      mutators={{ ...arrayMutators }}
      addText={formatMessage({
        id: 'settings.documents.contract_templates_details.add_article_group.add_article_group',
      })}
    >
      <GenericField
        fullWidth
        name="name"
        label={formatMessage({
          id: 'settings.documents.contract_templates_details.add_article_group.name_article_group',
        })}
        placeholder={formatMessage({
          id: 'settings.documents.contract_templates_details.add_article_group.name_article_group.placeholder',
        })}
      />
    </FormModal>
  );
};
