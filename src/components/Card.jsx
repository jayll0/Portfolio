
/** Transparent glass card. Header row stacks on mobile, splits on wider screens. */
const Card = ({ title, subtitle, meta, project, children, stack }) => (
  <article className="card wrap-safe">
    <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between sm:gap-6">
      <div className="min-w-0">
        <h3 className="h-card text-white">{title}</h3>
        {subtitle ? <p className="mt-1 text-sm text-white/70">{subtitle}</p> : null}
      </div>
      {meta ? (
        <p className="shrink-0 text-xs uppercase tracking-wider text-accent sm:text-right">
          {meta}
        </p>
      ) : null}
    </div>

    {project ? (
      <p className="mt-4 border-l-2 border-accent/50 pl-3 text-sm text-white/80">
        {project}
      </p>
    ) : null}

    {children}

    {stack?.length ? (
      <ul className="mt-5 flex flex-wrap gap-2">
        {stack.map((tech) => (
          <li key={tech} className="chip">
            {tech}
          </li>
        ))}
      </ul>
    ) : null}
  </article>
)

export const Bullets = ({ items }) => (
  <ul className="mt-4 space-y-2">
    {items.map((point) => (
      <li key={point} className="body-text flex gap-3">
        <span aria-hidden="true" className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
        <span>{point}</span>
      </li>
    ))}
  </ul>
)

export default Card
