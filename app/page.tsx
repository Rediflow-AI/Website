import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-gray-950 text-gray-100 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_top_center,_rgba(128,0,128,0.3)_0%,_transparent_70%)]"></div>

      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex flex-col">
        <div className="relative flex place-items-center">
          <Image
            className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
            src="/logo.png"
            alt="Rediflow AI Logo"
            width={180}
            height={180}
            priority
          />
        </div>

        <h1 className="text-6xl font-bold text-center mt-8 mb-4 text-purple-400">
          Rediflow AI
        </h1>
        <p className="text-xl text-center max-w-2xl mb-8 text-gray-300">
          Empowering your business with cutting-edge artificial intelligence solutions.
          Streamline workflows, enhance decision-making, and unlock new possibilities.
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href="#learn-more"
            className="flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700 transition-colors duration-300 shadow-lg"
          >
            Learn More
          </a>
          <a
            href="#contact"
            className="flex items-center justify-center px-6 py-3 border border-purple-600 text-base font-medium rounded-md text-purple-400 bg-transparent hover:bg-purple-900 transition-colors duration-300 shadow-lg"
          >
            Contact Us
          </a>
        </div>

        {/* New Features Section */}
        <section className="w-full max-w-5xl mt-20 text-center">
          <h2 className="text-4xl font-bold mb-12 text-purple-300">Our Innovative Solutions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Metro Route Finder App */}
            <div className="bg-gray-800 p-8 rounded-lg shadow-xl border border-gray-700 transform transition-transform duration-300 hover:scale-105">
              <h3 className="text-2xl font-semibold mb-4 text-white">Metro Route Finder App</h3>
              <p className="text-gray-400 leading-relaxed">
                Navigate urban transit with ease. Our intelligent Metro Route Finder App provides
                the fastest and most convenient routes, real-time updates, and station information
                to enhance your daily commute.
              </p>
            </div>

            {/* Automated Number Plate Recognition System */}
            <div className="bg-gray-800 p-8 rounded-lg shadow-xl border border-gray-700 transform transition-transform duration-300 hover:scale-105">
              <h3 className="text-2xl font-semibold mb-4 text-white">Automated Number Plate Recognition</h3>
              <p className="text-gray-400 leading-relaxed">
                Revolutionize access control and vehicle management. Our ANPR system offers
                high-accuracy plate recognition for secure parking, traffic monitoring, and
                efficient law enforcement applications.
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}