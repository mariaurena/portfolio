import { Container } from '@mui/material'
import { useLocation } from 'react-router-dom'

import Appbar from '../components/Appbar'
import Footer from '../components/Footer'

const BaseLayout = ({
  children,
  bg,
  bgImage,
  textColor,
  bgFooter,
  checked,
  setChecked,
  customChildrenStyles,
}) => {
  const location = useLocation()
  const isMagazinePage = location.pathname === '/galeria'

  return (
    <Container
      maxWidth={false}
      sx={{
        padding: '0px 35px!important',
        margin: '0!important',
        minHeight: '100vh',
        backgroundImage: bgImage ? `url(${bgImage})` : 'none',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        background: '#3333',
      }}
    >
      <Appbar
        textColor={textColor}
        checked={checked}
        setChecked={setChecked}
        isMagazinePage={isMagazinePage}
      />
      <div style={{ ...customChildrenStyles }}>{children}</div>
      <Footer textColor={textColor} bgFooter="#333333" />
    </Container>
  )
}

export default BaseLayout
