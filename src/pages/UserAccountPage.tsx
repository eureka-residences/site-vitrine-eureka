import { useState } from 'react';
import { User, FileText, Settings, AlertCircle, Clock, CheckCircle, XCircle, Calendar, Download, Eye, Edit2, Save, X, Phone, Lock, CreditCard, Wrench, DoorOpen, Flame, Lightbulb, Droplets, Wifi, Thermometer, Shield } from 'lucide-react';
import { 
    TPriority, 
    TProcessStatus, 
    IDocument,
    TIncidentCategory,
} from '@features/userprofile/types';
import pdf from '@assets/ERK_LISTE_DES_COURSES_ETUDIANTS.pdf';


export default function UserAccountPage() {
    /*************** STATES ****************/
    const [activeTab, setActiveTab] = useState('demandes');
    const [editingInfo, setEditingInfo] = useState(false);
    const [userInfo, setUserInfo] = useState({
        name: 'Eru Eru Pita',
        studentId: 'ETU2024001',
        phone: '+237 6 75 84 92 13',
        residence: 'Résidence Les Palmiers - Chambre 205',
        monthlyBudget: 75000,
    });

    const [tempUserInfo, setTempUserInfo] = useState(userInfo);

    const [selectedDocument, setSelectedDocument] = useState<IDocument>();

    // Données de démonstration pour les demandes
    const [requests] = useState([
        {
            id: 1,
            category: 'plomberie',
            title: 'Fuite sous l\'évier',
            description: 'L\'eau coule constamment sous l\'évier de la cuisine',
            status: 'en_cours',
            date: '2024-08-05',
            priority: 'high',
            lastUpdate: '2024-08-06'
        },
        {
            id: 2,
            category: 'electricite',
            title: 'Prise électrique défectueuse',
            description: 'La prise près du lit ne fonctionne plus',
            status: 'en_processus',
            date: '2024-08-03',
            priority: 'medium',
            lastUpdate: '2024-08-05'
        },
        {
            id: 3,
            category: 'porte',
            title: 'Serrure bloquée',
            description: 'Difficulté à ouvrir la porte d\'entrée',
            status: 'traitee',
            date: '2024-07-28',
            priority: 'medium',
            lastUpdate: '2024-08-01'
        },
        {
            id: 4,
            category: 'chauffage',
            title: 'Radiateur ne chauffe pas',
            description: 'Le radiateur de la chambre reste froid',
            status: 'en_cours',
            date: '2024-08-07',
            priority: 'high',
            lastUpdate: '2024-08-07'
        },
        {
            id: 5,
            category: 'internet',
            title: 'Connexion WiFi instable',
            description: 'Déconnexions fréquentes du réseau',
            status: 'traitee',
            date: '2024-07-15',
            priority: 'low',
            lastUpdate: '2024-07-20'
        }
    ]);

    // Données de démonstration pour les documents
    const [documents] = useState([
        {
            id: 1,
            type: 'contrat',
            name: 'Contrat de bail 2024-2025',
            date: '2024-09-01',
            size: '2.4 MB',
            url: pdf
        },
        {
            id: 2,
            type: 'facture',
            name: 'Facture Août 2024',
            date: '2024-08-01',
            size: '156 KB',
            url: '#'
        },
        {
            id: 3,
            type: 'facture',
            name: 'Facture Juillet 2024',
            date: '2024-07-01',
            size: '142 KB',
            url: '#'
        },
        {
            id: 4,
            type: 'etat_lieux',
            name: 'État des lieux d\'entrée',
            date: '2024-09-01',
            size: '3.8 MB',
            url: '#'
        }
    ]);

    /*************** DATA ****************/
    
    const tabs = [
        { id: 'demandes', label: 'Mes Demandes', icon: AlertCircle },
        { id: 'documents', label: 'Mes Documents', icon: FileText },
        { id: 'profil', label: 'Informations Personnelles', icon: Settings }
    ];
    
    
    /*************** DATA ****************/

    const getStatusIcon = (status: TProcessStatus) => {
        switch (status) {
            case 'en_cours':
                return <AlertCircle size={16} className="text-orange-500" />;
            case 'en_processus':
                return <Clock size={16} className="text-blue-500" />;
            case 'traitee':
                return <CheckCircle size={16} className="text-green-500" />;
            default:
                return <XCircle size={16} className="text-gray-400" />;
        }
    };

    const getStatusText = (status: TProcessStatus) => {
        switch (status) {
            case 'en_cours':
                return 'En cours';
            case 'en_processus':
                return 'En processus';
            case 'traitee':
                return 'Traitée';
            default:    
                return 'Inconnue';
        }
    };

    const getStatusColor = (status: TProcessStatus) => {
        switch (status) {
            case 'en_cours':
                return 'bg-orange-100 text-orange-800 border-orange-200';
            case 'en_processus':
                return 'bg-blue-100 text-blue-800 border-blue-200';
            case 'traitee':
                return 'bg-green-100 text-green-800 border-green-200';
            default:
                return 'bg-gray-100 text-gray-800 border-gray-200';
        }
    };

    const getPriorityColor = (priority: TPriority) => {
        switch (priority) {
            case 'high':
                return 'bg-red-100 text-red-800';
            case 'medium':
                return 'bg-yellow-100 text-yellow-800';
            case 'low':
                return 'bg-green-100 text-green-800';
            default:
                return 'bg-gray-100 text-gray-800';
        }
    };

    const getCategoryIcon = (category: TIncidentCategory) => {
        switch (category) {
            case 'plomberie':
                return <Droplets size={18} className="text-blue-500" />;
            case 'electricite':
                return <Lightbulb size={18} className="text-yellow-500" />;
            case 'porte':
                return <DoorOpen size={18} className="text-gray-600" />;
            case 'chauffage':
                return <Thermometer size={18} className="text-red-500" />;
            case 'internet':
                return <Wifi size={18} className="text-indigo-500" />;
            case 'securite':
                return <Shield size={18} className="text-purple-500" />;
            default:
                return <Wrench size={18} className="text-gray-500" />;
        }
    };

    const formatDate = (dateString: string) => {
        return new Date(dateString).toLocaleDateString('fr-FR', {
            day: 'numeric',
            month: 'long',
            year: 'numeric'
        });
    };

    /*************** HANLDERS ****************/

    const handleEditSave = () => {
        setUserInfo(tempUserInfo);
        setEditingInfo(false);
    };

    const handleEditCancel = () => {
        setTempUserInfo(userInfo);
        setEditingInfo(false);
    };

    const handleViewDocument = (doc: IDocument) => {
      setSelectedDocument(doc);
    }

    const handleDownloadDocument = (doc: IDocument) => {
        // Créer un lien temporaire pour le téléchargement
        const link = document.createElement('a');
        link.href = doc.url;
        link.download = `${doc.name}.pdf`;
        link.target = '_blank';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    /*************** RENDER ****************/

    return (
    <div className="bg-white dark:bg-gray-900 min-h-screen py-24">
        <div className="max-w-6xl mx-auto px-4">

        {/* En-tête du profil */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 mb-8">
            <div className="flex items-center space-x-4">
            {/* <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center">
                <User size={28} className="text-white" />
            </div> */}
            <div>
                <h1 className="text-2xl font-bold text-gray-900 dark:text-white">{userInfo.name}</h1>
                <p className="text-gray-600 dark:text-gray-400">{userInfo.studentId} • {userInfo.residence}</p>
            </div>
            </div>
        </div>

        {/* Navigation par onglets */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden">
            <div className="border-b border-gray-200 dark:border-gray-600">
            <nav className="flex space-x-8 px-6">
                {tabs.map((tab) => {
                const Icon = tab.icon;
                return (
                    <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center space-x-2 py-4 px-2 border-b-2 font-medium text-sm transition-colors duration-200 ${
                        activeTab === tab.id
                        ? 'border-[#F7BF57] text-[#F7BF57]'
                        : 'border-transparent text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200'
                    }`}
                    >
                    <Icon size={18} />
                    <span>{tab.label}</span>
                    </button>
                );
                })}
            </nav>
            </div>

            <div className="p-6">
            {/* Section Demandes */}
            {activeTab === 'demandes' && (
                <div>
                <div className="flex items-center justify-between mb-6">
                    <h2 className="text-xl font-bold text-gray-800 dark:text-white">Mes Demandes de Maintenance</h2>
                    <div className="text-sm text-gray-600 dark:text-gray-200">
                    {requests.length} demande{requests.length > 1 ? 's' : ''} au total
                    </div>
                </div>

                {/* Statistiques des demandes */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                    <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
                    <div className="flex items-center justify-between">
                        <div>
                        <p className="text-sm text-orange-600 font-medium">En cours</p>
                        <p className="text-2xl font-bold text-orange-800">
                            {requests.filter(r => r.status === 'en_cours').length}
                        </p>
                        </div>
                        <AlertCircle size={32} className="text-orange-400" />
                    </div>
                    </div>
                    
                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                    <div className="flex items-center justify-between">
                        <div>
                        <p className="text-sm text-blue-600 font-medium">En processus</p>
                        <p className="text-2xl font-bold text-blue-800">
                            {requests.filter(r => r.status === 'en_processus').length}
                        </p>
                        </div>
                        <Clock size={32} className="text-blue-400" />
                    </div>
                    </div>
                    
                    <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                    <div className="flex items-center justify-between">
                        <div>
                        <p className="text-sm text-green-600 font-medium">Traitées</p>
                        <p className="text-2xl font-bold text-green-800">
                            {requests.filter(r => r.status === 'traitee').length}
                        </p>
                        </div>
                        <CheckCircle size={32} className="text-green-400" />
                    </div>
                    </div>
                </div>

                {/* Liste des demandes */}
                <div className="space-y-4">
                    {requests.map((request) => (
                    <div key={request.id} className="border border-gray-200 dark:border-gray-600 rounded-lg p-4 hover:shadow-md transition-shadow duration-200">
                        <div className="flex items-start justify-between mb-3">
                        <div className="flex items-center space-x-3">
                            {getCategoryIcon(request.category)}
                            <div>
                            <h3 className="font-semibold text-gray-800 dark:text-gray-200">{request.title}</h3>
                            <p className="text-sm text-gray-600 dark:text-gray-400 capitalize">{request.category}</p>
                            </div>
                        </div>
                        
                        <div className="flex items-center space-x-2">
                            <span className={`px-2 py-1 text-xs font-medium rounded-full ${getPriorityColor(request.priority)}`}>
                            {request.priority === 'high' ? 'Urgent' : request.priority === 'medium' ? 'Moyen' : 'Faible'}
                            </span>
                            <span className={`flex items-center space-x-1 px-2 py-1 text-xs font-medium rounded-full border ${getStatusColor(request.status)}`}>
                            {getStatusIcon(request.status)}
                            <span>{getStatusText(request.status)}</span>
                            </span>
                        </div>
                        </div>
                        
                        <p className="text-gray-700 dark:text-gray-300 mb-3">{request.description}</p>
                        
                        <div className="flex items-center justify-between text-sm text-gray-500">
                        <div className="flex items-center space-x-4">
                            <div className="flex items-center space-x-1">
                            <Calendar size={14} />
                            <span>Créée le {formatDate(request.date)}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                            <Clock size={14} />
                            <span>Mise à jour le {formatDate(request.lastUpdate)}</span>
                            </div>
                        </div>
                        </div>
                    </div>
                    ))}
                </div>
                </div>
            )}

            {/* Section Documents */}
            {activeTab === 'documents' && (
                <div>
                <div className="flex items-center justify-between mb-6">
                    <h2 className="text-xl font-bold text-gray-800 dark:text-white">Mes Documents</h2>
                    <div className="text-sm text-gray-600 dark:text-gray-200">
                    {documents.length} document{documents.length > 1 ? 's' : ''} disponible{documents.length > 1 ? 's' : ''}
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {documents.map((doc) => (
                    <div key={doc.id} className="border border-gray-200 dark:border-gray-600 rounded-lg p-4 hover:shadow-md transition-shadow duration-200">
                        <div className="flex items-center space-x-3 mb-3">
                        <div className="w-10 h-10 bg-[#e6af4a] rounded-lg flex items-center justify-center">
                            <FileText size={20} className="text-white" />
                        </div>
                        <div className="flex-1 min-w-0">
                            <h3 className="font-medium text-gray-800 dark:text-gray-200 truncate">{doc.name}</h3>
                            <p className="text-sm text-gray-500 capitalize">
                            {doc.type === 'contrat' ? 'Contrat de bail' : 
                                doc.type === 'facture' ? 'Facture' : 
                                doc.type === 'etat_lieux' ? 'État des lieux' : doc.type}
                            </p>
                        </div>
                        </div>
                        
                        <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                        <span>{formatDate(doc.date)}</span>
                        <span>{doc.size}</span>
                        </div>
                        
                        <div className="flex space-x-2">
                        <button 
                            onClick={() => handleViewDocument(doc)}
                            className="flex-1 flex items-center justify-center space-x-1 px-3 py-2 bg-[#F7BF57] hover:bg-[#e6af4a] text-white rounded-lg transition-colors duration-200"
                        >
                            <Eye size={14} />
                            <span>Voir</span>
                        </button>
                        <button 
                            onClick={() => handleDownloadDocument(doc)}
                            className="flex-1 flex items-center justify-center space-x-1 px-3 py-2 bg-gray-200 hover:bg-gray-300 text-gray-700 rounded-lg transition-colors duration-200"
                        >
                            <Download size={14} />
                            <span>Télécharger</span>
                        </button>
                        </div>
                    </div>
                    ))}
                </div>
                </div>
            )}

            {/* Section Profil */}
            {activeTab === 'profil' && (
                <div>
                <div className="flex items-center justify-between mb-6">
                    <h2 className="text-xl font-bold text-gray-800 dark:text-white">Informations Personnelles</h2>
                    {!editingInfo ? (
                    <button
                        onClick={() => setEditingInfo(true)}
                        className="flex items-center space-x-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors duration-200"
                    >
                        <Edit2 size={16} />
                        <span>Modifier</span>
                    </button>
                    ) : (
                    <div className="flex space-x-2">
                        <button
                        onClick={handleEditSave}
                        className="flex items-center space-x-2 px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors duration-200"
                        >
                        <Save size={16} />
                        <span>Sauvegarder</span>
                        </button>
                        <button
                        onClick={handleEditCancel}
                        className="flex items-center space-x-2 px-4 py-2 bg-gray-600 hover:bg-gray-700 text-white rounded-lg transition-colors duration-200"
                        >
                        <X size={16} />
                        <span>Annuler</span>
                        </button>
                    </div>
                    )}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Informations de base */}
                    <div className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Nom complet
                        </label>
                        {editingInfo ? (
                        <input
                            type="text"
                            value={tempUserInfo.name}
                            onChange={(e) => setTempUserInfo({...tempUserInfo, name: e.target.value})}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        />
                        ) : (
                        <p className="px-3 py-2 dark:bg-gray-700 dark:border-gray-600 border border-gray-200 rounded-lg">
                            {userInfo.name}
                        </p>
                        )}
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Identifiant étudiant
                        </label>
                        <p className="px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg text-gray-600 dark:bg-gray-700 dark:border-gray-600">
                        {userInfo.studentId} (Non modifiable)
                        </p>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 flex items-center space-x-2">
                        <Phone size={16} />
                        <span>Numéro de téléphone</span>
                        </label>
                        {editingInfo ? (
                        <input
                            type="tel"
                            value={tempUserInfo.phone}
                            onChange={(e) => setTempUserInfo({...tempUserInfo, phone: e.target.value})}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        />
                        ) : (
                        <p className="px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600">
                            {userInfo.phone}
                        </p>
                        )}
                    </div>
                    </div>

                    {/* Sécurité et Budget */}
                    <div className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 flex items-center space-x-2">
                        <Lock size={16} />
                        <span>Mot de passe</span>
                        </label>
                        <button className="w-full px-3 py-2 bg-blue-50 hover:bg-blue-100 text-blue-700 border border-blue-200 rounded-lg transition-colors duration-200 text-left">
                        Changer le mot de passe
                        </button>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 flex items-center space-x-2">
                        <CreditCard size={16} />
                        <span>Budget mensuel</span>
                        </label>
                        {editingInfo ? (
                        <div className="flex items-center space-x-2">
                            <input
                            type="number"
                            value={tempUserInfo.monthlyBudget}
                            onChange={(e) => setTempUserInfo({...tempUserInfo, monthlyBudget: parseInt(e.target.value)})}
                            className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                            />
                            <span className="text-gray-600">FCFA</span>
                        </div>
                        ) : (
                        <p className="px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600">
                            {userInfo.monthlyBudget.toLocaleString()} FCFA
                        </p>
                        )}
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Recharger le budget
                        </label>
                        <button className="w-full px-3 py-2 bg-green-50 hover:bg-green-100 text-green-700 border border-green-200 rounded-lg transition-colors duration-200 text-left">
                        Ajouter des fonds
                        </button>
                    </div>
                    </div>
                </div>

                {/* Informations sur la résidence */}
                <div className="mt-8 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                    <h3 className="font-medium text-blue-800 mb-2">Informations sur la résidence</h3>
                    <p className="text-blue-700">{userInfo.residence}</p>
                    <p className="text-sm text-blue-600 mt-1">
                    Pour toute modification de logement, contactez l'administration.
                    </p>
                </div>
                </div>
            )}
            </div>
        </div>

        {/* Modal de visualisation PDF */}
        {selectedDocument && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50">
            <div className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full h-[90vh] flex flex-col">
                {/* En-tête du modal */}
                <div className="flex items-center justify-between p-4 border-b border-gray-200">
                <div>
                    <h3 className="text-lg font-semibold text-gray-800">{selectedDocument.name}</h3>
                    <p className="text-sm text-gray-600">
                    {selectedDocument.type === 'contrat' ? 'Contrat de bail' : 
                        selectedDocument.type === 'facture' ? 'Facture' : 
                        selectedDocument.type === 'etat_lieux' ? 'État des lieux' : selectedDocument.type}
                    </p>
                </div>
                <div className="flex items-center space-x-2">
                    <button
                    onClick={() => handleDownloadDocument(selectedDocument)}
                    className="flex items-center space-x-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors duration-200"
                    >
                    <Download size={16} />
                    <span>Télécharger</span>
                    </button>
                    <button
                    onClick={() => setSelectedDocument(null)}
                    className="p-2 hover:bg-gray-100 rounded-lg transition-colors duration-200"
                    >
                    <X size={20} className="text-gray-600" />
                    </button>
                </div>
                </div>
                
                {/* Visualiseur PDF */}
                <div className="flex-1 p-4">
                <iframe
                    src={`${selectedDocument.url}#toolbar=1&navpanes=1&scrollbar=1`}
                    className="w-full h-full border border-gray-200 rounded-lg"
                    title={selectedDocument.name}
                />
                </div>
                
                {/* Pied de page avec infos */}
                <div className="p-4 border-t border-gray-200 bg-gray-50 rounded-b-2xl">
                <div className="flex items-center justify-between text-sm text-gray-600">
                    <span>Date: {formatDate(selectedDocument.date)}</span>
                    <span>Taille: {selectedDocument.size}</span>
                    <span>Format: PDF</span>
                </div>
                </div>
            </div>
            </div>
        )}
        </div>
    </div>
    );
}