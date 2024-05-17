import Highlights from "../../component/Highlights.tsx";
import Footer from "../../component/Foooter.tsx";

function wrapLettersWithSpan(text: string) {
    return text.split('').map((letter, index) => {
        if (['M', 'o', 'A'].includes(letter)) {
            return <span key={index} className="hover-letter">{letter}</span>;
        }
        return letter;
    });
}

export default function Home() {
    const scrollToHighlights = () => {
        const highlightsElement = document.getElementById('highlights');
        if (highlightsElement) {
            highlightsElement.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="bg-white">
            <div className="relative isolate px-6 lg:px-8">
                <div className="lg:pt-56">
                    <div className="relative left-[calc(50%-20rem)] top-[-14rem] aspect-[1155/678] w-[20rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-white to-orange-500 opacity-30 sm:left-[calc(50%-40rem)] sm:top-[-14rem] sm:w-[45rem] z-10 clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"></div>
                    <div className="relative text-center top-[-25rem] z-20">
                        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl cursor-default">
                            {wrapLettersWithSpan("Museum of Art")}
                        </h1>
                        <p className="mt-6 text-lg leading-8 text-gray-600">Explore, Learn, Discover!</p>
                        <p className="mt-2 text-lg leading-8 text-gray-600">Le <span className="text-orange-600">Museum of Art</span> is a cultural institution dedicated to the exploration and understanding of art in all its forms.</p>
                        <div className="mt-10 flex flex-col items-center justify-center gap-x-6">
                            <a href="#" className="rounded-md bg-orange-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600">Visit Us</a>
                            <a href="#" className="text-sm font-semibold leading-6 text-gray-900">Learn More <span aria-hidden="true">→</span></a>
                            <button onClick={scrollToHighlights} className="mt-4">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-12 h-12 text-gray-900">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="mt-[-12rem]">
                    <Highlights />
                </div>
            </div>
            <Footer />
        </div>
    );
}
