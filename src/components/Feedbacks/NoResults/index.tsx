import {
  Box, MantineProvider, Stack, Title,
} from '@mantine/core';
import React from 'react';
import { MoodSad } from 'tabler-icons-react';
import GlobalTheme from '../../../styles/theme';
import useStyles from './style';

export default function NoResults(): JSX.Element {
  const { classes } = useStyles();

  return (
    <MantineProvider theme={GlobalTheme} withGlobalStyles withNormalizeCSS>
      <Box className={classes.component} data-testid="noResultsContainer">
        <Stack align="center">
          <MoodSad className={classes.icon} />
          <Title color="#528" order={2} weight={800}>
            Nenhum resultado encontrado!
          </Title>
        </Stack>
      </Box>

    </MantineProvider>
  );
}
