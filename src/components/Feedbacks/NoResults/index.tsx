import { Box, Stack, Title } from '@mantine/core';
import { MoodSad } from 'tabler-icons-react';
import React from 'react';
import useStyles from './style';
import ThemeWrapper from '../../..';

export default function NoResults(): JSX.Element {
  const { classes } = useStyles();

  return (
    <ThemeWrapper>
      <Box className={classes.component} data-testid="noResultsContainer">
        <Stack align="center">
          <MoodSad className={classes.icon} />
          <Title color="#528" order={2} weight={800}>
            Nenhum resultado encontrado!
          </Title>
        </Stack>
      </Box>

    </ThemeWrapper>
  );
}
