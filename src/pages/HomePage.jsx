import React from 'react'

import BaseLayout from '../layouts/BaseLayout'
import Gallery from '../components/Gallery'

const HomePage = () => {
  return (
    <BaseLayout maxWidth="xl" bgFooter="#333333" textColor="white">
      <Gallery />
    </BaseLayout>
  )
}

export default HomePage
