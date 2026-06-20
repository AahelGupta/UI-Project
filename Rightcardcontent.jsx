import React from 'react'

const Rightcardcontent = (props) => {
  return (
    <div className='h-full w-80 bg-red-400 rounded-4xl overflow-hidden relative'>
        <img className='h-full w-full object-cover' src={props.img}/>
        <div className='absolute inset-0 p-6 flex flex-col justify-between'>
            <h2 className='bg-white text-xl font-semibold rounded-full h-8 w-8 flex justify-center items-center'>
                {props.id+1}
            </h2>
            <div className="">
                <p className='text-lg'>
                    {props.intro},{props.color}
                </p>
                <div className='flex justify-between'>
                    <button className='bg-blue-600 text-white font-medium px-8 py-2 rounded-full'>
                        {props.tag}
                    </button>
                    <button className='bg-blue-600 text-white font-medium px-3 py-2 rounded-full'>
                        <i className="ri-arrow-right-line"></i>
                    </button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Rightcardcontent
