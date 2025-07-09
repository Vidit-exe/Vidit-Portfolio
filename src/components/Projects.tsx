import React from "react";

export const Projects: React.FC = () => {
    const projects = [
        {
            icon: "/admin-panel-project.png",
            title: "Admin Panel",
            description:
                "An admin panel created for managing the data of the website.",
            link: 'https://github.com/hemant-manglani/pyonix-pannel-admin.git'
        },
        {
            icon: "/car-scout-project.png",
            title: "Car Scout",
            description:
                "A portal for selling, buying, renting and other details regarding cars.",
            link: 'https://github.com/Vidit-exe/Car-Scout-Frontend.git'
        },
        {
            icon: "/movie-app-project.png",
            title: "Movie App",
            description:
                "Contains information about the movies and web series.",
            link: 'https://github.com/Vidit-exe/Movie_App.git'
        },
    ];

    return (
        <section id="projects" className="py-20 bg-white dark:bg-gray-900">
            <div className="container mx-auto px-4">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
                            Projects
                        </h2>
                        <p className="text-xl text-gray-600 dark:text-gray-400">
                            Some of my recent work
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
                        {projects.map((project, index) => (
                            <div
                                key={index}
                                className="group bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
                            >
                                <div className="relative h-48 w-full mb-5 overflow-hidden rounded-xl">
                                    <img
                                        src={project.icon}
                                        alt={project.title}
                                        className="object-cover w-full h-full rounded-xl transition-transform duration-300 group-hover:scale-110"
                                    />
                                </div>

                                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2">
                                    {project.title}
                                </h3>
                                <p className="text-gray-600 dark:text-gray-400 mb-4">
                                    {project.description}
                                </p>

                                <a
                                    href={project.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-block text-sm px-4 py-2 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium hover:opacity-90 transition"
                                >
                                    View Source Code
                                </a>

                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};
