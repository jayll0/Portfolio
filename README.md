# Arya Wijaya — Portfolio

Personal portfolio site. Single scrolling page: Hero, About, Experience (professional /
hackathon / organizational), Academic Projects, Technical Skills, Contact.

**Stack:** React 18, Vite 5, Tailwind CSS 3, Framer Motion.

## Running locally

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

## Editing content

All text lives in `src/data/cv.js` — profile, summary, experience, hackathons,
organizations, projects, skills, and the nav items. Components read from that file, so
content changes never require touching JSX.

## Structure

```
src/
  data/cv.js          all page content
  components/         Navbar, Section wrapper, transparent Card
  sections/           Hero, About, Experience, Projects, Skills, Contact
  index.css           design tokens, fonts, .card / .shell / .section utilities
```
