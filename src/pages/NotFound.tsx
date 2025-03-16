
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Navbar } from "@/components/Navbar";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container flex items-center justify-center min-h-[80vh]">
        <div className="text-center max-w-md animate-fade-in">
          <div className="mb-6 text-imdb-yellow text-9xl font-display font-bold">404</div>
          <h1 className="text-3xl font-bold mb-4">Page Not Found</h1>
          <p className="text-muted-foreground mb-8">
            We couldn't find the page you're looking for. It might have been moved or doesn't exist.
          </p>
          <Button asChild className="rounded-full px-6">
            <Link to="/">Return to Home</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
