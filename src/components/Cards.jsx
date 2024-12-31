import React from 'react'
import { Box, Typography } from '@mui/material'
import Card from './Card'
import cardsData from '../data/cardsData'

const Cards = (props) => {
  return (
    <Box
      sx={{
        display: 'flex',
        paddingBottom: { xs: '10%', sm: '0' },
        flexDirection: { xs: 'column', sm: 'row' },
        borderTop: { xs: 'none', sm: '1px solid white' },
        borderBottom: { xs: 'none', sm: '1px solid white' },
      }}
    >
      {cardsData.map((card, index) => (
        <Card
          key={card.id}
          id={card.id}
          img={card.img}
          color={card.color}
          hoverText={
            <Typography variant="body1">
              {card.text.split('\n').map((line, i) => (
                <React.Fragment key={i}>
                  {line}
                  {i < card.text.split('\n').length - 1 && <br />}
                </React.Fragment>
              ))}
            </Typography>
          }
          index={index}
        />
      ))}
    </Box>
  )
}

export default Cards
