"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/ui/Section";

export function About() {
    return (
        <Section id="about" className="bg-zinc-900/30">
            <div className="grid gap-12 md:grid-cols-2 md:gap-16">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 className="text-3xl font-bold tracking-tight text-white mb-6">About Me</h2>
                    <div className="space-y-4 text-lg text-zinc-400">
                        <p>
                            I am a mobile and web developer passionate about building high-quality applications.
                            My core expertise lies in <strong>Flutter</strong> and <strong>Android</strong> development,
                            complemented by strong skills in modern web technologies like <strong>React</strong> and <strong>Next.js</strong>.
                        </p>
                        <p>
                            I enjoy turning complex requirements into clean, user-friendly solutions.
                            Whether it's a mobile app for cloud monitoring or a responsive portfolio website,
                            I focus on performance, design, and delivering real value.
                        </p>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="relative rounded-2xl bg-zinc-800/50 p-8 backdrop-blur-sm"
                >
                    <h3 className="text-xl font-semibold text-white mb-4">Quick Bio</h3>
                    <ul className="space-y-4 text-zinc-400">
                        <li className="flex gap-3">
                            <span className="h-1.5 w-1.5 mt-2.5 rounded-full bg-emerald-500 flex-shrink-0" />
                            <span>Based in <strong className="text-zinc-300">India</strong></span>
                        </li>
                        <li className="flex gap-3">
                            <span className="h-1.5 w-1.5 mt-2.5 rounded-full bg-emerald-500 flex-shrink-0" />
                            <span>Focused on <strong className="text-zinc-300">Flutter & Android</strong></span>
                        </li>
                        <li className="flex gap-3">
                            <span className="h-1.5 w-1.5 mt-2.5 rounded-full bg-emerald-500 flex-shrink-0" />
                            <span>Building <strong className="text-zinc-300">Modern Web Apps</strong></span>
                        </li>
                        <li className="flex gap-3">
                            <span className="h-1.5 w-1.5 mt-2.5 rounded-full bg-emerald-500 flex-shrink-0" />
                            <span>Open for <strong className="text-zinc-300">New Opportunities</strong></span>
                        </li>
                    </ul>
                </motion.div>
            </div>
        </Section>
    );
}
