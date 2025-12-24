"use client";

import { motion } from "framer-motion";
import { Mail, Phone, Github, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Section } from "@/components/ui/Section";
import Link from "next/link";

export function Contact() {
    return (
        <Section id="contact">
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-24 items-center">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 className="text-3xl font-bold tracking-tight text-white mb-6">Let's Build Something</h2>
                    <p className="text-lg text-zinc-400 mb-8">
                        I'm currently accessible for new opportunities and collaborations.
                        Whether you need a mobile app, a web platform, or just want to connect.
                    </p>

                    <div className="inline-block px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-sm font-medium mb-8">
                        Open to opportunities & collaborations
                    </div>

                    <div className="space-y-4">


                        <div className="flex items-center gap-4 text-zinc-300">
                            <div className="h-10 w-10 flex items-center justify-center rounded-full bg-zinc-800/50 border border-zinc-700">
                                <Mail className="h-5 w-5" />
                            </div>
                            <a href="mailto:pratikkhose1122@gmail.com" className="hover:text-emerald-400 transition-colors">
                                pratikkhose1122@gmail.com
                            </a>
                        </div>
                        <div className="flex items-center gap-4 text-zinc-300">
                            <div className="h-10 w-10 flex items-center justify-center rounded-full bg-zinc-800/50 border border-zinc-700">
                                <Phone className="h-5 w-5" />
                            </div>
                            <a href="tel:+919028705429" className="hover:text-emerald-400 transition-colors">
                                +91 9028705429
                            </a>
                        </div>
                        <div className="flex gap-4 mt-6">
                            <Link href="https://github.com/pratikkhose1122" target="_blank">
                                <Button variant="outline" size="sm" className="gap-2">
                                    <Github className="h-4 w-4" /> GitHub
                                </Button>
                            </Link>
                            <Link href="https://www.linkedin.com/in/pratik-khose-ab441937b" target="_blank">
                                <Button variant="outline" size="sm" className="gap-2">
                                    <Linkedin className="h-4 w-4" /> LinkedIn
                                </Button>
                            </Link>
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    <Card className="p-8">
                        <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                            <div className="grid gap-4 md:grid-cols-2">
                                <div className="space-y-2">
                                    <label htmlFor="name" className="text-sm font-medium text-zinc-300">Name</label>
                                    <input
                                        id="name"
                                        type="text"
                                        className="w-full rounded-md border border-zinc-800 bg-zinc-900/50 px-3 py-2 text-sm text-white placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/50"
                                        placeholder="John Doe"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="email" className="text-sm font-medium text-zinc-300">Email</label>
                                    <input
                                        id="email"
                                        type="email"
                                        className="w-full rounded-md border border-zinc-800 bg-zinc-900/50 px-3 py-2 text-sm text-white placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/50"
                                        placeholder="john@example.com"
                                    />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="message" className="text-sm font-medium text-zinc-300">Message</label>
                                <textarea
                                    id="message"
                                    className="min-h-[120px] w-full rounded-md border border-zinc-800 bg-zinc-900/50 px-3 py-2 text-sm text-white placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 resize-y"
                                    placeholder="Tell me about your project..."
                                />
                            </div>
                            <Button type="submit" className="w-full">
                                Send Message
                            </Button>
                        </form>
                    </Card>
                </motion.div>
            </div>
        </Section>
    );
}
