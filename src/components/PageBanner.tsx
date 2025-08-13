import { Link, useLocation } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

interface PageBannerProps {
  title: string;
  subtitle?: string;
}

const routeNames: Record<string, string> = {
  '': 'Accueil',
  'residences': 'Nos Résidences',
  'reservation': 'Réservation',
  'suivi': 'Suivi',
  'liste-attente': 'Liste d\'attente'
};

export default function PageBanner({ title, subtitle }: PageBannerProps) {
  const location = useLocation();
  const pathSegments = location.pathname.split('/').filter(Boolean);

  return (
    <div className="bg-gradient-to-r from-[#A5CBD9]/20 via-[#D9BEA3]/20 to-[#A5CBD9]/20 dark:from-[#A5CBD9]/5 dark:via-[#D9BEA3]/5 dark:to-[#A5CBD9]/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Breadcrumbs */}
        <nav className="flex justify-center mb-6" aria-label="Breadcrumb">
          <ol className="flex items-center space-x-2">
            <li>
              <Link to="/" className="text-gray-500 dark:text-gray-400 hover:text-[#D9BEA3] dark:hover:text-[#F7BF57] transition-colors">
                Accueil
              </Link>
            </li>
            {pathSegments.map((segment, index) => (
              <li key={segment} className="flex items-center">
                <ChevronRight className="w-4 h-4 text-gray-400 dark:text-gray-500 mx-2" />
                {index === pathSegments.length - 1 ? (
                  <span className="text-gray-700 dark:text-gray-200 font-medium capitalize">
                    {routeNames[segment] || segment}
                  </span>
                ) : (
                  <Link
                    to={`/${pathSegments.slice(0, index + 1).join('/')}`}
                    className="text-gray-500 dark:text-gray-400 hover:text-[#D9BEA3] dark:hover:text-[#F7BF57] transition-colors"
                  >
                    {routeNames[segment] || segment}
                  </Link>
                )}
              </li>
            ))}
          </ol>
        </nav>

        {/* Title and Subtitle */}
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-3">{title}</h1>
          {subtitle && (
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">{subtitle}</p>
          )}
        </div>
      </div>
    </div>
  );
}