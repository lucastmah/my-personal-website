import { Tile } from 'components/tile'
import { Job } from 'components/job'
import { Contact } from 'components/contact'
import { Section } from 'components/section'
import Image from 'next/image'

export default function Page () {
  return (
    <main className='flex flex-col'>
      <Section id='about' color='bg-blue-200'>
        <div className='flex flex-row flex-wrap items-center justify-center gap-8'>
          <Image draggable='false' src='/me.jpg' width={600} height={450} alt='logo' />
          <div className='box my-auto p-8'>
            <h1>About</h1>
            <p>Hi there! My name is Lucas Mah and I am a fourth year student completing a BSc in computer science with a minor in business administration at Simon Fraser University. </p>
          </div>
        </div>
      </Section>
      <Section id='experience' color='bg-blue-100'>
        <div className='px-[15%]'>
          <h1>Experience</h1>
          <ul className='pl-[5%]'>
            <li>
              <Job icon='/Telus_logo.png' company='TELUS' title='Security Specialist Intern' date='Jan 2024 - Present' description='Governance, Risk Management, Awareness, Google Workspace, and Looker Studio.' />
            </li>
            <li>
              <Job icon='/Maple_Leaf.png' company='Canada Revenue Agency' title='Research Analyst Intern' date='Feb 2022 - Aug 2022' description='MS Access with VBA and SAS Viya Reporting.' />
            </li>
          </ul>
        </div>
      </Section>
      <Section id='projects' color='bg-blue-400'>
        <div className='m-auto'>
          <h1 className='leading-none'>Personal Endeavours</h1>
          <div className='flex flex-row flex-wrap justify-center max-w-[800px] gap-32 mt-10'>
            <Tile link='https://0strategist0.itch.io/boneyard-of-the-innocent' icon='/bone.png' name='Boneyard of the Innocent' /> 
            <Tile link='https://github.com/kevinchen2002/skip-the-clinics' icon='/health_icon.png' name='Skip To Clinic'/>
            <Tile link='https://ctftime.org/team/286321' icon='/shield_icon.png' name='Snowfort 2024' />
            <Tile link='https://bryd.itch.io/past-your-peak' icon='/controller_icon.png' name='Past Your Peak' />
          </div>
        </div>
      </Section>
      <Section id='contact' color='bg-blue-300'>
        <h1 className='px-[25%]'>Contacts</h1>
        <div className='flex flex-row flex-wrap justify-center mt-10 gap-32'>
          <Contact link='https://linkedin.com/in/lucasmah' alt='linkedin' icon='/linkedin_icon.png' text='Linkedin' />
          <Contact link='https://github.com/lucastmah' alt='github' icon='/github_icon.png' text='GitHub' />
          <Contact link='mailto:lucasmah@outlook.com' alt='lucasmah@outlook.com' icon='/email_icon.png' text='Email' />
          <Contact link='/files/Lucas_Mah_Resume.docx' alt='Lucas_Mah_Resume.pdf' icon='/resume_icon.png' text='Resume' />
        </div>
      </Section>
    </main>
  )
}
