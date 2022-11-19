import React, { FC } from 'react';
import { Stack, Typography } from '@mui/material';


export interface ErrorPageProps {
  stack?: string,
  message: string,
}

export const ErrorPage:FC<ErrorPageProps> = ({ stack, message }) =>{
  return (
    <Stack gap={5} direction="column">
      <Typography variant='h1'>Ooops...Something went wrong</Typography>
      <Typography variant='h4'>{message}</Typography>
      <Typography variant='h4'>{stack}</Typography>
    </Stack>
  );
};
