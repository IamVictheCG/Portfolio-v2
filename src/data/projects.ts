export interface Project {
  id: number;
  title: string;
  thumbnail: string;
  url: string;
  category: 'web' | 'data' | 'featured' | 'vibe';
  description: string;
  tech: string[];
  /** Source code link; the card hides its "Code" link when this is missing */
  repoUrl?: string;
  /** Rendered at /projects/:id. Sections left undefined are not shown on the page. */
  caseStudy?: CaseStudy;
}

export interface CaseStudy {
  /** One-line "what it is", shown under the title */
  overview?: string;
  problem?: string;
  role?: string;
  /** Full stack list */
  stack: string[];
  decisions?: string[];
  challenges?: string[];
  outcome?: string;
  screenshots?: string[];
}

// TODO(CG): add repoUrl to any featured project whose code is public (the "Code" link is hidden until then)
export const featuredProjects: Project[] = [
  {
    id: 1,
    title: 'SpeedNova',
    // TODO(CG): replace with a real product screenshot (16:9)
    thumbnail: '/images/speednova-thumb.webp',
    url: 'https://www.speednova.org/',
    category: 'featured',
    description: 'A ride-hailing company for Port Harcourt that puts drivers first: they keep 85% of every fare and see their payout before each trip. In pre-launch testing.',
    tech: ['Next.js', 'React Native', 'Supabase', 'TypeScript', 'Expo', 'Tailwind CSS', 'NativeWind', 'Google Maps'],
    caseStudy: {
      stack: ['Next.js', 'React Native', 'Supabase', 'TypeScript', 'Expo', 'Tailwind CSS', 'NativeWind', 'Google Maps'],
      // TODO(CG): problem, role, decisions, challenges, outcome
      // TODO(CG): add screenshot paths under /images/ (e.g. '/images/speednova-1.webp')
    }
  },
  {
    id: 2,
    title: 'ResultIQ',
    // TODO(CG): replace with a real product screenshot (16:9)
    thumbnail: '/images/resultiq-thumb.webp',
    url: 'https://resultiq.ng',
    category: 'featured',
    description: 'A results business for Nigerian schools that takes end-of-term scores and turns them into class positions, broadsheets and report cards for parents. Now onboarding its first schools.',
    tech: ['Next.js', 'Supabase', 'PostgreSQL', 'TypeScript', 'Tailwind CSS', 'Paystack', 'Zod', 'Vitest'],
    caseStudy: {
      stack: ['Next.js', 'Supabase', 'PostgreSQL', 'TypeScript', 'Tailwind CSS', 'Paystack', 'Zod', 'Vitest'],
      // TODO(CG): problem, role, decisions, challenges, outcome
      // TODO(CG): add screenshot paths under /images/ (e.g. '/images/resultiq-1.webp')
    }
  },
  {
    id: 3,
    title: 'ENYEMAKA',
    // TODO(CG): replace with a real product screenshot (16:9). The current file is the
    // logo with a checkerboard baked into the pixels, kept only so the card isn't blank.
    thumbnail: '/images/enyemaka-thumb.png',
    url: 'https://enyemaka.co/',
    category: 'featured',
    description: 'ENYEMAKA is a managed agency platform that connects clients with vetted contractors across eight service categories. I designed and built the public site, client portal, contractor workspace and admin panel, including multi-currency payments and milestone-based project delivery.',
    tech: ['Next.js', 'Supabase', 'TypeScript', 'Tailwind CSS', 'Paystack', 'Flutterwave', 'Three.js'],
    caseStudy: {
      stack: [
        'Next.js',
        'TypeScript',
        'Supabase (auth, PostgreSQL, Row-Level Security)',
        'Resend on a verified custom domain (enyemaka.co)',
        'Tailwind CSS',
        'Paystack',
        'Flutterwave',
        'Three.js',
        'Vercel',
        'Expo / EAS (mobile app in progress)'
      ],
      challenges: [
        'Supabase Row-Level Security policies that failed silently',
        'Magic-link token flows',
        'A middleware redirect loop',
        'A conflict between the scoring formula and the dashboard filters'
      ],
      // TODO(CG): problem, role, decisions, outcome
      // TODO(CG): add screenshot paths under /images/ (e.g. '/images/enyemaka-1.webp')
    }
  }
];

