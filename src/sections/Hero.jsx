import { motion, useReducedMotion } from 'framer-motion'
import { Typewriter } from 'react-simple-typewriter'
import { FaLinkedin, FaWhatsapp, FaEnvelope, FaGithub } from 'react-icons/fa'
import { FiDownload } from 'react-icons/fi'
import portrait from '../assets/images/home/my_photo.svg'
import { profile } from '../data/cv'

const Ring = ({ radius, stroke, direction, duration, still }) => (
  <motion.svg
    viewBox="0 0 400 400"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="pointer-events-none absolute inset-0 h-full w-full"
    aria-hidden="true"
    initial={{ rotate: 0 }}
    animate={still ? { rotate: 0 } : { rotate: 360 * direction }}
    transition={still ? undefined : { duration, repeat: Infinity, ease: 'linear' }}
  >
    <motion.circle
      cx="200"
      cy="200"
      r={radius}
      stroke={stroke}
      strokeWidth="3"
      strokeLinecap="round"
      initial={{ strokeDasharray: '24 18 0 0' }}
      animate={
        still
          ? { strokeDasharray: '20 100 30 30' }
          : { strokeDasharray: ['20 100 30 30', '25 30 80 65', '5 200 30 30'] }
      }
      transition={still ? undefined : { duration: 10, repeat: Infinity, repeatType: 'reverse' }}
    />
  </motion.svg>
)

const socials = [
  { href: profile.mailto, label: 'Email', Icon: FaEnvelope },
  { href: profile.whatsapp, label: 'WhatsApp', Icon: FaWhatsapp },
  { href: profile.linkedin, label: 'LinkedIn', Icon: FaLinkedin },
  { href: profile.github, label: 'GitHub', Icon: FaGithub },
]

const Hero = () => {
  const reduced = useReducedMotion()

  return (
    <section id="home" className="section pt-28 sm:pt-32">
      <div className="shell">
        <div className="grid items-center gap-12 lg:grid-cols-[1.15fr_1fr] lg:gap-16">
          {/* Left column */}
          <div className="min-w-0">
            <p className="eyebrow mb-4">{profile.location}</p>
            <h1 className="h-display wrap-safe text-white">{profile.name}</h1>

            <p className="mt-4 font-display text-xl sm:text-2xl">
              <span className="text-white/70">{profile.headline} </span>
              <span className="text-accent">
                <Typewriter
                  words={profile.roles}
                  loop={0}
                  cursor
                  cursorStyle="|"
                  typeSpeed={45}
                  deleteSpeed={35}
                  delaySpeed={2000}
                />
              </span>
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a className="btn" href={profile.cv} target="_blank" rel="noreferrer">
                <FiDownload aria-hidden="true" />
                Download CV
              </a>
              <ul className="flex items-center gap-3">
                {socials.map(({ href, label, Icon }) => (
                  <li key={label}>
                    <a
                      href={href}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={label}
                      className="grid h-11 w-11 place-items-center rounded-full border border-white/15 text-white/70 transition-colors hover:border-accent hover:text-accent"
                    >
                      <Icon size={17} />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right column — scales with its container instead of a fixed 400px */}
          <div className="relative mx-auto aspect-square w-full max-w-[340px] sm:max-w-[400px]">
            <Ring radius="190" stroke="#00ff99" direction={1} duration={22} still={reduced} />
            <Ring radius="150" stroke="rgba(255,255,255,0.5)" direction={-1} duration={30} still={reduced} />
            <img
              src={portrait}
              alt={`Portrait of ${profile.name}`}
              className="absolute left-1/2 top-1/2 w-[66%] -translate-x-1/2 -translate-y-1/2"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
