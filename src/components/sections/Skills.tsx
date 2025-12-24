"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/ui/Section";
import { Badge } from "lucide-react";

const skills = [
    "Flutter", "Kotlin", "Android", "Firebase",
    "React", "Next.js", "Tailwind CSS", "GitHub", "Dart", "APIs"
];

export function Skills() {
    return (
        <Section id="skills">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="mb-12"
            >
                <h2 className="text-3xl font-bold tracking-tight text-white mb-4">Tech Stack</h2>
                <p className="text-zinc-400 max-w-2xl">
                    A curated list of technologies I use to build scalable and performant applications.
                </p>
            </motion.div>

            <div className="flex flex-wrap gap-3">
                {skills.map((skill, index) => (
                    <motion.div
                        key={skill}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: index * 0.05 }}
                        className="px-4 py-2 rounded-full border border-zinc-800 bg-zinc-900/50 text-zinc-300 hover:text-white hover:border-zinc-700 transition-colors cursor-default backdrop-blur-sm"
                    >
                        {skill}
                    </motion.div>
                ))}
            </div>
        </Section>
    );
}
