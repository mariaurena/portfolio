import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { useMediaQuery, useTheme } from '@mui/material'

import BaseLayout from '../layouts/BaseLayout'
import Magazine from '../components/Magazine'
import ImageList from '../components/ImageList'
import dataConfig from '../data/dataConfig'

const MagazinePage = () => {
  const theme = useTheme()
  const isSmallScreen = useMediaQuery(theme.breakpoints.between('xs', 'sm'))
  const [checked, setChecked] = useState(isSmallScreen ? true : false)
  const id = useSelector((state) => state.id.id)
  const currentConfig = dataConfig[id]

  return (
    <BaseLayout
      maxWidth="xl"
      // bg={checked ? currentConfig.bgImageList : currentConfig.bg}
      bg="#333333"
      bgImage={currentConfig.bgImage}
      // textColor={currentConfig.textColor}
      textColor="white"
      // bgFooter={currentConfig.bgFooter}
      bgFooter="#333333"
      checked={checked}
      setChecked={setChecked}
    >
      {checked ? (
        <ImageList images={currentConfig.imagesList} />
      ) : (
        <Magazine images={currentConfig.images} />
      )}
    </BaseLayout>
  )
}

export default MagazinePage
