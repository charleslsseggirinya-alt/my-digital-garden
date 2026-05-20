import SiteLayout from '../components/SiteLayout'

const tools = [
  {
    title: 'BIM workflows',
    description:
      'Modelling, drawing, and coordination habits for keeping design information clear, consistent, and usable.',
  },
  {
    title: 'Structural design helpers',
    description:
      'Checklists, templates, and calculation aids that make repetitive engineering work easier to review and trust.',
  },
  {
    title: 'Sustainable construction references',
    description:
      'Material notes, case studies, and references for practical, efficient, and context-aware construction.',
  },
]

export default function ToolboxPage() {
  return (
    <SiteLayout
      title="Toolbox | Charles Lwanga Sseggirinya"
      description="Tools, templates, and practical systems from Charles Lwanga Sseggirinya."
    >
      <section className="page-copy">
        <p>
          Toolbox is for practical engineering resources: systems I use,
          templates I refine, and small aids that make design, documentation,
          and coordination work a little cleaner.
        </p>

        <div className="garden-list" aria-label="Toolbox items">
          {tools.map((tool) => (
            <article className="garden-list-item" key={tool.title}>
              <div>
                <h1>{tool.title}</h1>
                <p>{tool.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </SiteLayout>
  )
}
