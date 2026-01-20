const portfolio = [
    {
        id: 0,
        projectName: "Sentinel",
        url: "https://github.com/nishith-s-acharya/sentinal",
        image: "projects/sentinel.png",
        projectDetail: "A comprehensive threat intelligence platform providing real-time analytics, network mapping, and response rules for heightened security.",
        technologiesUsed: [
            { tech: "ReactJS" },
            { tech: "NodeJS" },
            { tech: "MongoDB" },
            { tech: "Charts" },
        ]
    },
    {
        id: 1,
        projectName: "Chatbox",
        url: "https://github.com/nishith-s-acharya/chatty",
        image: "projects/chatbox.png",
        projectDetail: "An advanced AI-powered chat interface featuring multilingual support, audio processing, and intelligent disease assistance capabilities.",
        technologiesUsed: [
            { tech: "ReactJS" },
            { tech: "AssemblyAI" },
            { tech: "NodeJS" },
            { tech: "Socket.io" },
        ]
    },
    {
        id: 2,
        projectName: "Aimeddy",
        url: "https://github.com/nishith-s-acharya/aimeddy",
        image: "projects/aimeddy.png",
        projectDetail: "Artificial Intelligence Disease Assistance (AIDA). An intelligent healthcare companion providing AI-powered medical guidance and health tracking.",
        technologiesUsed: [
            { tech: "Python" },
            { tech: "TensorFlow" },
            { tech: "ReactJS" },
            { tech: "AI" },
        ]
    },
    {
        id: 3,
        projectName: "VibeCar",
        url: "https://github.com/nishith-s-acharya/vibecar",
        image: "projects/vibecar.png",
        projectDetail: "Find your dream car with VibeCar AI. An automotive platform featuring advanced AI car search and extensive vehicle listings.",
        technologiesUsed: [
            { tech: "ReactJS" },
            { tech: "AI Search" },
            { tech: "CSS" },
            { tech: "Web" },
        ]
    }
]

export default function handler(req, res) {
    res.status(200).json(portfolio)
}
