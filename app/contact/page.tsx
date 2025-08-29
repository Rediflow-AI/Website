import React from 'react';

export default function ContactPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-4 py-8 sm:px-6 sm:py-12 md:px-8 md:py-16 lg:px-24 lg:py-24 bg-gray-950 text-gray-100 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_top_center,_rgba(128,0,128,0.3)_0%,_transparent_70%)]"></div>

      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm flex flex-col">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-center mt-4 sm:mt-6 md:mt-8 mb-3 sm:mb-4 text-purple-400">Contact Us</h1>
        <p className="text-base sm:text-lg md:text-xl text-center max-w-full sm:max-w-lg md:max-w-2xl mb-6 sm:mb-8 text-gray-300 px-2">
          If you have any questions or inquiries, please feel free to reach out to us using the form below.
        </p>

        <form
          action="https://formspree.io/f/xgvlwlgg"
          method="POST"
          className="w-full max-w-sm sm:max-w-md md:max-w-lg mx-auto bg-gray-800 p-4 sm:p-6 md:p-8 rounded-lg shadow-xl border border-gray-700"
        >
          <div className="mb-3 sm:mb-4">
            <label htmlFor="email" className="block text-base sm:text-lg font-medium text-gray-300 mb-1 sm:mb-2">
              Your email:
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="w-full p-2 sm:p-3 rounded-md bg-gray-700 border border-gray-600 text-gray-100 focus:outline-none focus:ring-2 focus:ring-purple-500 text-sm sm:text-base"
              required
            />
          </div>

          <div className="mb-4 sm:mb-6">
            <label htmlFor="message" className="block text-base sm:text-lg font-medium text-gray-300 mb-1 sm:mb-2">
              Your message:
            </label>
            <textarea
              name="message"
              id="message"
              className="w-full p-2 sm:p-3 rounded-md bg-gray-700 border border-gray-600 text-gray-100 focus:outline-none focus:ring-2 focus:ring-purple-500 min-h-[100px] sm:min-h-[120px] text-sm sm:text-base resize-y"
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-purple-600 text-white py-2 sm:py-3 rounded-md font-semibold hover:bg-purple-700 transition-colors duration-300 text-sm sm:text-base"
          >
            Send
          </button>
        </form>

        {/* Additional Contact Information */}
        <div className="mt-8 sm:mt-12 text-center">
          <h2 className="text-xl sm:text-2xl font-semibold text-purple-300 mb-4 sm:mb-6">Other Ways to Reach Us</h2>
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-8 text-gray-300">
            <div className="flex items-center space-x-2">
              <svg className="w-5 h-5 text-purple-400" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
              <span className="text-sm sm:text-base">rediflowai@gmail.com</span>
            </div>
            <div className="flex items-center space-x-2">
              <svg className="w-5 h-5 text-purple-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
              </svg>
              <span className="text-sm sm:text-base">Pakistan</span>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
