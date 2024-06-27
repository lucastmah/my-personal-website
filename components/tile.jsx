import Image from 'next/image'

export function Tile ({ children, icon }) {
  return (
    <div className='bg-gray-900 rounded-xl h-[300px] w-[300px] flex flex-col'>
      {children}
      <Image src={icon} width={300} height={300} alt='logo' className='m-auto rounded-xl' />
    </div>
  )
}
