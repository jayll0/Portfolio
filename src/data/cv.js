export const profile = {
  name: 'Arya Wijaya',
  headline: 'I am a',
  roles: ['Software Engineer', 'Backend Developer', 'Problem Solver'],
  location: 'Tangerang, Indonesia',
  email: 'aryawijaya6664@gmail.com',
  mailto:
    'https://mail.google.com/mail/u/0/?view=cm&tf=1&fs=1&to=aryawijaya6664@gmail.com',
  whatsapp: 'https://wa.link/w5jijv',
  linkedin: 'https://www.linkedin.com/in/arya-wijayaprogrammer',
  github: 'https://github.com/jayll0',
  cv: 'https://drive.google.com/file/d/1HVAKI3mJLJlb1OTKnc620aWnFh506Ri1/view?usp=sharing',
}

export const summary = [
  'Informatics student at Telkom University with a strong interest in software engineering, focused on building scalable web applications.',
  'I work across backend and frontend development, and enjoy the part of the job where business logic becomes a working system — data models, APIs, and the deployment that carries them to production.',
  'Currently looking for a Software Engineer Intern role in backend or system-oriented development.',
]

export const experience = [
  {
    role: 'Frontend Developer Intern',
    org: 'LAB ASE — Laboratory of Advanced Software Engineering',
    location: 'Bandung',
    period: 'Jun 2025 – Oct 2025',
    project: 'Yupay — Split Bill Web App',
    context:
      'Project-based internship where each team designed and shipped a software solution aligned with the UN Sustainable Development Goals (SDG 8, 10, and 12).',
    stack: ['React.js', 'JavaScript', 'REST API'],
    points: [
      'Built a React.js split bill application that calculates shared expenses and shows an itemized breakdown per person.',
      'Implemented the expense calculation logic and the user-facing UI components around it.',
      'Added receipt scanning so bill data is captured automatically instead of typed in by hand.',
      'Translated social and economic problem statements into concrete application features.',
      'Improved transparency in shared spending, supporting fairer cost distribution and more deliberate spending decisions.',
    ],
  },
]

export const hackathons = [
  {
    role: 'Full Stack Developer',
    org: 'CCI the Hack Batch 1',
    location: 'Bandung',
    period: '2024',
    project: 'Progressie — Learning Management System',
    context:
      'Hackathon team project delivering a working LMS prototype within the event timeline.',
    stack: ['React', 'Figma', 'REST API'],
    points: [
      'Drafted the Software Requirements Specification and designed the UI/UX prototype in Figma.',
      'Implemented frontend components and integrated them with RESTful APIs.',
      'Delivered a functional LMS prototype with learning progress tracking, an achievement system, and document handling.',
    ],
  },
]

export const organizations = [
  {
    role: 'Member',
    org: 'Central Computer Improvement (CCI)',
    location: 'Bandung',
    period: '2024',
    points: [
      'Weekly study group on the Software Development Life Cycle: algorithm implementation, UI/UX prototyping in Figma, development environment setup, and frontend–backend integration.',
    ],
  },
  {
    role: 'Member',
    org: 'Prada 1446H — Pejuang Ramadhan Idul Adha Telkom University',
    location: 'Bandung',
    period: 'Mar 2025',
    points: [
      'Volunteered every day for 30 consecutive days during Ramadan.',
      'Managed preparation and distribution of iftar meals at Masjid Syamsul Ulum, coordinating with the team to keep service running smoothly.',
    ],
  },
]

export const projects = [
  {
    title: 'Gudang Damar — Store Inventory & Order Management',
    kind: 'Web application',
    stack: [
      'Laravel',
      'Inertia.js',
      'Vue.js',
      'Tailwind CSS',
      'PostgreSQL (Supabase)',
      'Vercel',
    ],
    points: [
      'Built backend modules for inventory, custom orders, repair service records, and supplier data, served to an Inertia.js + Vue single-page frontend.',
      'Designed the PostgreSQL schema on Supabase with Eloquent models, migrations, and table relationships.',
      'Handled sales and restocking through database transactions so stock levels, revenue totals, and audit records never drift apart.',
      'Added an activity log that records every stock change with before-and-after values, exportable to CSV.',
      'Implemented authentication with Laravel Fortify, two-factor authentication, and Google OAuth via Socialite.',
      'Built analytics endpoints aggregating sales into revenue, best-selling item, and stock-movement charts.',
      'Integrated the Pollinations.ai text-to-image API for AI product previews, with MyMemory Translation converting Indonesian prompts to English for better results.',
      'Deployed to a serverless PHP runtime on Vercel with environment-based configuration.',
    ],
  },
  {
    title: 'Gudang Damar — Mobile App & REST API',
    kind: 'Mobile application',
    stack: ['Flutter', 'Dart', 'Laravel', 'Laravel Sanctum'],
    points: [
      'Designed a token-authenticated REST API with Laravel Sanctum, serving the Flutter client from the same database as the web app.',
      'Built endpoints for inventory, orders, repair services, activity history, and AI image generation with defined JSON response contracts.',
      'Added a server-side image-generation endpoint that calls Pollinations.ai and returns encoded image data to the client.',
      'Implemented registration, login, Google Sign-In, logout, and password recovery over token-based sessions.',
      'Structured the Flutter client in layers — data models, service classes, screens — keeping API logic out of the UI.',
      'Stored session tokens in encrypted platform storage on device.',
      'Shipped in-app charts and activity-history export so store staff can review stock movement without a desktop.',
    ],
  },
  {
    title: 'Inventory Management System',
    kind: 'Backend service',
    stack: ['Java', 'Spring Boot', 'Hibernate/JPA', 'MySQL'],
    points: [
      'Designed the backend architecture and RESTful API surface.',
      'Implemented persistence with Hibernate/JPA and modelled the database schema.',
      'Delivered full CRUD over inventory data with structured, reliable API access.',
    ],
  },
  {
    title: 'EatRush',
    kind: 'Backend service',
    stack: ['Python', 'Flask', 'MySQL', 'cPanel'],
    points: [
      'Built a server-side web application in Flask following an MVC structure.',
      'Implemented object-oriented models for database interaction and business logic.',
      'Designed the MySQL schema and wrote controller logic to handle HTTP requests and render templates.',
      'Deployed to shared hosting via cPanel, working through server configuration in a production-like environment.',
    ],
  },
]

export const skills = [
  {
    label: 'Back-End',
    items: ['Java (Spring Boot)', 'PHP (Laravel)', 'Python (Flask)', 'Go (Fiber)'],
  },
  {
    label: 'Front-End',
    items: ['React.js', 'JavaScript', 'TypeScript', 'Dart (Flutter)', 'HTML5', 'CSS'],
  },
  {
    label: 'Database',
    items: ['MySQL', 'PostgreSQL', 'SQL', 'Database design (ERD)'],
  },
  {
    label: 'Tools & Cloud',
    items: ['Git & GitHub', 'Vercel', 'cPanel', 'Postman'],
  },
]

export const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'contact', label: 'Contact' },
]
