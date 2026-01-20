const background = [
    {
        eduCards: [
            {
                id: 0,
                title: 'Bapuji Institute of Engineering and Technology',
                degree: 'BE, Computer Science & Engineering',
                detail: "Pursuing Bachelor's Degree in Computer Science and Engineering from BIET Davangere.",
                year: '2022-2026'
            },
        ]
    },
    {
        expCards: [
            {
                id: 1,
                title: 'Startup / Company',
                role: 'Software Engineer Intern',
                url: '#',
                desc: 'Worked on full-stack development tasks, assisting in building user interfaces and backend services using React and Node.js.',
                year: 'Present',
                location: 'India'
            },
        ]
    }
]

export default function handler(req, res) {
    res.status(200).json(background)
}
