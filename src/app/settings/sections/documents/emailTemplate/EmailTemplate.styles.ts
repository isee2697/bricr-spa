import { useTheme } from '@material-ui/core';

export const useEditorCustomStyles = () => {
  const { palette, typography } = useTheme();

  return [
    `body { font-family: ${typography.body1.fontFamily}`,
    `.blockbuilder-preview { background: ${palette.background.default} }`,
    `.blockbuilder-content-tool-name { color: ${palette.blue.main}`,
  ];
};
