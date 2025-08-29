import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-6 sm:p-12 md:p-16 bg-gray-950 text-gray-100 relative overflow-hidden">
      {/* Background gradient (unchanged) */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_top_center,_rgba(128,0,128,0.3)_0%,_transparent_70%)]"></div>

      <div className="z-10 w-full max-w-6xl text-center px-4 sm:px-0">
        <div className="mt-6 sm:mt-10 mb-6 sm:mb-8 flex justify-center">
          <Link
            href="https://www.linkedin.com/company/rediflow-ai"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Rediflow AI on LinkedIn"
            className="inline-flex items-center px-3 py-2 bg-white/10 rounded-full text-sm text-gray-200 hover:bg-white/15 transition"
          >
            <span className="w-6 h-6 sm:w-7 sm:h-7 flex items-center justify-center overflow-hidden mr-2">
              <Image src="/linkedin-round-no-bg.png" alt="LinkedIn" width={28} height={28} />
            </span>
            <span className="text-sm">LinkedIn</span>
          </Link>
        </div>

        <h1 className="mx-auto text-3xl sm:text-4xl md:text-5xl lg:text-[88px] leading-tight font-extrabold text-white max-w-4xl">
          <span className="block text-gray-400 font-semibold text-lg sm:text-2xl md:text-3xl pb-3">One codebase. Infinite reach.</span>
          <span className="block text-2xl sm:text-4xl md:text-5xl lg:text-[88px]">Unified solutions,</span>
          <span className="block text-2xl sm:text-4xl md:text-5xl lg:text-[88px]">enhanced by adaptive AI</span>
        </h1>

        <p className="mt-6 sm:mt-8 text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
          We craft mobile and desktop experiences that scale — blending clean design, robust engineering,
          and AI integrations that make products smarter and teams faster.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 px-2 sm:px-0">
          <Link href="/about-us" className="w-full sm:w-auto px-6 py-3 bg-white text-black rounded-full font-medium shadow-sm hover:shadow-md transition text-center">
            What&apos;s New
          </Link>
          <Link href="/contact" className="w-full sm:w-auto px-6 py-3 bg-gray-800/60 text-gray-200 rounded-full font-medium border border-white/10 hover:bg-gray-800 transition text-center">
            Contact us
          </Link>
        </div>

        {/* partner logos */}
        <div className="mt-10 w-full max-w-5xl mx-auto px-2 sm:px-0">
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-gray-300 opacity-85">
            <div className="flex items-center gap-3">
              <Image src="/flutter-logo.png" alt="Flutter" width={48} height={24} />
              <span className="text-gray-300 font-semibold hidden sm:inline">Flutter</span>
            </div>

            <div className="flex items-center gap-3">
              <Image src="/openai-logo.png" alt="OpenAI" width={48} height={24} />
              <span className="text-gray-300 font-semibold hidden sm:inline">OpenAI</span>
            </div>

            <div className="flex items-center gap-3">
              <Image src="/langchain-logo.png" alt="LangChain" width={48} height={24} />
              <span className="text-gray-300 font-semibold hidden sm:inline">LangChain</span>
            </div>

            <div className="flex items-center gap-3">
              <Image src="/firebase-logo.png" alt="Firebase" width={40} height={20} />
              <span className="text-gray-300 font-semibold hidden sm:inline">Firebase</span>
            </div>

            <div className="flex items-center gap-3">
              <Image src="/mongodb-logo.png" alt="MongoDB" width={92} height={36} className="md:w-[110px] md:h-[44px] object-contain" />
            </div>
          </div>
        </div>


      </div>
    </main>
  );
}