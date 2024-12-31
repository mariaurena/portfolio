import React, { useRef, useState } from 'react'
import { Box, useTheme, useMediaQuery } from '@mui/material'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'
import Arrow from '../components/Arrow'
import Cards from '../components/Cards'

const Gallery = () => {
  const theme = useTheme()
  const scrollRef = useRef(null)
  const [isDragging, setIsDragging] = useState(false)
  const isSmallScreen = useMediaQuery(theme.breakpoints.between('xs', 'sm'))

  const onMouseDown = (e) => {
    setIsDragging(true)
  }

  const onMouseUp = () => {
    setIsDragging(false)
  }

  const onWheel = (e) => {
    if (!isSmallScreen) {
      scrollRef.current.scrollLeft += e.deltaY
    }
  }

  const scrollLeftAction = () => {
    scrollRef.current.scrollLeft -= 300
  }

  const scrollRightAction = () => {
    scrollRef.current.scrollLeft += 300
  }

  return (
    <>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: {
            xs: 'auto',
            sm: '65vh',
          },
          position: 'relative',
          flexDirection: { xs: 'column', sm: 'row' },
          paddingLeft: { xs: '0.5rem', sm: '3rem' },
          paddingRight: { xs: '0.5rem', sm: '3rem' },
          overflow: 'hidden',
        }}
      >
        <Arrow
          scrollAction={scrollLeftAction}
          icon={<ArrowBackIosNewIcon sx={{ color: 'white' }} />}
          customStyles={{ left: 0 }}
        />
        <Box
          ref={scrollRef}
          onMouseDown={onMouseDown}
          onMouseUp={onMouseUp}
          onMouseLeave={onMouseUp}
          onWheel={onWheel}
          className="no-select"
          sx={{
            display: 'flex',
            whiteSpace: 'nowrap',
            gap: 3,
            overflowX: { xs: 'hidden', sm: 'auto' },
            overflowY: { xs: 'auto', sm: 'hidden' },
            cursor: isDragging ? 'grabbing' : 'grab',
            scrollbarWidth: 'none',
            '&::-webkit-scrollbar': {
              display: 'none',
            },
            alignItems: 'center',
            width: {
              xs: '90%',
              sm: 'inherit',
            },
            paddingTop: { xs: '3rem', sm: '0' },
            justifyContent: { xs: 'center', sm: 'start' },
          }}
        >
          <Cards />
        </Box>
        <Arrow
          scrollAction={scrollRightAction}
          icon={<ArrowForwardIosIcon sx={{ color: 'white' }} />}
          customStyles={{ right: 0 }}
        />
      </Box>
    </>
  )
}

export default Gallery
