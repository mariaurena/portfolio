import React, { useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import {
  Box,
  AppBar as AppbarMUI,
  Toolbar,
  Button,
  List,
  ListItemButton,
  Drawer,
  Switch,
  Typography,
  IconButton,
  ListItemText,
  Divider,
} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward'
import HighlightOffIcon from '@mui/icons-material/HighlightOff'

const Appbar = ({ isMagazinePage, checked, setChecked, textColor }) => {
  const navigate = useNavigate()
  const location = useLocation()
  const [drawerOpen, setDrawerOpen] = useState(false)

  const handleDrawerToggle = () => setDrawerOpen((prev) => !prev)
  const handleOnClick = (path) => {
    navigate(path)
    setDrawerOpen(false)
  }
  const handleToggleView = () => setChecked(!checked)

  const menuItems = [
    { label: 'About', path: '/about' },
    { label: 'Galería', path: '/home' },
    { label: 'CV', path: '/cv' },
    { label: 'Moodboard', path: '/moodboard' },
  ]

  return (
    <Box sx={{ padding: 0 }}>
      <AppbarMUI
        sx={{
          position: 'relative',
          backgroundColor: 'transparent',
          boxShadow: 'none',
          padding: '30px 0',
          height: { xs: '124px', sm: '180px' },
        }}
      >
        <Toolbar
          sx={{
            justifyContent: 'space-between',
            alignItems: { xs: 'center', sm: 'flex-start' },
            padding: '0px 6px!important',
          }}
        >
          {/* Logo y Menú a la derecha */}
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              width: '100%',
              alignItems: 'center',
            }}
          >
            <Button
              onClick={() => navigate('/')}
              sx={{
                textAlign: 'left',
                color: 'white',
                textTransform: 'none',
                backgroundColor: 'transparent',
                padding: 0,
                fontWeight: 'bold',
                fontSize: { xs: '17px', sm: '20px' },
                display: isMagazinePage ? { xs: 'none', sm: 'block' } : 'block',
                fontFamily: 'Oxanium',
              }}
            >
              MARÍA UREÑA LEGAZA
            </Button>

            <Button
              onClick={() => navigate('/')}
              sx={{
                textAlign: 'left',
                color: 'white',
                textTransform: 'none',
                backgroundColor: 'transparent',
                padding: 0,
                fontWeight: 'normal',
                display: { xs: isMagazinePage ? 'block' : 'none', sm: 'none' },
              }}
            >
              <Box display="flex">
                <ArrowBackIosIcon />
                <Typography
                  sx={{
                    fontFamily: 'Signika',
                    fontSize: '20px',
                    fontWeight: 'light',
                  }}
                >
                  Atrás
                </Typography>
              </Box>
            </Button>

            {/* Menú móvil */}
            <Box sx={{ display: { xs: 'flex', sm: 'none' } }}>
              <IconButton onClick={handleDrawerToggle} sx={{ color: 'white' }}>
                <MenuIcon />
              </IconButton>
              <Drawer
                anchor="right"
                open={drawerOpen}
                onClose={handleDrawerToggle}
                PaperProps={{
                  sx: {
                    width: '100%',
                    backgroundColor: 'gray',
                  },
                }}
              >
                <IconButton
                  onClick={handleDrawerToggle}
                  size="large"
                  sx={{
                    position: 'absolute',
                    top: '10px',
                    right: '10px',
                    zIndex: '9999',
                  }}
                >
                  <HighlightOffIcon sx={{ fontSize: '33px', color: 'black' }} />
                </IconButton>
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    height: '100%',
                    width: '90%',
                    textAlign: 'center',
                    padding: '20px',
                  }}
                  role="presentation"
                >
                  <List sx={{ width: '100%', paddingTop: '70px' }}>
                    {menuItems.map((item, index) => (
                      <Box
                        key={index}
                        sx={{ height: '60px', padding: '20px 10px' }}
                      >
                        <Box display="flex">
                          <ListItemText
                            disableTypography
                            sx={{
                              fontSize: '11px',
                              color: 'white',
                              width: '30%',
                            }}
                          >{`0${index + 1}.`}</ListItemText>
                          <ListItemButton
                            key={item.label}
                            onClick={() => handleOnClick(item.path)}
                            sx={{
                              fontSize: '20px',
                              color: 'white',
                              padding: '30px',
                              width: '60%',
                              fontFamily: 'Oxanium',
                              fontWeight: 'bold',
                            }}
                          >
                            {item.label}
                          </ListItemButton>
                          <ListItemButton
                            onClick={() => handleOnClick(item.path)}
                          >
                            <ArrowOutwardIcon sx={{ color: 'white' }} />
                          </ListItemButton>
                        </Box>
                        <Divider
                          sx={{ backgroundColor: 'white', width: '100%' }}
                        />
                      </Box>
                    ))}
                  </List>
                </Box>
              </Drawer>
            </Box>
            {/* Menú a la derecha */}
            <Box sx={{ display: { xs: 'none', sm: 'flex' } }}>
              <List sx={{ display: 'flex', gap: '4px', p: 0 }}>
                {menuItems.map((item) => {
                  const isActive =
                    location.pathname === '/' && item.path === '/home'
                      ? true
                      : location.pathname.includes(item.path)
                  return (
                    <ListItemButton
                      key={item.label}
                      onClick={() => handleOnClick(item.path)}
                      sx={{
                        color: 'white',
                        textDecoration: isActive ? 'underline' : 'none',
                        textUnderlineOffset: '10px',
                        '&:hover': {
                          textDecoration: 'underline',
                        },
                        justifyContent: 'center',
                        fontSize: '20px',
                        fontWeight: 'bold', // También puedes cambiar esto según la variante que prefieras (por ejemplo, 'bold' o 'light')
                        fontFamily: 'Oxanium',
                      }}
                    >
                      {item.label}
                    </ListItemButton>
                  )
                })}
              </List>
            </Box>
          </Box>

          {/* Switch para vista de revista */}
          {isMagazinePage && (
            <Box
              sx={{
                position: 'absolute',
                left: '50%',
                transform: 'translateX(-50%)',
                marginTop: { xs: '130px', sm: '30px' },
                marginBottom: { xs: '30px' },
              }}
            >
              <Switch
                color="default"
                checked={checked}
                onChange={handleToggleView}
                sx={{
                  '& .MuiSwitch-switchBase': { color: 'white' },
                  '& .MuiSwitch-track': { backgroundColor: 'white' },
                }}
              />
            </Box>
          )}
        </Toolbar>
      </AppbarMUI>
    </Box>
  )
}

export default Appbar
