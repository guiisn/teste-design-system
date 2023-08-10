import { Logout, Settings } from 'tabler-icons-react';

export interface AppShellFooter {
    icon: any
    label: string
    link: string | number
    onClick?: () => void
  }

export const appShellFooter = [
  {
    icon: Settings,
    label: 'Settings',
    link: '/settings',
  },
  {
    icon: Logout,
    label: 'Logout',
    link: 0,
    onClick: () => console.log('logout')
    ,
  },
] as AppShellFooter[];
