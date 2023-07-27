/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to true if you want to use the splash screen.
  useCustomCursor: false, // Change this to false if you want the good'ol cursor
  googleTrackingID: "",
};

//Home Page
const greeting = {
  title: "Hello 👋.",
  title2: "Nisarg",
  logo_name: "<Nisarg Patel />",
  // nickname: "harry / picleric",
  full_name: "Nisarg Patel",
  subTitle:
    "Full Stack Developer, Machine Learning Practitioner, Open Source Enthusiast, Life Long Learner.",
  resumeLink:
    "https://drive.google.com/file/d/1Di2cxh5P4bDBMlgld9_8_eesW_z_tNr3/view?usp=share_link",
    coverletterLink: "https://drive.google.com/file/d/1ZBhJydPwi4YKYrNu-TgMaHEcxsbHpk3N/view?usp=share_link",
  mail: "mailto:nisargpatel07112002@gmail.com",
};

const socialMediaLinks = {
  /* Your Social Media Link */
  github: "https://github.com/NisargPatel0711",
  linkedin: "https://www.linkedin.com/in/nisarg-patel-436983239/",
  gmail: "nisargpatel07112002@gmail.com",
  facebook: "https://www.facebook.com/nisarg.patel07/",
  twitter: "https://twitter.com/Nisarg0711",
  instagram: "https://www.instagram.com/nisarg0711/",
};

const skills = {
  data: [
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Create web apps with highly interactive user interfaces and backends.",
        "⚡ Using ReactJS to create responsive front ends for websites",
        "⚡ Creating a backend for an application using Node, Express, Flask, Django, and Fast-API",
        "⚡ Incorporating services from other parties like Firebase, Amazon, and GCP",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#FFFFFF",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "Bootstrap",
          fontAwesomeClassname: "simple-icons:bootstrap",
          style: {
            color: "#563d7c",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "simple-icons:node-dot-js",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },
        {
          skillName: "Flask",
          fontAwesomeClassname: "simple-icons:flask",
          style: {
            color: "#000000",
          },
        },
        {
          skillName: "Django",
          fontAwesomeClassname: "simple-icons:django",
          style: {
            color: "#0c4b33",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#439743",
          },
        },
        {
          skillName: "GraphQL",
          fontAwesomeClassname: "simple-icons:graphql",
          style: {
            color: "#DE33A6",
          },
        },
        {
          skillName: "Android",
          fontAwesomeClassname: "simple-icons:android",
          style: {
            color: "#3DDC84",
          },
        },
        {
          skillName: "Java",
          fontAwesomeClassname: "simple-icons:java",
          style: {
            color: "#f89820",
          },
        },
        // {
        //   skillName: "Flutter",
        //   fontAwesomeClassname: "simple-icons:flutter",
        //   style: {
        //     color: "#02569B",
        //   },
        // },
        // {
        //   skillName: "Dart",
        //   fontAwesomeClassname: "simple-icons:dart",
        //   style: {
        //     color: "#29B0EE",
        //   },
        // },
        // {
        //   skillName: "Linux",
        //   fontAwesomeClassname: "simple-icons:linux",
        //   style: {
        //     color: "#000000",
        //   },
        // },
        {
          skillName: "MySQL",
          fontAwesomeClassname: "simple-icons:mysql",
          style: {
            color: "#4479A1",
          },
        },
        // {
        //   skillName: "jQuery",
        //   fontAwesomeClassname: "simple-icons:jquery",
        //   style: {
        //     color: "#0865A6",
        //   },
        // },
        // {
        //   skillName: "Wordpress",
        //   fontAwesomeClassname: "simple-icons:wordpress",
        //   style: {
        //     color: "#207297",
        //   },
        // },
        // {
        //   skillName: "Apache",
        //   fontAwesomeClassname: "simple-icons:apache",
        //   style: {
        //     color: "#CA1A22",
        //   },
        // },
        {
          skillName: "Git",
          fontAwesomeClassname: "simple-icons:git",
          style: {
            color: "#E94E32",
          },
        },
        // {
        //   skillName: "C",
        //   fontAwesomeClassname: "simple-icons:c",
        //   style: {
        //     color: "#E94E32",
        //   },
        // },
        // {
        //   skillName: "C++",
        //   fontAwesomeClassname: "simple-icons:cplusplus",
        //   style: {
        //     color: "#E94E32",
        //   },
        // },
        {
          skillName: "Python",
          fontAwesomeClassname: "simple-icons:python",
          style: {
            color: "#3776AB",
          },
        },
      ],
    },
    {
      title: "Cloud Infrastructure",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Working knowledge of several cloud platforms",
        "⚡ Website hosting and management experience",
        "⚡ Knowledge of Continuous Integration",
      ],
      softwareSkills: [
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            color: "#FF9900",
          },
        },
        {
          skillName: "Netlify",
          fontAwesomeClassname: "simple-icons:netlify",
          style: {
            color: "#38AFBB",
          },
        },
        {
          skillName: "Heroku",
          fontAwesomeClassname: "simple-icons:heroku",
          style: {
            color: "#6863A6",
          },
        },
        {
          skillName: "Firebase",
          fontAwesomeClassname: "simple-icons:firebase",
          style: {
            color: "#FFCA28",
          },
        },
        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "simple-icons:postgresql",
          style: {
            color: "#336791",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#47A248",
          },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#1488C6",
          },
        },
        {
          skillName: "GitHub Actions",
          fontAwesomeClassname: "simple-icons:githubactions",
          style: {
            color: "#5b77ef",
          },
        },
      ],
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "George Brown College",
      subtitle: "Ontario College Advanced Diploma",
      logo_path: "gbc.png",
      alt_name: "GBC",
      duration: "Jan 2021 - Apr 2023",
      descriptions: [
        "⚡ I recently completed Advanced Diploma in Computer Programming & Analysis.",
        "⚡ I have studied core subjects like Data Structures, DBMS, Networking, Security, etc. till now.",
        "⚡ I have also completed various online courses for Backend , Web , Mobile App Development, etc.",
        "⚡ I have implemented several projects based on what I've leart under my Computer Engineering course.",
      ],
      website_link: "https://www.georgebrown.ca/",
    },
  ],
};

