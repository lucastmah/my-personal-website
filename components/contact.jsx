import Image from 'next/image'

export function Contact ({link, alt, icon, text}) {
  return (
    <div className='flex flex-col justify-between'>
      <a href={link} draggable='false' alt={alt} target='_blank' className='flex items-center justify-center' rel='noreferrer'>
        <Image draggable='false' src={icon} height={100} width={100} alt='logo' />
      </a>
      <p className='contact-text'>{text}</p>
    </div>
  )
}