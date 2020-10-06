import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(({ palette }) => ({
  modalFooter: {
    paddingTop: '14px',
    borderTop: `2px solid ${palette.gray.light}`,
  },

  filter: {
    borderTop: `1px solid ${palette.gray.light}`,
  },

  filterSider: {
    boxShadow: 'inset -2px 0px 4px rgba(130, 141, 184, 0.2)',
  },

  filterTabWrapper: {
    alignItems: 'flex-start',
  },

  tabContentHeader: {
    fontWeight: 500,
    fontSize: '12px',
    lineHeight: '16px',
    marginBottom: '32px',

    '& .linked_selector': {
      cursor: 'pointer',
      color: '#2F1F5B',
    },
    '& .delete_filter': {
      cursor: 'pointer',
      color: '#0A57E9',
    },
  },

  tabSearchWrapper: {
    marginBottom: '32px',
  },

  filterTab: {
    flexDirection: 'row-reverse',
    paddingRight: '14px',
  },

  titleBadge: {
    marginLeft: '8px',
    display: 'inline-block',
    color: 'white',
    fontSize: '14px',
    lineHeight: '24px',
    flex: 'none',
    alignSelf: 'center',
    textAlign: 'center',
    flexGrow: 0,
    backgroundColor: '#0A57E9',
    borderRadius: '100%',
    width: '24px',
    verticalAlign: 'middle',
  },

  infoTitle: {
    fontWeight: 600,
    fontSize: '10px',
    lineHeight: '16px',
    color: `${palette.gray}`,
    margin: '16px 0',
  },
}));
