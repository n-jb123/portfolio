import * as React from 'react';
import MuiSnackbar, { type SnackbarProps } from '@mui/material/Snackbar';
export const Snackbar: React.FC<SnackbarProps> = ({ autoHideDuration = 4000, ...rest }) => (
  <MuiSnackbar autoHideDuration={autoHideDuration} {...rest} />
);

Snackbar.displayName = 'Snackbar';
