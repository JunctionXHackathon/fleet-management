import '../styles/globals.css'
import Image from 'next/image'
import drone from '../assets/objects/drone.png'
import { useState } from 'react'
import Link from 'next/link'

export default function login() {

  const [data, setData] = useState({
    email: '',
    password: '',
  })

  function handleChange(event) {
    const {name, value} = event.target
    setData((prev) => {
      return {
        ...prev,
        [name]: value
      }
    })
  }

  return (
    <div className="signup flex gap-6 lg:flex-row flex-col-reverse items-center">
      <Image src={drone} className='drone'></Image>
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
