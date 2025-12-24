"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Github, Smartphone, Layout } from "lucide-react";
import Link from "next/link";
import { Card } from "@/components/ui/Card";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";

const projects = [
    {
        title: "CloudSense",
        description: "Air Quality & Cloud Monitoring application that displays AQI, environmental data, and cloud conditions in a clean modern UI. Published on Play Store.",
        tech: ["Flutter", "Firebase", "REST APIs", "Android"],
        image: "bg-emerald-900/20", // Placeholder color class
        icon: <Smartphone className="h-10 w-10 text-emerald-400" />,
        featured: true,
        links: { demo: "#", git: "#" }, // Add real link if available
        linkText: "Live App"
    },
    {
        title: "Personal Portfolio",
        description: "Modern portfolio website built using Next.js, Tailwind CSS, and Framer Motion. Fully responsive with glassmorphism design.",
        tech: ["Next.js", "Tailwind CSS", "Framer Motion", "React"],
        image: "bg-zinc-800", // Placeholder color class
        icon: <Layout className="h-10 w-10 text-emerald-400" />,
        featured: false,
        links: { demo: "#", git: "#" },
        linkText: "Live Demo"
    },
];

export function Projects() {
    return (
        <Section id="projects">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="mb-12"
            >
                <h2 className="text-3xl font-bold tracking-tight text-white mb-4">Featured Projects</h2>
                <p className="text-zinc-400 max-w-2xl">
                    A selection of my recent work in mobile and web development.
                </p>
            </motion.div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {projects.map((project, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                        <Card className="h-full flex flex-col" hoverEffect>
                            <div className={`aspect-video w-full rounded-lg mb-4 overflow-hidden relative group flex items-center justify-center ${project.image}`}>
                                {project.icon}
                                {project.featured && (
                                    <span className="absolute top-2 right-2 bg-emerald-500 text-black text-xs font-bold px-2 py-1 rounded-full">
                                        FEATURED
                                    </span>
                                )}
                            </div>

                            <div className="flex-1 flex flex-col">
                                <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
                                <p className="text-zinc-400 text-sm mb-4 line-clamp-3 bg-transparent">{project.description}</p>

                                <div className="flex flex-wrap gap-2 mb-6 mt-auto">
                                    {project.tech.map((t) => (
                                        <span key={t} className="text-xs px-2 py-1 rounded-md bg-zinc-800/50 text-zinc-300 border border-zinc-700/50">
                                            {t}
                                        </span>
                                    ))}
                                </div>

                                <div className="flex gap-3 pt-2">
                                    <Link href={project.links.demo} className="flex-1">
                                        <Button variant="secondary" size="sm" className="w-full">
                                            {project.linkText} <ArrowUpRight className="ml-2 h-4 w-4" />
                                        </Button>
                                    </Link>
                                    {/* Optional GitHub Button */}
                                    <Link href={project.links.git}>
                                        <Button variant="outline" size="sm" className="px-3">
                                            <Github className="h-4 w-4" />
                                        </Button>
                                    </Link>
                                </div>
                            </div>
                        </Card>
                    </motion.div>
                ))}
            </div>
        </Section>
    );
}
