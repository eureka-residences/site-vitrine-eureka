import { Search } from "lucide-react";
import { useState } from "react";

interface ISearchBarProps {
    placeholder: string,
}

export default function SearchBar({ placeholder = 'Rechercher...' }: ISearchBarProps) {
    const [searchTerm, setSearchTerm] = useState('');

    return (
        <div className="flex-1 relative">
            <div className="absolute left-3 top-1/2 -translate-y-1/2 text-[#F7BF57]">
                <Search size={20} />
            </div>

            <input
                type="text"
                placeholder={placeholder}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-[#F7BF57] focus:border-transparent text-gray-800 dark:text-gray-100"
                aria-label="Rechercher un logement"
            />
        </div>
    );
}