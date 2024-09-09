import React from 'react'
import { AppBar, Toolbar, Typography, Box, Container } from '@mui/material'
import Link from 'next/link'

const NavigationBar = () => {
  const menuItems = [
    { label: 'Home', href: '/home' },
    { label: 'Blog', href: '/en' },
    { label: 'Contact', href: '/contact' },
  ]

  return (
    <AppBar position="static" color="default" elevation={0}>
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{ height: 64 }}>
          <Typography
            variant="h6"
            noWrap
            component={Link}
            href="/home"
            sx={{
              mr: 2,
              fontWeight: 700,
              color: 'inherit',
              textDecoration: 'none',
              '&:hover': {
                color: 'primary.main',
              },
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
                      height: '2px',
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
