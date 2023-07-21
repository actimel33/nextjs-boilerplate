import { SvgIconProps } from '@mui/material';

export interface IRoute {
  title: string;
  path: string;
  ActiveIcon: FC<SvgIconProps>;
}
