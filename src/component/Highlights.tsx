import {useEffect, useState} from "react";
import {ArtObject} from "../services/museum.ts";
import {getHighlightObjects} from "../services/museum.service.ts";
import {ThreeDots} from "react-loader-spinner";



export default function Highlights() {

    const [arts, setArts] = useState<ArtObject[] | null>(null);
    useEffect(() => {
        getHighlightObjects().then(setArts);
    }, []);
    if (!arts) {
        return <div className="flex justify-center items-center h-96"><ThreeDots
            visible={true}
            height="80"
            width="80"
            color="#f97315"
            radius="9"
            ariaLabel="three-dots-loading"
            wrapperStyle={{}}
            wrapperClass=""
        /></div>
    }

    return (
            <div className="relative px-6 lg:px-8">
                <h1>Highlights</h1>
                <div className="grid grid-cols-1 gap-6 mt-6 sm:grid-cols-2 lg:grid-cols-3">
                    {arts.map((art) => (
                        <Highlight art={art} key={art.objectID} />
                    ))}
                </div>
            </div>
    )
}

function Highlight(props: {art: ArtObject}) {
    return(
        <div className="w-full">
            <div className="bg-white shadow-sm rounded-lg overflow-hidden">
                <img src={props.art.primaryImage} alt={props.art.title} className="w-full h-48 object-cover object-center" />
                <div className="p-4">
                    <h2 className="text-lg font-semibold text-gray-900">{props.art.title}</h2>
                    <p className="text-sm font-medium text-gray-600">{props.art.artistDisplayName}</p>
                    <p className="text-sm font-medium text-gray-600">{props.art.objectDate}</p>
                </div>
            </div>
        </div>
    )
}
