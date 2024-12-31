import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Box, Button, Typography, useMediaQuery, useTheme } from '@mui/material'
import BaseLayout from '../layouts/BaseLayout'

const AboutPage = () => {
  const navigate = useNavigate()
  const theme = useTheme()
  const isSmallScreen = useMediaQuery('(max-width: 1480px)')

  const handleOnClick = () => {
    navigate('/cv')
  }

  return (
    <BaseLayout maxWidth="xl" bgFooter="#fff9d4">
      {isSmallScreen ? (
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            paddingLeft: '10px',
            paddingRight: '10px',
            gap: '45px',
            height: 'auto',
            alignItems: 'center',
          }}
        >
          <img
            src="https://res.cloudinary.com/dr5yhn480/image/upload/v1729532615/IMG_8076_Original_wqabm5.jpg"
            loading="lazy"
            style={{
              width: '100%',
              maxWidth: '100%',
              height: 'auto',
              margin: '0',
            }}
          />
          <Typography
            sx={{
              color: 'white',
              fontFamily: 'Signika',
              fontSize: '20px',
              fontWeight: 'light',
            }}
          >
            Hola, <br />
            Me llamo María Ureña Legaza, soy ingeniera informática y una
            apasionada de la fotografía. Con esta página web, que he programado
            utilizando mis conocimientos en desarrollo web (JavaScript y React),
            quiero crear un espacio creativo para mostrar algunas de mis fotos.
            Mi objetivo es presentarlo de la forma más estética posible,
            combinando mi amor por la fotografía y la tecnología. ¡Espero que
            disfrutes el recorrido!
          </Typography>
          <img
            src="https://res.cloudinary.com/dr5yhn480/image/upload/v1729622753/portfolio/sobre-mi/lrcgwvhc0rcurxxk2r5b.png"
            loading="lazy"
            style={{ width: '400px', margin: '0' }}
          />

          <Typography
            sx={{
              color: 'white',
              fontFamily: 'Signika',
              fontSize: '20px',
              fontWeight: 'light',
            }}
          >
            Siempre he sentido que la tecnología y el arte no están tan
            separados como muchos piensan. Crear una página web es, en cierto
            sentido, como componer una fotografía: se trata de balance, simetría
            y expresión.
          </Typography>
          <img
            src="https://res.cloudinary.com/dr5yhn480/image/upload/v1729532613/IMG_4755_Original_kdiane.jpg"
            loading="lazy"
            style={{ width: '100%', margin: '0' }}
          />
          <img
            src="https://res.cloudinary.com/dr5yhn480/image/upload/v1729532613/IMG_4756_Original_aalwpw.jpg"
            loading="lazy"
            style={{ width: '100%', margin: '0' }}
          />
          <Typography
            sx={{
              color: 'white',
              fontFamily: 'Signika',
              fontSize: '20px',
              fontWeight: 'light',
            }}
          >
            Desarrollar esta página me ha permitido unir mis dos pasiones y
            mostrar lo mejor de ambas. Cada imagen que ves aquí no solo
            representa un momento capturado, sino también un proyecto personal
            en el que he puesto tanto técnica como corazón.
          </Typography>
          <img
            src="https://res.cloudinary.com/dr5yhn480/image/upload/v1729532614/IMG_5642_Original_rmrnr3.jpg"
            loading="lazy"
          />
          <Box sx={{ height: '160px' }}>
            <Button
              onClick={handleOnClick}
              sx={{
                marginTop: '30px',
                marginBottom: '80px',
                padding: '13px',
                color: 'white',
                border: '1px solid white',
                borderRadius: '30px',
                fontSize: '15px',
                width: '250px',
                '&:hover': {
                  color: 'gray',
                  borderColor: 'gray',
                },
                justifyContent: 'center',
                display: isSmallScreen ? 'none' : 'flex',
              }}
            >
              Ver mi CV
            </Button>
          </Box>
        </Box>
      ) : (
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            // height: 'auto',
            paddingLeft: '45px',
            marginTop: '40px',
          }}
        >
          <Box display="flex" flexDirection="column">
            <Box display="flex">
              <img
                src="https://res.cloudinary.com/dr5yhn480/image/upload/v1729532615/IMG_8076_Original_wqabm5.jpg"
                loading="lazy"
                style={{ width: '600px', margin: '0' }}
              />
              <Typography
                sx={{
                  paddingLeft: '32px',
                  width: '300px',
                  paddingTop: '150px',
                  color: 'white',
                  fontFamily: 'Signika',
                  fontSize: '20px',
                  fontWeight: 'light',
                }}
              >
                Hola, <br />
                Me llamo María Ureña Legaza, soy ingeniera informática y una
                apasionada de la fotografía. Con esta página web, que he
                programado utilizando mis conocimientos en desarrollo web
                (JavaScript y React), quiero crear un espacio creativo para
                mostrar algunas de mis fotos. Mi objetivo es presentarlo de la
                forma más estética posible, combinando mi amor por la fotografía
                y la tecnología. ¡Espero que disfrutes el recorrido!
              </Typography>
            </Box>
            <Box
              display="flex"
              gap="150px"
              paddingTop="45px"
              alignItems="center"
            >
              <Typography
                sx={{
                  width: '200px',
                  color: 'white',
                  fontFamily: 'Signika',
                  fontSize: '20px',
                  fontWeight: 'light',
                }}
              >
                Desarrollar esta página me ha permitido unir mis dos pasiones y
                mostrar lo mejor de ambas. Cada imagen que ves aquí no solo
                representa un momento capturado, sino también un proyecto
                personal en el que he puesto tanto técnica como corazón.
              </Typography>
              <Box
                display="flex"
                flexDirection="row"
                marginTop="45px"
                gap="45px"
              >
                <img
                  src="https://res.cloudinary.com/dr5yhn480/image/upload/v1729532613/IMG_4755_Original_kdiane.jpg"
                  loading="lazy"
                  style={{ width: '250px', margin: '0' }}
                />
                <img
                  src="https://res.cloudinary.com/dr5yhn480/image/upload/v1729532613/IMG_4756_Original_aalwpw.jpg"
                  loading="lazy"
                  style={{ width: '250px', margin: '0' }}
                />
              </Box>
            </Box>
          </Box>
          <Box
            display="flex"
            flexDirection="column"
            position="absolute"
            right="45px"
            sx={{
              width: '400px',
            }}
          >
            <img
              src="https://res.cloudinary.com/dr5yhn480/image/upload/v1729622753/portfolio/sobre-mi/lrcgwvhc0rcurxxk2r5b.png"
              loading="lazy"
              style={{
                width: '400px',
                right: '45px',
                margin: '0',
              }}
            />
            <Typography
              sx={{
                width: '200px',
                paddingTop: '32px',
                color: 'white',
                fontFamily: 'Signika',
                fontSize: '20px',
                fontWeight: 'light',
              }}
            >
              Siempre he sentido que la tecnología y el arte no están tan
              separados como muchos piensan. Crear una página web es, en cierto
              sentido, como componer una fotografía: se trata de balance,
              simetría y expresión.
            </Typography>
            <img
              src="https://res.cloudinary.com/dr5yhn480/image/upload/v1729532614/IMG_5642_Original_rmrnr3.jpg"
              loading="lazy"
              style={{
                width: '400px',
                right: '45px',
                margin: '0',
                paddingTop: '32px',
              }}
            />
          </Box>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              width: '100%',
              marginBottom: '100px',
              paddingTop: '80px',
            }}
          >
            <Button
              onClick={handleOnClick}
              sx={{
                marginTop: '30px',
                marginBottom: '80px',
                padding: '13px',
                color: 'white',
                border: '1px solid white',
                borderRadius: '30px',
                fontSize: '15px',
                width: '250px',
                '&:hover': {
                  color: 'gray',
                  borderColor: 'gray',
                },
                justifyContent: 'center',
                display: isSmallScreen ? 'none' : 'flex',
              }}
            >
              Ver mi CV
            </Button>
          </Box>
        </Box>
      )}
    </BaseLayout>
  )
}

export default AboutPage
