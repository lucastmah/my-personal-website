import Image from 'next/image'

export function Job ({icon, company, title, date, description}) {
  return (
    <div id='job' className='flex flex-row flex-wrap py-4'>
      <div className='flex justify-center items-center mx-10 w-[110px]'>
        <Image src={icon} width={100} height={100} alt='logo' />
      </div>
      <div>
        <h2>{company}</h2>
        <h3>{title}</h3>
        <h4>{date}</h4>
        <p>{description}</p>
      </div>
    </div>
  )
}