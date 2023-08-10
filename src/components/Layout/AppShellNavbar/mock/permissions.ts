import { BuildingStore } from 'tabler-icons-react';

export interface Permissions {
    icon: any
    label: string
    link: string
    links?: Permissions[]
  }

export const mockOptions = (): Permissions[] => {
  const franchisors = {
    label: 'Franchisors',
    link: '/company/franchisors',
  } as Permissions;
  const franchisees = {
    label: 'Franchisees',
    link: '/company/franchisees',
  } as Permissions;
  const units = {
    label: 'Units',
    link: '/company/units',
  } as Permissions;

  const links = [franchisors, franchisees, units] as Permissions[];

  return [
    {
      icon: BuildingStore,
      label: 'Companies',
      link: '/company/units',
      links,
    },
  ] as Permissions[];
};
