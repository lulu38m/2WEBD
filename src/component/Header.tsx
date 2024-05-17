import '../App.css'
import {Link} from "react-router-dom";


export default function Header() {
    return (
        <div className="bg-white">
            <header className="inset-x-0 top-0 z-50 flex justify-center items-center">
                <nav className="flex items-center justify-between p-6 lg:px-8 bg-white" aria-label="Global">
                    <div className="flex lg:flex-1">
                        <a href="#" className="-m-1.5 p-1.5">
                            <span className="sr-only">Museum</span>
                        </a>
                    </div>
                    <div className="lg:flex lg:gap-x-12">
                        <Link to="/" className="text-sm font-semibold leading-6 text-gray-900 hover:text-orange-500">Home</Link>
                        <Link to="/club" className="text-sm font-semibold leading-6 text-gray-900 hover:text-orange-500">Search</Link>
                        <a href="#" className="text-sm font-semibold leading-6 text-gray-900 hover:text-orange-500">Actualité</a>
                        <a href="#" className="text-sm font-semibold leading-6 text-gray-900 hover:text-orange-500">Où nous trouvez ?</a>
                    </div>
                </nav>
            </header>

            <form className="max-w-md mx-auto">
                <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only">Search</label>
                <div className="relative">
                    <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                        <svg className="w-4 h-4 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                        </svg>
                    </div>
                    <input type="search" id="default-search" className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50" placeholder="Search Art, Statues..." required />
                    <button type="submit" className="text-white absolute end-2.5 bottom-2.5 bg-orange-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2">Search</button>
                </div>
            </form>

        </div>
    )
}