import React from 'react'
import BaseLayout from '../layouts/BaseLayout'
import ImageList from '../components/ImageList'

const images = [
  'https://i.pinimg.com/736x/4c/52/9f/4c529f083caa73c68fa22822bb01fe2a.jpg',
  'https://i.pinimg.com/236x/d2/8f/76/d28f76e803093041ddc6970c185362a8.jpg',
  'https://i.pinimg.com/474x/e2/e4/a2/e2e4a21382507433812516a1f5e3985c.jpg',
  'https://i.pinimg.com/236x/f9/9f/7d/f99f7d8a24327fd42a596d07d16f5c03.jpg',
  'https://i.pinimg.com/736x/43/1b/52/431b52a2006a151f8efdcd2c52bf4053.jpg',
  'https://i.pinimg.com/236x/da/af/6f/daaf6f6de36acac7314cc56465153798.jpg',
  'https://i.pinimg.com/236x/d9/62/92/d96292cf5aef4d02b43f6f767e34ef74.jpg',
  'https://i.pinimg.com/236x/be/27/4e/be274edcc86dbf1f967cf96a67f0fc8a.jpg',
  'https://i.pinimg.com/236x/33/5c/e4/335ce4039bedc4b1787b56404767a1e1.jpg',
  'https://i.pinimg.com/236x/4f/de/37/4fde37e122d3f47712a3f6eb8b425753.jpg',
  'https://i.pinimg.com/236x/75/0e/d3/750ed38c9f175f66b1b850fd28dd4cfd.jpg',
  'https://i.pinimg.com/236x/1e/ac/96/1eac968e7a497bf5d068d63ec0ed7aac.jpg',
  'https://i.pinimg.com/236x/53/81/0b/53810be4ab581ec3dded65358b8f4ff2.jpg',
  'https://i.pinimg.com/236x/1d/3e/5d/1d3e5d9905f990c799c5ee658f526eaa.jpg',
  'https://i.pinimg.com/236x/9c/ec/02/9cec02ec4abc121e83a930c13ea3b5aa.jpg',
  'https://i.pinimg.com/236x/5a/32/86/5a32864caf4e594ac4fb65afa3f50744.jpg',
  'https://i.pinimg.com/236x/bd/66/58/bd6658e5047aa843ba119878b1cd25b9.jpg',
  'https://i.pinimg.com/236x/c2/ed/4b/c2ed4b3916b5c55db168aaf1faf0deaf.jpg',
  'https://i.pinimg.com/736x/8d/dc/f9/8ddcf9fc072f35ec100754d5f267cdf4.jpg',
  'https://i.pinimg.com/236x/34/ce/b2/34ceb2b60b3522e58dffe2d346a897f4.jpg',
  'https://i.pinimg.com/236x/ff/78/fc/ff78fc892b75a601d67f2a39113e9171.jpg',
]

const MoodboardPage = () => {
  return (
    <BaseLayout maxWidth="xl" bgFooter="#fff9d4">
      <ImageList images={images} ncols={5} />
    </BaseLayout>
  )
}

export default MoodboardPage
