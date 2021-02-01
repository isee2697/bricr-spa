import { HtmlExport } from 'react-email-editor';

import { PromiseFunction } from 'app/shared/types';

export type EmailTemplateProps = {
  onSave: PromiseFunction<HtmlExport>;
};
