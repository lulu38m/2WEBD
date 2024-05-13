import '../App.css'
import {Link} from "react-router-dom";


export default function Header() {
    return (
        <div className="bg-white">
            <header className="inset-x-0 top-0 z-50 flex justify-center items-center">
                <nav className="flex items-center justify-between p-6 lg:px-8 bg-white" aria-label="Global">
                    <div className="flex lg:flex-1">
                        <a href="#" className="-m-1.5 p-1.5">
                            <span className="sr-only">TCVI</span>
                        </a>
                    </div>
                    <div className="lg:flex lg:gap-x-12">
                        <Link to="/" className="text-sm font-semibold leading-6 text-gray-900 hover:text-orange-500">Accueil</Link>
                        <Link to="/club" className="text-sm font-semibold leading-6 text-gray-900 hover:text-orange-500">Espace club</Link>
                        <a href="#" className="text-sm font-semibold leading-6 text-gray-900 hover:text-orange-500">Actualité</a>
                        <a href="#" className="text-sm font-semibold leading-6 text-gray-900 hover:text-orange-500">Où nous trouvez ?</a>
                    </div>
                </nav>
            </header>
        </div>
    )
}