const awards = {
  awards: [
    {
      title: "Dean's Honour List",
      subtitle: "Winter - 2021",
      logo_path: "gbc.png",
      certificate_link: "https://drive.google.com/file/d/1CYnvlXVf7bE5-vnJ_OOOuGJYMYHCT67r/view?usp=share_link",
      alt_name: "honour list",
      color_code: "#ffc475",
    },
    {
      title: "Dean's Honour List",
      subtitle: "Spring - 2021",
      logo_path: "gbc.png",
      certificate_link: "https://drive.google.com/file/d/1W1jD-_49JAHvNg2tQ7r4xYS1PcmFt-qu/view?usp=share_link",
      alt_name: "honour list",
      color_code: "#C5E2EE",
    },
    {
      title: "Dean's Honour List",
      subtitle: "Fall - 2021",
      logo_path: "gbc.png",
      certificate_link: "https://drive.google.com/file/d/1jmd-KGf8ac21ulFsYTK7QhqWl4fDN0hR/view?usp=share_link",
      alt_name: "honour list",
      color_code: "#b190b0",
    },
    {
      title: "Dean's Honour List",
      subtitle: "Winter - 2022",
      logo_path: "gbc.png",
      certificate_link: "https://drive.google.com/file/d/1EZuJKCwpom9Jjm0N7t1k_0A4Am5llMtm/view?usp=share_link",
      alt_name: "honour list",
      color_code: "#0C9D5899",
    },
    {
      title: "Dean's Honour List",
      subtitle: "Fall - 2022",
      logo_path: "gbc.png",
      certificate_link: "https://drive.google.com/file/d/1wVnkc1P6n_lTvnwQZTVBH8bKgO9QOlfS/view?usp=share_link",
      alt_name: "honour list",
      color_code: "#ffbfae",
    },
    {
      title: "Academic Transcript",
      subtitle: "",
      logo_path: "gbc.png",
      certificate_link: "https://drive.google.com/file/d/1X_wgmtl3BQzyCz1-8OLrXnN3J1KjUYH5/view?usp=share_link",
      alt_name: "transcript",
      color_code: "#fffbf3",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "ReactJS",
      subtitle: "Intermediate",
      logo_path: "react.png",
      // certificate_link: "https://react.dev/",
      alt_name: "React skill",
      color_code: "#8C151599",
    },
    {
      title: "Angular",
      subtitle: "Basic",
      logo_path: "angular.png",
      //certificate_link: "https://react.dev/",
      alt_name: "Angular skill",
      color_code: "#C5E2EE",
    },
    {
      title: "Django",
      subtitle: "Intermediate",
      logo_path: "django.png",
      //certificate_link: "https://react.dev/",
      alt_name: "Django skill",
      color_code: "#0C9D5899",
    },
    {
      title: "JavaScript",
      subtitle: "Advance",
      logo_path: "javascript.png",
      //certificate_link: "https://react.dev/",
      alt_name: "Javascript skill",
      color_code: "#b190b0",
    },
    {
      title: "TypeScript",
      subtitle: "Basic",
      logo_path: "typescript.png",
      //certificate_link: "https://react.dev/",
      alt_name: "TypeScript skill",
      color_code: "#ffc475",
    },
    {
      title: "Andriod Development using Java",
      subtitle: "Intermediate",
      logo_path: "android.png",
      //certificate_link: "https://react.dev/",
      alt_name: "Android skill",
      color_code: "#7A7A7A",
    },
    {
      title: "C#",
      subtitle: "Advance",
      logo_path: "csharp.png",
      //certificate_link: "https://react.dev/",
      alt_name: "C# skill",
      color_code: "#ffbfae",
    },
    {
      title: "Java",
      subtitle: "Intermediate",
      logo_path: "java.png",
      //certificate_link: "https://react.dev/",
      alt_name: "java skill",
      color_code: "#8C151599",
    },
    {
      title: "Jquery",
      subtitle: "Intermediate",
      logo_path: "jquery.png",
      //certificate_link: "https://react.dev/",
      alt_name: "Jquery skill",
      color_code: "#C5E2EE",
    },
    {
      title: "NodeJS",
      subtitle: "Advance",
      logo_path: "nodejs.png",
      //certificate_link: "https://react.dev/",
      alt_name: "Nodejs skill",
      color_code: "#b190b0",
    },
    {
      title: "PHP",
      subtitle: "Intermediate",
      logo_path: "php.png",
      //certificate_link: "https://react.dev/",
      alt_name: "php skill",
      color_code: "#fffbf3",
    },
    {
      title: "iOS Developement using Swift",
      subtitle: "Intermediate",
      logo_path: "swift.png",
      //certificate_link: "https://react.dev/",
      alt_name: "swift skill",
      color_code: "#ffc475",
    },

    // color_code: "#8C151599",
    // color_code: "#7A7A7A",
    // color_code: "#0C9D5899",
    // color_code: "#C5E2EE",
    // color_code: "#ffc475",
    // color_code: "#g",
    // color_code: "#ffbfae",
    // color_code: "#fffbf3",
    // color_code: "#b190b0",
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Internship and Volunteership",
  description:
    "I've completed one internship. I've mostly done projects on my own and I am actively looking for internships. I love organizing workshops to share my knowledge with others.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work Experience",
      experiences: [
        {
          title: "Restaurant Manager & Food Supervisor",
          company: "Pizza Pizza",
          company_url: "https://www.pizzapizza.ca/",
          logo_path: "pizzapizza.png",
          duration: "Sept 2021 - Present",
          location: "",
          description: [
            "👉	Prepared food items consistently and in compliance with recipes, portioning, cooking and waste control guidelines.",
            "👉	Overlooked kitchen staff by helping in orienting, training, assigning, supervising when necessary.",
            "👉	Provided best customer service, as well as managed the store with team members. ",
            "👉	Advised new staff in proper food preparation, food storage, use of kitchen equipment and utensils, sanitation, and safety issues.",
            "👉	Ensured all staff understood expectations and parameters of kitchen goals and daily kitchen work.",
            "👉	Examined and Cleaned areas where food is prepared to make sure of sanitary food handling practices.",
          ],
          // "I worked on the Dashboard project which helps users track their activities while using Walo Application. I also worked on Ocean Inventory Application and it's Admin panel Backend as well as on Ocean Inventory Admin Front-end using React and also worked on Walo Admin Backend.",
          color: "#0071C5",
        },
        {
          title: "Junior Web Developer - Permanent Fulltime",
          company: "SM Group Of Companies",
          company_url: "http://www.smgroupco.com/",
          logo_path: "sm-group.png",
          duration: "May 2020 -  Jun 2021",
          location: "",
          description: [
            "👉	Developed an application for pharmaceutical company with ASP.NET and React",
            "👉	Deployed applications on cloud services like, AWS and Digital Ocean",
            "👉	Tested the application to increase the efficiency",
            "👉	Solved bugs in the applications to increase the capabilities of software",
            "👉	Worked on UI and UX and met all client requirements to make the application user-friendly and attractive.",
          ],
          // "Created Front end of Yearn Financial Mutual Funds website. also degined simple web application for better user experience, designed DB Schemas as well.",
          color: "#ee3c26",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects make use of a vast variety of latest technology tools. My best experience is to create NodeJS Backend Projects, Python Scripts, and React Project. Below are some of my projects. Note that not all of the mentioned projects are on GitHub yet.",
  avatar_image_path: "projects_image.svg",
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "profile_photo_2.jpg",
    description:
      "You can contact me at the places mentioned below. I will try to get back to you as fast as I can. ",
  },
};

const projects = {
  data: [
    {
      id: "0",
      name: "Chat Application",
      url: "https://github.com/NisargPatel0711/101340403_lab_test1_chat_app",
      description:
        "A chatting application which lets the users to chat with each other on 3 different channels or topics.",
      languages: [
        {
          name: "HTML5",
          iconifyClass: "vscode-icons:file-type-html",
        },
        {
          name: "CSS3",
          iconifyClass: "vscode-icons:file-type-css",
        },
        {
          name: "Bootstrap",
          iconifyClass: "logos:bootstrap",
        },
        {
          name: "JavaScript",
          iconifyClass: "logos-javascript",
        },
        {
          name: "React",
          iconifyClass: "logos:react",
        },
        {
          name: "WebSockets",
          iconifyClass: "logos:socket-io",
        },
      ],
    },
    {
      id: "1",
      name: "Restaurant Reviews",
      url:
        "https://github.com/NisargPatel0711/COMP3074-Project---RestaurantGuide",
      description:
        "A mobile application where user can rate restaurants, save it for future, shows direction to that restaurant from current location, share your feedback via facebook, twitter or mail",
      languages: [
        {
          name: "Java",
          iconifyClass: "logos:java",
        },
        {
          name: "android",
          iconifyClass: "logos:android-vertical",
        },
      ],
    },
    {
      id: "2",
      name: "Employee Manager Application",
      url:
        "https://github.com/NisargPatel0711/101340403_comp3123_assignment2_reactjs",
      description:
        "A simple CRUD application with an eye catching UI made using MERN stack.",
      languages: [
        {
          name: "HTML5",
          iconifyClass: "vscode-icons:file-type-html",
        },
        {
          name: "CSS3",
          iconifyClass: "vscode-icons:file-type-css",
        },
        {
          name: "Bootstrap",
          iconifyClass: "logos:bootstrap",
        },
        {
          name: "MongoDB",
          iconifyClass: "logos:mongodb-icon",
        },
        {
          name: "ReactJS",
          iconifyClass: "logos-react",
        },
        {
          name: "Express",
          iconifyClass: "skill-icons:expressjs-light",
        },
        {
          name: "NodeJS",
          iconifyClass: "logos:nodejs-icon",
        },
      ],
    },
    {
      id: "3",
      name: "Seller Central Platform",
      url: "https://github.com/NisargPatel0711",
      description:
        "A platform for managing your all selling platforms at once like amazon, shopify, etc. This tool helps you manage your inventory and sells those products on e-commerce.",
      languages: [
        {
          name: "HTML5",
          iconifyClass: "vscode-icons:file-type-html",
        },
        {
          name: "CSS3",
          iconifyClass: "vscode-icons:file-type-css",
        },
        {
          name: "Bootstrap",
          iconifyClass: "logos:bootstrap",
        },
        {
          name: "JavaScript",
          iconifyClass: "logos-javascript",
        },
        {
          name: "Django",
          iconifyClass: "vscode-icons:file-type-django",
        },
        {
          name: "Python",
          iconifyClass: "vscode-icons:file-type-python",
        },
      ],
    },
    {
      id: "4",
      name: "Sports Manager App",
      url: "https://github.com/NisargPatel0711/comp1239-assignment02",
      description:
        "A tools for every school or college for managing their sports or athletic section, which lets you manage students in the sports and also all sports activities.",
      languages: [
        {
          name: "HTML5",
          iconifyClass: "vscode-icons:file-type-html",
        },
        {
          name: "CSS3",
          iconifyClass: "vscode-icons:file-type-css",
        },
        {
          name: "JavaScript",
          iconifyClass: "logos-javascript",
        },
        {
          name: "Jquery",
          iconifyClass: "skill-icons:jquery",
        },
        {
          name: "C#",
          iconifyClass: "vscode-icons:file-type-csharp2",
        },
        {
          name: "ASP.NET",
          iconifyClass: "skill-icons:dotnet",
        },
      ],
    },
    {
      id: "5",
      name: "Weather Application",
      url: "https://github.com/NisargPatel0711/101340403_comp3123_labtest2",
      description:
        "A weather application which shows every single minute details of weather of a specific location requested by user.",
      languages: [
        {
          name: "HTML5",
          iconifyClass: "vscode-icons:file-type-html",
        },
        {
          name: "CSS3",
          iconifyClass: "vscode-icons:file-type-css",
        },
        {
          name: "Bootstrap",
          iconifyClass: "logos:bootstrap",
        },
        {
          name: "JavaScript",
          iconifyClass: "logos-javascript",
        },
        {
          name: "ReactJS",
          iconifyClass: "logos-react",
        },
        {
          name: "NodeJS",
          iconifyClass: "logos:nodejs-icon",
        },
      ],
    },
    {
      id: "6",
      name: "Receipe Application",
      url: "https://github.com/NisargPatel0711/COMP3095-Assignment2",
      description:
        "A web application where user can store receipe of a dish along with ingredients list for it. Also, user can create a list for shopping the ingredients in form of csv file.",
      languages: [
        {
          name: "HTML5",
          iconifyClass: "vscode-icons:file-type-html",
        },
        {
          name: "CSS3",
          iconifyClass: "vscode-icons:file-type-css",
        },
        {
          name: "Bootstrap",
          iconifyClass: "logos:bootstrap",
        },
        {
          name: "JavaScript",
          iconifyClass: "logos-javascript",
        },
        {
          name: "Java",
          iconifyClass: "logos:java",
        },
        {
          name: "Spring",
          iconifyClass: "logos:spring-icon",
        },
      ],
    },
    {
      id: "7",
      name: "To-Do Application",
      url: "https://github.com/NisargPatel0711",
      description:
        "A day-to-day use application for organizing your tasks on daily basis. This app is only for iOS devices which lets user to set the tasks of their current day or for future.",
      languages: [
        {
          name: "Swift",
          iconifyClass: "skill-icons:swift",
        },
        {
          name: "Apple",
          iconifyClass: "fa:apple",
        },
      ],
    },
    {
      id: "8",
      name: "Portfolio Website",
      url: "https://github.com/NisargPatel0711/Portfolio-main",
      description: "You are stalking it right now 😉",
      languages: [
        {
          name: "HTML5",
          iconifyClass: "vscode-icons:file-type-html",
        },
        {
          name: "CSS3",
          iconifyClass: "vscode-icons:file-type-css",
        },
        {
          name: "JavaScript",
          iconifyClass: "logos-javascript",
        },
        {
          name: "ReactJS",
          iconifyClass: "logos-react",
        },
      ],
    },
  ],
};

export {
  settings,
  greeting,
  socialMediaLinks,
  skills,
  degrees,
  certifications,
  experience,
  projectsHeader,
  contactPageData,
  projects,
  awards,
};
