import React from 'react'
import Arrow from './Arrow'
import Text from './Text'
const Leftcontent = () => {
  return (
    <div className='h-full flex flex-col justify-between w-1/3 p-4 gap-10'>
      <Text/>
      <Arrow/>
    </div>
  )
}

export default Leftcontent
