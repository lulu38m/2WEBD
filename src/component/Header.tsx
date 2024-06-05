import '../App.css'
import { Link } from "react-router-dom";

export default function Header() {
    return (
        <div className="bg-white">
            <header className="fixed inset-x-0 top-0 z-50 flex justify-center items-center bg-white shadow-md">
                <nav className="flex flex-col sm:flex-row items-center justify-between p-4 lg:px-8 w-full max-w-screen-xl" aria-label="Global">
                    <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 lg:gap-x-12">
                        <Link to="/" className="text-sm font-semibold leading-6 text-gray-900 hover:text-orange-500">Home</Link>
                        <Link to="/search" className="text-sm font-semibold leading-6 text-gray-900 hover:text-orange-500">Search</Link>
                    </div>
                </nav>
            </header>
        </div>
    )
}
