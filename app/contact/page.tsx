import Link from 'next/link';

export default function ContactPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-gray-950 text-gray-100 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_top_center,_rgba(128,0,128,0.3)_0%,_transparent_70%)]"></div>

      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex flex-col">
        <h1 className="text-6xl font-bold text-center mt-8 mb-4 text-purple-400">
          Contact Us
        </h1>
        <p className="text-xl text-center max-w-2xl mb-8 text-gray-300">
          If you have any questions or inquiries, please feel free to reach out to us.
        </p>
        <p className="text-xl text-center max-w-2xl mb-8 text-gray-300">
          You can send us an email at: 
          <Link href="mailto:rediflowai@gmail.com" className="text-purple-400 hover:underline">
            rediflowai@gmail.com
          </Link>
        </p>
      </div>
    </main>
  );
}