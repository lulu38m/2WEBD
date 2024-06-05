import '../App.css';
import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <footer className="bg-white mt-8 border-t border-gray-200">
            <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:py-12 lg:px-8">
                <div className="flex justify-between items-center">
                    <div className="flex space-x-6">
                        <Link to="/" className="text-sm font-semibold leading-6 text-gray-900 hover:text-orange-500">Home</Link>
                        <Link to="/search" className="text-sm font-semibold leading-6 text-gray-900 hover:text-orange-500">Search</Link>
                        <a href="#" className="text-sm font-semibold leading-6 text-gray-900 hover:text-orange-500">Actualité</a>
                        <a href="#" className="text-sm font-semibold leading-6 text-gray-900 hover:text-orange-500">Où nous trouvez ?</a>
                    </div>
                    <div className="flex items-center">
                        <a href="#" className="-m-1.5 p-1.5">
                            <span className="sr-only">Museum</span>
                            <img className="h-8 w-auto" src="/logo.png" alt="" />
                        </a>
                    </div>
                </div>
                <div className="mt-8 text-center text-sm text-gray-500">
                    <p>© 2024 Museum of Art. Tous droits réservés.</p>
                </div>
            </div>
        </footer>
    );
}
