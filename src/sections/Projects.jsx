import Section from '../components/Section'
import Card, { Bullets } from '../components/Card'
import { projects } from '../data/cv'

const Projects = () => (
  <Section
    id="projects"
    eyebrow="Academic projects"
    title="What I've built"
    lead="Backend-heavy systems with real data models, transactional logic, and deployment."
  >
    <div className="grid gap-5 lg:grid-cols-2">
      {projects.map((project) => (
        <Card
          key={project.title}
          title={project.title}
          subtitle={project.kind}
          stack={project.stack}
        >
          <Bullets items={project.points} />
        </Card>
      ))}
    </div>
  </Section>
)

export default Projects
