import React from 'react'
import One from './components/One'

const App = () => {
    const users=[
    {
      img: 'https://plus.unsplash.com/premium_photo-1661630621969-6d9faac03f9f?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8d29ya2luZyUyMHByb2Zlc3Npb25hbHxlbnwwfHwwfHx8MA%3D%3D',
      intro: <p className='text-red-600'>'Satisfied customers already have access to reliable financial services that meet most of their banking needs. They regularly use banking products, trust their financial institutions, and experience few barriers when managing their money or accessing financial support.'</p>,
      tag: 'Satisfied',
    },
    {
      img: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8d29ya2luZyUyMHByb2Zlc3Npb25hbHxlbnwwfHwwfHx8MA%3D%3D',
      intro: <p className='text-black-900'>'Underserved customers have limited access to quality financial services and often struggle to find products tailored to their needs. While they may use some banking services, they frequently face challenges such as high fees, limited credit options, or inadequate support.'</p>,
      tag: 'Underserved',
    },
    {
      img: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8d29ya2luZyUyMHByb2Zlc3Npb25hbHxlbnwwfHwwfHx8MA%3D%3D',
      intro: <p className='text-pink-500'>'Underbanked customers have a bank account but still rely heavily on alternative financial services for everyday transactions. Due to restricted access to credit, financial products, or convenient banking solutions, they often face higher costs and reduced financial opportunities.'</p>,
      tag: 'Underbanked'
    }
  ]

  return (
    <div>
      <One users={users}/>
    </div>
  )
}

export default App