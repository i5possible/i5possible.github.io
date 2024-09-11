import React from 'react'
import { AppBar, Box, Container, Toolbar, Typography } from '@mui/material'
import Link from 'next/link'

const NavigationBar = () => {
  const menuItems = [
    { label: 'Home', href: '/home' },
    { label: 'Blog', href: '/en' },
    { label: 'Contact', href: '/contact' },
  ]

  return (
    <AppBar
      sx={{
        backgroundColor: 'hsla(0, 0%, 100%, 0.6)',
        backdropFilter: 'blur(8px)',
      }}
      position="fixed"
      color="default"
      elevation={0}
    >
      <Container
        sx={{
          margin: '0 auto',
        }}
      >
        <Toolbar
          disableGutters
          sx={{
            padding: '0 2rem',
            height: 64,
          }}
        >
          <Typography
            variant="h5"
            noWrap
            component={Link}
            href="/home"
            sx={{
              mr: 2,
              fontWeight: 700,
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            i5possible
          </Typography>
          <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'center' }}>
            {menuItems.map((item) => (
              <Typography
                key={item.label}
                component={Link}
                href={item.href}
                variant={'h6'}
                sx={{
                  mx: 2,
                  color: 'inherit',
                  textDecoration: 'none',
                  position: 'relative',
                  '&:hover': {
                    color: 'primary.main',
                    '&::after': {
                      content: '""',
                      position: 'absolute',
                      width: '100%',
                      height: '3px',
                      bottom: -2,
                      left: 0,
                      backgroundColor: 'primary.main',
                      transition: 'all 0.3s ease',
                    },
                  },
                }}
              >
                {item.label}
              </Typography>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  )
}

export default NavigationBar
