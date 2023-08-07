import {
  Box,
  Stack, Title,
} from '@mantine/core';
import React from 'react';
import { MoodSad } from 'tabler-icons-react';
import useStyles from './style';

export default function NoResults(): JSX.Element {
  const { classes } = useStyles();

  return (
    <Box className={classes.component} data-testid="noResultsContainer">
      <Stack align="center">
        <MoodSad className={classes.icon} />
        <Title order={2} weight={800}>
          Nenhum resultado encontrado!
        </Title>
      </Stack>
    </Box>

  );
}
