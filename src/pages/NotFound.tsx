import { useLocation } from "react-router-dom";
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
    <div className="min-h-screen w-full bg-background/95 from-zinc-900 to-zinc-800 flex items-center justify-center text-white px-4">
      <div className="text-center space-y-6">
        <h1 className="text-7xl font-extrabold">404 Error</h1>
        <p className="text-xl text-zinc-300">
          Oops! La pagina "<span className="font-mono">{location.pathname}</span>" non esiste.
        </p>
        <a
          href="/"
          className="inline-block bg-primary text-white px-6 py-3 rounded-lg shadow-md hover:bg-primary/90 transition"
        >
          Torna alla Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
