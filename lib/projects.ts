export interface ProjectGalleryImage {
  url: string
  caption?: string
}

export interface RelatedProject {
  slug: string
  title: string
  category: string
  image: string
}

export interface Project {
  id: number
  slug: string
  title: string
  category: string
  shortDescription: string
  description: string[]
  features: string[]
  technologies: string[]
  coverImage: string
  thumbnailImage: string
  gallery?: ProjectGalleryImage[]
  client?: string
  timeline: string
  role: string
  liveUrl?: string
  githubUrl?: string
  relatedProjects?: RelatedProject[]
}

const projects: Project[] = [
  {
    id: 1,
    slug: "behaviorbee-platform",
    title: "BehaviourBee",
    category: "Next.js Application",
    shortDescription:
      "A web platform connecting parents with child behavior specialists for online behavioral assessments and management.",
    description: [
      "BehaviourBee is a comprehensive web platform designed to bridge the gap between parents and child behavior specialists. Built with Next.js 14, it features modern web technologies including dynamic routing, server-side rendering, and secure API routes.",
      "The platform integrates Firebase services including Authentication, Firestore database, and Storage for real-time data synchronization and user management, ensuring seamless communication between all stakeholders.",
      "Deployed on Google Cloud Run using Docker containerization for scalable, serverless hosting that can handle varying loads efficiently while maintaining optimal performance.",
    ],
    features: [
      "Parent-specialist matching system for behavioral consultations",
      "Real-time behavioral assessment tools and tracking",
      "Secure user authentication and role-based access control",
      "Interactive dashboards for parents and specialists",
      "Document and report management system",
      "Real-time messaging and appointment scheduling",
      "Mobile-responsive design with modern UI components",
    ],
    technologies: [
      "Next.js 14",
      "Firebase",
      "Google Cloud APIs",
      "Gemini AI",
      "Tailwind CSS",
      "Docker",
      "Google Cloud Run",
    ],
    coverImage: "/behaviourbee.png",
    thumbnailImage: "/behaviourbee.png",
    timeline: "5 months (2024)",
    role: "Full-Stack Developer",
    
    liveUrl: "https://behaviourbee-624316799458.asia-south2.run.app/",
    relatedProjects: [
      {
        slug: "easyride-cab-booking",
        title: "EasyRide Cab Booking",
        category: "MERN Stack",
        image: "/modern-finance-app.png",
      },
      {
        slug: "moodbuddy",
        title: "MoodBuddy",
        category: "Mental Health App",
        image: "/mood-tracking-dashboard.png",
      },
    ],
  },
  {
    id: 2,
    slug: "moodbuddy",
    title: "MoodBuddy",
    category: "Mental Health App",
    shortDescription:
      "A mental health and mood tracking application built with Next.js to help users monitor and improve their emotional well-being.",
    description: [
      "MoodBuddy is a comprehensive mental health application designed to help users track their daily moods, identify patterns, and improve their emotional well-being through data-driven insights.",
      "The application features an intuitive interface for logging daily emotions, activities, and thoughts, with advanced analytics to help users understand their mental health trends over time.",
      "Built with Next.js and modern web technologies, MoodBuddy provides a secure, private environment for users to manage their mental health journey with personalized recommendations and resources.",
    ],
    features: [
      "Neet and clean user interface ",
      "With better understanding about the main product"
    ],
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Chart.js", "Local Storage", "PWA"],
    coverImage: "/moodbuddy.png",
    thumbnailImage: "/moodbuddy.png",
    timeline: "3 months (2024)",
    role: "Full-Stack Developer",
    
    liveUrl: "https://moodbuddy.in",
    relatedProjects: [
      {
        slug: "behaviorbee-platform",
        title: "BehaviourBee Platform",
        category: "Next.js Application",
        image: "/modern-finance-overview.png",
      },
    ],
  },
  {
    id: 3,
    slug: "easyride-cab-booking",
    title: "EasyRide - Cab Booking WebApp",
    category: "Full-Stack Web Application",
    shortDescription:
      "A comprehensive cab booking platform with user and captain authentication, real-time tracking, and role-based dashboards.",
    description: [
      "EasyRide is a full-stack cab booking platform built with the MERN stack that connects passengers with drivers seamlessly. The application features comprehensive user and captain authentication systems with role-based access control.",
      "The platform includes real-time location tracking and ride updates using WebSocket technology and integrated maps APIs for accurate navigation and live tracking features.",
      "The responsive UI was designed with React.js and Tailwind CSS, while the robust backend was built with Node.js, Express, and MongoDB for scalable data management.",
    ],
    features: [
      "User and captain authentication with role-based dashboards",
      "Real-time location tracking and ride updates using WebSockets",
      "Interactive maps integration for route planning and navigation",
      "Ride booking system with fare calculation",
      "Driver-passenger matching algorithm",
      "Payment integration and ride history tracking",
      "Responsive design optimized for mobile and desktop",
    ],
    technologies: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Socket.io",
      "Maps API",
      "Tailwind CSS",
      "JWT Authentication",
    ],
    coverImage: "/cabbooking.png",
    thumbnailImage: "/cabbooking.png",
    timeline: "4 months (2024)",
    role: "Full-Stack Developer",
    githubUrl: "https://github.com/karan79k/cab_booking_MERN",
    relatedProjects: [
      {
        slug: "behaviorbee-platform",
        title: "BehaviourBee Platform",
        category: "Next.js Application",
        image: "/modern-finance-overview.png",
      },
      {
        slug: "intern-area",
        title: "InternArea",
        category: "TypeScript Application",
        image: "/modern-apparel-storefront.png",
      },
    ],
  },
  {
    id: 4,
    slug: "restaurant-ui",
    title: "Tasty Food Restaurant",
    category: "Restaurant Website",
    shortDescription:
      "A modern restaurant website built with React featuring menu exploration, reservation system, and responsive design.",
    description: [
      "Tasty Food Restaurant is a delightful and modern web application built using React that provides a user-friendly platform for showcasing restaurant offerings and services.",
      "The website features comprehensive menu exploration, integrated reservation system, and contact information with map integration for seamless customer experience.",
      "Built with responsive design principles to ensure consistent user experience across desktop, tablet, and mobile devices, making it accessible to all customers.",
    ],
    features: [
      "Interactive menu exploration with categories",
      "Online table reservation system",
      "Image gallery showcasing dishes",
      "Contact information and location mapping",
      "Responsive design for all devices",
      "Modern UI with smooth animations",
      "SEO optimized for local search",
    ],
    technologies: ["React", "JavaScript", "SCSS", "Responsive Design", "React Router"],
    coverImage: "/modern-restaurant-website-with-food-menu.png",
    thumbnailImage: "/restaurant-homepage-design.png",
    timeline: "2 months (2023)",
    role: "Frontend Developer",
    githubUrl: "https://github.com/karan79k/Restaurant-UI",
    liveUrl: "https://tastyfood-ten.vercel.app",
    relatedProjects: [
      {
        slug: "dental-clinic",
        title: "Dental Clinic Website",
        category: "Healthcare Website",
        image: "/dental-clinic-homepage.png",
      },
    ],
  },
  {
    id: 5,
    slug: "dental-clinic",
    title: "Dental Clinic Website",
    category: "Healthcare Website",
    shortDescription:
      "A professional dental clinic website built with React and TypeScript featuring appointment booking and service information.",
    description: [
      "A comprehensive dental clinic website designed to provide patients with easy access to clinic information, services, and appointment booking capabilities.",
      "The website features detailed service descriptions, doctor profiles, and an intuitive appointment scheduling system to streamline patient interactions.",
      "Built with React and TypeScript using Vite for optimal performance, ensuring fast loading times and smooth user experience across all devices.",
    ],
    features: [
      "Online appointment booking system",
      "Comprehensive service information pages",
      "Doctor profiles and qualifications",
      "Patient testimonials and reviews",
      "Contact forms and clinic location mapping",
      "Responsive design optimized for mobile",
      "Fast loading with Vite build system",
    ],
    technologies: ["React", "TypeScript", "Vite", "Tailwind CSS", "ESLint"],
    coverImage: "/professional-dental-clinic-website.png",
    thumbnailImage: "/dental-clinic-homepage.png",
    timeline: "2 months (2025)",
    role: "Frontend Developer",
    githubUrl: "https://github.com/karan79k/Dental-clinic",
    liveUrl: "https://dental-clinic-red.vercel.app",
    relatedProjects: [
      {
        slug: "restaurant-ui",
        title: "Restaurant Website",
        category: "Restaurant Website",
        image: "/restaurant-homepage-design.png",
      },
    ],
  },

  {
    id: 6,
    slug: "portfolio-3d",
    title: "3D Portfolio Website",
    category: "Creative Project",
    shortDescription: "A modern portfolio website featuring 3D design elements and interactive animations.",
    description: [
      "An innovative portfolio website that showcases modern web development capabilities through the integration of 3D design elements and interactive animations. This project demonstrates advanced frontend skills and creative problem-solving.",
      "The website features smooth 3D transitions, interactive elements, and a modern design aesthetic that creates an engaging user experience while maintaining optimal performance.",
      "Built with attention to both visual appeal and functionality, ensuring the 3D elements enhance rather than hinder the user experience.",
    ],
    features: [
      "Interactive 3D design elements and animations",
      "Modern, responsive web design",
      "Smooth transitions and micro-interactions",
      "Optimized performance despite 3D elements",
      "Creative showcase of technical skills",
      "Cross-browser 3D compatibility",
      "Mobile-optimized 3D experiences",
    ],
    technologies: ["JavaScript", "3D Graphics", "CSS3", "Animation Libraries", "Responsive Design"],
    coverImage: "/3d-portfolio-website-with-interactive-elements.png",
    thumbnailImage: "/3d-portfolio-thumbnail.png",
    timeline: "2 months (2025)",
    role: "Frontend Developer & Designer",
    githubUrl: "https://github.com/karan79k/Portfolio",
    relatedProjects: [
      {
        slug: "todoist-ui",
        title: "Todoist UI Clone",
        category: "UI/UX Project",
        image: "/modern-apparel-storefront.png",
      },
      {
        slug: "easyride-cab-booking",
        title: "EasyRide Cab Booking",
        category: "MERN Stack",
        image: "/modern-finance-app.png",
      },
    ],
  },
]

export { projects }

// Add these functions after the projects array export

export function getAllProjects(): Project[] {
  return projects
}

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug)
}

export function getRelatedProjects(currentSlug: string, limit = 2): RelatedProject[] {
  const currentProject = getProjectBySlug(currentSlug)
  if (!currentProject || !currentProject.relatedProjects) {
    // If no related projects defined, return random projects
    return projects
      .filter((project) => project.slug !== currentSlug)
      .slice(0, limit)
      .map((project) => ({
        slug: project.slug,
        title: project.title,
        category: project.category,
        image: project.thumbnailImage,
      }))
  }

  return currentProject.relatedProjects.slice(0, limit)
}

export function getFeaturedProjects(): Project[] {
  return projects.slice(0, 3)
}
