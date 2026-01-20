const expertise = [
    {
        id: 0,
        title: 'Full Stack Development',
        desc: 'I am an enthusiastic Full Stack Developer ensuring I build robust web applications using the MERN stack (MongoDB, Express, React, Node.js). I have a solid grasp of server-side rendering and API integration, always eager to learn and implement efficient solutions.',
    },
    {
        id: 1,
        title: 'Project Management',
        desc: "Proficient in Agile/Scrum methodologies and tools like Jira. I ensure streamlined workflows, effective task prioritization, and consistent delivery of high-quality software through active collaboration and sprint planning.",
    },
    {
        id: 2,
        title: 'UI/UX Design',
        desc: 'Passionate about crafting intuitive user experiences. Skilled in Figma and Adobe Creative Suite, translating complex requirements into clean, accessible, and visually engaging interfaces.',
    },
    {
        id: 3,
        title: 'Version Control',
        desc: "Expert in Git and GitHub for scalable version control. I maintain clean commit histories, manage branches effectively, and utilize CI/CD pipelines to ensure code reliability and smooth deployments.",
    },
    {
        id: 4,
        title: 'Open Source',
        desc: "Active contributor to the open-source community. I believe in giving back by improving existing tools, sharing knowledge, and collaborating with global developers to build better software for everyone.",
    },
]

export default function handler(req, res) {
    res.status(200).json(expertise)
}
