import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import SITE_CONFIG from '@site-config';

const footerSections = {
  'Résidences': [
    { name: 'Nos Résidences', path: '/residences' },
    { name: 'Services', path: '/services' },
    { name: 'Réserver', path: '/reservation' },
    { name: 'Liste d\'attente', path: '/liste-attente' }
  ],
  'Resources': [
    { name: 'Guide de l\'étudiant', path: '/resources/guide' },
    { name: 'FAQ', path: '/resources/faq' },
    { name: 'Blog', path: '/resources/blog' },
    { name: 'Témoignages', path: '/resources/testimonials' }
  ],
  'Informations': [
    { name: 'Plan du site', path: '/plan-du-site' },
    { name: 'Politique de confidentialité', path: '/politique-confidentialite' },
    { name: 'Crédit et mentions légales', path: '/mentions-legales' },
    { name: 'Déclaration d\'accessibilité', path: '/accessibilite' }
  ]
};

const socialLinks = [
  { icon: <Facebook className="w-5 h-5" />, url: SITE_CONFIG.links.facebook },
  { icon: <Twitter className="w-5 h-5" />, url: SITE_CONFIG.links.twitter },
  { icon: <Instagram className="w-5 h-5" />, url: SITE_CONFIG.links.instagram },
  { icon: <Linkedin className="w-5 h-5" />, url: SITE_CONFIG.links.linkedin }
];

export default function Footer() {
  return (
    <footer className="dark:bg-gray-900 bg-gray-100 dark:text-gray-300 text-gray-700">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-4">
              <span className="text-2xl font-bold text-[#D9BEA3]">Eureka</span>
              <span className="text-2xl font-light text-[#A5CBD9]">Résidences</span>
            </div>
            <div className="space-y-3">
              <p className="flex items-center">
                <MapPin className="w-5 h-5 mr-2 text-[#F7BF57]" />
                Yaoundé, Cameroun
              </p>
              <p className="flex items-center">
                <Phone className="w-5 h-5 mr-2 text-[#F7BF57]" />
                {SITE_CONFIG.supportTel}
              </p>
              <p className="flex items-center">
                <Mail className="w-5 h-5 mr-2 text-[#F7BF57]" />
                {SITE_CONFIG.supportMailInfo}
              </p>
            </div>
          </div>

          {/* Navigation Sections */}
          {Object.entries(footerSections).map(([title, links]) => (
            <div key={title}>
              <h3 className="text-lg font-semibold dark:text-white mb-4">{title}</h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.path}>
                    <Link 
                      to={link.path}
                      className="hover:text-[#F7BF57] transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Social Links */}
        <div className="mt-12 pt-8 border-t border-gray-300 dark:border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex space-x-6 mb-4 md:mb-0">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#F7BF57] transition-colors"
                >
                  {social.icon}
                </a>
              ))}
            </div>
            <p className="text-sm text-gray-400">
              © {new Date().getFullYear()} Eureka Résidences. Tous droits réservés.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}