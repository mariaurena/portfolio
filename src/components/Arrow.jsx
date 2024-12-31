import React from 'react'

import { IconButton } from '@mui/material'

const Arrow = (props) => {
  return (
    <IconButton
      onClick={props.scrollAction}
      sx={{
        position: 'absolute',
        top: '50%',
        transform: 'translateY(-50%)',
        padding: '10px',
        display: {
          xs: 'none',
          sm: 'block',
        },
        ...props.customStyles,
      }}
    >
      {props.icon}
    </IconButton>
  )
}

export default Arrow
