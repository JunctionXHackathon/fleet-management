"use client"
import '@/styles/globals.css'
import Image from 'next/image'
import drone from '@/assets/objects/drone.png'
import { useState } from 'react'
import Link from 'next/link'
import yellowBack from '@/assets/icon/go-back-yellow.png'
import darkbluebBack from '@/assets/icon/go-back-darkblue.png'
import localFont from 'next/font/local'

const aquire = localFont({
  src: '../../public/fonts/Aquire.otf',
  variable: '--font-aquire'
})

export default function Login() {

  const [data, setData] = useState({
    email: '',
    password: '',
  })

  function handleChange(event: any) {
    const {name, value} = event.target
    setData((prev) => {
      return {
        ...prev,
        [name]: value
      }
    })
  }

  return (
    <div className={`${aquire.className} signup flex gap-6 lg:flex-row flex-col-reverse items-center lg:pl-44`}>
      <Image src={drone} className='drone lg:w-[500px]' alt={""}/>
      <form className='mb-32 md:mb-0 login flex flex-col gap-2 min-w-[460px] lg:min-w-[360px]'>
        <p className='font-semibold text-5xl'> LOG IN </p>
        <br />
        <label>
          <span> EMAIL </span>
          <input type="email" name="email" placeholder='johndoe@gmail.com' value={data.email} onChange={handleChange} />
        </label>
        <label>
          <span> PASSWORD </span>
          <input type="password" name="password" placeholder='password' value={data.password} onChange={handleChange} />
        </label>
        <br />
        <div className='flex gap-2'>
          <button className='btn auth'> LOGIN </button>
          <Link href='/' className='btn auth' > RETURN </Link>
        </div>
      </form>
    </div>
  )
}
