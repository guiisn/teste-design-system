import { ActionIcon, ActionIconProps, Tooltip } from '@mantine/core';
import React from 'react';

export interface IconButtonProps extends ActionIconProps {
    tooltipTitle: string
}

export default function IconButton(props: IconButtonProps): JSX.Element {
  const {
    tooltipTitle, children, color, variant,
  } = props;

  return (
    <Tooltip label={tooltipTitle} color="gray.0">
      <ActionIcon
        w="2.625rem"
        h="2.625rem"
        sx={{ borderRadius: '10px' }}
        color={color}
        variant={variant}
      >
        {children}
      </ActionIcon>
    </Tooltip>
  );
}
