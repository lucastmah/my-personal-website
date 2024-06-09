import { Tile } from 'components/tile';
import Image from 'next/image';
import Link from 'next/link';

export default function Page() {
    return (
        <main className="flex flex-col">
            <section id='about' className="flex flex-row flex-wrap items-center justify-evenly min-h-screen bg-blue-200">
                <Image src={'/me.jpg'} width={600} height={450} alt='logo'/>
                <div className='box my-auto p-8'>
                    <h1>About</h1>
                    <p>Hi there! My name is Lucas Mah and I am a fourth year student completing a BSc in computer science with a minor in business administration at Simon Fraser University. </p>
                </div>
            </section>
            <section id='experience' className="flex flex-col justify-center min-h-screen bg-blue-100">
                <h1>Experience</h1>
                <ul className='pl-[5%]'>
                    <li>
                        <div id='job' className='flex flex-row flex-wrap'>
                            <div className='flex justify-center items-center mx-10 w-[110px]'>
                                <Image src={'/Telus_logo.png'} width={100} height={100} alt='logo'/>
                            </div>
                            <div>
                                <h2>TELUS</h2>
                                <h3>Security Specialist Co-op</h3>
                                <h4>Jan 2024 - Present</h4>
                                <p>Governance, Risk Management, Awareness, Google Workspace, and Looker Studio.</p>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div id='job' className='flex flex-row flex-wrap'>
                            <div className='flex justify-center items-center mx-10 w-[110px]'>
                                <Image src={'/Maple_Leaf.png'} width={100} height={100} alt='logo'/>
                            </div>
                            <div>
                                <h2>Canada Revenue Agency</h2>
                                <h3>Research Analyst Co-op</h3>
                                <h4>Feb 2022 - Aug 2022</h4>
                                <p>MS Access with VBA and SAS Viya Reporting.</p>
                            </div>
                        </div>
                    </li>
                </ul>
            </section>
            <section id='projects' className="flex flex-col justify-center items-center min-h-screen bg-blue-400">
                <h1 className='leading-none'>Personal Endeavours</h1>
                <div className='flex flex-row flex-wrap justify-center max-w-[800px] gap-32 mt-10'>
                    <Tile icon='/health_icon.png'>
                        <div className='absolute bg-gray-100 w-[150px] h-[40px] translate-x-[-10px] translate-y-[-10px] rounded-lg'>
                            <p className='flex justify-center items-center h-[40px]'>Skip To Clinic</p>
                        </div>
                    </Tile>
                    <Tile icon='/shield_icon.png'>
                        <div className='absolute bg-gray-100 w-[150px] h-[40px] translate-x-[-10px] translate-y-[-10px] rounded-lg'>
                            <p className='flex justify-center items-center h-[40px]'>Snowfort 2024</p>
                        </div>
                    </Tile>
                    <Tile icon='/controller_icon.png'>
                        <div className='absolute bg-gray-100 w-[150px] h-[40px] translate-x-[-10px] translate-y-[-10px] rounded-lg'>
                            <p className='flex justify-center items-center h-[40px]'>Past Your Peak</p>
                        </div>
                    </Tile>
                    <Tile icon='/cart_icon.png'>
                        <div className='absolute bg-gray-100 w-[150px] h-[40px] translate-x-[-10px] translate-y-[-10px] rounded-lg'>
                            <p className='flex justify-center items-center h-[40px]'>SFU Market</p>
                        </div>
                    </Tile>
                </div>
            </section>
            <section id='contact' className="flex flex-col justify-center min-h-screen h-[100%] bg-blue-300">
                <h1>Contacts</h1>
                <div className='flex flex-row flex-wrap justify-center mt-10 gap-32'>
                    <div className='flex flex-col justify-between'>
                        <a href='https://linkedin.com/in/lucasmah' alt='linkedin' target="_blank" className='flex items-center justify-center'>
                            <Image src={'/linkedin_icon.png'} height={100} width={100} alt='logo' />
                        </a>
                        <p className='contactText'>Linkedin</p>
                    </div>
                    <div className='flex flex-col justify-between'>
                        <a href='https://github.com/lucastmah' alt='github' target="_blank" className='flex items-center justify-center'>
                            <Image src={'/github_icon.png'} height={100} width={100} alt='logo' />
                        </a>
                        <p className='contactText'>GitHub</p>
                    </div>
                    <div className='flex flex-col justify-between'>
                        <a href='mailto:lucasmah@outlook.com' alt='lucasmah@outlook.com' target="_blank" className='flex items-center justify-center'>
                            <Image src={'/email_icon.png'} height={100} width={100} alt='logo' />
                        </a>
                        <p className='contactText'>Email</p>
                    </div>
                    <div className='flex flex-col justify-between'>
                        <a href='/files/Lucas_Mah_Resume.pdf' alt='Lucas_Mah_Resume.pdf' target="_blank" className='flex items-center justify-center'>
                            <Image src={'/resume_icon.png'} height={100} width={100} alt='logo' />
                        </a>
                        <p className='contactText'>Resume</p>
                    </div>
                </div>
            </section>
        </main>
    );
}