
const Section = ({ id, eyebrow, title, lead, children }) => (
  <section id={id} className="section">
    <div className="shell">
      <div className="mb-8 max-w-2xl sm:mb-10">
        {eyebrow ? <p className="eyebrow mb-3">{eyebrow}</p> : null}
        <h2 className="h-section text-white">{title}</h2>
        {lead ? <p className="body-text mt-4">{lead}</p> : null}
      </div>
      {children}
    </div>
  </section>
)

export default Section
