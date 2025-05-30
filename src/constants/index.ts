export const navLinks = [
    {
      id: 1,
      name: 'Home',
      href: 'home',
    },
    {
      id: 2,
      name: 'About',
      href: 'about',
    },
    {
      id: 3,
      name: 'Projects',
      href: 'projects',
    },
    {
      id: 4,
      name: 'Work',
      href: 'work',
    },
    {
      id: 5,
      name: 'Contact',
      href: 'contact',
    },
  ];
  
  export const clientReviews = [
    {
      id: 1,
      name: 'Emily Johnson',
      position: 'Marketing Director at GreenLeaf',
      img: 'assets/review1.png',
      review:
        'Working with Adrian was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.',
    },
    {
      id: 2,
      name: 'Mark Rogers',
      position: 'Founder of TechGear Shop',
      img: 'assets/review2.png',
      review:
        'Adrian’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional! Fantastic work.',
    },
    {
      id: 3,
      name: 'John Dohsas',
      position: 'Project Manager at UrbanTech ',
      img: 'assets/review3.png',
      review:
        'I can’t say enough good things about Adrian. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.',
    },
    {
      id: 4,
      name: 'Ether Smith',
      position: 'CEO of BrightStar Enterprises',
      img: 'assets/review4.png',
      review:
        'Adrian was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend backend dev are top-notch.',
    },
  ];
  
  export const myProjects = [
    {
      title: 'Forever - E-Commerce Platform',
      desc: 'Includes product management features with CRUD operations, search, filtering, and sorting, leveraging Context API for eﬃcient state management. Created RESTful APIs using Express.js for user and admin and optimized MongoDB queries for fast performance, handling large datasets eﬃciently.',
      subdesc:
        'A full-stack platform built using TypeScript, MERN stack, and Tailwind CSS, featuring secure user authentication with JWT and bcrypt.',
      href: 'https://e-commerce-frontend-black-ten.vercel.app',
      texture: '/textures/project/ecomm.png',
      logo: '/assets/ecomm-logo.png',
      logoStyle: {
        backgroundColor: '#f5dfdf',
        border: '0.2px solid #36201D',
        boxShadow: '0px 0px 60px 0px #AA3C304D',
      },
      spotlight: '/assets/spotlight1.png',
      tags: [
        {
          id: 1,
          name: 'React.js',
          path: '/assets/react.svg',
        },
        {
          id: 2,
          name: 'Node.js',
          path: '/assets/nodejs-logo.png',
        },
        {
          id: 3,
          name: 'MongoDB',
          path: '/assets/mongodb-logo.png',
        },
        {
          id: 4,
          name: 'TailwindCSS',
          path: 'assets/tailwindcss.png',
        },
        {
          id: 5,
          name: 'TypeScript',
          path: '/assets/typescript.png',
        }
      ],
    },
    // {
    //   title: 'LiveDoc - Real-Time Google Docs Clone',
    //   desc: 'LiveDoc is a powerful collaborative app that elevates the capabilities of real-time document editing. As an enhanced version of Google Docs, It supports millions of collaborators simultaneously, ensuring that every change is captured instantly and accurately.',
    //   subdesc:
    //     'With LiveDoc, users can experience the future of collaboration, where multiple contributors work together in real time without any lag, by using Next.js and Liveblocks newest features.',
    //   href: 'https://www.youtube.com/watch?v=y5vE8y_f_OM',
    //   texture: '/textures/project/spotify.png',
    //   logo: '/assets/project-logo2.png',
    //   logoStyle: {
    //     backgroundColor: '#13202F',
    //     border: '0.2px solid #17293E',
    //     boxShadow: '0px 0px 60px 0px #2F6DB54D',
    //   },
    //   spotlight: '/assets/spotlight2.png',
    //   tags: [
    //     {
    //       id: 1,
    //       name: 'React.js',
    //       path: '/assets/react.svg',
    //     },
    //     {
    //       id: 2,
    //       name: 'TailwindCSS',
    //       path: 'assets/tailwindcss.png',
    //     },
    //     {
    //       id: 3,
    //       name: 'TypeScript',
    //       path: '/assets/typescript.png',
    //     },
    //     {
    //       id: 4,
    //       name: 'Framer Motion',
    //       path: '/assets/framer.png',
    //     },
    //   ],
    // },
    {
      title: 'Spotify Frontend Clone',
      desc: "Recreated Spotify’s dark-themed, responsive UI using React.js, showcasing advanced component-based design.Implemented smooth navigation and dynamic interface elements using state management and Context API.",
      subdesc:
        'Built with React.js, Tailwind CSS, TypeScript.',
      href: 'https://spotify-frontend-clone-react-app.vercel.app',
      texture: '/textures/project/spotify.png',
      logo: '/assets/spotify-logo.png',
      logoStyle: {
        backgroundColor: '#60f5a1',
        background:
          'linear-gradient(0deg, #60F5A150, #60F5A150), linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(208, 213, 221, 0.8) 100%)',
        border: '0.2px solid rgba(208, 213, 221, 1)',
        boxShadow: '0px 0px 60px 0px rgba(35, 131, 96, 0.3)',
      },
      spotlight: '/assets/spotlight3.png',
      tags: [
        {
          id: 1,
          name: 'React.js',
          path: '/assets/react.svg',
        },
        {
          id: 2,
          name: 'TailwindCSS',
          path: 'assets/tailwindcss.png',
        },
        {
          id: 3,
          name: 'TypeScript',
          path: '/assets/typescript.png',
        }
      ],
    },
    // {
    //   title: 'Horizon - Online Banking Platform',
    //   desc: 'Horizon is a comprehensive online banking platform that offers users a centralized finance management dashboard. It allows users to connect multiple bank accounts, monitor real-time transactions, and seamlessly transfer money to other users.',
    //   subdesc:
    //     'Built with Next.js 14 Appwrite, Dwolla and Plaid, Horizon ensures a smooth and secure banking experience, tailored to meet the needs of modern consumers.',
    //   href: 'https://www.youtube.com/watch?v=PuOVqP_cjkE',
    //   texture: '/textures/project/project4.mp4',
    //   logo: '/assets/project-logo4.png',
    //   logoStyle: {
    //     backgroundColor: '#0E1F38',
    //     border: '0.2px solid #0E2D58',
    //     boxShadow: '0px 0px 60px 0px #2F67B64D',
    //   },
    //   spotlight: '/assets/spotlight4.png',
    //   tags: [
    //     {
    //       id: 1,
    //       name: 'React.js',
    //       path: '/assets/react.svg',
    //     },
    //     {
    //       id: 2,
    //       name: 'TailwindCSS',
    //       path: 'assets/tailwindcss.png',
    //     },
    //     {
    //       id: 3,
    //       name: 'TypeScript',
    //       path: '/assets/typescript.png',
    //     },
    //     {
    //       id: 4,
    //       name: 'Framer Motion',
    //       path: '/assets/framer.png',
    //     },
    //   ],
    // },
    {
      title: 'Gemini AI Clone',
      desc: 'Leveraging the Gemini API with important features like chat, chat history, and formatted markdown output. Engineered advanced state management using React Context with intuitive prompt suggestions, animated loaders, and adaptive UI elements to ensure high performance and enhanced user experience.',
      subdesc:
        'Built with React.js, Tailwind CSS, TypeScript, and Gemini API',
      href: 'https://gemini-clone-manan.vercel.app',
      texture: '/textures/project/gemini.png',
      logo: '/assets/project-logo5.png',
      logoStyle: {
        backgroundColor: '#1C1A43',
        border: '0.2px solid #252262',
        boxShadow: '0px 0px 60px 0px #635BFF4D',
      },
      spotlight: '/assets/spotlight5.png',
      tags: [
        {
          id: 1,
          name: 'React.js',
          path: '/assets/react.svg',
        },
        {
          id: 2,
          name: 'TailwindCSS',
          path: 'assets/tailwindcss.png',
        },
        {
          id: 3,
          name: 'TypeScript',
          path: '/assets/typescript.png',
        }
      ],
    },
  ];
  
  export const calculateSizes = (isSmall:number, isMobile:number, isTablet:number) => {
    return {
      deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
      deskPosition: isMobile ? [0.5, -4.5, 0] : [0.5, -5.5, 0],

      jsLogoScale: isSmall ? 0.4 : isMobile ? 0.45 : 1,
      jsLogoPosition: isSmall ? [2, -2, 1] : isMobile ? [1.75, -1, 8] : isTablet ? [5, -2, 2] : [10, -1.5, 0],

      reactLogoScale: isSmall ? 0.2 : isMobile ? 0.25 : 0.5,
      reactLogoPosition: isSmall ? [3, 4, 0] : isMobile ? [4, 3.5, 0] : isTablet ? [6, 3, 0] : [10, 3, 0],

      pythonLogoScale: isSmall ? 0.45 : isMobile ? 0.6 : 1,
      pythonLogoPosition: isSmall ? [-3, 6.75, 0] : isMobile ? [-4.2, 7.5, 0] : isTablet ? [-8, 8, 0] : [-11, 8, 0],

      gitLogoScale: isSmall ? 0.4 : isMobile ? 0.45 : 1,
      gitLogoPosition: isSmall ? [-2.8, -4.5, -1] : isMobile ? [-4, -5, 2] : isTablet ? [-11, -8, -10] : [-14, -9, -10],
    };
  };
  
  export const workExperiences = [
    {
      id: 1,
      name: 'Deevia Software',
      pos: 'Full Stack Developer',
      duration: 'Dec 2023 - Apr 2025',
      contributions: [
        "Designed and implemented 3 scalable backend systems using Python, Flask and Express.js.",
        "Integrated WebSocket-based live camera feeds, reducing 12 hours of manual work daily.",
        "Optimized system performance with async processing, cutting latency by 30%.",
        "Developed role-based authentication using JWT, securing access for 100+ users.",
      ],
      icon: '/assets/deevia.webp',
      animation: 'victory',
    },
    {
      id: 2,
      name: 'IBM',
      pos: 'Backend Developer Intern',
      duration: 'Jan 2023 - Jul 2023',
      contributions: [
        "Developed RESTful APIs with Node.js, reducing response times by 20%.",
        "Automated access control on IBM Cloud, eliminating 90% of manual errors.",
        "Boosted team productivity by 15% through Agile collaboration.",
        "Completed Node.js and REST API training in just 2 weeks.",
      ],
      icon: '/assets/IBM.svg',
      animation: 'clapping',
    },
    {
      id: 3,
      name: 'Tata Consultancy Service (TCS)',
      pos: 'Web Developer Summer Intern',
      duration: 'Jun 2022 - Aug 2022',
      contributions: [
        "Built full-stack web apps with React & CRUD operations.",
        "Developed responsive UI forms, improving team efficiency by 15%.",
        "Completed HTML, CSS, JavaScript training in 2 weeks.",
      ],
      icon: '/assets/tcs.svg',
      animation: 'salute',
    },
  ];