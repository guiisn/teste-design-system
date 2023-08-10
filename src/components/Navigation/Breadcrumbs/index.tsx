import { Anchor, Breadcrumbs as MantineBreadcrumbs } from '@mantine/core';
import React from 'react';

export interface BreadcrumbsProps {
    items: {
        title: string;
        href: string;
    }[]
}

export default function Breadcrumbs({ items }: BreadcrumbsProps): JSX.Element {
  return (
    <MantineBreadcrumbs
      styles={(theme) => ({
        root: {
          display: 'flex',
          alignItems: 'flex-end',
        },
        separator: {
          color: theme.colors.violet[4],
          fontWeight: 400,
          fontSize: '1.25rem',
          lineHeight: 0,
        },
        breadcrumb: {
          color: theme.colors.violet[4],
          fontWeight: 400,
          fontSize: '1.25rem',
          lineHeight: 0,
          ':last-child': {
            fontWeight: 800,
            fontSize: '2.5rem',
            lineHeight: 0,
          },
        },
      })}
    >
      {items?.map((item, index) => (
        <Anchor href={item.href} key={index}>
          {item.title}
        </Anchor>
      ))}
    </MantineBreadcrumbs>
  );
}
