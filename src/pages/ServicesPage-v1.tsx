import PageBanner from '../components/PageBanner';
import { 
  Shield, 
  Wifi, 
  UtensilsCrossed, 
  Users, 
  Dumbbell, 
  Bike,
  Printer,
  Coffee,
  Brush,
  Clock,
  Key,
  ShieldCheck
} from 'lucide-react';

interface Service {
  icon: React.ReactNode;
  title: string;
  description: string;
  category: 'security' | 'connectivity' | 'lifestyle' | 'facilities';
}

const services: Service[] = [
//   {
//     icon: <ShieldCheck className="w-8 h-8 text-[#F7BF57]" />,
//     title: 'Contrôle d\'accès',
//     description: 'Système de badge sécurisé et vidéosurveillance 24/7',
//     category: 'security'
//   },
  {
    icon: <Key className="w-8 h-8 text-[#F7BF57]" />,
    title: 'Gardien',
    description: 'Personnel de sécurité présent sur place',
    category: 'security'
  },
  {
    icon: <Wifi className="w-8 h-8 text-[#F7BF57]" />,
    title: 'Wi-Fi Haut Débit',
    description: 'Connexion internet fibre optique dans tous les logements',
    // category: 'connectivity'
    category: 'security'
  },
  {
    icon: <UtensilsCrossed className="w-8 h-8 text-[#F7BF57]" />,
    title: 'Cafétéria',
    description: 'Espace de restauration avec micro-ondes et distributeurs',
    category: 'lifestyle'
  },
  {
    icon: <Users className="w-8 h-8 text-[#F7BF57]" />,
    title: 'Espaces Communs',
    description: 'Salles d\'études et de détente accessibles 24/7',
    category: 'facilities'
  },
  {
    icon: <Dumbbell className="w-8 h-8 text-[#F7BF57]" />,
    title: 'Salle de Sport',
    description: 'Équipements modernes pour rester en forme',
    category: 'facilities'
  },
  {
    icon: <Bike className="w-8 h-8 text-[#F7BF57]" />,
    title: 'Local Vélos',
    description: 'Parking sécurisé pour vélos et trottinettes',
    category: 'facilities'
  },
  {
    icon: <Printer className="w-8 h-8 text-[#F7BF57]" />,
    title: 'Espace Travail',
    description: 'Imprimante et postes informatiques en libre-service',
    category: 'facilities'
  },
  {
    icon: <Coffee className="w-8 h-8 text-[#F7BF57]" />,
    title: 'Salon Détente',
    description: 'Espace convivial avec TV et jeux de société',
    category: 'lifestyle'
  },
  {
    icon: <Brush className="w-8 h-8 text-[#F7BF57]" />,
    title: 'Service Ménage',
    description: 'Nettoyage régulier des espaces communs',
    category: 'lifestyle'
  },
  {
    icon: <Clock className="w-8 h-8 text-[#F7BF57]" />,
    title: 'Accueil 24/7',
    description: 'Personnel disponible à tout moment',
    category: 'security'
  },
  {
    icon: <Shield className="w-8 h-8 text-[#F7BF57]" />,
    title: 'Maintenance',
    description: 'Service technique rapide en cas de besoin',
    category: 'facilities'
  }
];

const categories = {
  security: {
    title: 'Sécurité',
    description: 'Votre sécurité est notre priorité avec des systèmes et du personnel dédiés'
  },
//   connectivity: {
//     title: 'Connectivité',
//     description: 'Restez connecté avec notre infrastructure réseau haute performance'
//   },
  lifestyle: {
    title: 'Mode de vie',
    description: 'Des services pensés pour votre confort au quotidien'
  },
  facilities: {
    title: 'Équipements',
    description: 'Des installations modernes pour faciliter votre vie étudiante'
  }
};

export default function ServicesPage() {
  return (
    <div className="bg-white dark:bg-gray-900">
      <PageBanner 
        title="Nos Services" 
        subtitle="Découvrez tous les services inclus dans votre résidence"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {Object.entries(categories).map(([category, { title, description }]) => (
          <section key={category} className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-4">{title}</h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">{description}</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services
                .filter(service => service.category === category)
                .map(service => (
                  <div 
                    key={service.title}
                    className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-200"
                  >
                    <div className="flex items-start">
                      <div className="bg-[#F7BF57]/10 dark:bg-[#F7BF57]/20 rounded-lg p-3">
                        {service.icon}
                      </div>
                      <div className="ml-4">
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">
                          {service.title}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300">
                          {service.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}