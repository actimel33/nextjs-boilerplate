import { Theme, darken } from '@mui/material/styles';

export const useStyles = (props?: any) => {
  const navCommonStyles = {
    '& p': {
      color: (theme: Theme) => darken(theme.palette.common.white, 0.2),
      transition: (theme: Theme) =>
        theme.transitions.create(
          ['color'],
          theme.animation(theme.transitions.duration.shorter, theme.transitions.easing.easeInOut),
        ),
    },
    '& svg': {
      color: (theme: Theme) => darken(theme.palette.secondary.main, 0.2),
      transition: (theme: Theme) =>
        theme.transitions.create(
          ['color'],
          theme.animation(theme.transitions.duration.shorter, theme.transitions.easing.easeInOut),
        ),
    },
  };

  return {
    drawerContainer: {
      height: '100%',
      '& .MuiDrawer-paperAnchorLeft': {
        backgroundColor: (theme: Theme) => theme.palette.primary.main,
        position: 'relative',
        zIndex: 1,
        overflow: 'hidden',
      },
      transition: (theme: Theme) =>
        theme.transitions.create(
          ['width'],
          theme.animation(theme.transitions.duration.shorter, theme.transitions.easing.easeInOut),
        ),
    },
    drawerContainerOpened: {
      width: (theme: Theme) => theme.typography.pxToRem(240),
    },
    drawerContainerClosed: {
      width: (theme: Theme) => theme.typography.pxToRem(60),
    },

    iconMenuButton: {
      paddingTop: (theme: Theme) => theme.typography.pxToRem(4),
      paddingBottom: (theme: Theme) => theme.typography.pxToRem(4),
    },
    iconMenuButtonActive: {
      background: (theme: Theme) => theme.palette.primary.dark,
    },
    iconButton: {
      borderRadius: 0,
      display: 'flex',
      justifyContent: 'flex-start',
      '&:hover': {
        background: (theme: Theme) => theme.palette.primary.light,
        transition: (theme: Theme) =>
          theme.transitions.create(
            ['background'],
            theme.animation(theme.transitions.duration.shorter, theme.transitions.easing.easeInOut),
          ),
        ...navCommonStyles,
      },
    },
    iconNavButton: {
      py: (theme: Theme) => theme.typography.pxToRem(4),
      width: '100%',
    },
    linkStyle: {
      textDecoration: 'none',
      width: '100%',
      display: 'flex',
      alignItems: 'center',
    },
    menuOpenIcon: {
      width: (theme: Theme) => theme.typography.pxToRem(35),
      height: (theme: Theme) => theme.typography.pxToRem(35),
      transition: (theme: Theme) =>
        theme.transitions.create(
          ['transform'],
          theme.animation(theme.transitions.duration.shorter, theme.transitions.easing.easeInOut),
        ),
    },
    menuOpenIconClosed: {
      transform: 'rotate3d(0, 1, 0, 180deg)',
    },
    menuOpenIconOpen: {
      transform: 'rotate3d(0, 1, 0, 0)',
    },
    list: {
      px: 0,
      py: 0,
    },
    listItem: {
      px: 0,
      py: 0,
    },
    itemActive: {
      backgroundColor: (theme: Theme) => theme.palette.primary.light,
      ...navCommonStyles,
    },
    itemTitleActive: {
      color: (theme: Theme) => theme.palette.common.white,
      textTransform: 'uppercase',
      fontWeight: 'bold',
      ml: (theme: Theme) => theme.typography.pxToRem(12),
    },
  };
};
