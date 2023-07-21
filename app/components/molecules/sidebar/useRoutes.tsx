import DashboardIcon from '@mui/icons-material/Dashboard';
import MapsHomeWorkIcon from '@mui/icons-material/MapsHomeWork';

import { Routes } from '@app/types.d';

import { IRoute } from './types';

export const useRoutes = (): IRoute[] => {
  return [
    {
      path: Routes.HOME_PAGE,
      title: 'Dashboard',
      ActiveIcon: DashboardIcon,
    },
    {
      path: Routes.PROPERTIES_PAGE,
      title: 'Properties',
      ActiveIcon: MapsHomeWorkIcon,
    },
  ];
};
