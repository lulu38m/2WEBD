function wrapLettersWithSpan(text : string) {
    return text.split('').map((letter, index) => {
        if (['M', 'o', 'A'].includes(letter)) {
            return <span key={index} className="hover-letter">{letter}</span>;
        }
        return letter;
    });
}

export default function Home() {
return (
<div className="bg-white">
    <div className="relative isolate px-6 lg:px-8">
        <div className="mx-auto max-w-2xl py-3 sm:py-48 lg:py-56 z-20">
            <div className="relative left-[calc(50%-20rem)] top-[-14rem] aspect-[1155/678] w-[20rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-white to-orange-500 opacity-30 sm:left-[calc(50%-40rem)] sm:top-[-14rem] sm:w-[45rem] z-10 clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"></div>
            <div className="relative text-center top-[-25rem] z-20">
                <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl cursor-default">
                    {wrapLettersWithSpan("Museum of Art")}
                </h1>
                <p className="mt-6 text-lg leading-8 text-gray-600">Jouez, apprenez, progressez !</p>
                <p className="mt-2 text-lg leading-8 text-gray-600">Le <span className="text-orange-600">Tennis Club Val de l'Indre</span> est une association sportive qui a pour but de promouvoir la pratique du tennis pour tous les âges et tous les niveaux.</p>
                <div className="mt-10 flex items-center justify-center gap-x-6">
                    <a href="#" className="rounded-md bg-orange-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600">Nous rejoindre</a>
                    <a href="#" className="text-sm font-semibold leading-6 text-gray-900">En savoir plus <span aria-hidden="true">→</span></a>
                </div>
            </div>
        </div>
        <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]" aria-hidden="true">
            <div className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-white to-blue-500 opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem] z-0 clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"></div>                </div>
    </div>
</div>
    )
}

