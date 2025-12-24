"use client";

import { motion } from "framer-motion";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import Link from "next/link";

export function Hero() {
    return (
        <Section className="flex min-h-[90vh] flex-col justify-center pt-32">
            <div className="flex flex-col items-start gap-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="flex items-center gap-2 rounded-full border border-zinc-800 bg-zinc-900/50 px-4 py-1.5 text-sm text-zinc-400 backdrop-blur-md"
                >
                    <span className="relative flex h-2 w-2">
                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
                        <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500"></span>
                    </span>
                    Available for new projects
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="max-w-4xl text-5xl font-bold tracking-tight text-white sm:text-7xl md:text-8xl"
                >
                    Pratik Khose
                </motion.h1>

                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="max-w-2xl text-2xl font-medium text-zinc-400 sm:text-3xl"
                >
                    Building modern <span className="text-emerald-400">mobile & web</span> applications.
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="max-w-xl text-lg text-zinc-500 sm:text-xl"
                >
                    Flutter • Android • Web Developer based in India.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="flex flex-wrap gap-4 pt-4"
                >
                    <Link href="#projects">
                        <Button size="lg" className="group">
                            View Work
                            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </Button>
                    </Link>
                    <Link href="#contact">
                        <Button variant="outline" size="lg">
                            Contact Me
                        </Button>
                    </Link>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="flex gap-6 pt-8 text-zinc-500"
                >
                    <Link href="https://github.com/pratikkhose1122" target="_blank" className="hover:text-white transition-colors">
                        <Github className="h-6 w-6" />
                        <span className="sr-only">GitHub</span>
                    </Link>
                    <Link href="https://www.linkedin.com/in/pratik-khose-ab441937b" target="_blank" className="hover:text-white transition-colors">
                        <Linkedin className="h-6 w-6" />
                        <span className="sr-only">LinkedIn</span>
                    </Link>
                    <Link href="mailto:hello@example.com" className="hover:text-white transition-colors">
                        <Mail className="h-6 w-6" />
                        <span className="sr-only">Email</span>
                    </Link>
                </motion.div>
            </div>
        </Section>
    );
}
