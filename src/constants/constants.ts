import {
  NavLink,
  SkillProps,
  ExperienceProps,
  ProjectProps,
} from './interfaces'

export const navLinks: NavLink[] = [
  {
    name: 'About',
    url: '/',
  },
  {
    name: 'Skills',
    url: '/skills',
  },
  {
    name: 'Experiences',
    url: '/experience',
  },
  {
    name: 'Projects',
    url: '/projects',
  },
  {
    name: 'Contact',
    url: '/contact',
  },
]

export const skills: SkillProps[] = [
  {
    title: 'Frontend',
    skills: [
      {
        name: 'JavaScript',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/800px-JavaScript-logo.png',
      },
      {
        name: 'TypeScript',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/f/f5/Typescript.svg',
      },
      {
        name: 'React Js/Ts',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg',
      },
      {
        name: 'Redux-Toolkit',
        image:
          'https://d33wubrfki0l68.cloudfront.net/0834d0215db51e91525a25acf97433051f280f2f/c30f5/image/redux.svg',
      },
      {
        name: 'Next Js',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/8/8e/Nextjs-logo.svg',
      },
      {
        name: 'Python',
        image:
          'https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg',
      },

      {
        name: 'HTML',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg',
      },
      {
        name: 'CSS',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1452px-CSS3_logo_and_wordmark.svg.png',
      },
      {
        name: 'Styled Components',
        image: 'https://styled-components.com/logo.png',
      },
      {
        name: 'Material UI',
        image: 'https://iconduck.com/icons/27659/material-ui',
      },
      {
        name: 'Tailwind CSS',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg',
      },
      {
        name: 'Framer Motion',
        image:
          'https://camo.githubusercontent.com/3bcd317876dc122d3055613c7f5450134050d0c5a8683807c6f2e8e2178737b0/68747470733a2f2f6672616d657275736572636f6e74656e742e636f6d2f696d616765732f34386861395a52396f5a51475136675a38595566456c50335430412e706e67',
      },
      {
        name: 'React Testing Library',
        image: 'https://testing-library.com/image/octopus-128x128.png',
      },
      {
        name: 'Jest Test',
        image:
          'https://raw.githubusercontent.com/devicons/devicon/master/icons/jest/jest-plain.svg',
      },
    ],
  },
  {
    title: 'Backend',
    skills: [
      {
        name: 'Node Js',
        image: 'https://nodejs.org/static/images/logo.svg',
      },
      {
        name: 'Express Js',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/6/64/Expressjs.png',
      },
      {
        name: 'MongoDB',
        image:
          'https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg',
      },
      {
        name: 'Django',
        image:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlFFyY16N5NRhzoG24RqB7x8Ok2t8Bdgs-tuMsOBXS2Q&s',
      },
      {
        name: 'Graph Ql',
        image: 'https://www.vectorlogo.zone/logos/graphql/graphql-icon.svg',
      },
      {
        name: 'MySQL',
        image:
          'https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg',
      },
      {
        name: 'Swagger',
        image:
          'https://raw.githubusercontent.com/devicons/devicon/master/icons/swagger/swagger-original-wordmark.svg',
      },
      {
        name: 'RESTful API',
        image:
          'https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg',
      },
    ],
  },
  {
    title: 'AWS & Azure',
    skills: [
      {
        name: 'AWS',
        image:
          'https://raw.githubusercontent.com/devicons/devicon/master/icons/amazonwebservices/amazonwebservices-original-wordmark.svg',
      },
      {
        name: 'S3',
        image:
          'https://raw.githubusercontent.com/devicons/devicon/master/icons/amazonwebservices/amazonwebservices-original-wordmark.svg',
      },
      {
        name: 'Lambda',
        image:
          'https://raw.githubusercontent.com/devicons/devicon/master/icons/amazonwebservices/amazonwebservices-original-wordmark.svg',
      },
      {
        name: 'ApiGateway',
        image:
          'https://raw.githubusercontent.com/devicons/devicon/master/icons/amazonwebservices/amazonwebservices-original-wordmark.svg',
      },
      {
        name: 'DynamoDB',
        image:
          'https://raw.githubusercontent.com/devicons/devicon/master/icons/amazonwebservices/amazonwebservices-original-wordmark.svg',
      },
      {
        name: 'Azure',
        image:
          'https://raw.githubusercontent.com/devicons/devicon/master/icons/azure/azure-original-wordmark.svg',
      },
      {
        name: 'Azure Functions',
        image:
          'https://raw.githubusercontent.com/devicons/devicon/master/icons/azure/azure-original-wordmark.svg',
      },
    ],
  },
  {
    title: 'Develops Tools & Platforms',
    skills: [
      {
        name: 'Git',
        image:
          'https://e7.pngegg.com/pngimages/713/558/png-clipart-computer-icons-pro-git-github-logo-text-logo-thumbnail.png',
      },
      {
        name: 'GitHub',
        image:
          'https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png',
      },
      {
        name: 'Jira',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/8/8a/Jira_Logo.svg',
      },
      {
        name: 'BitBucket',
        image:
          'https://raw.githubusercontent.com/devicons/devicon/master/icons/bitbucket/bitbucket-original-wordmark.svg',
      },
      {
        name: 'VS Code',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/512px-Visual_Studio_Code_1.35_icon.svg.png?20210804221519',
      },
      {
        name: 'IntelliJ IDEA',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/9/9c/IntelliJ_IDEA_Icon.svg',
      },
      {
        name: 'Postman',
        image:
          'https://static-00.iconduck.com/assets.00/postman-icon-497x512-beb7sy75.png',
      },
      {
        name: 'Compass',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/3/38/Compass_Icon.png',
      },
      {
        name: 'Docker',
        image:
          'https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original-wordmark.svg',
      },
      {
        name: 'Figma',
        image:
          'https://s3-alpha.figma.com/hub/file/1481185752/fa4cd070-6a79-4e1b-b079-8b9b76408595-cover.png',
      },
    ],
  },
]

