import { Link } from "react-router-dom";
import GridLines from "../components/GridLines";
import Navbar from "../components/Navbar";
import { usePageTitle } from "../hooks/usePageTitle";

function NotFound() {
  usePageTitle("Page not found");

  return (
    <div className="relative min-h-screen bg-white dark:bg-darkBg transition-colors duration-500 overflow-hidden">
      <Navbar />

      <GridLines horizontal={[{ top: "67px", delay: 0 }]} className="z-raised" />

      <main id="main" className="min-h-screen flex flex-col items-center justify-center gap-6 px-4 text-center">
        <h1 className="font-migella text-7xl md:text-9xl">404</h1>
        <p className="font-plus text-lg md:text-2xl">Page not found</p>
        <Link to="/works" className="font-plus font-light underline underline-offset-4">
          Back to works
        </Link>
      </main>
    </div>
  );
}

export default NotFound;
