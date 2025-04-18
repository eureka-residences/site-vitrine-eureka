import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, ChevronRight, Check, AlertTriangle } from 'lucide-react';
import PageBanner from '../components/PageBanner';

// Exemple d'image pour la page de contact
const contactImage = "https://images.unsplash.com/photo-1577563908411-5077b6dc7624?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    residenceInterest: 'aucune'
  });
  
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when field is updated
    if (errors[name]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.name.trim()) newErrors.name = "Veuillez entrer votre nom";
    if (!formData.email.trim()) newErrors.email = "Veuillez entrer votre email";
    else if (!/^\S+@\S+\.\S+$/.test(formData.email)) newErrors.email = "Veuillez entrer un email valide";
    if (!formData.subject.trim()) newErrors.subject = "Veuillez sélectionner un sujet";
    if (!formData.message.trim()) newErrors.message = "Veuillez entrer votre message";
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setStatus('loading');
    
    // Simulate API call
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      setStatus('success');
      // Reset form after success
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
        residenceInterest: 'aucune'
      });
    } catch (error) {
      setStatus('error');
    }
  };

  const contactInfo = [
    { 
      title: "Adresse",
      icon: <MapPin className="h-6 w-6 text-[#F7BF57]" />,
      content: "123 Avenue de l'Université, Abidjan, Côte d'Ivoire",
      action: {
        label: "Voir sur Google Maps",
        href: "https://maps.google.com",
        external: true
      }
    },
    { 
      title: "Email",
      icon: <Mail className="h-6 w-6 text-[#F7BF57]" />,
      content: "contact@eureka-residences.com",
      action: {
        label: "Nous écrire",
        href: "mailto:contact@eureka-residences.com",
        external: true
      }
    },
    { 
      title: "Téléphone",
      icon: <Phone className="h-6 w-6 text-[#F7BF57]" />,
      content: "+225 07 12 34 56 78",
      action: {
        label: "Nous appeler",
        href: "tel:+2250712345678",
        external: true
      }
    },
    { 
      title: "Horaires",
      icon: <Clock className="h-6 w-6 text-[#F7BF57]" />,
      content: "Lundi - Vendredi: 8h-18h, Samedi: 9h-12h",
      action: {
        label: "Prendre rendez-vous",
        href: "/rendez-vous",
        external: false
      }
    }
  ];

  const faqItems = [
    {
      question: "Comment réserver une chambre ?",
      answer: "Pour réserver une chambre dans l'une de nos résidences, vous pouvez utiliser notre plateforme de réservation en ligne, nous contacter par téléphone ou venir directement à notre bureau d'accueil pendant les horaires d'ouverture."
    },
    {
      question: "Quels documents sont nécessaires pour une réservation ?",
      answer: "Pour réserver, vous aurez besoin d'une pièce d'identité valide, d'un justificatif de scolarité ou d'admission à l'université, et d'un justificatif de garant ou de ressources suffisantes."
    },
    {
      question: "Les résidences sont-elles sécurisées 24h/24 ?",
      answer: "Oui, toutes nos résidences disposent d'un système de sécurité 24h/24 avec contrôle d'accès, vidéosurveillance et personnel de sécurité présent la nuit."
    },
    {
      question: "Comment se passe le paiement du loyer ?",
      answer: "Le paiement du loyer peut se faire en ligne via notre plateforme sécurisée, par virement bancaire ou en espèces à notre bureau. Nous proposons des options de paiement mensuel, trimestriel ou annuel."
    }
  ];

  return (
    <div className="bg-white dark:bg-gray-900 min-h-screen pb-12">
      <PageBanner 
        title="Contactez-nous" 
        subtitle="Nous sommes à votre écoute pour répondre à toutes vos questions"
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left column - Contact form */}
          <div className="lg:col-span-2">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden">
              <div className="p-6 sm:p-8">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Envoyez-nous un message</h2>

                {status === 'success' ? (
                  <div className="bg-green-50 dark:bg-green-900/30 border border-green-200 dark:border-green-800 rounded-lg p-6 text-center">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-green-100 dark:bg-green-800 rounded-full mb-4">
                      <Check className="h-6 w-6 text-green-600 dark:text-green-400" />
                    </div>
                    <h3 className="text-lg font-medium text-green-800 dark:text-green-300 mb-2">Message envoyé avec succès</h3>
                    <p className="text-green-600 dark:text-green-400 mb-4">
                      Merci de nous avoir contactés ! Nous vous répondrons dans les plus brefs délais.
                    </p>
                    <button
                      onClick={() => setStatus('idle')}
                      className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md transition-colors"
                    >
                      Envoyer un autre message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                          Nom complet *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          className={`w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-[#F7BF57] focus:border-transparent dark:bg-gray-700 dark:border-gray-600 dark:text-white ${
                            errors.name ? 'border-red-500 dark:border-red-500' : 'border-gray-300'
                          }`}
                          placeholder="Jean Dupont"
                        />
                        {errors.name && (
                          <p className="text-sm text-red-600 dark:text-red-400 mt-1">{errors.name}</p>
                        )}
                      </div>
                      
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                          Email *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className={`w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-[#F7BF57] focus:border-transparent dark:bg-gray-700 dark:border-gray-600 dark:text-white ${
                            errors.email ? 'border-red-500 dark:border-red-500' : 'border-gray-300'
                          }`}
                          placeholder="email@exemple.com"
                        />
                        {errors.email && (
                          <p className="text-sm text-red-600 dark:text-red-400 mt-1">{errors.email}</p>
                        )}
                      </div>
                      
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                          Téléphone
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#F7BF57] focus:border-transparent dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                          placeholder="+225 XX XX XX XX XX"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="residenceInterest" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                          Résidence qui vous intéresse
                        </label>
                        <select
                          id="residenceInterest"
                          name="residenceInterest"
                          value={formData.residenceInterest}
                          onChange={handleChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#F7BF57] focus:border-transparent dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                        >
                          <option value="aucune">Aucune en particulier</option>
                          <option value="residence-eureka">Résidence Eureka</option>
                          <option value="residence-alpha">Résidence Alpha</option>
                          <option value="residence-beta">Résidence Beta</option>
                        </select>
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                        Sujet *
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className={`w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-[#F7BF57] focus:border-transparent dark:bg-gray-700 dark:border-gray-600 dark:text-white ${
                          errors.subject ? 'border-red-500 dark:border-red-500' : 'border-gray-300'
                        }`}
                      >
                        <option value="">Sélectionner un sujet</option>
                        <option value="information">Demande d'information</option>
                        <option value="reservation">Réservation</option>
                        <option value="reclamation">Réclamation</option>
                        <option value="autre">Autre</option>
                      </select>
                      {errors.subject && (
                        <p className="text-sm text-red-600 dark:text-red-400 mt-1">{errors.subject}</p>
                      )}
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                        Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={5}
                        className={`w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-[#F7BF57] focus:border-transparent dark:bg-gray-700 dark:border-gray-600 dark:text-white ${
                          errors.message ? 'border-red-500 dark:border-red-500' : 'border-gray-300'
                        }`}
                        placeholder="Écrivez votre message ici..."
                      />
                      {errors.message && (
                        <p className="text-sm text-red-600 dark:text-red-400 mt-1">{errors.message}</p>
                      )}
                    </div>
                    
                    {status === 'error' && (
                      <div className="bg-red-50 dark:bg-red-900/30 border border-red-200 dark:border-red-800 rounded-lg p-4 flex items-center">
                        <AlertTriangle className="h-5 w-5 text-red-600 dark:text-red-400 mr-3" />
                        <p className="text-red-600 dark:text-red-400">
                          Une erreur s'est produite lors de l'envoi de votre message. Veuillez réessayer.
                        </p>
                      </div>
                    )}
                    
                    <div className="flex justify-end">
                      <button
                        type="submit"
                        disabled={status === 'loading'}
                        className={`flex items-center px-6 py-3 bg-[#F7BF57] hover:bg-[#e6af4a] text-white rounded-lg transition-colors
                          ${status === 'loading' ? 'opacity-75 cursor-not-allowed' : ''}`}
                      >
                        {status === 'loading' ? (
                          <>
                            <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-3"></div>
                            Envoi en cours...
                          </>
                        ) : (
                          <>
                            <Send className="mr-2 h-5 w-5" />
                            Envoyer le message
                          </>
                        )}
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </div>
            
            {/* FAQ Section */}
            <div className="mt-8 bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden">
              <div className="p-6 sm:p-8">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Questions fréquentes</h2>
                <div className="space-y-4">
                  {faqItems.map((item, index) => (
                    <details 
                      key={index} 
                      className="group border-b border-gray-200 dark:border-gray-700 pb-4 last:border-0 last:pb-0"
                    >
                      <summary className="flex justify-between items-center font-medium cursor-pointer list-none text-gray-800 dark:text-gray-200 py-2">
                        <span>{item.question}</span>
                        <span className="transition group-open:rotate-180">
                          <ChevronRight size={16} className="text-[#F7BF57]" />
                        </span>
                      </summary>
                      <p className="text-gray-600 dark:text-gray-400 mt-3 ml-4 group-open:animate-fadeIn">
                        {item.answer}
                      </p>
                    </details>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          {/* Right column - Contact info */}
          <div>
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden">
              <div className="h-48 overflow-hidden relative">
                <img 
                  src={contactImage} 
                  alt="Contact" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white">Nos coordonnées</h3>
                    <p className="text-white/80">N'hésitez pas à nous contacter directement</p>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex">
                      <div className="flex-shrink-0">
                        <div className="flex items-center justify-center h-12 w-12 rounded-md bg-yellow-50 dark:bg-yellow-900/20">
                          {info.icon}
                        </div>
                      </div>
                      <div className="ml-4">
                        <h4 className="text-lg font-medium text-gray-800 dark:text-white">{info.title}</h4>
                        <p className="mt-1 text-gray-600 dark:text-gray-400">{info.content}</p>
                        {info.action && (
                          <a 
                            href={info.action.href}
                            target={info.action.external ? "_blank" : undefined}
                            rel={info.action.external ? "noopener noreferrer" : undefined}
                            className="mt-2 inline-flex items-center text-[#F7BF57] hover:text-[#e6af4a]"
                          >
                            {info.action.label}
                            <ChevronRight size={16} className="ml-1" />
                          </a>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
                
                {/* Social media links */}
                <div className="mt-8">
                  <h4 className="text-lg font-medium text-gray-800 dark:text-white mb-4">Suivez-nous</h4>
                  <div className="flex space-x-4">
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="bg-gray-100 dark:bg-gray-700 hover:bg-[#F7BF57]/20 dark:hover:bg-[#F7BF57]/20 p-2 rounded-full transition-colors">
                      <svg className="h-6 w-6 text-gray-600 dark:text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M18.77,7.46H14.5V10.24h4.27V13H14.5v9.83c0,0.22-0.19,0.39-0.42,0.39H10.4c-0.23,0-0.42-0.17-0.42-0.39V13H6.16v-2.76h3.82V7.46 c0-3.59,2.14-5.5,5.56-5.5c1.15,0,2.29,0.22,2.29,0.22v3.82c0,0-1.04-0.14-2.08-0.14c-1.17,0-1.36,0.53-1.36,1.27v2.66h3.11L18.77,7.46z" />
                      </svg>
                    </a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="bg-gray-100 dark:bg-gray-700 hover:bg-[#F7BF57]/20 dark:hover:bg-[#F7BF57]/20 p-2 rounded-full transition-colors">
                      <svg className="h-6 w-6 text-gray-600 dark:text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M21.534,7.113c0.801-0.729,1.499-1.636,2.066-2.682c-0.757,0.333-1.577,0.558-2.433,0.654c0.876-0.501,1.542-1.295,1.856-2.242 c-0.826,0.465-1.741,0.802-2.715,0.986c-0.797-0.812-1.91-1.318-3.156-1.318c-2.388,0-4.327,1.849-4.327,4.124 c0,0.323,0.04,0.635,0.105,0.938C8.67,7.437,5.285,5.802,3.036,3.285C2.671,3.888,2.46,4.604,2.46,5.359 c0,1.429,0.761,2.686,1.914,3.426c-0.66-0.021-1.304-0.192-1.856-0.481c0,0.016,0,0.036,0,0.054c0,2,1.493,3.666,3.471,4.044 c-0.338,0.088-0.701,0.135-1.074,0.135c-0.264,0-0.52-0.025-0.769-0.069c0.553,1.643,2.143,2.837,4.024,2.87 c-1.475,1.107-3.333,1.766-5.351,1.766c-0.348,0-0.691-0.019-1.027-0.058c1.905,1.175,4.172,1.86,6.605,1.86 c7.992,0,12.306-6.295,12.306-11.746c0-0.181-0.002-0.363-0.01-0.537C20.294,8.642,20.979,7.925,21.534,7.113z" />
                      </svg>
                    </a>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="bg-gray-100 dark:bg-gray-700 hover:bg-[#F7BF57]/20 dark:hover:bg-[#F7BF57]/20 p-2 rounded-full transition-colors">
                      <svg className="h-6 w-6 text-gray-600 dark:text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12,2.163c3.204,0,3.584,0.012,4.85,0.07c3.252,0.148,4.771,1.691,4.919,4.919 c0.058,1.265,0.069,1.645,0.069,4.849c0,3.205-0.012,3.584-0.069,4.849c-0.149,3.225-1.664,4.771-4.919,4.919 c-1.266,0.058-1.644,0.07-4.85,0.07c-3.204,0-3.584-0.012-4.849-0.07c-3.26-0.149-4.771-1.699-4.919-4.92 c-0.058-1.265-0.07-1.644-0.07-4.849c0-3.204,0.013-3.583,0.07-4.849C2.381,3.924,3.896,2.38,7.151,2.232 C8.417,2.175,8.796,2.163,12,2.163z M12,0C8.741,0,8.333,0.014,7.053,0.072c-4.358,0.2-6.78,2.618-6.98,6.98 C0.014,8.333,0,8.741,0,12s0.014,3.668,0.072,4.948c0.2,4.358,2.618,6.78,6.98,6.98C8.333,23.986,8.741,24,12,24 s3.668-0.014,4.948-0.072c4.354-0.2,6.782-2.618,6.979-6.98C23.986,15.668,24,15.259,24,12s-0.014-3.667-0.072-4.947 c-0.196-4.354-2.617-6.78-6.979-6.98C15.668,0.014,15.259,0,12,0z M12,5.838c-3.403,0-6.162,2.759-6.162,6.162 s2.759,6.163,6.162,6.163s6.162-2.759,6.162-6.163C18.162,8.597,15.403,5.838,12,5.838z M12,16c-2.209,0-4-1.79-4-4 c0-2.209,1.791-4,4-4s4,1.791,4,4C16,14.21,14.209,16,12,16z M18.406,4.155c-0.796,0-1.441,0.645-1.441,1.44 s0.645,1.44,1.441,1.44c0.795,0,1.439-0.645,1.439-1.44S19.201,4.155,18.406,4.155z" />
                      </svg>
                    </a>
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="bg-gray-100 dark:bg-gray-700 hover:bg-[#F7BF57]/20 dark:hover:bg-[#F7BF57]/20 p-2 rounded-full transition-colors">
                      <svg className="h-6 w-6 text-gray-600 dark:text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19.7,3H4.3C3.582,3,3,3.582,3,4.3v15.4C3,20.418,3.582,21,4.3,21h15.4c0.718,0,1.3-0.582,1.3-1.3V4.3 C21,3.582,20.418,3,19.7,3z M8.339,18.338H5.667v-8.59h2.672V18.338z M7.004,8.574c-0.857,0-1.549-0.694-1.549-1.548 c0-0.855,0.691-1.548,1.549-1.548c0.854,0,1.547,0.694,1.547,1.548C8.551,7.881,7.858,8.574,7.004,8.574z M18.339,18.338h-2.669 v-4.177c0-0.996-0.017-2.278-1.387-2.278c-1.389,0-1.601,1.086-1.601,2.206v4.249h-2.667v-8.59h2.559v1.174h0.037 c0.356-0.675,1.227-1.387,2.526-1.387c2.703,0,3.203,1.779,3.203,4.092V18.338z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Google Maps Embed */}
            <div className="mt-6 bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden">
              <div className="p-6">
                <h4 className="text-lg font-medium text-gray-800 dark:text-white mb-4">Nous localiser</h4>
                <div className="aspect-[4/3] rounded-md overflow-hidden">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3972.4474428921094!2d-4.0170943!3d5.348911899999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfc1eb5df24b1643%3A0x6dc1c8fc1619906e!2sUniversit%C3%A9%20F%C3%A9lix%20Houphou%C3%ABt-Boigny!5e0!3m2!1sfr!2sci!4v1651234567890!5m2!1sfr!2sci" 
                    style={{ border: 0, width: '100%', height: '100%' }}
                    allowFullScreen 
                    loading="lazy"
                    title="Google Maps"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;