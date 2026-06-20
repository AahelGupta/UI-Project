import React from 'react'
import Rightcardcontent from './Rightcardcontent'
const Rightcontent = (props) => {
  return (
    <div className='h-full flex flex-nowrap p-6 gap-5'>
      {props.users.map(function(elem,i){
        return <Rightcardcontent key={i} id={i} img={elem.img} tag={elem.tag} intro={elem.intro}/>
      })}
    </div>
  )
}

export default Rightcontent
