export function Footer() {
    return (
        <footer className="border-t border-zinc-800 bg-zinc-950 py-8">
            <div className="container mx-auto px-6 md:px-12 max-w-7xl flex flex-col md:flex-row items-center justify-between gap-4">
                <p className="text-sm text-zinc-500">
                    © {new Date().getFullYear()} Portfolio. All rights reserved.
                </p>
                <div className="flex items-center gap-6 text-sm text-zinc-500">
                    <a href="#" className="hover:text-white transition-colors">Twitter</a>
                    <a href="#" className="hover:text-white transition-colors">GitHub</a>
                    <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
                </div>
            </div>
        </footer>
    );
}
