'use client'

import { ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import React from 'react'
import { createTheme } from '@mui/material/styles'

const theme = createTheme({
  palette: {
    primary: {
      main: '#4287F6',
    },
    secondary: {
      main: '#dc004e',
    },
  },
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          border: '1px solid #e0e0e0',
          boxShadow: 'none',
          transition: 'box-shadow 0.3s',
          '&:hover': {
            boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)',
          },
        },
      },
    },
  },
})

export default function ThemeRegistry({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  )
}
