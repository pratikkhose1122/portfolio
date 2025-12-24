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
                    <h2 className="text-3xl font-bold tracking-tight text-foreground mb-6">About Me</h2>
                    <div className="space-y-4 text-lg text-muted-foreground">
                        <p>
                            I am a results-driven <strong>Mobile & Web Developer</strong> focused on building high-performance applications.
                            With deep expertise in <strong>Flutter</strong> and <strong>Android</strong>, I help businesses launch scalable mobile solutions
                            that offer seamless user experiences.
                        </p>
                        <p>
                            Beyond mobile, I craft modern web platforms using <strong>Next.js</strong> and <strong>React</strong>.
                            My approach combines clean code architecture with pixel-perfect UI design, ensuring every project
                            is production-ready and optimized for growth.
                        </p>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="relative glass-card bg-zinc-800/50 p-8 backdrop-blur-sm"
                >
                    <h3 className="text-xl font-semibold text-foreground mb-4">Quick Bio</h3>
                    <ul className="space-y-4 text-muted-foreground">
                        <li className="flex gap-3">
                            <span className="h-1.5 w-1.5 mt-2.5 rounded-full bg-emerald-500 flex-shrink-0" />
                            <span>Based in <strong className="text-foreground">India</strong></span>
                        </li>
                        <li className="flex gap-3">
                            <span className="h-1.5 w-1.5 mt-2.5 rounded-full bg-emerald-500 flex-shrink-0" />
                            <span>Focused on <strong className="text-foreground">Flutter & Android</strong></span>
                        </li>
                        <li className="flex gap-3">
                            <span className="h-1.5 w-1.5 mt-2.5 rounded-full bg-emerald-500 flex-shrink-0" />
                            <span>Building <strong className="text-foreground">Modern Web Apps</strong></span>
                        </li>
                        <li className="flex gap-3">
                            <span className="h-1.5 w-1.5 mt-2.5 rounded-full bg-emerald-500 flex-shrink-0" />
                            <span>Open for <strong className="text-foreground">New Opportunities</strong></span>
                        </li>
                    </ul>
                </motion.div>
            </div>
        </Section>
    );
}
