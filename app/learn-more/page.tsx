import Link from 'next/link';

export default function LearnMorePage() {
  const developers = [
    {
      name: 'Affan Ahmed',
      details: 'Affan is a versatile website developer with expertise in modern web frameworks. He specializes in building robust and scalable applications using Next.js for frontend, ASP.NET and Express.js for backend services, and MongoDB for database management. He also has experience with Go (gin framework) for high-performance APIs.',
    },
    {
      name: 'Ahsan Irfan',
      details: 'Ahsan is an experienced mobile app developer passionate about creating intuitive and high-performing cross-platform applications. He primarily uses Flutter to deliver seamless user experiences on both iOS and Android devices.',
    },
  ];

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-gray-950 text-gray-100 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_top_center,_rgba(128,0,128,0.3)_0%,_transparent_70%)]"></div>

      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex flex-col">
        <h1 className="text-6xl font-bold text-center mt-8 mb-12 text-purple-400">
          Meet Our Team
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
          {developers.map((developer, index) => (
            <div key={index} className="bg-gray-800 p-8 rounded-lg shadow-xl border border-gray-700 transform transition-transform duration-300 hover:scale-105">
              <h2 className="text-3xl font-semibold mb-4 text-white">{developer.name}</h2>
              <p className="text-gray-400 leading-relaxed">
                {developer.details}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12">
          <Link href="/" className="text-purple-400 hover:underline text-lg">
            Back to Home
          </Link>
        </div>
      </div>
    </main>
  );
}
