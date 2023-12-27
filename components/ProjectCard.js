import Image from 'next/image'
import CodeBracketIcon from '@heroicons/react/24/outline/CodeBracketIcon'
import EyeIcon from '@heroicons/react/24/outline/EyeIcon'
import Link from 'next/link'





const ProjectCard = ({ imageURL, title, description, gitURL, previewURL }) => {
  return (
    <div>
      <div className='relative w-52 md:w-96 flex justify-center items-center'>
        <Image src={imageURL} className='overlayBG relative h-full w-auto z-0 rounded-t-xl border-b border-gray-400'/>
        <div className='absolute flex items-center justify-center gap-2 sm:gap-5 w-full h-full bg-[rgba(0,0,0,0.5)] opacity-0 hover:opacity-100'>
          <Link href={gitURL} target='_blank' className='border-2 border-[#ADB7BE]  hover:border-white rounded-full p-1'><CodeBracketIcon className='h-7 w-7 text-[#ADB7BE] hover:text-white'/></Link>
          <Link href={previewURL} target='_blank' className='border-2 border-[#ADB7BE]  hover:border-white rounded-full p-1'><EyeIcon className='h-7 w-7 text-[#ADB7BE] hover:text-white'/></Link>
        </div>
      </div>


      <div className='w-52 md:w-96 h-auto text-white rounded-b-xl bg-[#181818] p-4'>
        <Link href={previewURL}><h5 className='font-xl font-semibold mb-2'>{title}</h5></Link>
        <p className='text-[#ADB7BE] text-sm'>{description}</p>
      </div>
    </div>
  )
}

export default ProjectCard