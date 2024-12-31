import React, { useRef, useState, useEffect } from 'react'
import { Divider, Typography, Button, useMediaQuery, Box } from '@mui/material'
import BaseLayout from '../layouts/BaseLayout'

const CVPage = () => {
  const pdfRef = useRef()
  const [imageLoaded, setImageLoaded] = useState(false)

  const isSmallScreen = useMediaQuery('(max-width: 1407px)')

  const handleImageLoad = () => {
    setImageLoaded(true)
  }

  const exportToPDF = async () => {
    const link = document.createElement('a')
    link.href = 'cv/CV_Maria_Urena.pdf'
    link.download = 'CV_Maria_Urena.pdf'
    link.click()
  }

  useEffect(() => {
    window.scrollTo(0, 0) // Desplaza la página al inicio
  }, [])

  return (
    <BaseLayout
      maxWidth="xl"
      bgFooter="gray"
      bg="gray"
      customChildrenStyles={{
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <>
        <div
          style={{
            backgroundColor: 'white',
            width: '60%',
            height: 'auto',
            padding: '40px',
            position: 'relative',
            display: isSmallScreen ? 'none' : 'block',
          }}
          ref={pdfRef}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <Typography>674 55 89 81</Typography>
            <Typography>maria.urena.25c@gmail.com</Typography>
          </div>
          <Divider sx={{ paddingTop: '18px', borderColor: 'black' }} />
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'flex-end',
              paddingTop: '70px',
            }}
          >
            <div>
              <Typography sx={{ fontWeight: 'bold', fontSize: '23px' }}>
                María Ureña Legaza
              </Typography>
              <Typography>Ingeniera de software</Typography>
            </div>
            <img
              src="https://res.cloudinary.com/dr5yhn480/image/upload/v1730744607/portfolio/sobre-mi/hlgg7klnfx8yg60vhzma.jpg"
              width="210px"
              marginBottom="0px"
              onLoad={handleImageLoad}
            />
          </div>
          <Divider sx={{ paddingTop: '18px', borderColor: 'black' }} />
          <Typography sx={{ fontSize: '13px', color: 'gray' }}>
            Experiencia
          </Typography>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              gap: '50px',
              paddingTop: '25px',
            }}
          >
            <div style={{ width: '50%' }}>
              <div>
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}
                >
                  <Typography sx={{ fontSize: '12px', color: 'gray' }}>
                    feb 2023 - jul 2023
                  </Typography>
                  <Typography sx={{ fontSize: '12px', color: 'gray' }}>
                    Granada
                  </Typography>
                </div>
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}
                >
                  <Typography sx={{ fontWeight: 'bold' }}>
                    Equipo de soporte técnico
                  </Typography>
                  <Typography sx={{ fontSize: '14px' }}>Atlax 360</Typography>
                </div>
                <Typography
                  sx={{
                    paddingTop: '30px',
                    textAlign: 'justify',
                    fontSize: '15px',
                  }}
                >
                  Supervisión de la carga de datos de clientes en FTP,
                  resolviendo incidencias técnicas y gestionando la comunicación
                  con los clientes en caso de ser necesario. Verificación de la
                  ejecución correcta del pipeline de datos y elaboración de
                  reportes semanales detallados para optimizar la precisión y
                  eficiencia del proceso.
                </Typography>
              </div>
              <Divider sx={{ paddingTop: '18px', borderColor: 'black' }} />
              <Typography sx={{ fontSize: '13px', color: 'gray' }}>
                Educación
              </Typography>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  paddingTop: '25px',
                }}
              >
                <Typography sx={{ fontSize: '12px', color: 'gray' }}>
                  sep 2018 - jul 2023
                </Typography>
                <Typography sx={{ fontSize: '12px', color: 'gray' }}>
                  Granada
                </Typography>
              </div>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
              >
                <Typography sx={{ fontWeight: 'bold' }}>
                  Ingeniería Informática
                </Typography>
                <Typography sx={{ fontSize: '14px' }}>
                  Universidad de Granada
                </Typography>
              </div>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  paddingTop: '25px',
                }}
              >
                <Typography sx={{ fontSize: '12px', color: 'gray' }}>
                  sep 2021 - jul 2022
                </Typography>
                <Typography sx={{ fontSize: '12px', color: 'gray' }}>
                  Lisboa
                </Typography>
              </div>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
              >
                <Typography sx={{ fontWeight: 'bold' }}>
                  Computer Science and Engineering
                </Typography>
                <Typography sx={{ fontSize: '14px' }}>
                  Instituto Superior Técnico
                </Typography>
              </div>
              <Divider sx={{ paddingTop: '18px', borderColor: 'black' }} />
              <Typography sx={{ fontSize: '13px', color: 'gray' }}>
                Certificaciones
              </Typography>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  paddingTop: '25px',
                }}
              >
                <Typography sx={{ fontSize: '12px', color: 'gray' }}>
                  oct 2023
                </Typography>
                <Typography sx={{ fontSize: '12px', color: 'gray' }}>
                  Online
                </Typography>
              </div>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
              >
                <Typography sx={{ fontWeight: 'bold' }}>
                  Python 101 for Data Science
                </Typography>
                <Typography sx={{ fontSize: '14px' }}>
                  Cognitive class
                </Typography>
              </div>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  paddingTop: '25px',
                }}
              >
                <Typography sx={{ fontSize: '12px', color: 'gray' }}>
                  dic 2023
                </Typography>
                <Typography sx={{ fontSize: '12px', color: 'gray' }}>
                  Online
                </Typography>
              </div>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
              >
                <Typography sx={{ fontWeight: 'bold' }}>
                  AWS Certified Cloud Practiotioner
                </Typography>
                <Typography sx={{ fontSize: '14px' }}>
                  Amazon Web Service(AWS)
                </Typography>
              </div>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  paddingTop: '25px',
                }}
              >
                <Typography sx={{ fontSize: '12px', color: 'gray' }}>
                  dic 2023 - feb 2024
                </Typography>
                <Typography sx={{ fontSize: '12px', color: 'gray' }}>
                  Online
                </Typography>
              </div>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
              >
                <Typography sx={{ fontWeight: 'bold' }}>
                  React: De cero a experto (Hooks y MERN){' '}
                </Typography>
                <Typography sx={{ fontSize: '14px' }}>Udemy</Typography>
              </div>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  paddingTop: '25px',
                }}
              >
                <Typography sx={{ fontSize: '12px', color: 'gray' }}>
                  feb 2024 - mar 2024
                </Typography>
                <Typography sx={{ fontSize: '12px', color: 'gray' }}>
                  Online
                </Typography>
              </div>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
              >
                <Typography sx={{ fontWeight: 'bold' }}>
                  Microfrotends with React: A Complete Developer's Guide
                </Typography>
                <Typography sx={{ fontSize: '14px' }}>Udemy</Typography>
              </div>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  paddingTop: '25px',
                }}
              >
                <Typography sx={{ fontSize: '12px', color: 'gray' }}>
                  sept 2024
                </Typography>
                <Typography sx={{ fontSize: '12px', color: 'gray' }}>
                  Online
                </Typography>
              </div>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
              >
                <Typography sx={{ fontWeight: 'bold' }}>
                  Material UI - The Complete Guide With React (2024)
                </Typography>
                <Typography sx={{ fontSize: '14px' }}>Udemy</Typography>
              </div>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  paddingTop: '25px',
                }}
              >
                <Typography sx={{ fontSize: '12px', color: 'gray' }}>
                  oct 2024 - actualidad
                </Typography>
                <Typography sx={{ fontSize: '12px', color: 'gray' }}>
                  Online
                </Typography>
              </div>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
              >
                <Typography sx={{ fontWeight: 'bold' }}>
                  Next.js: El framework de React para producción
                </Typography>
                <Typography sx={{ fontSize: '14px' }}>Udemy</Typography>
              </div>
            </div>
            <div style={{ width: '50%' }}>
              <div>
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}
                >
                  <Typography sx={{ fontSize: '12px', color: 'gray' }}>
                    oct 2023 - actualidad
                  </Typography>
                  <Typography sx={{ fontSize: '12px', color: 'gray' }}>
                    Granada
                  </Typography>
                </div>
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}
                >
                  <Typography sx={{ fontWeight: 'bold' }}>
                    Desarrolladora front-end
                  </Typography>
                  <Typography sx={{ fontSize: '14px' }}>
                    Grupo Trevenque
                  </Typography>
                </div>
                <Typography
                  sx={{
                    paddingTop: '30px',
                    textAlign: 'justify',
                    fontSize: '15px',
                  }}
                >
                  Desarrollo de una aplicación frontend en React con
                  arquitectura de microfrontends, diseñada para ser reutilizable
                  en futuros proyectos de la empresa. Uso de Material-UI como
                  biblioteca de diseño para construir componentes estilizados y
                  coherentes con los prototipos.
                </Typography>
              </div>
              <Divider sx={{ paddingTop: '18px', borderColor: 'black' }} />
              <Typography sx={{ fontSize: '13px', color: 'gray' }}>
                Habilidades
              </Typography>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  paddingTop: '25px',
                }}
              >
                <div style={{ width: '50%' }}>
                  <Typography sx={{ fontSize: '15px' }}>
                    <strong>Lenguajes de programación</strong>- C, C++, Ruby,
                    Java, Python, PHP
                  </Typography>
                  <Typography sx={{ fontSize: '15px', paddingTop: '8px' }}>
                    <strong>Metodología ágil</strong>- SCRUM
                  </Typography>
                  <Typography sx={{ fontSize: '15px', paddingTop: '8px' }}>
                    <strong>Móvil</strong>- Android, Flutter
                  </Typography>
                </div>
                <div style={{ width: '50%' }}>
                  <Typography sx={{ fontSize: '15px' }}>
                    <strong>Web</strong>- HTML, CSS, JavaScript, React,
                    MaterialUI
                  </Typography>
                  <Typography sx={{ fontSize: '15px', paddingTop: '8px' }}>
                    <strong>Microfrontends</strong>- Vite, Webpack
                  </Typography>
                  <Typography sx={{ fontSize: '15px', paddingTop: '8px' }}>
                    <strong>Buenas prácticas</strong>- SOLID, Hexagonal, CQRS,
                    Git
                  </Typography>
                </div>
              </div>
              <Divider sx={{ paddingTop: '18px', borderColor: 'black' }} />
              <Typography sx={{ fontSize: '13px', color: 'gray' }}>
                Proyecto personal
              </Typography>
              <Typography
                sx={{ fontSize: '12px', color: 'gray', paddingTop: '30px' }}
              >
                2022 - 2023
              </Typography>
              <Typography
                sx={{
                  textAlign: 'justify',
                  fontSize: '15px',
                  paddingTop: '8px',
                }}
              >
                Desarrollé una aplicación de edición de fotos para Android, la
                cual permite a los usuarios aplicar filtros y realizar ajustes
                visuales. Este proyecto me permitió combinar una vez más mis
                habilidades en informática y fotografía, creando una interfaz
                intuitiva y funcional para mejorar la experiencia del usuario.
              </Typography>
              <Typography
                sx={{ fontSize: '12px', color: 'gray', paddingTop: '30px' }}
              >
                2024
              </Typography>
              <Typography
                sx={{
                  textAlign: 'justify',
                  fontSize: '15px',
                  paddingTop: '8px',
                }}
              >
                Esta página web ha sido desarrollada por mí utilizando
                JavaScript, React y Material-UI. La diseñé como una galería
                interactiva para mostrar mis fotografías, combinando la
                fotografía con mi interés en el desarrollo web. A través de este
                proyecto, busqué crear una experiencia visual atractiva y
                funcional que refleje mi pasión por ambos mundos.
              </Typography>
            </div>
          </div>
        </div>
        <Box
          sx={{
            position: 'relative',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          {/* Imagen */}
          <Box
            component="img"
            src="/cv.png"
            sx={{
              display: isSmallScreen ? 'flex' : 'none',
              justifyContent: 'center',
              alignItems: 'center',
              width: '90%',
              filter: 'blur(3px)',
              borderRadius: '8px',
              paddingTop: '30px',
            }}
          />

          <Button
            onClick={exportToPDF}
            sx={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              color: 'white',
              border: '1px solid white',
              borderRadius: '30px',
              fontSize: '12px',
              width: '170px',
              '&:hover': {
                color: 'gray',
                borderColor: 'gray',
              },
              justifyContent: 'center',
              display: isSmallScreen ? 'flex' : 'none',
              backgroundColor: 'gray',
            }}
          >
            Descargar CV en PDF
          </Button>

          <Button
            onClick={exportToPDF}
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
            Descargar CV en PDF
          </Button>
        </Box>
      </>
    </BaseLayout>
  )
}

export default CVPage
