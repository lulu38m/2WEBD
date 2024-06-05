import { useState } from "react";
import Footer from "../../component/Foooter.tsx";
import SearchDetails from "../../component/SearchDetails.tsx";

export default function Search() {
    const [query, setQuery] = useState("");
    const [dateBegin, setDateBegin] = useState("");
    const [dateEnd, setDateEnd] = useState("");
    const [searchTerm, setSearchTerm] = useState("");
    const [searchBegin, setSearchBegin] = useState("");
    const [searchEnd, setSearchEnd] = useState("");
    const [geoLocation, setGeoLocation] = useState("");
    const [isHighlight, setIsHighlight] = useState(false);

    const handleSearchSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        setSearchTerm(query);
        setSearchBegin(dateBegin);
        setSearchEnd(dateEnd);
        setGeoLocation(geoLocation);
        setIsHighlight(isHighlight);
    };

    return (
        <div className="bg-white pt-16 sm:pt-20">
            <form className="max-w-md mx-auto" onSubmit={handleSearchSubmit}>
                <div className="mb-4">
                    <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only">Search</label>
                    <div className="relative">
                        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                            <svg className="w-4 h-4 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                            </svg>
                        </div>
                        <input
                            type="search"
                            id="default-search"
                            className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50"
                            placeholder="Search Art, Statues..."
                            required
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
                        />
                    </div>
                </div>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <input
                        type="date"
                        className="block w-full p-4 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50"
                        placeholder="Start Date"
                        value={dateBegin}
                        onChange={(e) => setDateBegin(e.target.value)}
                    />
                    <input
                        type="date"
                        className="block w-full p-4 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50"
                        placeholder="End Date"
                        value={dateEnd}
                        onChange={(e) => setDateEnd(e.target.value)}
                    />
                    <input
                        type="text"
                        className="block w-full p-4 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50"
                        placeholder="Geo Location"
                        onChange={(e) => setGeoLocation(e.target.value)}
                    />
                    <div className="flex items-center space-x-2">
                        <label htmlFor="highlight" className="text-sm text-gray-900">Highlight</label>
                        <input
                            type="checkbox"
                            className="mt-2"
                            onChange={(e) => setIsHighlight(e.target.checked)}
                        />
                    </div>
                </div>
                <button type="submit" className="mt-4 text-white bg-orange-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2">Search</button>
            </form>
            <div className="relative isolate px-6 lg:px-8">
                <div className="lg:pt-56">
                    <div className="relative left-[calc(50%-20rem)] top-[-14rem] aspect-[1155/678] w-[20rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-white to-orange-500 opacity-30 sm:left-[calc(50%-40rem)] sm:top-[-14rem] sm:w-[45rem] z-10 clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"></div>
                    <div className="relative text-center top-[-25rem] z-20">
                        <SearchDetails searchTerm={searchTerm} dateBegin={searchBegin} dateEnd={searchEnd} geoLocation={geoLocation} isHighlight={isHighlight} />
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}
