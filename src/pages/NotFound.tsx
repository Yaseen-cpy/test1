
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4">
      <div className="text-center max-w-md">
        <h1 className="text-6xl font-bold text-resonance-600 mb-4">404</h1>
        <div className="w-16 h-1 bg-resonance-300 mx-auto mb-6"></div>
        <p className="text-xl text-gray-700 mb-6">
          We couldn't find the page you were looking for.
        </p>
        <Link
          to="/"
          className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-resonance-600 text-white font-medium hover:bg-resonance-700 transition-all transform hover:-translate-y-1 shadow-md hover:shadow-lg"
        >
          Return to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
