import SiteLayout from '../components/SiteLayout'

const notes = [
  {
    title: 'Structural engineering practice',
    description:
      'Notes on design judgment, detailing, constructability, supervision, and the engineering decisions that make buildings stand well.',
    status: 'growing',
  },
  {
    title: 'BIM and coordination',
    description:
      'Thoughts on modelling standards, drawing production, coordination workflows, and the small habits that keep project information trustworthy.',
    status: 'seedling',
  },
  {
    title: 'Sustainable construction',
    description:
      'Observations on local materials, efficient structures, and practical routes toward smarter construction in Uganda and the wider region.',
    status: 'seedling',
  },
]

export default function WritingPage() {
  return (
    <SiteLayout
      title="Writing | Charles Lwanga Sseggirinya"
      description="Writing and notes from Charles Lwanga Sseggirinya."
    >
      <section className="page-copy">
        <p>
          Writing is where I collect engineering ideas before they become
          polished things. Some notes are project reflections, some are technical
          observations, and some are questions I want to keep thinking through.
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
