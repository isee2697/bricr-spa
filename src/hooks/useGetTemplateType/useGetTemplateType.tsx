import { useParams } from 'react-router-dom';

import { TemplateType } from '../../api/types';

export const useGetTemplateType = () => {
  const { type } = useParams<{ type: string }>();
  let templateType: TemplateType | undefined;

  switch (type) {
    case 'invoices':
      templateType = TemplateType.Invoice;
      break;
    case 'list_of_case':
      templateType = TemplateType.Lvz;
      break;
    case 'social_media':
      templateType = TemplateType.SocialMedia;
      break;
    default:
      templateType = Object.values(TemplateType).find(
        (templateType: string) => templateType.toLowerCase() === type.toLowerCase(),
      );
  }

  return templateType;
};
