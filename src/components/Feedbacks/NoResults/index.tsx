import { Box, Stack, Title } from '@mantine/core';
import { MoodSad } from 'tabler-icons-react';
import React from 'react';
import useStyles from './style';

export default function NoResults(): JSX.Element {
  const { classes } = useStyles();

  return (
    <Box className={classes.component} data-testid="noResultsContainer">
      <Stack align="center">
        <MoodSad className={classes.icon} />
        <Title color="laraPurple.4" order={2} weight={800}>
          Nenhum resultado encontrado!
        </Title>
      </Stack>
    </Box>
  );
}
