import { useState, useEffect } from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";
import { Menu, X, Moon, Sun, Home, BookOpen, Calculator, Laptop, Timer, MessageSquare, ChevronDown, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

interface EnhancedHeaderProps {}

export function EnhancedHeader({}: EnhancedHeaderProps) {
  const navigate = useNavigate();
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Handle scroll effect for sticky header
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Dark mode detection and toggle with persistent theme
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    
    if (savedTheme) {
      // Use saved preference
      if (savedTheme === 'light') {
        setIsDarkMode(false);
        document.documentElement.classList.remove('dark');
        document.documentElement.classList.add('light');
      } else {
        setIsDarkMode(true);
        document.documentElement.classList.add('dark');
        document.documentElement.classList.remove('light');
      }
    } else {
      // Default to system preference or dark mode
      const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      const defaultDark = systemPrefersDark;
      
      setIsDarkMode(defaultDark);
      if (defaultDark) {
        document.documentElement.classList.add('dark');
        document.documentElement.classList.remove('light');
        localStorage.setItem('theme', 'dark');
      } else {
        document.documentElement.classList.remove('dark');
        document.documentElement.classList.add('light');
        localStorage.setItem('theme', 'light');
      }
    }
  }, []);

  const toggleDarkMode = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    
    if (newMode) {
      // Switch to LearnNight (dark mode)
      document.documentElement.classList.add('dark');
      document.documentElement.classList.remove('light');
      localStorage.setItem('theme', 'dark');
    } else {
      // Switch to LearnBright (light mode)
      document.documentElement.classList.remove('dark');
      document.documentElement.classList.add('light');
      localStorage.setItem('theme', 'light');
    }
  };


  const navigationItems = [
    { label: "Home", href: "/", icon: Home, active: location.pathname === "/" },
    { 
      label: "Domains", 
      href: "#", 
      icon: BookOpen, 
      hasDropdown: true,
      dropdownItems: [
        { label: "GATE", href: "/syllabus/gate" },
        { label: "IT Roles", href: "/syllabus/it-roles" },
        { label: "SAP Modules", href: "/syllabus/sap" },
        { label: "Aptitude", href: "/syllabus/aptitude" }
      ]
    },
    { label: "Previous Papers", href: "/pyq", icon: Calculator },
    { label: "Q&A", href: "/qa", icon: MessageSquare },
    { label: "Practice Timer", href: "/exam", icon: Timer },
    { label: "Progress", href: "/progress", icon: TrendingUp }
  ];

  const NavigationLink = ({ item }: { item: typeof navigationItems[0] }) => {
    if (item.hasDropdown && item.dropdownItems) {
      return (
        <TooltipProvider>
          <Tooltip>
            <DropdownMenu>
              <TooltipTrigger asChild>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="flex items-center gap-1 text-foreground hover:text-primary hover:bg-primary/10 px-3">
                    <item.icon className="h-5 w-5" />
                    <ChevronDown className="h-3 w-3" />
                  </Button>
                </DropdownMenuTrigger>
              </TooltipTrigger>
              <DropdownMenuContent className="bg-popover border-border shadow-lg z-50">
                {item.dropdownItems.map((dropdownItem) => (
                  <DropdownMenuItem key={dropdownItem.href} asChild>
                    <Link to={dropdownItem.href} className="flex items-center w-full hover:bg-accent">
                      {dropdownItem.label}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
            <TooltipContent>
              <p>{item.label}</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      );
    }

    return (
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button 
              variant="ghost" 
              asChild
              className={`p-3 ${
                item.active 
                  ? "text-primary bg-primary/10" 
                  : "text-foreground hover:text-primary hover:bg-primary/10"
              }`}
            >
              <Link to={item.href}>
                <item.icon className="h-5 w-5" />
              </Link>
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>{item.label}</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    );
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-background/95 backdrop-blur-md border-b border-border shadow-lg" 
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo and Brand */}
          <Link to="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
            <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
              <BookOpen className="h-5 w-5 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold text-foreground">LearnSync</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navigationItems.map((item) => (
              <NavigationLink key={item.label} item={item} />
            ))}
          </nav>


          {/* Actions */}
          <div className="flex items-center gap-2">
            {/* Dark Mode Toggle */}
            <div className="flex items-center gap-2">
              <Sun className="h-4 w-4 text-muted-foreground" />
              <button
                onClick={toggleDarkMode}
                className="theme-toggle"
                aria-label={`Switch to ${isDarkMode ? 'LearnBright' : 'LearnNight'} theme`}
                title={`Switch to ${isDarkMode ? 'LearnBright (Light)' : 'LearnNight (Dark)'} theme`}
              />
              <Moon className="h-4 w-4 text-muted-foreground" />
            </div>

            {/* Mobile Menu */}
            <div className="lg:hidden">
              <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="sm" className="p-2">
                    {isMobileMenuOpen ? (
                      <X className="h-5 w-5" />
                    ) : (
                      <Menu className="h-5 w-5" />
                    )}
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-80 bg-background border-border">
                  <SheetHeader>
                    <SheetTitle className="text-left">LearnSync Menu</SheetTitle>
                  </SheetHeader>
                  
                  {/* Mobile Navigation */}
                  <nav className="mt-8 space-y-2">
                    {navigationItems.map((item) => (
                      <div key={item.label}>
                        {item.hasDropdown && item.dropdownItems ? (
                          <div>
                            <div className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-muted-foreground">
                              <item.icon className="h-4 w-4" />
                              {item.label}
                            </div>
                            <div className="ml-6 space-y-1">
                              {item.dropdownItems.map((dropdownItem) => (
                                <Link
                                  key={dropdownItem.href}
                                  to={dropdownItem.href}
                                  onClick={() => setIsMobileMenuOpen(false)}
                                  className="block px-3 py-2 text-sm text-foreground hover:bg-accent rounded-md"
                                >
                                  {dropdownItem.label}
                                </Link>
                              ))}
                            </div>
                          </div>
                        ) : (
                          <Link
                            to={item.href}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className={`flex items-center gap-2 px-3 py-2 text-sm rounded-md transition-colors ${
                              item.active
                                ? "text-primary bg-primary/10"
                                : "text-foreground hover:bg-accent"
                            }`}
                          >
                            <item.icon className="h-4 w-4" />
                            {item.label}
                          </Link>
                        )}
                      </div>
                    ))}
                  </nav>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}