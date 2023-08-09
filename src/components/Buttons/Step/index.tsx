import { Tabs as MantineTabs, TabsProps } from '@mantine/core';
import React from 'react';
import StyledTabs from './StylesTabs';

export interface CustomTabsProps extends TabsProps {
    tabs: Array<{ value: string, text: string }>
    panels?: Array<{component: JSX.Element, value: string}>
}

export default function Tabs(props: CustomTabsProps): JSX.Element {
  const { defaultValue, tabs, panels } = props;

  return (
    <StyledTabs defaultValue={defaultValue} orientation="horizontal">
      <MantineTabs.List>
        <MantineTabs.List>
          {tabs?.map((tab, index) => (
            <MantineTabs.Tab key={index} value={tab?.value}>
              {tab?.text}
            </MantineTabs.Tab>
          ))}
        </MantineTabs.List>

        {panels?.map((panel, index) => (
          <MantineTabs.Panel value={panel?.value} key={index}>
            {panel?.component}
          </MantineTabs.Panel>
        ))}

      </MantineTabs.List>
    </StyledTabs>
  );
}
