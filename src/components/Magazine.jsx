import React, { useRef } from 'react'
import HTMLFlipBook from 'react-pageflip'
import { Container, IconButton, useMediaQuery, useTheme } from '@mui/material'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'

const Page = React.forwardRef(({ title, image }, ref) => (
  <div ref={ref} className="page" style={styles.page}>
    <img src={image} alt={title} style={styles.image} />
  </div>
))

const Magazine = ({ images }) => {
  const flipBookRef = useRef(null)
  const theme = useTheme()

  const isSmallScreen = useMediaQuery(theme.breakpoints.between('xs', 'sm'))

  const dimensions = isSmallScreen
    ? { width: 290, height: 450 }
    : { width: 500, height: 747.48 }

  const nextPage = () => {
    flipBookRef.current.pageFlip().flipNext()
  }

  const prevPage = () => {
    flipBookRef.current.pageFlip().flipPrev()
  }

  return (
    <Container
      style={{
        ...styles.container,
      }}
    >
      {/* Flecha izquierda */}
      <IconButton onClick={prevPage} sx={styles.arrowLeft}>
        <ArrowBackIosIcon fontSize="large" />
      </IconButton>

      <HTMLFlipBook
        ref={flipBookRef}
        width={dimensions.width}
        height={dimensions.height}
        style={styles.flipbook}
      >
        {images.map((image, index) => (
          <Page key={index} title={`Página ${index + 1}`} image={image} />
        ))}
      </HTMLFlipBook>

      {/* Flecha derecha */}
      <IconButton onClick={nextPage} sx={styles.arrowRight}>
        <ArrowForwardIosIcon fontSize="large" />
      </IconButton>
    </Container>
  )
}

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    minHeight: '70vh',
    overflow: 'hidden',
  },
  flipbook: {
    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.2)',
    overflow: 'hidden',
  },
  page: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '20px',
    border: '1px solid #ddd',
    boxShadow: 'inset 0 0 10px rgba(0, 0, 0, 0.1)',
  },
  image: {
    width: '100%',
    height: 'auto',
    marginBottom: '20px',
  },
  arrowLeft: {
    position: 'absolute',
    left: '10px',
    top: '50%',
    transform: 'translateY(-50%)',
    zIndex: 1000,
    color: 'white',
  },
  arrowRight: {
    position: 'absolute',
    right: '10px',
    top: '50%',
    transform: 'translateY(-50%)',
    zIndex: 1000,
    color: 'white',
  },
}

export default Magazine
