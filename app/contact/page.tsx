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
          If you have any questions or inquiries, please feel free to reach out to us using the form below.
        </p>

        <form
          action="https://formspree.io/f/xgvlwlgg"
          method="POST"
          className="w-full max-w-md mx-auto bg-gray-800 p-8 rounded-lg shadow-xl border border-gray-700"
        >
          <div className="mb-4">
            <label htmlFor="email" className="block text-lg font-medium text-gray-300 mb-2">
              Your email:
            </label>
            <input 
              type="email" 
              name="email" 
              id="email"
              className="w-full p-3 rounded-md bg-gray-700 border border-gray-600 text-gray-100 focus:outline-none focus:ring-2 focus:ring-purple-500"
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="message" className="block text-lg font-medium text-gray-300 mb-2">
              Your message:
            </label>
            <textarea 
              name="message" 
              id="message"
              className="w-full p-3 rounded-md bg-gray-700 border border-gray-600 text-gray-100 focus:outline-none focus:ring-2 focus:ring-purple-500 min-h-[120px]"
              required
            ></textarea>
          </div>
          <button 
            type="submit"
            className="w-full bg-purple-600 text-white py-3 rounded-md font-semibold hover:bg-purple-700 transition-colors duration-300"
          >
            Send
          </button>
        </form>
      </div>
    </main>
  );
}
