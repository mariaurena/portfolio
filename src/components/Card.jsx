import React, { useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import {
  Card as CardMUI,
  CardMedia,
  Typography,
  Box,
  Button,
} from '@mui/material'
import { setId } from '../state/idSlice'

const Card = (props) => {
  const cardRef = useRef()
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [showHoverText, setShowHoverText] = React.useState(false)

  const handleOnClick = () => {
    dispatch(setId(props.id))
    navigate('/galeria')
  }

  const handleTouchStart = () => {
    const rect = cardRef.current.getBoundingClientRect()
    setShowHoverText(true)
  }

  const handleTouchEnd = () => {
    setShowHoverText(false)
  }

  return (
    <Button
      onClick={handleOnClick}
      sx={{
        textDecoration: 'none',
        color: 'inherit',
        height: '100%',
        padding: 0,
        paddingBottom: { xs: '20px', sm: '0' },
      }}
    >
      <Box
        ref={cardRef}
        onMouseEnter={handleTouchStart}
        onMouseLeave={handleTouchEnd}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        sx={{
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          margin: 0,
          width: {
            xs: 400,
            sm: 180,
            md: 200,
            lg: 250,
          },
          height: '50%',
          borderLeft: {
            xs: 'none',
            sm: props.index === 0 ? '1px solid white' : 'none',
          },
          borderRight: { xs: 'none', sm: '1px solid white' },
          padding: { xs: 'none', sm: '20px' },
        }}
      >
        <CardMUI sx={{ width: '100%', height: 'auto' }}>
          <CardMedia
            sx={{
              height: { xs: 400, sm: 180, md: 200, lg: 250 },
              width: { xs: 400, sm: 180, md: 200, lg: 250 },
            }}
            image={props.img}
            title={props.title}
          />
        </CardMUI>
        {showHoverText && (
          <Box
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: 'rgba(0, 0, 0, 0.5)',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white',
              padding: '1rem',
              textAlign: 'center',
              zIndex: 1,
              pointerEvents: 'none',
              overflow: 'hidden',
              display: 'flex',
              height: '78.5%',
            }}
          >
            {props.hoverText}
          </Box>
        )}
        <Box sx={{ width: '100%' }}>
          <Box
            sx={{
              width: '100%',
              height: { xs: 6, sm: 8, md: 10, lg: 10 },
              backgroundColor: 'transparent',
            }}
          />
          <Box
            sx={{
              width: '100%',
              height: { xs: 30, sm: 25, md: 35, lg: 40 },
              backgroundColor: props.color,
            }}
          />
          <Typography variant="body2" mt={1} fontSize="17px" color="white">
            {props.id}
          </Typography>
        </Box>
      </Box>
    </Button>
  )
}

export default Card
