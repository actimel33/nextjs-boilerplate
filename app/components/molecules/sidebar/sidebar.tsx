'use client';
import { useCallback, useState } from 'react';

import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Typography from '@mui/material/Typography';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import SidebarNavItem from '@components/atoms/sidebar-nav-item';

import { useStyles } from './styles';
import { IRoute } from './types';
import { useRoutes } from './useRoutes';

export default function Sidebar() {
  const {
    drawerContainer,
    drawerContainerOpened,
    drawerContainerClosed,
    menuOpenIcon,
    menuOpenIconOpen,
    menuOpenIconClosed,
    iconMenuButtonActive,
    iconButton,
    iconMenuButton,
    iconNavButton,
    list,
    listItem,
    itemActive,
    itemTitleActive,
    linkStyle,
  } = useStyles();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const routes = useRoutes();
  const pathname = usePathname();

  const handleMenuBtnClick = useCallback(() => {
    setIsOpen(state => !state);
  }, []);

  return (
    <Drawer
      className="_drawerContainer"
      sx={{
        ...drawerContainer,
        ...(isOpen ? drawerContainerOpened : drawerContainerClosed),
      }}
      variant="permanent"
    >
      <IconButton
        onClick={handleMenuBtnClick}
        size="large"
        sx={{
          ...iconButton,
          ...iconMenuButton,
          ...(isOpen && iconMenuButtonActive),
        }}
      >
        <MenuOpenIcon
          color="secondary"
          sx={{
            ...menuOpenIcon,
            ...(isOpen ? menuOpenIconOpen : menuOpenIconClosed),
          }}
        />
      </IconButton>
      <List sx={{ ...list }}>
        {routes.map(({ ActiveIcon, title, path }: IRoute) => (
          <SidebarNavItem
            key={path}
            ActiveIcon={ActiveIcon}
            isActive={pathname === path}
            isOpen={isOpen}
            path={path}
            title={title}
          />
        ))}
      </List>
    </Drawer>
  );
}
