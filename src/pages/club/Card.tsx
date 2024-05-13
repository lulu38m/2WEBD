import svgIcon from "../../assets/tennisRaquette.svg";

export default function Card() {
    return (
        <div className="bg-white">
            <div className="relative isolate px-6 lg:px-8">
                <div className="mx-auto max-w-2xl py-3 sm:py-48 lg:py-56 z-20">
                    <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]" aria-hidden="true">
                        <div className="relative left-[calc(50%-20rem)] top-[-14rem] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-white to-blue-500 opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem] z-0 clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"></div>
                    </div>
                    <div className="relative left-[calc(50%-20rem)] top-[-14rem] aspect-[1155/678] w-[20rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-white to-orange-500 opacity-30 sm:left-[calc(50%-40rem)] sm:top-[-14rem] sm:w-[45rem] z-10 clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"></div>
                    <div className="relative text-center top-[-25rem] z-20">
                        <div className="flex gap-4 justify-center pb-16">
                            <a href="#" className="relative block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow text-left" style={{width: '500px'}}>
                                <img src={svgIcon} className="absolute top-0 right-0 w-[100px] h-[100px] transform rotate-[-75deg]" alt="Icon" />
                                <div className="absolute top-0 left-0 bg-blue-500 text-white text-xs py-1 px-2 transform -translate-y-1/2 translate-x-1/2">Adhésion</div>
                                <h5 className="mb-2 text-xl/[30px] font-bold text-bleu" style={{width: '300px'}}>Tennis - Adhésion Adultes Montbazon (2024)</h5>
                                <p className="text-black font-medium pt-6">Adhesion Adultes Montbazon accès courts intérieurs et extérieurs</p>
                                <p className="text-gray-500 font-medium pt-4">Condition</p>
                                <p className="font-normal text-gray-500">De 18 ans à 100 ans</p>
                                <div className={"flex justify-between"}>
                                    <p className={"text-black font-medium pt-4"}>Tarif unique à <span className={"font-bold"}>158€</span></p>
                                    <a href="#" className={"font-normal text-bleu pt-4"}>Détail</a>
                                </div>
                            </a>

                            <a href="#" className="relative block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow text-left" style={{width: '500px'}}>
                                <img src={svgIcon} className="absolute top-0 right-0 w-[100px] h-[100px] transform rotate-[-75deg]" alt="Icon" />
                                <div className="absolute top-0 left-0 bg-blue-500 text-white text-xs py-1 px-2 transform -translate-y-1/2 translate-x-1/2">Adhésion</div>
                                <h5 className="mb-2 text-xl/[30px] font-bold text-bleu" style={{width: '300px'}}>Tennis - Adhésion Adultes Montbazon (2024)</h5>
                                <p className="font-normal text-black pt-6">Adhesion Adultes Montbazon accès courts intérieurs et extérieurs</p>
                                <p className="font-normal text-gray-500 pt-4">Condition</p>
                                <p className="font-normal text-gray-500">De 18 ans à 100 ans</p>
                                <div className={"flex justify-between"}>
                                    <p className={"font-normal text-black pt-4"}>Tarif unique à <span className={"font-bold"}>158€</span></p>
                                    <a href="#" className={"font-normal text-bleu pt-4"}>Détail</a>
                                </div>
                            </a>

                            <a href="#" className="relative block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow text-left" style={{width: '500px'}}>
                                <img src={svgIcon} className="absolute top-0 right-0 w-[100px] h-[100px] transform rotate-[-75deg]" alt="Icon" />
                                <div className="absolute top-0 left-0 bg-blue-500 text-white text-xs py-1 px-2 transform -translate-y-1/2 translate-x-1/2">Adhésion</div>
                                <h5 className="mb-2 text-xl/[30px] font-bold text-bleu" style={{width: '300px'}}>Tennis - Adhésion Adultes Montbazon (2024)</h5>
                                <p className="font-normal text-black pt-6">Adhesion Adultes Montbazon accès courts intérieurs et extérieurs</p>
                                <p className="font-normal text-gray-500 pt-4">Condition</p>
                                <p className="font-normal text-gray-500">De 18 ans à 100 ans</p>
                                <div className={"flex justify-between"}>
                                    <p className={"font-normal text-black pt-4"}>Tarif unique à <span className={"font-bold"}>158€</span></p>
                                    <a href="#" className={"font-normal text-bleu pt-4"}>Détail</a>
                                </div>
                            </a>
                        </div>
                        <div className="flex gap-4 justify-center">
                            <a href="#" className="relative block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow text-left" style={{width: '500px'}}>
                                <img src={svgIcon} className="absolute top-0 right-0 w-[100px] h-[100px] transform rotate-[-75deg]" alt="Icon" />
                                <div className="absolute top-0 left-0 bg-blue-500 text-white text-xs py-1 px-2 transform -translate-y-1/2 translate-x-1/2">Adhésion</div>
                                <h5 className="mb-2 text-xl/[30px] font-bold text-bleu" style={{width: '300px'}}>Tennis - Adhésion Adultes Montbazon (2024)</h5>
                                <p className="font-normal text-black pt-6">Adhesion Adultes Montbazon accès courts intérieurs et extérieurs</p>
                                <p className="font-normal text-gray-500 pt-4">Condition</p>
                                <p className="font-normal text-gray-500">De 18 ans à 100 ans</p>
                                <div className={"flex justify-between"}>
                                    <p className={"font-normal text-black pt-4"}>Tarif unique à <span className={"font-bold"}>158€</span></p>
                                    <a href="#" className={"font-normal text-bleu pt-4"}>Détail</a>
                                </div>
                            </a>

                            <a href="#" className="relative block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow text-left" style={{width: '500px'}}>
                                <img src={svgIcon} className="absolute top-0 right-0 w-[100px] h-[100px] transform rotate-[-75deg]" alt="Icon" />
                                <div className="absolute top-0 left-0 bg-blue-500 text-white text-xs py-1 px-2 transform -translate-y-1/2 translate-x-1/2">Adhésion</div>
                                <h5 className="mb-2 text-xl/[30px] font-bold text-bleu" style={{width: '300px'}}>Tennis - Adhésion Adultes Montbazon (2024)</h5>
                                <p className="font-normal text-black pt-6">Adhesion Adultes Montbazon accès courts intérieurs et extérieurs</p>
                                <p className="font-normal text-gray-500 pt-4">Condition</p>
                                <p className="font-normal text-gray-500">De 18 ans à 100 ans</p>
                                <div className={"flex justify-between"}>
                                    <p className={"font-normal text-black pt-4"}>Tarif unique à <span className={"font-bold"}>158€</span></p>
                                    <a href="#" className={"font-normal text-bleu pt-4"}>Détail</a>
                                </div>
                            </a>

                            <a href="#" className="relative block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow text-left" style={{width: '500px'}}>
                                <img src={svgIcon} className="absolute top-0 right-0 w-[100px] h-[100px] transform rotate-[-75deg]" alt="Icon" />
                                <div className="absolute top-0 left-0 bg-blue-500 text-white text-xs py-1 px-2 transform -translate-y-1/2 translate-x-1/2">Adhésion</div>
                                <h5 className="mb-2 text-xl/[30px] font-bold text-bleu" style={{width: '300px'}}>Tennis - Adhésion Adultes Montbazon (2024)</h5>
                                <p className="font-normal text-black pt-6">Adhesion Adultes Montbazon accès courts intérieurs et extérieurs</p>
                                <p className="font-normal text-gray-500 pt-4">Condition</p>
                                <p className="font-normal text-gray-500">De 18 ans à 100 ans</p>
                                <div className={"flex justify-between"}>
                                    <p className={"font-normal text-black pt-4"}>Tarif unique à <span className={"font-bold"}>158€</span></p>
                                    <a href="#" className={"font-normal text-bleu pt-4"}>Détail</a>
                                </div>
                            </a>

                        </div>
                    </div>
                </div>
            </div>
        </div>
        )
}