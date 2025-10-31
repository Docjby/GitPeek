import { FiSearch } from "react-icons/fi";

interface SearchBarProps {
    value: string;
    onChange: (value: string) => void;
    onSearch: () => void;
    loading: boolean;
}

export const SearchBar: React.FC<SearchBarProps> = ({
    value,
    onChange,
    onSearch,
    loading,
}) => {
    return (
        <div className="relative mt-8 w-full max-w-2xl">
            <div className="flex items-center bg-neutral-900/70 border border-neutral-800 rounded-xl shadow-lg shadow-black/40 backdrop-blur-sm transition-all duration-200 focus-within:ring-2 focus-within:ring-teal-500/70">
                <FiSearch className="ml-3 text-neutral-500 w-5 h-5" />
                <input
                    type="text"
                    placeholder="Enter GitHub username..."
                    value={value}
                    onChange={(e) => onChange(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && onSearch()}
                    className="flex-1 bg-transparent outline-none px-3 py-3 text-neutral-200 placeholder:text-neutral-500"
                />
                <button
                    onClick={onSearch}
                    disabled={loading}
                    className={`m-1 px-5 py-2.5 rounded-lg font-semibold flex items-center gap-2 transition-all duration-200 ${loading
                            ? "bg-neutral-700 cursor-not-allowed text-neutral-300"
                            : "bg-teal-600 hover:bg-teal-500 text-white"
                        }`}
                >
                    {loading ? (
                        <>
                            <div className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin"></div>
                            <span>Searching...</span>
                        </>
                    ) : (
                        <span>Search</span>
                    )}
                </button>
            </div>
        </div>
    );
};
