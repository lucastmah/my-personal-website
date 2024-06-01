export default function Page() {
    return (
        <main className="flex flex-col">
            <section id='about' className="flex flex-col h-[1500px] bg-blue-200">
                <h1>About</h1>
            </section>
            <section id='experience' className="flex flex-col h-[1500px] bg-blue-100">
                <h1>Experience</h1>
            </section>
            <section id='projects' className="flex flex-col h-[1500px] bg-blue-400">
                <h1>Projects</h1>
            </section>
            <section id='contact' className="flex flex-col h-[1500px] bg-blue-300">
                <h1>Contact</h1>
            </section>
        </main>
    );
}