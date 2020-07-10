import { makeStyles, Theme } from '@material-ui/core/styles';
import { Classes } from 'reactcss';
import { ChromePickerStylesProps } from 'react-color/lib/components/chrome/Chrome';

export const useStyles = makeStyles(theme => ({
  container: {
    '& .hue-horizontal': {
      borderRadius: theme.spacing(2),
    },

    '& .chrome-picker input': {
      backgroundColor: theme.palette.gray.light,
      borderRadius: `${theme.spacing(1, 1, 0, 0)} !important`,
      border: `none !important`,
      borderBottom: `1px solid ${theme.palette.gray.main} !important`,
      color: `${theme.palette.black.main} !important`,
      ...theme.typography.h4,
      fontSize: `${theme.typography.h4.fontSize}px !important`,
    },

    '& .chrome-picker input + span': {
      color: `${theme.palette.gray.main} !important`,
    },

    '& .chrome-picker svg': {
      marginTop: '-12px',
      width: `${theme.spacing(4)} !important`,
      height: `${theme.spacing(4)} !important`,
      borderRadius: `${theme.spacing(1)} !important`,
      backgroundColor: `${theme.palette.gray.light} !important`,
    },

    '& .chrome-picker svg path': {
      d:
        "path('M13 8.66667L9 4L5 8.66667H8.33333V15.3333H9.66667V8.66667H13ZM16.3333 15.3334V8.66675H15V15.3334H11.6667L15.6667 20.0001L19.6667 15.3334H16.3333Z')",
      fill: theme.palette.gray.main,
    },
  },
  actions: {
    borderTop: `2px solid ${theme.palette.gray.light}`,
    paddingTop: theme.spacing(1.75),
  },
}));

export const usePickerStyles = (theme: Theme): Partial<Classes<ChromePickerStylesProps>> => {
  /* eslint-disable @typescript-eslint/no-explicit-any */
  return {
    default: {
      picker: {
        borderRadius: theme.spacing(1, 1, 0, 0),
        width: theme.spacing(45),
        boxShadow: 'none',
      },
      controls: {
        flexDirection: 'row-reverse',
      },
      color: { width: theme.spacing(6) },
      swatch: { width: theme.spacing(6), height: theme.spacing(6), borderRadius: '50%' },
      toggles: { alignSelf: 'center', marginRight: theme.spacing(2) },
      Alpha: {
        gradient: {
          borderRadius: theme.spacing(2),
        },
        checkboard: {
          borderRadius: theme.spacing(2),
        },
      } as any,
    },
  };
  /* eslint-enable @typescript-eslint/no-explicit-any */
};
