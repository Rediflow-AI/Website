import Link from 'next/link';

export default function AboutUsPage() {
  const developers = [
    {
      name: 'Affan Ahmed',
      details:
        'Affan is a versatile website developer with expertise in modern web frameworks. He specializes in building robust and scalable applications using Next.js for frontend, ASP.NET and Express.js for backend services, and MongoDB for database management. He also has experience with Go (gin framework) for high-performance APIs.',
    },
    {
      name: 'Ahsan Irfan',
      details:
        'Ahsan is an experienced mobile app developer passionate about creating intuitive and high-performing cross-platform applications. He primarily uses Flutter to deliver seamless user experiences on both iOS and Android devices.',
    },
  ];

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-6 sm:p-12 md:p-16 bg-gray-950 text-gray-100 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_top_center,_rgba(128,0,128,0.3)_0%,_transparent_70%)]" />

      <div className="z-10 w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <header className="mx-auto max-w-3xl text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-purple-400 mb-4">About us</h1>
          <p className="text-gray-300 text-base sm:text-lg md:text-xl">
            We build products that bridge design and data. Our small, cross-functional team focuses on mobile-first
            experiences, scalable backends, and AI integrations that accelerate product development.
          </p>
        </header>

        <section className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-2">
          {developers.map((dev, idx) => (
            <article
              key={idx}
              className="bg-gray-800 p-6 rounded-xl shadow-xl border border-gray-700 transform transition-transform duration-300 hover:scale-105"
            >
              <h2 className="text-2xl sm:text-3xl font-semibold text-white mb-3">{dev.name}</h2>
              <p className="text-gray-400 leading-relaxed">{dev.details}</p>
            </article>
          ))}
        </section>

        <div className="mt-8 flex items-center justify-center">
          <Link href="/" className="text-purple-400 hover:underline">
            Back to home
          </Link>
        </div>
      </div>
    </main>
  );
}
