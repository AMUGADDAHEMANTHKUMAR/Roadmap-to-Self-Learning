import { Link, useLocation } from "react-router-dom";
import { ChevronRight, Home } from "lucide-react";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

export function BreadcrumbNav() {
  const location = useLocation();
  
  const getBreadcrumbs = (): BreadcrumbItem[] => {
    const pathSegments = location.pathname.split('/').filter(Boolean);
    const breadcrumbs: BreadcrumbItem[] = [{ label: "Home", href: "/" }];
    
    let currentPath = "";
    
    pathSegments.forEach((segment, index) => {
      currentPath += `/${segment}`;
      
      // Create readable labels for common routes
      let label = segment;
      switch (segment) {
        case 'syllabus':
          label = 'Syllabus';
          break;
        case 'gate':
          label = 'GATE';
          break;
        case 'it-roles':
          label = 'IT Roles';
          break;
        case 'aptitude':
          label = 'Aptitude';
          break;
        case 'pyq':
          label = 'Previous Papers';
          break;
        case 'qa':
          label = 'Q&A';
          break;
        case 'exam':
          label = 'Practice Timer';
          break;
        default:
          label = segment.charAt(0).toUpperCase() + segment.slice(1);
      }
      
      // Don't add href for the last item (current page)
      const isLast = index === pathSegments.length - 1;
      breadcrumbs.push({
        label,
        href: isLast ? undefined : currentPath
      });
    });
    
    return breadcrumbs;
  };

  const breadcrumbs = getBreadcrumbs();

  // Don't show breadcrumbs on home page
  if (location.pathname === "/") {
    return null;
  }

  return (
    <nav className="flex items-center space-x-1 text-sm text-muted-foreground py-4 px-4" aria-label="Breadcrumb">
      <ol className="flex items-center space-x-1">
        {breadcrumbs.map((breadcrumb, index) => (
          <li key={index} className="flex items-center">
            {index > 0 && (
              <ChevronRight className="h-4 w-4 mx-1 text-muted-foreground/60" />
            )}
            
            {breadcrumb.href ? (
              <Link
                to={breadcrumb.href}
                className="flex items-center gap-1 hover:text-primary transition-colors"
              >
                {index === 0 && <Home className="h-4 w-4" />}
                {breadcrumb.label}
              </Link>
            ) : (
              <span className="flex items-center gap-1 text-foreground font-medium">
                {index === 0 && <Home className="h-4 w-4" />}
                {breadcrumb.label}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}