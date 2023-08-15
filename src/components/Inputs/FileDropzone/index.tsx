import {
  Group, Stack, Title, useMantineTheme,
} from '@mantine/core';
import { Dropzone, DropzoneProps } from '@mantine/dropzone';
import React from 'react';
import {
  File,
  Upload, X,
} from 'tabler-icons-react';

export interface FileDropzoneProps extends DropzoneProps {
    variant?: 'solid' | 'dashed'
    title: string,
    subtitle: string,
    sizeText: string,
    fileName?: string
}

export default function FileDropzone({
  variant = 'solid', title, subtitle, sizeText, fileName, ...rest
}: Omit<FileDropzoneProps, 'children'>): JSX.Element {
  const mantineTheme = useMantineTheme();

  return (
    <Dropzone
      styles={(theme) => ({
        root: {
          border: `2.049px ${variant} ${theme.colors.violet[4]}`,
          borderRadius: '4.097px',
          boxShadow: variant === 'solid' ? '0px 2px 26px 0px rgba(151, 71, 255, 0.47) inset' : 'none',
          backgroundColor: '#F6F0FF',
          padding: '1.5rem 2.22rem',
          ':hover': {
            backgroundColor: theme.colors.violet[0],
          },
        },
      })}
      {...rest}
    >
      <Group sx={{ gap: '1.68rem' }}>
        <Dropzone.Accept>
          <Stack align="center" w="100%">
            <Group position="center" align="center" sx={{ padding: '0.625rem', borderRadius: '50%', backgroundColor: mantineTheme.colors.violet[1] }}>
              <File
                width="3.6rem"
                height="3.6rem"
                color={mantineTheme.colors.violet[6]}
              />
            </Group>
            <Title order={5} weight={600}>
              {fileName}
            </Title>
          </Stack>
        </Dropzone.Accept>

        <Dropzone.Reject>
          <X
            width="3.6rem"
            height="3.6rem"
            color={mantineTheme.colors.red[4]}
          />
        </Dropzone.Reject>

        <>
          <Upload
            width="3.56rem"
            height="3.56rem"
            color={mantineTheme.colors.violet[4]}
          />
          <Stack sx={{ gap: '2.9375rem' }}>
            <Stack sx={{ gap: '0.375rem' }}>
              <Title order={3} weight={800}>
                {title}
              </Title>
              <Title order={5} weight={500}>
                {subtitle}
              </Title>
            </Stack>
            <Title order={6} weight={500}>
              {sizeText}
            </Title>
          </Stack>
        </>
      </Group>
    </Dropzone>
  );
}
