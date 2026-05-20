import SiteLayout from '../components/SiteLayout'

const notes = [
  {
    title: 'Ideas I keep returning to',
    description:
      'Working notes on technology, better personal systems, green building, and the small frictions that are worth fixing.',
    status: 'growing',
  },
  {
    title: 'Mind movies and future-self scripts',
    description:
      'Private prompts, visualizations, and identity work that shape the direction of the garden.',
    status: 'seedling',
  },
  {
    title: 'Sustainability in practice',
    description:
      'Observations from design work, materials research, and building for East African contexts.',
    status: 'seedling',
  },
]

export default function WritingPage() {
  return (
    <SiteLayout
      title="Writing | Jesse's Digital Garden"
      description="Writing and notes from Jesse's digital garden."
    >
      <section className="page-copy">
        <p>
          Writing is where I collect ideas before they become polished things.
          Some notes are essays, some are field notes, and some are just useful
          questions that have not left me alone yet.
        </p>

        <div className="garden-list" aria-label="Writing notes">
          {notes.map((note) => (
            <article className="garden-list-item" key={note.title}>
              <div>
                <h1>{note.title}</h1>
                <p>{note.description}</p>
              </div>
              <span>{note.status}</span>
            </article>
          ))}
        </div>
      </section>
    </SiteLayout>
  )
}
