import { FaLinkedin, FaWhatsapp, FaEnvelope, FaGithub } from 'react-icons/fa'
import Section from '../components/Section'
import { profile } from '../data/cv'

const channels = [
  { href: profile.mailto, label: 'Email', value: profile.email, Icon: FaEnvelope },
  { href: profile.whatsapp, label: 'WhatsApp', value: 'Chat directly', Icon: FaWhatsapp },
  { href: profile.linkedin, label: 'LinkedIn', value: 'arya-wijayaprogrammer', Icon: FaLinkedin },
  { href: profile.github, label: 'GitHub', value: 'jayll0', Icon: FaGithub },
]

const Contact = () => (
  <Section
    id="contact"
    eyebrow="Contact"
    title="Open to Software Engineer Intern roles"
    lead="Pick whichever channel is easiest — I reply to all of them."
  >
    <div className="grid gap-4 sm:grid-cols-2">
      {channels.map(({ href, label, value, Icon }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noreferrer"
          className="card wrap-safe flex items-center gap-4"
        >
          <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-white/15 text-accent">
            <Icon size={17} />
          </span>
          <span className="min-w-0">
            <span className="block text-xs uppercase tracking-wider text-white/50">{label}</span>
            <span className="block truncate text-sm text-white">{value}</span>
          </span>
        </a>
      ))}
    </div>
  </Section>
)

export default Contact
