import React, { useEffect } from 'react'
import { useLoaderData } from 'react-router-dom'

const Github = () => {
    const data = useLoaderData()
    useEffect(()=>{
        console.log(data)
    })
  return (
    <div className='flex items-center justify-center h-[75vh]'>
        Github Profile: {data.follwers}
        <img src={data.avatar_url} alt="" width={300} />
    </div>
  )
}

export default Github

export const githubInfoLoader = async ()=>{
    const response = await fetch('https://api.github.com/users/yeshu')
    return response.json()
}