import Section from '../components/Section'
import Card, { Bullets } from '../components/Card'
import { experience, hackathons, organizations } from '../data/cv'

const SubHeading = ({ children }) => (
  <h3 className="mb-5 font-display text-lg text-white/80">{children}</h3>
)

const Experience = () => (
  <Section
    id="experience"
    eyebrow="Experience"
    title="Where I've worked and built"
    lead="Internship work, hackathon delivery, and the organizations that shaped how I work in a team."
  >
    <div className="space-y-12">
      <div>
        <SubHeading>Professional experience</SubHeading>
        <div className="space-y-5">
          {experience.map((item) => (
            <Card
              key={item.org}
              title={item.role}
              subtitle={`${item.org} · ${item.location}`}
              meta={item.period}
              project={item.project}
              stack={item.stack}
            >
              <p className="body-text mt-4">{item.context}</p>
              <Bullets items={item.points} />
            </Card>
          ))}
        </div>
      </div>

      <div>
        <SubHeading>Hackathon</SubHeading>
        <div className="space-y-5">
          {hackathons.map((item) => (
            <Card
              key={item.org}
              title={item.role}
              subtitle={`${item.org} · ${item.location}`}
              meta={item.period}
              project={item.project}
              stack={item.stack}
            >
              <p className="body-text mt-4">{item.context}</p>
              <Bullets items={item.points} />
            </Card>
          ))}
        </div>
      </div>

      <div>
        <SubHeading>Organizational experience</SubHeading>
        <div className="grid gap-5 md:grid-cols-2">
          {organizations.map((item) => (
            <Card
              key={item.org}
              title={item.org}
              subtitle={`${item.role} · ${item.location}`}
              meta={item.period}
            >
              <Bullets items={item.points} />
            </Card>
          ))}
        </div>
      </div>
    </div>
  </Section>
)

export default Experience
