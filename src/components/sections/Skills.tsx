"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/ui/Section";
import { Badge } from "lucide-react";



export function Skills() {
    const skillCategories = [
        {
            title: "Mobile Development",
            skills: ["Flutter", "Dart", "Android", "Kotlin", "iOS (Basic)"]
        },
        {
            title: "Web Development",
            skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "HTML/CSS"]
        },
        {
            title: "Backend & Tools",
            skills: ["Firebase", "Node.js", "REST APIs", "Git/GitHub", "Figma"]
        }
    ];

    return (
        <Section id="skills">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="mb-12"
            >
                <h2 className="text-3xl font-bold tracking-tight text-foreground mb-4">Technical Proficiency</h2>
                <p className="text-muted-foreground max-w-2xl">
                    A comprehensive toolset for building robust, cross-platform solutions.
                </p>
            </motion.div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {skillCategories.map((category, index) => (
                    <motion.div
                        key={category.title}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="glass-card rounded-2xl p-6 hover:border-zinc-700 transition-colors"
                    >
                        <h3 className="text-lg font-semibold text-foreground mb-4">{category.title}</h3>
                        <div className="flex flex-wrap gap-2">
                            {category.skills.map((skill) => (
                                <span
                                    key={skill}
                                    className="px-3 py-1 text-sm rounded-full bg-zinc-100 dark:bg-zinc-800/50 text-zinc-600 dark:text-zinc-300 border border-zinc-200 dark:border-zinc-700/50 hover:text-emerald-500 dark:hover:text-emerald-400 hover:border-emerald-500/30 transition-all cursor-default"
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>
        </Section>
    );
}
