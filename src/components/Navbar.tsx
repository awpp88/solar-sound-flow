import { Link } from "react-router-dom";
import { Music2 } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2 group">
            <Music2 className="h-8 w-8 text-primary transition-smooth group-hover:scale-110 group-hover:rotate-12" />
            <span className="text-xl font-bold text-gradient-solar">Solar Music Group</span>
          </Link>
          
          <div className="flex items-center space-x-8">
            <Link 
              to="/" 
              className="text-foreground hover:text-primary transition-smooth font-medium"
            >
              Home
            </Link>
            <Link 
              to="/contact" 
              className="text-foreground hover:text-primary transition-smooth font-medium"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
