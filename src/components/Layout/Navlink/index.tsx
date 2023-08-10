import { NavLink as MantineNavLink, NavLinkProps as MantineNavLinkProps } from '@mantine/core';
import React from 'react';
import useStyles from './style';

export interface NavLinkProps extends MantineNavLinkProps {
    variant?: 'dead' | 'son'
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export default function NavLink({
  variant = 'dead', label, icon, childrenOffset, active, onClick, children, ...rest
}: NavLinkProps): JSX.Element {
  const { classes } = useStyles();

  const style = {
    label: {
      dead: classes.navlinkDeadLabel,
      son: classes.navlinkSonLabel,
    },
    root: {
      dead: classes.navlinkDeadRoot,
      son: classes.navlinkSonRoot,
    },
  };

  return (
    <MantineNavLink
      label={label}
      icon={icon}
      childrenOffset={childrenOffset}
      active={active}
      onClick={onClick}
      classNames={{
        label: style.label[variant],
        root: style.root[variant],
      }}
      {...rest}
    >
      {children}
    </MantineNavLink>
  );
}
