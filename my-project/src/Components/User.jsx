import React from 'react'
import { useParams } from 'react-router-dom'

const User = () => {
    const {userid} = useParams()

  return (
    <div className='flex items-center justify-center h-[75vh] bg-zinc-200'>User : {userid}</div>    
  )
}

export default User