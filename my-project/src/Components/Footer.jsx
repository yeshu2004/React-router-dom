import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='flex items-center justify-between px-10'>
        <h1>Thank you for visting</h1>
        <div className='flex items-center flex-col gap-5'>
            <div>Our Socials</div>
            <div>
                <ul className='flex items-center gap-10'>
                    <li>
                        <Link>Instagram</Link>
                    </li>
                    <li>
                        <Link>FaceBook</Link>
                    </li>
                    <li>
                        <Link>Twitter</Link>
                    </li>
                    <li>
                        <Link>Gmail</Link>
                    </li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Footer