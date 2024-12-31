// theme.js
import { createTheme } from '@mui/material/styles'

const theme = createTheme({
  typography: {
    fontFamily: "'Merriweather', serif",
  },
  components: {
    MuiTypography: {
      styleOverrides: {
        body1: {
          fontFamily: "'Merriweather', serif",
          fontWeight: 400,
        },
        body2: {
          fontFamily: "'PT MONO', monospace",
          fontWeight: 400,
        },
      },
    },
  },
})

export default theme
