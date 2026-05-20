import SiteLayout from '../components/SiteLayout'

const contactLinks = [
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/charles-lwanga-sseggirinya-8684a3112/',
  },
]

export default function HomePage() {
  return (
    <SiteLayout description="Charles Lwanga Sseggirinya's digital garden for structural engineering, BIM, computational design, and sustainable construction.">
      <section className="intro-copy" aria-label="Homepage introduction">
        <p>Hi, I'm Charles.</p>

        <p>
          I'm a Registered Structural Engineer based in Kampala, Uganda. I work
          as CAD Manager and Structural Engineer at{' '}
          <a href="https://aquila.ug/">Aquila Gallery Ltd</a>, where I focus on
          structural design, detailing, BIM coordination, and the digital
          workflows behind coordinated buildings.
        </p>

        <p>
          I care about computational design, sustainable construction, and
          practical engineering systems. My work sits between advanced modelling
          and buildable local solutions: making structures sound, drawings
          clear, and project teams easier to coordinate from concept through
          construction.
        </p>

        <p>
          This garden is where I collect notes on structural engineering, BIM,
          sustainable materials, and the tools and processes that make
          engineering work better. You can reach me on{' '}
          {contactLinks.map((link, index) => (
            <span key={link.label}>
              <a href={link.href}>{link.label}</a>
              {index === contactLinks.length - 1 ? '.' : ', '}
            </span>
          ))}
        </p>
      </section>
    </SiteLayout>
  )
}
