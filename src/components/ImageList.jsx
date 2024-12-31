import * as React from 'react'
import {
  Box,
  ImageList as ImageListMUI,
  ImageListItem,
  useMediaQuery,
} from '@mui/material'

const ImageList = ({ images, ncols }) => {
  const isSmallScreen = useMediaQuery('(max-width:800px)') // Pantallas pequeñas
  const isMediumScreen = useMediaQuery('(max-width:1200px)') // Pantallas medianas
  const cols = isSmallScreen ? 1 : isMediumScreen ? 2 : ncols ? ncols : 3

  return (
    <Box sx={{ padding: '20px' }}>
      <ImageListMUI variant="masonry" cols={cols} gap={20}>
        {images.map((item) => (
          <ImageListItem key={item}>
            <img
              srcSet={item}
              src={item}
              loading="lazy"
              style={{ marginBottom: '0px' }}
            />
          </ImageListItem>
        ))}
      </ImageListMUI>
    </Box>
  )
}

export default ImageList
