export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "I prioritize client collaboration, fostering open communication ",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently building an enterprise level software",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "Fullstack Cabin business Management System",
    des: "Manage Your cabin business easily and effectively using mokkiparadise",
    img: "/p1.png",
    iconLists: ["/re.svg", "/tail.svg", "/js.svg", "/requ.svg", "/supa.svg"],
    link: "https://mokki-paradise.netlify.app/",
  },
  {
    id: 2,
    title: "Cryptoversal - A Cryptocurrency Monitor platform",
    des: "Stay ahead of the cryptocurrency market and get the latest news and trends about crypto",
    img: "/p2.png",
    iconLists: ["/re.svg", "/next.svg", "/ts.svg", "/tail.svg", "/supa.svg"],
    link: "https://cryptoversal.netlify.app/",
  },
  {
    id: 3,
    title: "Travely - Travel Advisor Service",
    des: "Get resturants, attractions and weather data of your location",
    img: "/p3.png",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/next.svg"],
    link: "https://travely.netlify.app/",
  },
  {
    id: 4,
    title: "Ishtar Real Estate - Luxury Real Estate Listing ",
    des: "Luxury Homes & Appartments Listing based in Dubai, UAE.",
    img: "/p4.png",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/supa.svg", "/requ.svg"],
    link: "https://ishtar-real-estate.vercel.app/",
  },
];

export const testimonials = [
  {
    quote:
      "Working with Sorin has been an absolute pleasure! His attention to detail and innovative problem-solving skills have greatly contributed to the success of our projects. His dedication to quality and timely delivery is commendable. I highly recommend Sorin for any software development endeavor.",
    name: "Emily Johnson",
    title: "Project Manager",
  },
  {
    quote:
      "Sorin's expertise in software development is truly exceptional. His ability to grasp complex requirements and translate them into efficient code is impressive. Sorin's professionalism and clear communication make collaboration effortless. It's been a pleasure working with him, and I look forward to future projects together.",
    name: "Michael Rodriguez",
    title: "Lead Developer",
  },
  {
    quote:
      "I've had the privilege of working with Sorin on multiple occasions, and each time he has exceeded expectations. His passion for crafting clean, scalable code shines through in every project. Sorin's proactive approach to problem-solving and his strong work ethic make him an invaluable asset to any development team. I wholeheartedly endorse Sorin for his outstanding skills and professionalism.",
    name: "Sarah Thompson",
    title: "Software Engineer",
  },
  {
    quote:
      "Sorin is a software development rockstar! His technical prowess combined with his collaborative nature make him a joy to work with. Sorin consistently delivers high-quality solutions on time and within budget. His ability to adapt to changing requirements and his meticulous attention to detail set him apart. I wouldn't hesitate to recommend Sorin for any software development project.",
    name: "David Martin",
    title: " IT Director",
  },
  {
    quote:
      "I've had the pleasure of collaborating with Sorin on several challenging projects, and I couldn't be more satisfied with the results. His depth of knowledge in software development is remarkable, and he always brings fresh ideas to the table. Sorin's dedication to excellence and his commitment to delivering exceptional results make him a standout developer. It's been a privilege working alongside Sorin, and I eagerly anticipate future collaborations.",
    name: "Jennifer Lee",
    title: "Chief Technology Officer",
  },
];

export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Software Developer Intern",
    desc: "Played A main rool in the development of a web application using React.js, Amazon AWS, NextJS, GraphQL",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Mobile App Dev - JSM Tech",
    desc: "Designed and developed mobile app for both iOS & Android platforms using React Native.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Freelance App Dev Project",
    desc: "Led the dev of a mobile app for a client, from initial concept to deployment on app stores.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Lead Frontend Developer",
    desc: "Developed and maintained user-facing features using modern frontend technologies.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
  },
  {
    id: 2,
    img: "/twit.svg",
  },
  {
    id: 3,
    img: "/link.svg",
  },
];
