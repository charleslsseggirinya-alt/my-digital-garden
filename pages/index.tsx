import SiteLayout from '../components/SiteLayout'

const contactLinks = [
  { label: 'GitHub', href: 'https://github.com/' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/' },
  { label: 'Instagram', href: 'https://www.instagram.com/' },
  { label: 'email', href: 'mailto:hello@example.com' },
]

export default function HomePage() {
  return (
    <SiteLayout description="Jesse's personal digital garden for writing, tools, sustainability, and productivity.">
      <section className="intro-copy" aria-label="Homepage introduction">
        <p>Hi, I'm Jesse.</p>

        <p>
          I'm a structural engineer supporting green building design at{' '}
          <a href="https://localworks.eco/">Localworks</a> in Kampala, Uganda. I
          also volunteer on the Research Committee of{' '}
          <a href="https://localworksfoundation.org/">Localworks Foundation</a>.
        </p>

        <p>
          I spend a lot of my time at the overlap of technology, productivity,
          and sustainability. That curiosity shows up in a few practical ways: I
          build Notion systems for professionals and businesses who want to work
          smarter, I write about ideas I can't stop thinking about, and I make
          small tools when something bothers me enough to fix it.
        </p>

        <p>
          I'm glad you're here. Feel free to reach me on{' '}
          {contactLinks.map((link, index) => (
            <span key={link.label}>
              <a href={link.href}>{link.label}</a>
              {index < contactLinks.length - 2
                ? ', '
                : index === contactLinks.length - 2
                ? ', or '
                : '.'}
            </span>
          ))}
        </p>
      </section>
    </SiteLayout>
  )
}
