import {
  FaRoute,
  FaSpinner,
  FaDatabase,
  FaExclamationTriangle,
} from "react-icons/fa";

export default function Home() {
  return (
    <div className="min-h-fit bg-gray-50 flex flex-col items-center">
      <div className="w-full bg-blue-500 text-white text-center py-16 flex flex-col gap-3">
        <h1 className="text-5xl font-bold">Next.js Features I Learned</h1>
        <p className="text-lg px-4">
          Master Next.js by building a complete web application.
        </p>
      </div>

      <div className="max-w-full h-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 px-8 py-12">
        <div className="size-xl bg-white p-6 shadow-md rounded-lg flex flex-col items-center justify-between border border-gray-500 gap-4">
          <FaRoute className="text-4xl text-blue-500" />
          <h2 className="text-xl font-semibold">Route Handlers</h2>
          <p className="text-gray-600 text-center text-sm">
            Learned to efficiently manage API routes and server-side logic
            seamlessly.
          </p>
        </div>

        <div className="size-xl bg-white p-6 shadow-md rounded-lg flex flex-col items-center justify-between border border-gray-500 gap-4">
          <FaSpinner className="text-4xl text-green-500" />
          <h2 className="text-xl font-semibold">Loading</h2>
          <p className="text-gray-600 text-center text-sm">
            Understood handling async operations and state with visual feedback.
          </p>
        </div>

        <div className="size-xl bg-white p-6 shadow-md rounded-lg flex flex-col items-center justify-between border border-gray-500 gap-4">
          <FaExclamationTriangle className="text-4xl text-red-500" />
          <h2 className="text-xl font-semibold">Error Handling</h2>
          <p className="text-gray-600 text-center text-sm">
            Mastered the art of gracefully managing exceptions and displaying
            errors effectively.
          </p>
        </div>

        <div className="size-xl bg-white p-6 shadow-md rounded-lg flex flex-col items-center justify-between border border-gray-500 gap-4">
          <FaDatabase className="text-4xl text-yellow-500" />
          <h2 className="text-xl font-semibold">Data Fetching</h2>
          <p className="text-gray-600 text-center text-sm">
            Discovered how to use static generation and server-side rendering
            for optimal performance.
          </p>
        </div>
      </div>
    </div>
  );
}
