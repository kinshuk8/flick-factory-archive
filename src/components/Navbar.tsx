
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Search, Menu, X } from 'lucide-react';
import { SearchBar } from './SearchBar';
import { cn } from '@/lib/utils';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    if (!isMobileMenuOpen) {
      setIsSearchOpen(false);
    }
  };

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
    if (!isSearchOpen) {
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-300",
        isScrolled 
          ? "bg-background/90 backdrop-blur-md shadow-sm py-2" 
          : "bg-transparent py-4"
      )}
    >
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link 
          to="/" 
          className="relative z-10 flex items-center space-x-2 hover-bright"
        >
          <span className="text-2xl font-bold text-imdb-yellow tracking-tight">IMDb</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <NavLink to="/movies">Movies</NavLink>
          <NavLink to="/tv">TV Shows</NavLink>
          <NavLink to="/awards">Awards</NavLink>
          <NavLink to="/celebrities">Celebrities</NavLink>
        </nav>

        {/* Search and Mobile Menu Buttons */}
        <div className="flex items-center space-x-4">
          <button 
            onClick={toggleSearch}
            className="relative z-10 p-2 rounded-full transition-transform duration-300 hover:scale-110 text-foreground/80 hover:text-foreground"
            aria-label="Search"
          >
            <Search size={20} />
          </button>
          
          <button 
            className="relative z-10 md:hidden p-2 rounded-full transition-transform duration-300 hover:scale-110 text-foreground/80 hover:text-foreground"
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Search Overlay */}
      <div 
        className={cn(
          "fixed inset-0 bg-background/95 backdrop-blur-sm transition-opacity duration-300 z-40",
          isSearchOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
      >
        <div className="container mx-auto h-full flex items-center justify-center px-4">
          <div className="w-full max-w-3xl animate-fade-in">
            <SearchBar onClose={() => setIsSearchOpen(false)} />
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div 
        className={cn(
          "fixed inset-0 bg-background/95 backdrop-blur-sm md:hidden transition-opacity duration-300 z-40",
          isMobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
      >
        <div className="container mx-auto py-20 px-4">
          <nav className="flex flex-col space-y-6 items-center text-xl">
            <MobileNavLink to="/" onClick={toggleMobileMenu}>Home</MobileNavLink>
            <MobileNavLink to="/movies" onClick={toggleMobileMenu}>Movies</MobileNavLink>
            <MobileNavLink to="/tv" onClick={toggleMobileMenu}>TV Shows</MobileNavLink>
            <MobileNavLink to="/awards" onClick={toggleMobileMenu}>Awards</MobileNavLink>
            <MobileNavLink to="/celebrities" onClick={toggleMobileMenu}>Celebrities</MobileNavLink>
          </nav>
        </div>
      </div>
    </header>
  );
};

interface NavLinkProps {
  to: string;
  children: React.ReactNode;
}

const NavLink = ({ to, children }: NavLinkProps) => (
  <Link 
    to={to} 
    className="relative text-sm font-medium text-foreground/70 hover:text-foreground transition-colors duration-300 py-2 group"
  >
    {children}
    <span className="absolute inset-x-0 bottom-0 h-0.5 bg-imdb-yellow transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out" />
  </Link>
);

interface MobileNavLinkProps extends NavLinkProps {
  onClick: () => void;
}

const MobileNavLink = ({ to, children, onClick }: MobileNavLinkProps) => (
  <Link 
    to={to} 
    className="text-foreground/80 hover:text-foreground transition-colors duration-300 py-2"
    onClick={onClick}
  >
    {children}
  </Link>
);
