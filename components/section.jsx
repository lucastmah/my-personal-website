export function Section ({id, color, children}) {
  return (
    <section id={id} className={'flex flex-col justify-center min-h-screen ' + color}>
      {children}
    </section>
  )
}