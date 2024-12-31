import React from 'react'
import {
  Box,
  AppBar as AppbarMUI,
  Toolbar,
  Typography,
  IconButton,
} from '@mui/material'

import InstagramIcon from '@mui/icons-material/Instagram'
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward'

const Footer = (props) => {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <Box
      sx={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        width: '100%',
        boxShadow: 'none',
        zIndex: 1200,
      }}
    >
      <AppbarMUI
        sx={{
          position: 'static',
          backgroundColor: props.bgFooter,
          boxShadow: 'none',
          paddingBottom: 7,
          height: '1rem',
        }}
      >
        <Toolbar
          sx={{
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '15px',
            padding: '0px 30px!important',
          }}
        >
          <Typography
            sx={{
              color: 'white',
              fontFamily: 'Signika',
              fontWeight: 'light',
              fontSize: { xs: '15px', sm: '22px' },
            }}
          >
            maria.urena.25c@gmail.com
          </Typography>

          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <IconButton onClick={handleScrollToTop}>
              <ArrowUpwardIcon
                sx={{ color: 'white', fontSize: { xs: '20px', sm: '30px' } }}
              />
            </IconButton>
            <IconButton
              onClick={() =>
                window.open('https://www.instagram.com/mery.ure/', '_blank')
              }
            >
              <InstagramIcon
                sx={{ color: 'white', fontSize: { xs: '20px', sm: '30px' } }}
              />
            </IconButton>
          </Box>
        </Toolbar>
      </AppbarMUI>
    </Box>
  )
}

export default Footer
