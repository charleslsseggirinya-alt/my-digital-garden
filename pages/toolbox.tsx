import SiteLayout from '../components/SiteLayout'

const tools = [
  {
    title: 'Notion systems',
    description:
      'Dashboards, databases, and workflows for professionals who want less clutter and clearer execution.',
  },
  {
    title: 'Engineering helpers',
    description:
      'Small calculators, checklists, and templates that make repetitive technical work easier to trust.',
  },
  {
    title: 'Personal operating system',
    description:
      'Routines, review loops, and simple automations for working with more calm and less drag.',
  },
]

export default function ToolboxPage() {
  return (
    <SiteLayout
      title="Toolbox | Jesse's Digital Garden"
      description="Tools, templates, and practical systems from Jesse's digital garden."
    >
      <section className="page-copy">
        <p>
          Toolbox is for the practical things: systems I use, templates I refine,
          and small tools I make when a repeated problem has annoyed me enough.
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
