import { Link } from "react-router-dom";
import { Music2 } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-[95%] max-w-7xl">
      <div className="bg-card/60 backdrop-blur-xl rounded-full border border-border/50 px-8 py-4 shadow-lg glow-cosmic">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2 group">
            <Music2 className="h-7 w-7 text-primary transition-smooth group-hover:scale-110 group-hover:rotate-12" />
            <span className="text-lg font-bold text-gradient-solar">Solar Music Group</span>
          </Link>
          
          <div className="flex items-center space-x-8">
            <Link 
              to="/" 
              className="text-foreground/80 hover:text-primary transition-smooth font-medium text-sm"
            >
              Home
            </Link>
            <Link 
              to="/artists" 
              className="text-foreground/80 hover:text-primary transition-smooth font-medium text-sm"
            >
              Artists
            </Link>
            <Link 
              to="/contact" 
              className="bg-primary/10 hover:bg-primary/20 text-primary px-6 py-2 rounded-full transition-smooth font-semibold text-sm"
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
