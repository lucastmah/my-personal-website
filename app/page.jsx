import Image from 'next/image';

export default function Page() {
    return (
        <main className="flex flex-col">
            <section id='about' className="flex flex-col  bg-blue-200">
                <div className='flex m-auto gap-14 flex-cols-[30%_70%]'>
                    <Image src={'/me.jpg'} width={600} height={450} alt='logo'/>
                    <div className='m-auto'>
                        <h1>About</h1>
                        <p>Hi there! My name is Lucas Mah and I am a fourth year student completing a BSc in computer science with a minor in business administration at Simon Fraser University. </p>
                    </div>
                </div>
            </section>
            <section id='experience' className="flex flex-col h-[100%] bg-blue-100">
                <h1>Experience</h1>
                <ul className='pl-[5%]'>
                    <li>
                        <div id='job'>
                            <h2>TELUS</h2>
                            <h3>Security Specialist Co-op</h3>
                            <h4>Jan 2024 - Present</h4>
                            <p>Managed organizational risks across TELUS, added automation to the risk process with Google Apps Script, and created a dashboard with Looker Studio and cleansed its data in Google Sheets with Apps Script.</p>
                        </div>
                    </li>
                    <li>
                        <div id='job'>
                            <h2>Canada Revenue Agency</h2>
                            <h3>Research Analyst Co-op</h3>
                            <h4>Feb 2022 - Aug 2022</h4>
                            <p>Designed and implemented an MS Access Database with VBA.</p>
                        </div>
                    </li>
                </ul>
            </section>
            <section id='projects' className="flex flex-col h-[100%] bg-blue-400">
                <h1>Personal Endeavours</h1>
                <div>
                    <p>Skip To Clinic</p>
                    <p>Snowfort 2024</p>
                    <p>Past Your Peak</p>
                    <p>SFU Market</p>
                </div>
            </section>
            <section id='contact' className="flex flex-col h-[100%] bg-blue-300">
                <h1>Contact</h1>
                <div>
                    <p>Linkedin</p>
                    <p>GitHub</p>
                    <p>Email</p>
                    <p>Resume</p>
                </div>
            </section>
        </main>
    );
}