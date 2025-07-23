import React from 'react';
import Vidit from '/myphoto.jpg';
import Shubh from '/shubhphoto.jpg';
import Mehul from '/mehulphoto.jpg';

interface Developer {
    suffix:  String;
    name: string;
    title: string;
    domain: string;
    techStack: string[];
    image: string;
    deg: String;
    pass: String;
}

const KeyPeople: React.FC = () => {
    const developers: Developer[] = [
        {
            suffix: "Er.",
            name: "Vidit Joshi",
            title: "Developer",
            domain: "Web Development",
            techStack: ["React.js", "Next.js", "Node.js", "Express.js", "MongoDB", "MySQL", "Java", "Git", "Github"],
            image: Vidit,
            deg: "B.Tech - Information Technology",
            pass: "2025"
        },
        {
            suffix: "Er.",
            name: "Shubh Patel",
            title: "Developer",
            domain: "Mobile App Development",
            techStack: ["Flutter", "Java", "Spring Boot", "MySQL", "Android Studio", "Git", "Github"],
            image: Shubh,
            deg: "B.Tech - Information Technology",
            pass: "2025"
        },
        {
            suffix: "Er.",
            name: "Mehul Gajjar",
            title: "Developer",
            domain: "Web Development",
            techStack: ["React.js", "Node.js", "Express.js", "MongoDB", "MySQL", "Java", "Spring Boot", "Git", "Github"],
            image: Mehul,
            deg: "B.Tech - Information Technology",
            pass: "2025"
        },
    ];

    return (
        <section id="keypeople" className="py-20 bg-white dark:bg-gray-900">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
                        Key People
                    </h2>
                    <p className="text-xl text-gray-600 dark:text-gray-400">
                        Meet the developers associated with the firm
                    </p>
                </div>

                <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
                    {developers.map((dev, index) => (
                        <div
                            key={index}
                            className="group p-6 bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105 relative overflow-hidden"
                        >
                            {/* Gradient border glow on hover */}
                            <div className="absolute inset-0 z-0 bg-gradient-to-br from-blue-500 to-purple-600 opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-2xl"></div>

                            <div className="relative z-10 flex flex-col items-center">
                                <div className="w-32 h-32 rounded-full overflow-hidden mb-4 shadow-lg transform transition-transform duration-300 group-hover:scale-110">
                                    <img
                                        src={dev.image}
                                        alt={dev.name}
                                        className="object-cover object-[center_5%] w-full h-full"
                                    />

                                </div>

                                <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-1">
                                    {dev.suffix}&nbsp;{dev.name}
                                </h3>
                                <p className="text-gray-600 dark:text-gray-400 text-sm mb-2">
                                    {dev.deg} - {dev.pass}
                                </p>
                                <p className="text-gray-600 dark:text-gray-400 text-sm mb-2">
                                    {dev.title} — {dev.domain}
                                </p>

                                <div className="flex flex-wrap justify-center gap-2 mt-4">
                                    {dev.techStack.map((tech, i) => (
                                        <span
                                            key={i}
                                            className="px-3 py-1 text-sm bg-blue-100 dark:bg-blue-800 text-blue-800 dark:text-blue-100 rounded-full shadow-sm"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default KeyPeople;