export const vibeCoding: Project[] = [
  {
    id: 6,
    title: 'Random Quote Generator',
    thumbnail: 'https://images.pexels.com/photos/1887946/pexels-photo-1887946.jpeg?auto=compress&cs=tinysrgb&w=800',
    url: 'https://advicegenerator-victorcg.netlify.app/',
    category: 'vibe',
    description: 'Beautiful quote generator with social sharing capabilities',
    tech: ['HTML', 'CSS', 'JavaScript', 'Quote API']
  },
  // {
  //   id: 7,
  //   title: 'Color Palette Generator',
  //   thumbnail: 'https://images.pexels.com/photos/1749900/pexels-photo-1749900.jpeg?auto=compress&cs=tinysrgb&w=800',
  //   url: 'https://example.com/color-palette',
  //   category: 'vibe',
  //   description: 'Interactive color palette generator for designers and developers',
  //   tech: ['React', 'CSS', 'Color Theory']
  // },
  // {
  //   id: 8,
  //   title: 'Meditation Timer',
  //   thumbnail: 'https://images.pexels.com/photos/1051838/pexels-photo-1051838.jpeg?auto=compress&cs=tinysrgb&w=800',
  //   url: 'https://example.com/meditation-timer',
  //   category: 'vibe',
  //   description: 'Peaceful meditation timer with ambient sounds and progress tracking',
  //   tech: ['React', 'Audio API', 'Local Storage']
  // },
  {
    id: 9,
    title: 'Calculator',
    thumbnail: '/images/calculator.jpg',
    url: 'https://myodinproject-victorcg.netlify.app/Fundamentals/Project%204%20Calculator/calculator.html',
    category: 'vibe',
    description: 'On-screen calculator for basic arithmetic, built for The Odin Project Foundations course',
    tech: ['HTML', 'CSS', 'JavaScript', 'jQuery']
  },
  // {
  //   id: 10,
  //   title: 'Password Generator',
  //   thumbnail: 'https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=800',
  //   url: 'https://example.com/password-generator',
  //   category: 'vibe',
  //   description: 'Secure password generator with customizable options',
  //   tech: ['JavaScript', 'Crypto API', 'CSS']
  // }

  // The Odin Project (myodinproject-victorcg.netlify.app)
  {
    id: 11,
    title: 'Rock Paper Scissors',
    thumbnail: '/images/rockPaperScissors.jpg',
    url: 'https://myodinproject-victorcg.netlify.app/Fundamentals/Project%202%20Rock%20Paper%20Scissors/',
    category: 'vibe',
    description: 'Rock Paper Scissors against the computer, built for The Odin Project Foundations course',
    tech: ['HTML', 'CSS', 'JavaScript']
  },
  {
    id: 12,
    title: 'Etch a Sketch',
    thumbnail: '/images/etch_a_sketch.jpg',
    url: 'https://myodinproject-victorcg.netlify.app/Fundamentals/Project%203%20Etch%20a%20Sketch/',
    category: 'vibe',
    description: 'Browser sketch pad where hovering over a grid colours its squares, built for The Odin Project',
    tech: ['HTML', 'CSS', 'JavaScript', 'jQuery']
  },
  // {
  //   id: 13,
  //   title: 'Sign-up Form',
  //   thumbnail: 'https://placehold.co/800x450/1e1b4b/e9d5ff?text=Sign-up+Form',
  //   url: 'https://myodinproject-victorcg.netlify.app/HTML_CSS/Sign-up%20Form/index.html',
  //   category: 'vibe',
  //   description: 'Styled sign-up form with HTML form validation, built for The Odin Project',
  //   tech: ['HTML', 'CSS']
  // },
  {
    id: 14,
    title: 'Admin Dashboard',
    thumbnail: '/images/admin_dashboard.png',
    url: 'https://myodinproject-victorcg.netlify.app/HTML_CSS/Admin%20Dashboard/index.html',
    category: 'vibe',
    description: 'Admin dashboard layout with a sidebar, header and project cards, built with CSS Grid for The Odin Project',
    tech: ['HTML', 'CSS', 'CSS Grid']
  },
  {
    id: 15,
    title: 'Cool Library',
    thumbnail: 'https://placehold.co/800x450/1e1b4b/e9d5ff?text=Cool+Library',
    url: 'https://myodinproject-victorcg.netlify.app/JavaScript%20Projects/Book_Library/index.html',
    category: 'vibe',
    description: 'Personal book library app for adding and managing books, built with JavaScript objects and classes',
    tech: ['HTML', 'CSS', 'JavaScript']
  },
  {
    id: 16,
    title: 'Tic Tac Toe',
    thumbnail: '/images/tictactoe.png',
    url: 'https://myodinproject-victorcg.netlify.app/JavaScript%20Projects/tictactoe/index.html',
    category: 'vibe',
    description: 'Two-player Tic Tac Toe in the browser, built for The Odin Project',
    tech: ['HTML', 'CSS', 'JavaScript', 'jQuery', 'Mustache.js']
  },
  {
    id: 17,
    title: 'Restaurant Page',
    thumbnail: '/images/delivey.png',
    url: 'https://restaurant-victorcg.netlify.app/',
    category: 'vibe',
    description: 'Tabbed restaurant site with a coffee, dessert and specials menu, rendered entirely by JavaScript and bundled with Webpack',
    tech: ['JavaScript', 'Webpack', 'CSS']
  },
  {
    id: 18,
    title: 'CG Todo App',
    thumbnail: '/images/todo.jpg',
    url: 'https://cg-todo.netlify.app/',
    category: 'vibe',
    description: 'Todo list app with projects for grouping tasks, with a separate mobile layout',
    tech: ['JavaScript', 'ES Modules', 'jQuery', 'CSS']
  },

  // Other Netlify projects
  {
    id: 19,
    title: 'Splitter: Tip Calculator',
    thumbnail: '/images/slpitter.png',
    url: 'https://splitter-victorcg.netlify.app/',
    category: 'vibe',
    description: 'Splitter is a tip calculator: enter the bill, pick a tip percentage or set a custom one, and it splits the tip and total per person. A Frontend Mentor challenge.',
    tech: ['HTML', 'CSS', 'JavaScript', 'jQuery']
  },
  {
    id: 20,
    title: 'E-commerce Product Page',
    thumbnail: '/images/e_commerce.png',
    url: 'https://ecommerce-productpage-victorcg.netlify.app/',
    category: 'vibe',
    description: 'Sneaker product page with an image gallery and add-to-cart, with separate mobile, tablet and desktop layouts. A Frontend Mentor challenge.',
    tech: ['HTML', 'CSS', 'JavaScript', 'jQuery']
  },
  {
    id: 21,
    title: 'HTML Canva',
    thumbnail: 'https://placehold.co/800x450/1e1b4b/e9d5ff?text=HTML+Canva',
    url: 'https://html-canva-victorcg.netlify.app/',
    category: 'vibe',
    description: 'Freehand drawing board built on the HTML canvas element',
    tech: ['HTML', 'CSS', 'JavaScript', 'Canvas API']
  },
  {
    id: 22,
    title: 'Drum Kit',
    thumbnail: '/images/drumkit.jpg',
    url: 'https://drumkit-victorcg.netlify.app/',
    category: 'vibe',
    description: 'Keyboard drum kit: press A to J to play claps, hi-hats, kicks, rides and snares',
    tech: ['HTML', 'CSS', 'JavaScript', 'HTML Audio']
  },
  {
    id: 23,
    title: 'What Says the Time',
    thumbnail: '/images/WhatSaysTheTime.png',
    url: 'https://what-says-the-time-victorcg.netlify.app/',
    category: 'vibe',
    description: 'Analogue clock whose hands move in real time with the current time',
    tech: ['HTML', 'CSS', 'JavaScript']
  },
  {
    id: 24,
    title: 'Grocery Store',
    thumbnail: 'https://placehold.co/800x450/1e1b4b/e9d5ff?text=Grocery+Store',
    url: 'https://grocery-store-victorcg.netlify.app/',
    category: 'vibe',
    description: 'Grocery store landing page with product categories such as dairy, cold meats, and fruits and veggies',
    tech: ['HTML', 'CSS', 'Font Awesome']
  },
  {
    id: 25,
    title: 'City Skyline',
    thumbnail: 'https://placehold.co/800x450/1e1b4b/e9d5ff?text=City+Skyline',
    url: 'https://cityskyline-victorcg.netlify.app/',
    category: 'vibe',
    description: 'Night-time city skyline illustration drawn entirely with HTML and CSS',
    tech: ['HTML', 'CSS']
  },
  {
    id: 26,
    title: 'Piano',
    thumbnail: 'https://placehold.co/800x450/1e1b4b/e9d5ff?text=Piano',
    url: 'https://piano-victorcg.netlify.app/',
    category: 'vibe',
    description: 'Playable on-screen piano keyboard in the browser',
    tech: ['HTML', 'CSS', 'JavaScript']
  }
];

// Featured projects already appear on the WebDev page (merged in src/pages/WebDev.tsx),
// so web-only projects go here to avoid showing the same card twice
export const webDevProjects: Project[] = [];

// TODO(CG): add at least one data analysis project; the "Data Analyst" nav link stays hidden until then
export const dataAnalysisProjects: Project[] = [];

export const allProjects = [...featuredProjects, ...vibeCoding, ...webDevProjects, ...dataAnalysisProjects];