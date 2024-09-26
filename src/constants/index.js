import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";
import portfolio from "../assets/projects/portfolio.png";
import thebone from "../assets/projects/thebone.png";
import cuanapp from "../assets/projects/cuanapp.png";
import notesapp from "../assets/projects/notesapp.jpg";

export const HERO_CONTENT = `I am very passionate about being an Android Developer. I am currently honing my skills in android technologies like Kotlin, Jetpack Compose, RoomDB, and Firebase.`;

export const ABOUT_TEXT = `Starting from a great curiosity about the world of technology, then starting to try several things like HTML, CSS, JS, until now I am studying Kotlin & Android and maybe will continue to Flutter and even Swift, besides that I am also interested in trying several web technologies such as React and Laravel. My goal is to leverage my skills to create innovative solutions that drive business growth and deliver great user experiences.`;

export const EXPERIENCES = [
  {
    year: "2023 - Present",
    role: "Senior Full Stack Developer",
    company: "Google Inc.",
    description: `Led a team in developing and maintaining web applications using JavaScript, React.js, and Node.js. Implemented RESTful APIs and integrated with MongoDB databases. Collaborated with stakeholders to define project requirements and timelines.`,
    technologies: ["Javascript", "React.js", "Next.js", "mongoDB"],
  },
  {
    year: "2022 - 2023",
    role: "Frontend Developer",
    company: "Adobe",
    description: `Designed and developed user interfaces for web applications using Next.js and React. Worked closely with backend developers to integrate frontend components with Node.js APIs. Implemented responsive designs and optimized frontend performance.`,
    technologies: ["HTML", "CSS", "Vue.js", "mySQL"],
  },
  {
    year: "2021 - 2022",
    role: "Full Stack Developer",
    company: "Facebook",
    description: `Developed and maintained web applications using JavaScript, React.js, and Node.js. Designed and implemented RESTful APIs for data communication. Collaborated with cross-functional teams to deliver high-quality software products on schedule.`,
    technologies: ["Python", "Svelte", "Three.js", "Postgres"],
  },
  {
    year: "2020 - 2021",
    role: "Software Engineer",
    company: "Paypal",
    description: `Contributed to the development of web applications using JavaScript, React.js, and Node.js. Managed databases and implemented data storage solutions using MongoDB. Worked closely with product managers to prioritize features and enhancements.`,
    technologies: ["Ruby", "Rails", "PHP", "Sqlite"],
  },
];

export const PROJECTS = [
  {
    title: "Cuan App",
    image: cuanapp,
    description:
      "A fully functional e-commerce website with features like product listing, shopping cart, and user authentication.",
    technologies: ["Kotlin", "RoomDB"],
  },
  {
    title: "Notes App",
    image: notesapp,
    description:
      "An application for managing tasks and projects, with features such as task creation, assignment, and progress tracking.",
    technologies: ["Kotlin", "RoomDB", "Material Design"],
  },
  {
    title: "Portfolio Website",
    image: portfolio,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "React", "Tailwind"],
  },
  {
    title: "The Bone",
    image: thebone,
    description:
      "A platform for creating and publishing blog posts, with features like rich text editing, commenting, and user profiles.",
    technologies: ["HTML", "Tailwind", "JS", "PHP", "mySQL"],
  },
];

export const CONTACT = {
  phoneNo: "+62 8820 0572 2916",
  email: "alvinmrandi.08612@gmail.com",
};
