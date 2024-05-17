import { useEffect, useState } from "react";
import { ArtObject } from "../services/museum.ts";
import { getHighlightObjects } from "../services/museum.service.ts";
import { ThreeDots } from "react-loader-spinner";

export default function Highlights() {
    const [arts, setArts] = useState<ArtObject[] | null>(null);
    useEffect(() => {
        getHighlightObjects().then(setArts);
    }, []);

    if (!arts) {
        return (
            <div className="flex justify-center items-center h-96">
                <ThreeDots
                    visible={true}
                    height="80"
                    width="80"
                    color="#f97315"
                    radius="9"
                    ariaLabel="three-dots-loading"
                    wrapperStyle={{}}
                    wrapperClass=""
                />
            </div>
        );
    }

    return (
        <div id="highlights" className="relative px-6 lg:px-8">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl cursor-default text-center py-3 pb-12">Highlights</h1>
            <div className="grid grid-cols-1 gap-6 mt-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {arts.map((art) => (
                    <Highlight art={art} key={art.objectID} />
                ))}
            </div>
        </div>
    );
}

function Highlight(props: { art: ArtObject }) {
    return (
        <div className="bg-white shadow-sm rounded-lg overflow-hidden">
            <img src={props.art.primaryImage} alt={props.art.title} className="w-full h-64 object-cover object-center" />
            <div className="p-6">
                <h2 className="text-xl font-semibold text-gray-900">{props.art.title}</h2>
                <p className="text-base font-medium text-gray-600">{props.art.artistDisplayName}</p>
                <p className="text-base font-medium text-gray-600">{props.art.objectDate}</p>
            </div>
        </div>
    );
}
