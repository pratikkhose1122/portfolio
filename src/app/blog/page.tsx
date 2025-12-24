import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function BlogPage() {
    return (
        <Section className="min-h-screen pt-32">
            <div className="max-w-3xl mx-auto text-center">
                <h1 className="text-4xl font-bold text-white mb-6">Projects & Learnings</h1>
                <p className="text-lg text-zinc-400 mb-12">
                    Documenting my journey in Flutter, Android, and Web Development.
                    Check back soon for detailed case studies and technical articles.
                </p>

                <div className="p-8 rounded-2xl border border-zinc-800 bg-zinc-900/30">
                    <p className="text-zinc-500 italic">Coming Soon...</p>
                </div>

                <div className="mt-12">
                    <Link href="/">
                        <Button variant="outline">
                            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Home
                        </Button>
                    </Link>
                </div>
            </div>
        </Section>
    );
}
