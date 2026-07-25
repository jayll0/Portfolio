import Section from '../components/Section'
import { summary } from '../data/cv'

const About = () => (
  <Section id="about" eyebrow="Professional summary" title="Who is Arya?">
    <div className="card max-w-3xl">
      <div className="space-y-4">
        {summary.map((paragraph) => (
          <p key={paragraph} className="body-text">
            {paragraph}
          </p>
        ))}
      </div>
    </div>
  </Section>
)

export default About
