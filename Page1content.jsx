import React from 'react'
import Leftcontent from './Leftcontent'
import Rightcontent from './Rightcontent'
const Page1content = (props) => {
  return (
    <div className='pb-16 pt-6 flex h-[90vh] items-center gap-10 px-18'>
        <Leftcontent/>
        <Rightcontent users={props.users}/>
    </div>
  )
}

export default Page1content
