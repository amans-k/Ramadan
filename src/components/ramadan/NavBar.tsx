import { useEffect, useState } from "react";
import { Menu, X, Moon, Calendar, Heart, Share2, Home } from "lucide-react";

const links = [
  { label: "Home", href: "#hero", icon: <Home className="w-4 h-4" /> },
  { label: "About", href: "#about", icon: <Moon className="w-4 h-4" /> },
  { label: "Timetable", href: "#timetable", icon: <Calendar className="w-4 h-4" /> },
  { label: "Daily Duas", href: "#daily", icon: <Heart className="w-4 h-4" /> },
  { label: "Share", href: "#share", icon: <Share2 className="w-4 h-4" /> },
];

const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("#hero");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 60);
      
      // Update active link based on scroll position
      const sections = links.map(l => l.href);
      const scrollPosition = window.scrollY + 100;
      
      for (const section of sections) {
        const element = document.querySelector(section);
        if (element) {
          const { offsetTop, offsetHeight } = element as HTMLElement;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveLink(section);
            break;
          }
        }
      }
    };
    
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu when clicking a link
  const handleLinkClick = (href: string) => {
    setActiveLink(href);
    setMobileMenuOpen(false);
  };

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-background/95 backdrop-blur-xl border-b border-primary/20 shadow-2xl shadow-primary/10"
            : "bg-gradient-to-b from-background/80 to-transparent backdrop-blur-sm"
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 py-3 md:py-4">
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center justify-center gap-2">
            {links.map((link, index) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setActiveLink(link.href)}
                className={`
                  relative group px-4 py-2 rounded-xl text-sm font-medium
                  transition-all duration-300 hover:scale-105
                  ${activeLink === link.href 
                    ? "text-primary gold-glow" 
                    : "text-muted-foreground hover:text-primary"
                  }
                `}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <span className="relative z-10 flex items-center gap-2">
                  {link.icon}
                  {link.label}
                </span>
                
                {/* Animated background */}
                <span className={`
                  absolute inset-0 rounded-xl bg-gradient-to-r from-primary/10 to-transparent
                  transition-all duration-300 opacity-0 group-hover:opacity-100
                  ${activeLink === link.href ? "opacity-100" : ""}
                `} />
                
                {/* Active indicator */}
                {activeLink === link.href && (
                  <span className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-primary rounded-full animate-pulse" />
                )}
              </a>
            ))}
          </div>

          {/* Mobile Header */}
          <div className="flex md:hidden items-center justify-between">
            <a href="#hero" className="flex items-center gap-2">
              <Moon className="w-5 h-5 text-primary animate-pulse-slow" />
              <span className="font-display text-lg font-bold text-gold-gradient">
                Ramadan
              </span>
            </a>
            
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="relative w-10 h-10 flex items-center justify-center rounded-lg bg-primary/10 hover:bg-primary/20 transition-colors duration-300"
              aria-label="Toggle menu"
            >
              <div className="relative w-5 h-5">
                <span className={`
                  absolute top-0 left-0 w-5 h-0.5 bg-primary rounded-full
                  transition-all duration-300
                  ${mobileMenuOpen ? 'rotate-45 translate-y-2' : ''}
                `} />
                <span className={`
                  absolute top-2 left-0 w-5 h-0.5 bg-primary rounded-full
                  transition-all duration-300
                  ${mobileMenuOpen ? 'opacity-0' : ''}
                `} />
                <span className={`
                  absolute bottom-0 left-0 w-5 h-0.5 bg-primary rounded-full
                  transition-all duration-300
                  ${mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}
                `} />
              </div>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div className={`
        fixed inset-0 z-40 md:hidden transition-all duration-500
        ${mobileMenuOpen 
          ? 'opacity-100 pointer-events-auto' 
          : 'opacity-0 pointer-events-none'
        }
      `}>
        {/* Backdrop */}
        <div 
          className={`
            absolute inset-0 bg-background/95 backdrop-blur-xl
            transition-opacity duration-500
            ${mobileMenuOpen ? 'opacity-100' : 'opacity-0'}
          `}
          onClick={() => setMobileMenuOpen(false)}
        />
        
        {/* Menu Content */}
        <div className={`
          absolute bottom-0 left-0 right-0 max-h-[80vh] overflow-y-auto
          bg-gradient-to-t from-background via-background to-background/95
          rounded-t-3xl border-t border-primary/20
          transition-transform duration-500 ease-out
          ${mobileMenuOpen ? 'translate-y-0' : 'translate-y-full'}
        `}>
          <div className="p-6 space-y-4">
            {/* Menu Header */}
            <div className="flex items-center justify-between mb-6">
              <h3 className="font-display text-xl font-bold text-gold-gradient">
                Menu
              </h3>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors"
              >
                <X className="w-5 h-5 text-primary" />
              </button>
            </div>

            {/* Menu Items */}
            <div className="space-y-3">
              {links.map((link, index) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => handleLinkClick(link.href)}
                  className={`
                    flex items-center gap-4 p-4 rounded-xl
                    transition-all duration-300
                    ${activeLink === link.href
                      ? 'bg-gradient-to-r from-primary/20 to-transparent border-l-4 border-primary gold-glow'
                      : 'bg-primary/5 hover:bg-primary/10'
                    }
                  `}
                  style={{
                    animationDelay: `${index * 100}ms`,
                    animation: mobileMenuOpen ? `slideIn 0.5s ease-out ${index * 0.1}s forwards` : 'none',
                    opacity: 0,
                    transform: 'translateX(20px)',
                  }}
                >
                  <span className={`
                    p-2 rounded-lg transition-colors
                    ${activeLink === link.href ? 'bg-primary text-background' : 'bg-primary/10 text-primary'}
                  `}>
                    {link.icon}
                  </span>
                  <span className="flex-1 text-base font-medium">
                    {link.label}
                  </span>
                  {activeLink === link.href && (
                    <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                  )}
                </a>
              ))}
            </div>

            {/* Ramadan Greeting */}
            <div className="mt-8 p-4 rounded-xl bg-primary/5 border border-primary/10 text-center">
              <p className="text-sm text-muted-foreground">
                🌙 Ramadan Mubarak
              </p>
              <p className="text-xs text-primary/70 mt-1">
                1446 AH • 2025
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Add animation keyframes */}
      <style>{`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </>
  );
};

export default NavBar;