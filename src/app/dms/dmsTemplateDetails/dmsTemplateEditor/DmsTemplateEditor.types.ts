import { DmsTemplateItem } from '../../dmsTemplates/DmsTemplates.types';

export type DmsTemplateEditorProps = {
  template: DmsTemplateItem;
  showImages: boolean;
  onChangeShowImages: VoidFunction;
  showAttachments: boolean;
  onChangeShowAttachments: VoidFunction;
};
