import {
  Group, Stack, Title,
} from '@mantine/core';
import { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Copy } from 'tabler-icons-react';
import {
  laraAquamarine, laraBlue, laraGreen, laraGrey, laraOrange, laraPink, laraPurple, laraRed, laraSuccess, laraYellow,
} from '../../styles/colors';
import Button from '../Buttons/Button';

async function copyToClipboard(text: string): Promise<boolean> {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch (error) {
    alert(error);
    return false;
  }
}

function GetPalette(): JSX.Element {
  const palette = (title: string, colors: string[]): JSX.Element => (
    <Stack>
      <Group position="apart">
        <Title order={4}>{title}</Title>
        <Button variant="subtle" rightIcon={<Copy />} size="xs" onClick={() => copyToClipboard(colors?.toString())}>
          Copy
        </Button>
      </Group>
      <Group spacing="xs">
        {colors?.map((color: any, index: number) => (
          <Stack key={index} align="center" sx={{ border: `1px solid ${color}`, borderRadius: '5px' }}>
            <div style={{
              height: '50px', width: '80px', backgroundColor: color, borderRadius: '2px 2px 0 0',
            }}
            />
            <Title order={6}>{color}</Title>
          </Stack>
        ))}
      </Group>
    </Stack>
  );

  return (
    <Stack>
      {palette('Lara Purple', laraPurple)}
      {palette('Lara Aquamarine', laraAquamarine)}
      {palette('Lara Blue', laraBlue)}
      {palette('Lara Green', laraGreen)}
      {palette('Lara Grey', laraGrey)}
      {palette('Lara Orange', laraOrange)}
      {palette('Lara Pink', laraPink)}
      {palette('Lara Red', laraRed)}
      {palette('Lara Success', laraSuccess)}
      {palette('Lara Yellow', laraYellow)}
    </Stack>
  );
}

export default {
  title: 'Colors/Palette',
  tags: ['autodocs'],
  decorators: [
    () => (
      <GetPalette />
    ),
  ],
} as Meta;

export const PaletteOBJ: StoryObj = {
};
