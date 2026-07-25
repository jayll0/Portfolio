import Section from '../components/Section'
import { skills } from '../data/cv'

const Skills = () => (
  <Section id="skills" eyebrow="Technical skills" title="The toolkit">
    <div className="grid gap-5 sm:grid-cols-2">
      {skills.map((group) => (
        <div key={group.label} className="card">
          <h3 className="h-card text-white">{group.label}</h3>
          <ul className="mt-4 flex flex-wrap gap-2">
            {group.items.map((item) => (
              <li key={item} className="chip">
                {item}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  </Section>
)

export default Skills
