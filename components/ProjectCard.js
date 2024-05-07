import Image from 'next/image'
import Link from 'next/link'





const ProjectCard = ({ imageURL, title, description, previewURL }) => {
  return (
    <Link href={previewURL} target='_blank'>
      <div className='relative w-52 md:w-96 flex justify-center items-center'>
        <Image src={imageURL} className='overlayBG relative h-full w-auto z-0 rounded-t-xl border-b border-gray-400' />
      </div>
      <div className='w-52 md:w-96 h-auto text-white rounded-b-xl bg-[#181818] p-4'>
        <p className='font-xl font-semibold mb-2'>{title}</p>
        <p className='text-[#ADB7BE] text-sm'>{description}</p>
      </div>
    </Link>
  )
}

export default ProjectCard