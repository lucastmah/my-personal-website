import Image from 'next/image'

export function Tile ({ link, name, icon }) {
  return (
    <a draggable='false' href={link} target='_blank'>
      <div className='bg-gray-900 rounded-xl h-[300px] w-[300px] flex flex-col'>
        <div className='absolute bg-gray-100 px-4 h-[40px] translate-x-[-10px] translate-y-[-10px] rounded-lg'>
          <p className='flex justify-center items-center h-[40px]'>{name}</p>
        </div>
        <Image draggable='false' src={icon} width={300} height={300} alt='logo' className='m-auto rounded-xl' />
      </div>
    </a>
  )
}
