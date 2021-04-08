import Head from "next/head";

export default function Home() {
  return (
    <main className="max-w-7xl mx-auto sm:px-6 lg:px-8 min-h-screen">
      <Head>
        <title>Voice Tablet</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className="text-base font-semibold text-indigo-600 tracking-wide uppercase">
        Voice Tablet
      </h1>

      <button
        type="button"
        className="mb-2 mr-2 bottom-0 right-0 absolute block inline-flex items-center p-3 border border-transparent rounded-full shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z"
          />
        </svg>
      </button>
    </main>
  );
}
