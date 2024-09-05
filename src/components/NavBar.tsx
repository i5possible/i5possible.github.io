import React from 'react'
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Menu,
  MenuItem,
  Container,
} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import Link from 'next/link'

const NavBar: React.FC = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl)

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <AppBar position="static">
      <Container>
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={handleClick}
            sx={{ display: { xs: 'block', md: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link href="/" passHref>
              <Typography
                variant="h6"
                color="inherit"
                sx={{ textDecoration: 'none', color: 'inherit' }}
              >
                My Blog
              </Typography>
            </Link>
          </Typography>
          <div style={{ display: 'flex', gap: '16px', marginLeft: 'auto' }}>
            <Button color="inherit">
              <Link href="/" passHref>
                Home
              </Link>
            </Button>
            <Button color="inherit">
              <Link href="/about" passHref>
                About
              </Link>
            </Button>
            <Button color="inherit">
              <Link href="/contact" passHref>
                Contact
              </Link>
            </Button>
          </div>
          <Menu
            id="menu-appbar"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            sx={{ display: { xs: 'block', md: 'none' } }}
          >
            <MenuItem onClick={handleClose}>
              <Link href="/" passHref>
                Home
              </Link>
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <Link href="/about" passHref>
                About
              </Link>
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <Link href="/contact" passHref>
                Contact
              </Link>
            </MenuItem>
          </Menu>
        </Toolbar>
      </Container>
    </AppBar>
  )
}

export default NavBar
