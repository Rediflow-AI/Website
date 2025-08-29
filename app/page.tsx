import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-16 bg-gray-950 text-gray-100 relative overflow-hidden">
      {/* Background gradient (unchanged) */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_top_center,_rgba(128,0,128,0.3)_0%,_transparent_70%)]"></div>

      <div className="z-10 w-full max-w-6xl text-center">
        <div className="mt-10 mb-8">
          <Link
            href="https://www.linkedin.com/company/rediflow-ai"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Rediflow AI on LinkedIn"
            className="inline-flex items-center px-3 py-2 bg-white/10 rounded-full text-sm text-gray-200 hover:bg-white/15 transition"
          >
            <span className="mr-1 w-7 h-7 flex items-center justify-center overflow-hidden">
              <Image src="/linkedin-round-no-bg.png" alt="LinkedIn" width={28} height={28} />
            </span>
            <span>LinkedIn</span>
          </Link>
        </div>

        <h1 className="mx-auto text-[56px] md:text-[88px] leading-[0.95] font-extrabold text-white max-w-4xl">
          <span className="block text-gray-400 font-semibold pb-5 text-3xl md:text-4xl">One codebase. Infinite reach.</span>
          <span className="block text-5xl md:text-[88px]">Unified solutions,</span>
          <span className="block text-5xl md:text-[88px]">enhanced by adaptive AI</span>
        </h1>

        <p className="mt-8 text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
          We craft mobile and desktop experiences that scale — blending clean design, robust engineering,
          and AI integrations that make products smarter and teams faster.
        </p>

        <div className="mt-10 flex items-center justify-center gap-4">
          <Link href="/learn-more" className="px-6 py-3 bg-white text-black rounded-full font-medium shadow-sm hover:shadow-md transition">
            What&apos;s New
          </Link>
          <Link href="/contact" className="px-6 py-3 bg-gray-800/60 text-gray-200 rounded-full font-medium border border-white/10 hover:bg-gray-800 transition">
            Contact us
          </Link>
        </div>

        {/* decorative device area / partner logos */}
        <div className="mt-16 w-full max-w-5xl mx-auto">
          <div className="flex items-center justify-center gap-10 text-sm text-gray-300 opacity-60">
            <div className="flex items-center gap-8">
              <div className="flex items-center gap-2">
                <Image src="/flutter-logo.png" alt="Flutter" width={48} height={24} />
                <span className="text-gray-300 font-semibold ">Flutter</span>
              </div>

              <div className="flex items-center gap-2">
                <Image src="/openai-logo.png" alt="OpenAI" width={48} height={24} />
                <span className="text-gray-300 font-semibold ">OpenAI</span>
              </div>

              <div className="flex items-center gap-2">
                <Image src="/langchain-logo.png" alt="LangChain" width={48} height={24} />
                <span className="text-gray-300 font-semibold ">LangChain</span>
              </div>

              <div className="flex items-center gap-2">
                <Image src="/firebase-logo.png" alt="Firebase" width={24} height={24} />
                <span className="text-gray-300 font-semibold ">Firebase</span>
              </div>

              <div className="flex items-center gap-2">
                <Image src="/mongodb-logo.png" alt="MongoDB" width={96} height={36} />
              </div>
            </div>
          </div>
        </div>


      </div>
    </main>
  );
}