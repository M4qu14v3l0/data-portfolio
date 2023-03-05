import {
  BsLinkedin,
  BsGithub,
  BsLink45Deg,
} from 'react-icons/bs'

import {
  FaKaggle
} from 'react-icons/fa'

import {
  MdEmail
} from 'react-icons/md'

export default function Profile() {
  return (
    <section className='flex flex-col gap-5'>
        <img 
          className='rounded-full w-20 h-20 md:w-28 md:h-28'
          src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlHNHc9jW5nVm55RrlHds4iSzb9Y-AmK_I5o5Xoqeiwe7_CYr00DMHd_-CmsrlexgUPPI&usqp=CAU'
          alt='Snapfire'
        />

        <div className='flex flex-col gap-1'>
          <h1 className='text-2xl font-semibold'>BugBuster</h1>
          <p className='text-sm'>Data scientist</p>
          <p className='text-xs text-gray-700'>Based in Cairo, Egypt</p>
        </div>  

        <div className='flex gap-2 items-center text-xl text-gray-700'>
          <a href=''>
            <BsLinkedin />
          </a>
          <a href=''>
            <BsGithub />
          </a>
          <a href=''>
            <BsLink45Deg />
          </a>
          <a href=''>
            <FaKaggle />
          </a>
          <a href=''>
            <MdEmail />
          </a>
        </div>

    </section>
  )
}
