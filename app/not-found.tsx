import Link from "next/link";
import Image from "next/image";

export default function NotFound() {
    return (
        <main className="flex min-h-screen items-center justify-center p-8 bg-gray-950 text-gray-100 relative overflow-hidden">
            {/* keep background consistent with other pages */}
            <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_top_center,_rgba(128,0,128,0.3)_0%,_transparent_70%)]" />

            <div className="z-10 w-full max-w-5xl text-center">
                <div className="inline-flex items-center px-3 py-1 bg-white/5 rounded-full text-sm text-gray-200 mb-6 mx-auto">
                    <span className="w-2 h-2 bg-purple-400 rounded-full mr-2" />
                    We&apos;re on it — temporary page
                </div>

                <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-white max-w-3xl mx-auto">
                    Oops — this page is getting a glow-up.
                </h1>

                <p className="mt-6 text-lg text-gray-300 max-w-2xl mx-auto">
                    We&apos;re polishing this part of the site to bring you better tools and smoother experiences.
                    In the meantime you can head back home or drop us a line and we&apos;ll get you squared away.
                </p>

                <div className="mt-8 flex items-center justify-center gap-4">
                    <Link
                        href="/"
                        className="px-6 py-3 bg-white text-black rounded-full font-semibold shadow-sm hover:shadow-md transition"
                    >
                        Back to home
                    </Link>

                    <Link
                        href="/contact"
                        className="px-6 py-3 bg-transparent border border-white/10 text-white rounded-full font-medium hover:bg-white/6 transition"
                    >
                        Contact us
                    </Link>
                </div>



                <div className="mt-8 text-sm text-gray-500">
                    Need immediate help? Email us at <Link href="/contact" className="underline">contact@rediflow.ai</Link>
                </div>
            </div>
        </main>
    );
}