export const experiences: ExperienceProps[] = [
  {
    id: 0,
    image: 'https://www.performance.edu.au//app/uploads/2021/12/logo.svg',
    company: 'Professional Year',
    role: 'Professional Year in IT',
    date: 'Jul 2023 - Present',
    skills: [
      'Australian Business Culture and Environment',
      'Achieving Career Success',
      'Australian Workplace Skills and Professional Business Communication',
    ],
  },
  {
    id: 1,
    image:
      'https://cdn.cyberay.com.au/blobcyberayweb0545b67e51/wp-content/uploads/2023/03/cropped-logo-1-150x150.png',
    company: 'Cyberay',
    role: 'Full Stack Developer Intern',
    date: 'May 2023 - Oct 2023',
    skills: [
      'TypeScript',
      'React',
      'RTK-Query',
      'Azure',
      'Congnative-Search-Index',
      'Azure SQL',
      'RESTful API',
      'Node',
      'Express',
      'Maturial-UI',
      'Agile',
      'Scrum',
      'Git',
      'GitHub',
    ],
  },
  {
    id: 2,
    image: 'https://jracademy.com.au/image/jr-academy-logo.svg',
    company: 'JR Academy',
    role: 'Full Stack Bootcamp',
    date: 'Aug 2022- April 2023',

    skills: [
      'JavaScript',
      'TypeScript',
      'React',
      'Redux',
      'Redux-Toolkit',
      'RESTful API',
      'Node',
      'Express',
      'MongoDB',
      'AWS-basics',
      'Chakra-UI',
      'Maturial-UI',
      'Styled-Components',
      'Agile',
      'Scrum',
      'Git',
      'GitHub',
      'Jira',
      'BitBucket',
    ],
  },
  {
    id: 3,
    image:
      'https://upload.wikimedia.org/wikipedia/commons/4/4e/University_of_Sydney_sign_2.jpg',
    company: 'University of Sydney',
    role: 'Bachler of Computer Science',
    date: 'Mar 2018 - Jan 2022',
    skills: [
      'JavaScript',
      'Html',
      'CSS',
      'SaSS',
      'SQL,',
      'Python',
      'Java',
      'C',
      'R',
      'Agile',
      'Git',
    ],
  },
]

export const projects: ProjectProps[] = []
